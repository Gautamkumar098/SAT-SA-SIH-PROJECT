from fastapi import FastAPI, UploadFile, File, HTTPException
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from pathlib import Path
import sqlite3, json, csv, io, os, uuid, statistics, re
from datetime import datetime
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(Path(__file__).resolve().parent / ".env")
FRONTEND = ROOT / "frontend"
DB = Path(__file__).resolve().parent / "sat_sa.db"

app = FastAPI(title="SAT-SA Backend", version="1.1.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


def db():
    con = sqlite3.connect(DB)
    con.row_factory = sqlite3.Row
    return con


def init_db():
    con = db()
    con.execute("CREATE TABLE IF NOT EXISTS runs (run_id TEXT PRIMARY KEY, created_at TEXT, filename TEXT, records INTEGER, result_json TEXT)")
    con.execute("CREATE TABLE IF NOT EXISTS chat (id INTEGER PRIMARY KEY AUTOINCREMENT, run_id TEXT, role TEXT, content TEXT, created_at TEXT)")
    con.commit(); con.close()

init_db()


def parse_upload(name: str, raw: bytes):
    text = raw.decode("utf-8-sig", errors="replace")
    if name.lower().endswith(".json"):
        obj = json.loads(text)
        return obj if isinstance(obj, list) else [obj]
    if name.lower().endswith(".csv"):
        return list(csv.DictReader(io.StringIO(text)))
    raise HTTPException(400, "Only CSV and JSON files are supported")


def get(r, *keys, default=""):
    for k in keys:
        if k in r and r[k] not in (None, ""):
            return r[k]
    return default


def analyze(rows):
    norm=[]
    for i,r in enumerate(rows):
        norm.append({
            "entity_id": get(r,"entity_id","entity","cse_id", default=f"E{(i%5)+1}"),
            "case_id": get(r,"case_id","case", default=f"C-{i+1}"),
            "alert_id": get(r,"alert_id","alert", default=f"AL-{i+1}"),
            "severity": str(get(r,"severity","alert_severity", default="MEDIUM")).upper(),
            "created_at": get(r,"created_at","alert_created_at","timestamp"),
            "resolved_at": get(r,"resolved_at","closed_at"),
            "escalated_at": get(r,"escalated_at"),
            "disposition": str(get(r,"disposition","status", default="open")).lower(),
            "analyst_id": get(r,"analyst_id","analyst", default="unknown"),
            "notes": get(r,"investigation_notes","notes","description"),
            "asset_criticality": str(get(r,"asset_criticality","criticality", default="medium")).lower(),
            "alert_category": str(get(r,"alert_category","category", default="unknown")).lower(),
        })
    entities=sorted(set(x["entity_id"] for x in norm)); findings=[]
    def add(engine,rule,severity,source,entity,confidence,explanation):
        findings.append({"engine":engine,"rule":rule,"severity":severity,"source":source,"entity":entity,"confidence":confidence,"explanation":explanation})
    for x in norm:
        if x["severity"]=="CRITICAL" and not x["notes"]: add("Execution Gap","EG-001","HIGH",x["case_id"],x["entity_id"],"95%","Critical case has no investigation evidence/notes.")
        if x["resolved_at"] and x["created_at"]:
            try:
                a=datetime.fromisoformat(x["created_at"].replace("Z","+00:00")); b=datetime.fromisoformat(x["resolved_at"].replace("Z","+00:00"))
                if (b-a).total_seconds()<300: add("Execution Gap","EG-002","HIGH",x["case_id"],x["entity_id"],"90%","Case closed in less than five minutes.")
                if b<a: add("Execution Gap","EG-009","CRITICAL",x["case_id"],x["entity_id"],"100%","Case timestamps violate temporal ordering: resolved_at precedes created_at.")
            except: pass
        if x["disposition"]=="false positive" and not x["notes"]: add("Execution Gap","EG-005","HIGH",x["case_id"],x["entity_id"],"90%","False-positive closure has no supporting evidence.")
        if x["asset_criticality"]=="critical" and not x["escalated_at"] and x["severity"] in ("CRITICAL","HIGH"): add("Execution Gap","EG-007","HIGH",x["case_id"],x["entity_id"],"80%","Critical asset case has no escalation timestamp.")
        if len(x["notes"])>20 and re.search(r"\\b(reviewed|investigated|checked)\\b", x["notes"], re.I) and len(set(x["notes"].lower().split()))<8: add("NLP","NLP-002","MEDIUM",x["case_id"],x["entity_id"],"80%","Investigation note appears highly templated or low-information.")
    sev={k:0 for k in ["CRITICAL","HIGH","MEDIUM","LOW"]}
    for x in norm:
        if x["severity"] in sev: sev[x["severity"]]+=1
    ents=[]
    for eid in entities:
        rr=[x for x in norm if x["entity_id"]==eid]; severe=sum(x["severity"] in ("CRITICAL","HIGH") for x in rr); score=round(severe/max(1,len(rr))*100,1)
        if rr and severe==0: add("Negative Space","NS-003","HIGH",eid,eid,"90%","Entity has activity but no critical/high severity alerts in the supplied period.")
        ents.append({"rank":0,"id":eid,"score":score,"peer":"local_cohort","percentile":"n/a","findings":len(rr),"trend":"stable"})
    ents.sort(key=lambda x:x["score"], reverse=True)
    for i,x in enumerate(ents,1): x["rank"]=i
    cases=[]
    for cid in sorted(set(x["case_id"] for x in norm)):
        x=next(y for y in norm if y["case_id"]==cid); hits=[f for f in findings if f["source"]==cid]
        score=round(len(hits)*5 + ({"CRITICAL":7.5,"HIGH":6,"MEDIUM":4,"LOW":2}.get(x["severity"],2)),1)
        cases.append([cid,x["entity_id"],x["severity"],score,", ".join(h["rule"] for h in hits) or "—",hits[0]["explanation"] if hits else "No rule triggered; retained for review."])
    cases.sort(key=lambda x:x[3], reverse=True)
    run_id="RUN-"+uuid.uuid4().hex[:12]
    result={"meta":{"pipeline_id":"SAT-SA-v1","run_id":run_id,"timestamp":datetime.now().isoformat(timespec="seconds"),"config_version":"1.1.0","duration":"local"},"summary":{"total_findings":len(findings),"entities":len(entities),"priority_flags":sum(1 for x in findings if x["severity"]=="CRITICAL"),"cases_review":len(cases)},"severity":sev,"engines":{"anomaly":0,"execution_gap":sum(f["engine"]=="Execution Gap" for f in findings),"negative_space":sum(f["engine"]=="Negative Space" for f in findings),"nlp":sum(f["engine"]=="NLP" for f in findings)},"entities":ents,"cases":cases[:100],"findings":findings,"records":norm,"stages":[["ingestion","OK",len(norm),0,"local","1.1.0"],["normalization","OK",len(norm),0,"local","1.1.0"],["execution_gap_detection","OK",len(norm),sum(f["engine"]=="Execution Gap" for f in findings),"local","1.1.0"],["negative_space","OK",len(norm),sum(f["engine"]=="Negative Space" for f in findings),"local","1.1.0"],["anomaly_nlp","OK",len(norm),sum(f["engine"] in ("Anomaly","NLP") for f in findings),"local","1.1.0"],["prioritization","OK",len(norm),len(cases),"local","1.1.0"]]}
    return result

@app.get("/api/health")
def health(): return {"status":"ok","service":"SAT-SA backend","llm_provider":os.getenv("LLM_PROVIDER","none")}

@app.post("/api/analyze")
async def analyze_file(file: UploadFile=File(...)):
    result=analyze(parse_upload(file.filename or "upload.csv", await file.read()))
    con=db(); con.execute("INSERT INTO runs VALUES (?,?,?,?,?)",(result["meta"]["run_id"],result["meta"]["timestamp"],file.filename,result["stages"][0][2],json.dumps(result))); con.commit(); con.close()
    return result

@app.get("/api/runs/latest")
def latest():
    con=db(); row=con.execute("SELECT result_json FROM runs ORDER BY created_at DESC LIMIT 1").fetchone(); con.close()
    if not row: raise HTTPException(404,"No analysis run yet")
    return json.loads(row[0])

@app.get("/api/runs")
def runs():
    con=db(); rows=con.execute("SELECT run_id,created_at,filename,records FROM runs ORDER BY created_at DESC").fetchall(); con.close(); return [dict(r) for r in rows]

class ChatIn(BaseModel):
    message:str
    run_id:str|None=None


def build_context(run):
    return json.dumps({k:run.get(k) for k in ["meta","summary","severity","engines","entities","cases","findings"]}, indent=2)[:45000]


def local_answer(msg, run):
    q=msg.lower(); s=run["summary"]; findings=run["findings"]
    if any(w in q for w in ["how many","count","kitne","findings"]): return f"This run contains {s['total_findings']} findings across {s['entities']} entities, with {s['cases_review']} cases in the review queue."
    if "critical" in q: return f"There are {run['severity'].get('CRITICAL',0)} CRITICAL findings in this run. Review the linked source records and evidence before taking action."
    if "high" in q: return f"There are {run['severity'].get('HIGH',0)} HIGH findings. The main evidence should be reviewed from the Findings and Case Priority Queue views."
    if "why" in q or "explain" in q:
        top=findings[:3]
        return "Key explanations: " + " | ".join(f"{x['rule']}: {x['explanation']}" for x in top) if top else "No findings are available to explain."
    return "I can explain the current SAT-SA run using its stored findings, severity counts, entities, cases and evidence. Try asking: 'How many findings?', 'Why is this case high priority?', or 'Explain the critical findings.'"


def llm_answer(msg, run):
    provider=os.getenv("LLM_PROVIDER","ollama").lower(); context=build_context(run)
    system="You are SAT-SA's supervisory analytics explainer. Explain only from the supplied run context. Do not invent evidence. Distinguish observed findings from recommendations. SAT-SA is a supervisory analytics tool, not a SOC/SIEM. Keep answers concise and cite rule IDs, entities, case IDs and source fields when available."
    try:
        if provider=="ollama":
            base=os.getenv("OLLAMA_URL","http://127.0.0.1:11434/api/chat"); model=os.getenv("OLLAMA_MODEL","llama3.2:3b")
            payload=json.dumps({"model":model,"stream":False,"messages":[{"role":"system","content":system},{"role":"user","content":f"RUN CONTEXT:\n{context}\n\nQUESTION:\n{msg}"}]}).encode()
            req=Request(base,data=payload,headers={"Content-Type":"application/json"},method="POST")
            with urlopen(req,timeout=90) as r: return json.loads(r.read().decode())["message"]["content"]
        if provider in ("openai","openai_compatible") and os.getenv("LLM_API_KEY"):
            base=os.getenv("LLM_BASE_URL","https://api.openai.com/v1").rstrip("/")+"/chat/completions"; model=os.getenv("LLM_MODEL","gpt-4o-mini")
            payload=json.dumps({"model":model,"messages":[{"role":"system","content":system},{"role":"user","content":f"RUN CONTEXT:\n{context}\n\nQUESTION:\n{msg}"}],"temperature":0.1}).encode()
            req=Request(base,data=payload,headers={"Content-Type":"application/json","Authorization":"Bearer "+os.getenv("LLM_API_KEY")},method="POST")
            with urlopen(req,timeout=90) as r: return json.loads(r.read().decode())["choices"][0]["message"]["content"]
    except Exception:
        pass
    return local_answer(msg,run)

@app.post("/api/chat")
def chat(body:ChatIn):
    con=db(); row=con.execute("SELECT result_json FROM runs WHERE run_id=?",(body.run_id,)).fetchone() if body.run_id else con.execute("SELECT result_json FROM runs ORDER BY created_at DESC LIMIT 1").fetchone();
    if not row: con.close(); raise HTTPException(404,"Analyze a report first")
    run=json.loads(row[0]); answer=llm_answer(body.message,run)
    now=datetime.now().isoformat(timespec="seconds"); rid=run["meta"]["run_id"]
    con.execute("INSERT INTO chat(run_id,role,content,created_at) VALUES (?,?,?,?)",(rid,"user",body.message,now)); con.execute("INSERT INTO chat(run_id,role,content,created_at) VALUES (?,?,?,?)",(rid,"assistant",answer,now)); con.commit(); con.close()
    return {"answer":answer,"run_id":rid,"provider":os.getenv("LLM_PROVIDER","none")}

@app.get("/api/chat/history/{run_id}")
def history(run_id:str):
    con=db(); rows=con.execute("SELECT role,content,created_at FROM chat WHERE run_id=? ORDER BY id",(run_id,)).fetchall(); con.close(); return [dict(r) for r in rows]

app.mount("/", StaticFiles(directory=FRONTEND, html=True), name="frontend")
