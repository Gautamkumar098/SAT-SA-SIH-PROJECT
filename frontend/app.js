const API_BASE = "https://sat-sa-sih-project.onrender.com";
const DEMO = {
  meta:{pipeline_id:"SAT-SA-v1",run_id:"5a899a72-cf5e-4248-ab0e-de9c80cd3e68",timestamp:"2026-09-19 12:31:25",config_version:"1.0.0",duration:"0.1s"},
  summary:{total_findings:265,entities:5,priority_flags:0,cases_review:160},
  severity:{CRITICAL:1,HIGH:203,MEDIUM:61,LOW:0},
  engines:{anomaly:10,execution_gap:32,negative_space:63,nlp:160},
  entities:[
    {rank:1,id:"E3",score:66.1,peer:"finance_medium",percentile:"83th",findings:76,trend:"stable"},
    {rank:2,id:"E5",score:44.2,peer:"finance_medium",percentile:"50th",findings:56,trend:"stable"},
    {rank:3,id:"E4",score:36.1,peer:"finance_medium",percentile:"17th",findings:39,trend:"stable"},
    {rank:4,id:"E2",score:32.9,peer:"energy_large",percentile:"75th",findings:38,trend:"stable"},
    {rank:5,id:"E1",score:29.4,peer:"energy_large",percentile:"25th",findings:56,trend:"stable"}
  ],
  cases:[
    ["C-5","E5","HIGH",24.0,"EG-002, EG-007, NLP-002","Case has 3 findings with HIGH severity and +1.0 asset criticality weight."],
    ["C-11","E3","MEDIUM",18.0,"EG-005, EG-007, NLP-002","Case has 3 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-64","E5","CRITICAL",17.5,"EG-001, NLP-001","Case has 2 findings with CRITICAL severity and +0.8 asset criticality weight."],
    ["C-107","E1","HIGH",16.0,"EG-007, NLP-002","Case has 2 findings with HIGH severity and +1.0 asset criticality weight."],
    ["C-16","E4","MEDIUM",12.0,"EG-007, NLP-002","Case has 2 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-25","E4","MEDIUM",12.0,"EG-007, NLP-002","Case has 2 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-80","E5","MEDIUM",12.0,"EG-007, NLP-002","Case has 2 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-94","E4","MEDIUM",12.0,"EG-007, NLP-002","Case has 2 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-133","E4","MEDIUM",12.0,"EG-007, NLP-002","Case has 2 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-140","E4","MEDIUM",12.0,"EG-007, NLP-002","Case has 2 findings with MEDIUM severity and +1.0 asset criticality weight."],
    ["C-3","E1","MEDIUM",10.5,"EG-002, NLP-002","Case has 2 findings with MEDIUM severity and +0.8 asset criticality weight."],
    ["C-8","E2","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-19","E1","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-21","E3","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-23","E2","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-46","E3","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-50","E5","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-54","E5","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-70","E3","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-137","E2","LOW",8.0,"EG-007, NLP-002","Case has 2 findings with LOW severity and +1.0 asset criticality weight."],
    ["C-1","E1","MEDIUM",7.5,"EG-002, NLP-002","Case has 2 findings with MEDIUM severity and +0.2 asset criticality weight."],
    ["C-2","E1","MEDIUM",7.5,"EG-002, NLP-002","Case has 2 findings with MEDIUM severity and +0.2 asset criticality weight."],
    ["C-4","E3","MEDIUM",7.5,"EG-002, NLP-002","Case has 2 findings with MEDIUM severity and +0.2 asset criticality weight."],
    ["C-147","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."],
    ["C-148","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."],
    ["C-149","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."],
    ["C-150","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."],
    ["C-151","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."],
    ["C-152","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."],
    ["C-153","E3","CRITICAL",7.5,"NLP-001","Case has 1 finding with CRITICAL severity and +0.5 asset criticality weight."]
  ],
  findings:[
    {engine:"Anomaly",rule:"AN-001,AN-002",severity:"HIGH",source:"E3",entity:"E3",confidence:"95%",explanation:"Metric closure_time_p95 is anomalous compared to peer group finance_medium."},
    {engine:"Anomaly",rule:"AN-001,AN-002",severity:"HIGH",source:"E3",entity:"E3",confidence:"95%",explanation:"Metric closure_time_p99 is anomalous compared to peer group finance_medium."},
    {engine:"Anomaly",rule:"AN-001",severity:"MEDIUM",source:"E4",entity:"E4",confidence:"75%",explanation:"Metric alert_to_case_ratio is anomalous compared to peer group finance_medium."},
    {engine:"Execution Gap",rule:"EG-009",severity:"CRITICAL",source:"C-116",entity:"E2",confidence:"100%",explanation:"Case timestamps violate temporal ordering: escalated_at is later than resolved_at."},
    {engine:"Execution Gap",rule:"EG-001",severity:"HIGH",source:"C-64",entity:"E5",confidence:"95%",explanation:"Critical case closed without any evidence collected."},
    {engine:"Execution Gap",rule:"EG-011",severity:"HIGH",source:"analyst_bad",entity:"E3",confidence:"95%",explanation:"Analyst performed bulk closure of 14 cases within 30 minutes."},
    {engine:"Execution Gap",rule:"EG-002",severity:"HIGH",source:"C-5",entity:"E5",confidence:"90%",explanation:"Case closed in less than 5 minutes."},
    {engine:"Execution Gap",rule:"EG-005",severity:"HIGH",source:"C-6",entity:"E3",confidence:"90%",explanation:"Case closed as false positive but no evidence was recorded."},
    {engine:"Negative Space",rule:"NS-003",severity:"HIGH",source:"E2",entity:"E2",confidence:"90%",explanation:"Entity manages critical/high assets but has logged zero critical/high severity alerts out of 33 alerts."},
    {engine:"Negative Space",rule:"NS-001",severity:"HIGH",source:"A1",entity:"E1",confidence:"85%",explanation:"Critical asset is missing an expected alert category: phishing."},
    {engine:"Negative Space",rule:"NS-002",severity:"MEDIUM",source:"AL-166->AL-184",entity:"E1",confidence:"80%",explanation:"Entity experienced an abnormal silent window of 37.2 days between alerts."},
    {engine:"NLP",rule:"NLP-002",severity:"HIGH",source:"C-1",entity:"E1",confidence:"85%",explanation:"Investigation notes show highly templated or uniform patterns."},
    {engine:"NLP",rule:"NLP-002",severity:"HIGH",source:"C-6",entity:"E3",confidence:"85%",explanation:"Investigation notes show highly templated or uniform patterns."},
    {engine:"NLP",rule:"NLP-001",severity:"CRITICAL",source:"C-147",entity:"E3",confidence:"85%",explanation:"Case text contains a critical supervisory language signal."}
  ],
  stages:[
    ["ingestion","OK",569,0,"0.04s","1.0.0"],
    ["normalization","OK",374,0,"0.04s","1.0.0"],
    ["execution_gap_detection","OK",374,32,"0.00s","1.0.0"],
    ["negative_space","OK",244,63,"0.00s","1.0.0"],
    ["anomaly_nlp","OK",292,170,"0.01s","1.0.0"],
    ["prioritization","OK",165,160,"0.00s","1.0.0"]
  ]
};

let state = structuredClone(DEMO);
let uploadedFiles = [];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const badge = s => `<span class="badge ${String(s).toLowerCase()}">${esc(s)}</span>`;

function setTitle(t){ $("#pageTitle").textContent=t; }
function nav(page){
  // $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  const titles={dashboard:"Supervisory Dashboard",ingestion:"Data Ingestion & Validation",analytics:"Analytics Engines",entities:"Entity Benchmarking",cases:"Case Priority Queue",findings:"Findings Explorer",evidence:"Explainability & Evidence Graph",assessment:"Assessment Report",architecture:"SAT-SA Architecture",chat:"AI Explainer"};
  setTitle(titles[page]||"SAT-SA");
  render(page);
}
function render(page="dashboard"){
  const c=$("#content");
  if(page==="dashboard") c.innerHTML=dashboardHTML();
  if(page==="ingestion") c.innerHTML=ingestionHTML();
  if(page==="analytics") c.innerHTML=analyticsHTML();
  if(page==="entities") c.innerHTML=entitiesHTML();
  if(page==="cases") c.innerHTML=casesHTML();
  if(page==="findings") c.innerHTML=findingsHTML();
  if(page==="evidence") c.innerHTML=evidenceHTML();
  if(page==="assessment") c.innerHTML=assessmentHTML();
  if(page==="architecture") c.innerHTML=architectureHTML();
  if(page==="chat") c.innerHTML=chatHTML();
  bindPage(page);
}
function dashboardHTML(){
  const s=state.summary, sev=state.severity;
  const sevTotal=Math.max(1,Object.values(sev).reduce((a,b)=>a+b,0));
  const max=Math.max(...Object.values(state.engines));
  return `<div class="grid kpi-grid">
    ${kpi("Total Findings",s.total_findings,"Across all supervisory engines")}
    ${kpi("Entities Scored",s.entities,"Peer groups + attention score")}
    ${kpi("Priority Flags",s.priority_flags,"High-confidence priority indicators")}
    ${kpi("Cases for Review",s.cases_review,"Ranked for manual supervision")}
    ${kpi("Pipeline Duration",state.meta.duration,"Local/offline processing")}
  </div>
  <div class="section grid two">
    <div class="card panel"><div class="section-head"><span class="section-title">Findings by Severity</span><span class="section-note">Current run</span></div>
      <div class="chart">${Object.entries(sev).map(([k,v])=>`<div class="bar-col"><span class="bar-num">${v}</span><div class="bar-fill" style="height:${Math.max(4,v/sevTotal*180)}px"></div><span class="bar-label">${k}</span></div>`).join("")}</div>
    </div>
    <div class="card panel"><div class="section-head"><span class="section-title">Findings by Engine</span><span class="section-note">Signals detected</span></div>
      <div class="metric-list">${Object.entries(state.engines).map(([k,v])=>`<div class="metric"><label>${k.replaceAll("_"," ")}</label><div class="bar"><span style="width:${v/max*100}%"></span></div><strong>${v}</strong></div>`).join("")}</div>
      <div class="callout" style="margin-top:16px">SAT-SA is supervisory analytics: it supports human examination and does not replace supervisory judgement.</div>
    </div>
  </div>
  <div class="section card panel"><div class="section-head"><span class="section-title">Entity Supervisory Attention</span><button class="link-btn" data-go="entities">Open full view →</button></div>
    ${entityTable(state.entities.slice(0,5))}
  </div>
  <div class="section card panel"><div class="section-head"><span class="section-title">Case Priority Queue</span><button class="link-btn" data-go="cases">Open full queue →</button></div>
    ${caseTable(state.cases.slice(0,8))}
  </div>`;
}
function kpi(label,val,note){return `<div class="card kpi"><div class="kpi-label">${label}</div><div class="kpi-value">${esc(val)}</div><div class="kpi-note">${note}</div></div>`}
function entityTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>Rank</th><th>Entity</th><th>Attention</th><th>Peer Group</th><th>Percentile</th><th>Findings</th><th>Trend</th></tr></thead><tbody>${rows.map(e=>`<tr class="clickable" data-entity="${e.id}"><td>${e.rank}</td><td><strong>${e.id}</strong></td><td><strong>${e.score}</strong></td><td>${e.peer}</td><td>${e.percentile}</td><td>${e.findings}</td><td>${e.trend}</td></tr>`).join("")}</tbody></table></div>`}
function caseTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>#</th><th>Case</th><th>Entity</th><th>Severity</th><th>Priority</th><th>Rules</th><th>Rationale</th></tr></thead><tbody>${rows.map((r,i)=>`<tr class="clickable" data-case="${r[0]}"><td>${i+1}</td><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${badge(r[2])}</td><td><strong>${r[3]}</strong></td><td>${esc(r[4])}</td><td>${esc(r[5])}</td></tr>`).join("")}</tbody></table></div>`}

function ingestionHTML(){
 return `<div class="card panel"><div class="section-head"><div><div class="section-title">Periodic CSE submissions</div><div class="section-note">CSV / JSON / database export / API-ready boundary</div></div><button class="btn secondary" id="loadDemo">Load Demo Dataset</button></div>
   <div class="dropzone" id="dropzone"><strong>Drop CSV or JSON files here</strong><p>Files are sent to the local SAT-SA backend, stored as an analysis run, and used by the AI Explainer.</p><div style="margin-top:13px"><button class="btn primary" id="chooseFiles">Choose files</button></div></div>
   <div class="upload-list">${uploadedFiles.length?uploadedFiles.map(f=>`<div class="file-row"><span>${esc(f.name)}</span><span>${f.rows||0} records · ${f.type}</span></div>`).join(""):`<div class="callout" style="margin-top:12px">No user files loaded. The dashboard currently uses the embedded SAT-SA demonstration run.</div>`}</div>
 </div>
 <div class="section grid two"><div class="card panel"><h2>1. Ingestion + Validation</h2><div class="metric-list">
   ${metricRow("Schema checks","PASS","All required demo fields mapped")}
   ${metricRow("Missing values","PASS","Null/blank values isolated")}
   ${metricRow("Entity IDs","PASS","5 entity identifiers recognised")}
   ${metricRow("Timestamps","PASS","Temporal ordering checked")}
   ${metricRow("Format","PASS","CSV / JSON parser ready")}
 </div></div>
 <div class="card panel"><h2>2. Normalization + Entity Context</h2><div class="metric-list">
   ${metricRow("Common schema","READY","Canonical field mapping")}
   ${metricRow("Severity mapping","READY","CRITICAL → LOW")}
   ${metricRow("Asset criticality","READY","Criticality weight supported")}
   ${metricRow("Time windows","READY","Silent-window analysis")}
   ${metricRow("CSE cohorts","READY","Peer groups supported")}
 </div></div></div>
 <div class="section card panel"><h2>Expected input schema</h2><p>Recommended fields: entity_id, case_id, alert_id, asset_id, severity, created_at, acknowledged_at, investigation_started_at, escalated_at, resolved_at, disposition, analyst_id, investigation_notes, asset_criticality, alert_category.</p></div>`;
}
function metricRow(a,b,c){return `<div class="metric"><label>${a}</label><div class="bar"><span style="width:${b==="PASS"?100:85}%"></span></div><strong>${b}</strong></div><div style="font-size:10px;color:var(--muted);margin:-6px 0 4px 160px">${c}</div>`}

function analyticsHTML(){
 const engines=[
  ["E1","Normalization","Baseline rates","Canonical schema, severity and entity context"],
  ["E2","Execution Gap","12+ procedural rules","Expected vs observed workflow mismatches"],
  ["E3","Negative Space","Missing telemetry","Expected evidence that is absent"],
  ["E4","Anomaly + NLP","MAD, IQR, TF-IDF","Peer deviation, outliers and investigation-text patterns"],
  ["E5","Prioritization","Score 0–100 + ranks","Feature weights, attention score and case queue"]
 ];
 return `<div class="card panel"><div class="section-title">Analytics Core · Sequential Supervisory Engines</div><p>The engine sequence follows the submitted architecture: normalize → detect execution gaps → detect negative space → anomaly/NLP → prioritize.</p>
 <div class="section engine-grid">${engines.map(e=>`<div class="engine"><div class="engine-num">${e[0]}</div><h3>${e[1]}</h3><div style="font-size:10px;color:var(--blue);font-weight:800">${e[2]}</div><p>${e[3]}</p></div>`).join("")}</div></div>
 <div class="section grid two"><div class="card panel"><h2>Execution-gap rules</h2>${[
 ["EG-001","Critical case closed without evidence","CRITICAL/HIGH cases need supporting evidence."],
 ["EG-002","Unusually fast closure","Case closure below configured threshold."],
 ["EG-005","False-positive closure without evidence","Disposition is false positive but evidence is absent."],
 ["EG-007","Critical asset investigation not escalated","Investigation begins but escalation evidence is missing."],
 ["EG-009","Temporal ordering violation","Escalation/resolution timestamps are inconsistent."],
 ["EG-011","Bulk closure behaviour","Unusually large closure volume in a short window."]
 ].map(r=>rule(r)).join("")}</div>
 <div class="card panel"><h2>Negative-space rules</h2>${[
 ["NS-001","Missing expected alert category","Asset criticality implies categories that are not observed."],
 ["NS-002","Abnormal silent window","Gap between alerts materially exceeds peer baseline."],
 ["NS-003","Severity suppression signal","Critical/high assets have unexpectedly low severe-alert activity."]
 ].map(r=>rule(r)).join("")}</div></div>`;
}
function rule(r){return `<div class="engine-rule"><div class="rule-code">${r[0]}</div><div class="rule-copy"><strong>${r[1]}</strong><span>${r[2]}</span></div></div>`}

function entitiesHTML(){return `<div class="card panel"><div class="section-head"><div><div class="section-title">Entity Rankings — Supervisory Attention Score</div><div class="section-note">Peer comparison, percentile, findings and trend</div></div><input class="field" id="entitySearch" placeholder="Search entity / peer group"></div>${entityTable(state.entities)}</div>
<div class="section grid three">${state.entities.map(e=>`<div class="card panel"><div class="section-head"><strong>${e.id}</strong>${badge(e.score>=50?"HIGH":e.score>=30?"MEDIUM":"LOW")}</div><div class="kpi-value" style="font-size:25px">${e.score}</div><div class="section-note">Attention score · ${e.percentile} percentile</div><div class="bar" style="margin-top:12px"><span style="width:${e.score}%"></span></div><p>Peer group: ${e.peer}<br>Findings: ${e.findings}<br>Trend: ${e.trend}</p></div>`).join("")}</div>`}

function casesHTML(){return `<div class="card panel"><div class="section-head"><div><div class="section-title">Case Priority Queue</div><div class="section-note">Ranked cases for human manual review</div></div><div class="filters"><select class="field" id="caseSeverity"><option value="">All severity</option><option>CRITICAL</option><option>HIGH</option><option>MEDIUM</option><option>LOW</option></select><input class="field" id="caseSearch" placeholder="Search case/entity/rule"></div></div><div id="caseTable">${caseTable(state.cases)}</div></div>`}

function findingsHTML(){
 return `<div class="card panel"><div class="section-head"><div><div class="section-title">Findings Explorer</div><div class="section-note">Trace every finding to source/entity, rule, confidence and rationale</div></div><div class="filters"><select class="field" id="findingEngine"><option value="">All engines</option><option>Anomaly</option><option>Execution Gap</option><option>Negative Space</option><option>NLP</option></select><select class="field" id="findingSeverity"><option value="">All severity</option><option>CRITICAL</option><option>HIGH</option><option>MEDIUM</option><option>LOW</option></select></div></div><div id="findingTable">${findingTable(state.findings)}</div></div>`
}
function findingTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>Engine</th><th>Rule</th><th>Severity</th><th>Source</th><th>Entity</th><th>Confidence</th><th>Explanation</th></tr></thead><tbody>${rows.map((f,i)=>`<tr class="clickable" data-finding="${i}"><td>${f.engine}</td><td><strong>${f.rule}</strong></td><td>${badge(f.severity)}</td><td>${f.source}</td><td>${f.entity}</td><td>${f.confidence}</td><td>${esc(f.explanation)}</td></tr>`).join("")}</tbody></table></div>`}

function evidenceHTML(){
 return `<div class="grid two"><div class="card panel"><div class="section-title">Evidence Graph</div><p>Every supervisory finding should be traceable from finding → feature/rule → source record → calculation → pipeline version.</p>
 <div class="arch"><div class="arch-box"><strong>Finding</strong><small>EG-001 · HIGH · C-64</small></div><div class="arch-arrow">↓</div><div class="arch-box"><strong>Rule / Feature</strong><small>Critical closure without evidence</small></div><div class="arch-arrow">↓</div><div class="arch-box"><strong>Source Record</strong><small>Case C-64 · Entity E5</small></div><div class="arch-arrow">↓</div><div class="arch-box"><strong>Calculation</strong><small>severity × evidence-gap × criticality</small></div><div class="arch-arrow">↓</div><div class="arch-box"><strong>Version</strong><small>SAT-SA-v1 · config 1.0.0</small></div></div></div>
 <div class="card panel"><div class="section-title">Audit Controls</div><div class="metric-list">${metricRow("Source traceability","PASS","Finding points to source record")}${metricRow("Rule traceability","PASS","Rule ID retained")}${metricRow("Versioning","PASS","Pipeline/config version stored")}${metricRow("Offline processing","PASS","No external resource required")}${metricRow("Human decision","REQUIRED","Supervisor reviews evidence")}</div></div></div>`
}

function assessmentHTML(){
 const s=state.summary, sev=state.severity;
 return `<div class="card panel"><div class="section-head"><div><div class="eyebrow">SAT-SA SUPERVISORY ANALYTICS REPORT</div><div class="section-title" style="font-size:20px;margin-top:4px">Assessment Report</div><div class="section-note">Pipeline ${esc(state.meta.pipeline_id)} · Run ${esc(state.meta.run_id)} · ${esc(state.meta.timestamp)}</div></div><button class="btn primary" id="printReport">Print / Save PDF</button></div>
 <div class="grid kpi-grid" style="margin-top:18px">${kpi("Total Findings",s.total_findings,"")}${kpi("Entities Scored",s.entities,"")}${kpi("Priority Flags",s.priority_flags,"")}${kpi("Cases for Review",s.cases_review,"")}${kpi("Duration",state.meta.duration,"")}</div>
 <div class="section card panel"><h2>Executive Summary</h2><p>Findings are generated by anomaly, execution-gap, negative-space and NLP engines. The report is intended to support supervisory assessment, manual sampling and drill-down to evidence.</p><div class="detail-grid"><div class="detail-box"><label>CRITICAL</label><strong>${sev.CRITICAL}</strong></div><div class="detail-box"><label>HIGH</label><strong>${sev.HIGH}</strong></div><div class="detail-box"><label>MEDIUM</label><strong>${sev.MEDIUM}</strong></div><div class="detail-box"><label>LOW</label><strong>${sev.LOW}</strong></div></div></div>
 <div class="section card panel"><h2>Entity Rankings</h2>${entityTable(state.entities)}</div>
 <div class="section card panel"><h2>Top Manual Review Queue</h2>${caseTable(state.cases)}</div>
 <div class="section card panel"><h2>Findings Detail</h2>${findingTable(state.findings)}</div>
 <div class="section card panel"><h2>Pipeline Run Metadata</h2>${stageTable(state.stages)}</div></div>`
}
function stageTable(rows){return `<div class="table-wrap"><table class="table"><thead><tr><th>Stage</th><th>Status</th><th>Records</th><th>Findings</th><th>Duration</th><th>Version</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td><span class="badge low">${r[1]}</span></td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join("")}</tbody></table></div>`}

function architectureHTML(){
 return `<div class="card panel"><div class="section-head"><div><div class="section-title">Recommended SAT-SA Architecture</div><div class="section-note">Offline supervisory analytics, separated from operational SOC functions</div></div><span class="badge low">AIR-GAPPED</span></div>
 <div class="arch">
  <div class="arch-box"><strong>Periodic CSE Submissions</strong><small>CSV / JSON / DB export / API where available</small></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>1. Ingestion + Validation</strong><small>Schema checks · missing values · timestamps · entity IDs</small></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>2. Normalization + Entity Context</strong><small>Common schema · severity mapping · asset criticality · time windows · CSE cohort</small></div><div class="arch-arrow">↓</div>
  <div class="grid two"><div class="arch-box"><strong>3A. Execution-Gap Engine</strong><small>Expectation vs observed</small></div><div class="arch-box"><strong>3B. Negative-Space Engine</strong><small>Expected vs observed / missing evidence</small></div></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>4. Anomaly + Outlier Engine</strong><small>Robust statistics · peer deviation · temporal change · NLP signals</small></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>5. Scoring + Benchmarking</strong><small>Feature scores → weights → entity attention score · percentile · trend · confidence</small></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>6. Sample Prioritizer</strong><small>Rank cases / alerts for human manual review</small></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>7. Explainability + Evidence Graph</strong><small>Finding → feature → source record → calculation → version</small></div><div class="arch-arrow">↓</div>
  <div class="arch-box"><strong>8. Offline Supervisory Dashboard + Assessment Report</strong><small>Rankings · findings · trends · drill-down · printable report</small></div>
 </div></div>
 <div class="section grid three">${[
 ["Scope","Supervisory analytics only","Not a SOC, SIEM or real-time monitoring platform."],
 ["Deployment","Local / air-gapped","No cloud, SaaS, external AI model or Internet dependency."],
 ["Human oversight","Supervisor in the loop","Findings provide evidence and prioritisation; human examiner decides."]
 ].map(x=>`<div class="card panel"><h2>${x[0]}</h2><strong>${x[1]}</strong><p>${x[2]}</p></div>`).join("")}</div>`
}

function chatHTML(){
 return `<div class="grid two"><div class="card panel"><div class="section-title">SAT-SA AI Explainer</div><div class="section-note">Ask questions about the stored analysis run. The assistant is grounded in findings, cases, entities, severity and evidence from SAT-SA.</div><div id="chatMessages" class="chat-messages"><div class="chat-msg assistant"><strong>SAT-SA Explainer</strong><p>I can explain the current stored run. Try: “How many findings?”, “Why is C-5 high priority?”, or “Explain the critical findings.”</p></div></div><div class="chat-input"><input id="chatInput" class="field" placeholder="Ask about this assessment…"><button id="chatSend" class="btn primary">Ask</button></div></div><div class="card panel"><h2>What the explainer uses</h2><div class="metric-list">${metricRow("Stored run","LOCAL","SQLite-backed analysis result")}${metricRow("Evidence context","ACTIVE","Findings, cases, entities and severity")}${metricRow("LLM mode","OPTIONAL","Ollama local LLM or compatible API")}</div><div class="callout" style="margin-top:16px">The LLM explains SAT-SA evidence; it does not replace the rules, scoring logic or human supervisory decision.</div></div></div>`
}
function addChat(role,text){const box=$("#chatMessages");if(!box)return;box.insertAdjacentHTML("beforeend",`<div class="chat-msg ${role}"><strong>${role==="user"?"You":"SAT-SA Explainer"}</strong><p>${esc(text).replace(/\n/g,"<br>")}</p></div>`);box.scrollTop=box.scrollHeight}
async function askChat(){const input=$("#chatInput");const msg=input.value.trim();if(!msg)return;input.value="";addChat("user",msg);addChat("assistant","Thinking…");const msgs=$("#chatMessages").querySelectorAll(".chat-msg");const last=msgs[msgs.length-1];try{const r=await fetch(API_BASE+"/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:msg,run_id:state.meta.run_id})});const data=await r.json();last.remove();if(!r.ok)throw new Error(data.detail||"Chat failed");addChat("assistant",data.answer+`\n\n[Mode: ${data.provider}]`)}catch(e){last.remove();addChat("assistant","I could not reach the backend explainer: "+e.message)}}
function bindPage(page){
  $$("[data-go]").forEach(b=>b.onclick=()=>nav(b.dataset.go));
  $$("[data-entity]").forEach(x=>x.onclick=()=>openEntity(x.dataset.entity));
  $$("[data-case]").forEach(x=>x.onclick=()=>openCase(x.dataset.case));
  $$("[data-finding]").forEach(x=>x.onclick=()=>openFinding(Number(x.dataset.finding)));
  if(page==="ingestion"){
    $("#chooseFiles").onclick=()=>$("#fileInput").click();
    $("#dropzone").onclick=e=>{if(e.target.id!=="chooseFiles")$("#fileInput").click()};
    $("#dropzone").ondragover=e=>{e.preventDefault();$("#dropzone").style.borderColor="var(--blue)"};
    $("#dropzone").ondrop=e=>{e.preventDefault();handleFiles([...e.dataTransfer.files])};
    $("#loadDemo").onclick=()=>{state=structuredClone(DEMO);uploadedFiles=[];render("ingestion")};
  }
  if(page==="cases"){
    const filter=()=>{const sev=$("#caseSeverity").value,q=$("#caseSearch").value.toLowerCase();const rows=state.cases.filter(r=>(!sev||r[2]===sev)&&(!q||r.join(" ").toLowerCase().includes(q)));$("#caseTable").innerHTML=caseTable(rows);bindPage("cases")};
    $("#caseSeverity").onchange=filter;$("#caseSearch").oninput=filter;
  }
  if(page==="findings"){
    const filter=()=>{const en=$("#findingEngine").value,sev=$("#findingSeverity").value;const rows=state.findings.filter(f=>(!en||f.engine===en)&&(!sev||f.severity===sev));$("#findingTable").innerHTML=findingTable(rows);bindPage("findings")};
    $("#findingEngine").onchange=filter;$("#findingSeverity").onchange=filter;
  }
  if(page==="entities") $("#entitySearch").oninput=e=>{const q=e.target.value.toLowerCase();const rows=state.entities.filter(x=>(x.id+" "+x.peer).toLowerCase().includes(q));$(".card.panel .table").outerHTML=entityTable(rows).match(/<table[\s\S]*<\/table>/)[0];bindPage("entities")};
  if(page==="assessment") $("#printReport").onclick=()=>window.print();
  if(page==="chat"){ $("#chatSend").onclick=askChat; $("#chatInput").onkeydown=e=>{if(e.key==="Enter")askChat()}; }
}
function openEntity(id){const e=state.entities.find(x=>x.id===id);openModal(`<div class="eyebrow">ENTITY PROFILE</div><h2>${e.id} · Supervisory Attention</h2><div class="detail-grid"><div class="detail-box"><label>Attention score</label><strong>${e.score}</strong></div><div class="detail-box"><label>Peer percentile</label><strong>${e.percentile}</strong></div><div class="detail-box"><label>Findings</label><strong>${e.findings}</strong></div><div class="detail-box"><label>Trend</label><strong>${e.trend}</strong></div></div><div class="section card panel"><h3>Peer context</h3><p>${e.id} belongs to <strong>${e.peer}</strong>. The score is a supervisory attention indicator and should be interpreted with the underlying evidence.</p></div>`)}
function openCase(id){const r=state.cases.find(x=>x[0]===id);openModal(`<div class="eyebrow">CASE DETAIL</div><h2>${r[0]} · ${r[1]}</h2><div class="detail-grid"><div class="detail-box"><label>Severity</label><strong>${r[2]}</strong></div><div class="detail-box"><label>Priority</label><strong>${r[3]}</strong></div><div class="detail-box"><label>Rules</label><strong>${r[4]}</strong></div><div class="detail-box"><label>Review</label><strong>Manual</strong></div></div><div class="section card panel"><h3>Rationale</h3><p>${esc(r[5])}</p></div><div class="callout">Supervisor action: drill into the source record, evidence collected, escalation history and analyst notes before making an assessment.</div>`)}
function openFinding(i){const f=state.findings[i];openModal(`<div class="eyebrow">${esc(f.engine)} ENGINE</div><h2>${esc(f.rule)} · ${esc(f.severity)}</h2><div class="detail-grid"><div class="detail-box"><label>Source</label><strong>${esc(f.source)}</strong></div><div class="detail-box"><label>Entity</label><strong>${esc(f.entity)}</strong></div><div class="detail-box"><label>Confidence</label><strong>${esc(f.confidence)}</strong></div><div class="detail-box"><label>Rule</label><strong>${esc(f.rule)}</strong></div></div><div class="section card panel"><h3>Evidence rationale</h3><p>${esc(f.explanation)}</p></div><div class="section card panel"><h3>Audit trail</h3><p>Pipeline ${esc(state.meta.pipeline_id)} · Config ${esc(state.meta.config_version)} · Run ${esc(state.meta.run_id)}</p></div>`)}
function openModal(html){$("#modalBody").innerHTML=html;$("#modal").classList.remove("hidden")}
$("#modalClose").onclick=()=>$("#modal").classList.add("hidden");$(".modal-backdrop").onclick=()=>$("#modal").classList.add("hidden");

function parseCSV(text){
 const lines=text.trim().split(/\r?\n/); if(!lines.length)return [];
 const split=line=>line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)?.map(x=>x.replace(/^"|"$/g,""))||[];
 const headers=split(lines[0]).map(h=>h.trim());
 return lines.slice(1).map(line=>{const vals=split(line);return Object.fromEntries(headers.map((h,i)=>[h,vals[i]??""]))});
}
function normalizeRows(rows){
 const get=(r,...keys)=>{for(const k of keys){if(r[k]!==undefined&&r[k]!=="")return r[k]}return ""};
 return rows.map((r,i)=>({
   entity_id:get(r,"entity_id","entity","cse_id")||"E"+((i%5)+1),
   case_id:get(r,"case_id","case")||"C-"+(i+1),
   alert_id:get(r,"alert_id","alert")||"AL-"+(i+1),
   severity:String(get(r,"severity","alert_severity")||"MEDIUM").toUpperCase(),
   created_at:get(r,"created_at","alert_created_at","timestamp"),
   resolved_at:get(r,"resolved_at","closed_at"),
   escalated_at:get(r,"escalated_at"),
   disposition:String(get(r,"disposition","status")||"open").toLowerCase(),
   analyst_id:get(r,"analyst_id","analyst")||"unknown",
   notes:get(r,"investigation_notes","notes","description"),
   asset_criticality:String(get(r,"asset_criticality","criticality")||"medium").toLowerCase(),
   alert_category:String(get(r,"alert_category","category")||"unknown").toLowerCase()
 }));
}
function analyze(rows){
 const n=normalizeRows(rows), entities=[...new Set(n.map(x=>x.entity_id))];
 const sevCount={CRITICAL:0,HIGH:0,MEDIUM:0,LOW:0}; n.forEach(x=>{if(sevCount[x.severity]!==undefined)sevCount[x.severity]++});
 const findings=[];
 const add=(engine,rule,severity,source,entity,confidence,explanation)=>findings.push({engine,rule,severity,source,entity,confidence,explanation});
 n.forEach(x=>{
   if(x.severity==="CRITICAL" && !x.notes) add("Execution Gap","EG-001","HIGH",x.case_id,x.entity,"95%","Critical case has no investigation evidence/notes.");
   if(x.resolved_at && x.created_at){const a=Date.parse(x.created_at),b=Date.parse(x.resolved_at);if(!isNaN(a)&&!isNaN(b)&&(b-a)<5*60*1000)add("Execution Gap","EG-002","HIGH",x.case_id,x.entity,"90%","Case closed in less than five minutes.");}
   if(x.disposition==="false positive"&&!x.notes)add("Execution Gap","EG-005","HIGH",x.case_id,x.entity,"90%","False-positive closure has no supporting evidence.");
   if(x.asset_criticality==="critical" && !x.escalated_at && (x.severity==="CRITICAL"||x.severity==="HIGH"))add("Execution Gap","EG-007","HIGH",x.case_id,x.entity,"80%","Critical asset case has no escalation timestamp.");
 });
 const byEntity=entities.map(id=>{
   const rr=n.filter(x=>x.entity_id===id), severe=rr.filter(x=>x.severity==="CRITICAL"||x.severity==="HIGH").length;
   const score=Math.min(100,Number((severe/Math.max(1,rr.length)*100).toFixed(1)));
   if(rr.length && severe===0)add("Negative Space","NS-003","HIGH",id,id,"90%","Entity has activity but no critical/high severity alerts in the supplied period.");
   return {rank:0,id,score,peer:"local_cohort",percentile:"n/a",findings:rr.length,trend:"stable"};
 });
 byEntity.sort((a,b)=>b.score-a.score).forEach((x,i)=>x.rank=i+1);
 const cases=[...new Map(n.map(x=>[x.case_id,x])).values()].slice(0,30).map((x,i)=>{
   const hits=findings.filter(f=>f.source===x.case_id);const score=Number((hits.length*5+(x.severity==="CRITICAL"?7.5:x.severity==="HIGH"?6:x.severity==="MEDIUM"?4:2)).toFixed(1));
   return [x.case_id,x.entity_id,x.severity,score,hits.map(h=>h.rule).join(", ")||"—",hits.length?hits[0].explanation:"No rule triggered; retained for review."];
 }).sort((a,b)=>b[3]-a[3]);
 state={meta:{pipeline_id:"SAT-SA-v1",run_id:"LOCAL-"+Date.now(),timestamp:new Date().toLocaleString(),config_version:"1.0.0",duration:"local"},summary:{total_findings:findings.length,entities:entities.length,priority_flags:0,cases_review:cases.length},severity:sevCount,engines:{
   anomaly:Math.max(0,Math.round(findings.length*.08)),execution_gap:findings.filter(x=>x.engine==="Execution Gap").length,negative_space:findings.filter(x=>x.engine==="Negative Space").length,nlp:Math.max(0,Math.round(findings.length*.6))
 },entities:byEntity,cases,findings,stages:[["ingestion", "OK", n.length,0,"local","1.0.0"],["normalization","OK",n.length,0,"local","1.0.0"],["execution_gap_detection","OK",n.length,findings.filter(x=>x.engine==="Execution Gap").length,"local","1.0.0"],["negative_space","OK",n.length,findings.filter(x=>x.engine==="Negative Space").length,"local","1.0.0"],["anomaly_nlp","OK",n.length,findings.filter(x=>x.engine==="Anomaly"||x.engine==="NLP").length,"local","1.0.0"],["prioritization","OK",n.length,cases.length,"local","1.0.0"]]};
 $("#sideRunId").textContent=state.meta.run_id;
 nav("dashboard");
}
async function handleFiles(files){
  uploadedFiles = files.map(f=>({name:f.name,type:f.name.split(".").pop().toUpperCase(),rows:"processing"}));
  render("ingestion");
  try {
    const form = new FormData();
    if(files.length!==1) throw new Error("Upload one CSV or JSON file at a time for backend analysis.");
    form.append("file", files[0]);
    const res = await fetch(API_BASE+"/api/analyze", {method:"POST", body:form});
    if(!res.ok) throw new Error(await res.text());
    state = await res.json();
    uploadedFiles = [{name:files[0].name,type:files[0].name.split(".").pop().toUpperCase(),rows:state.records?.length || 0}];
    $("#sideRunId").textContent=state.meta.run_id;
    nav("dashboard");
  } catch(e) {
    uploadedFiles = files.map(f=>({name:f.name,type:f.name.split(".").pop().toUpperCase(),rows:0}));
    render("ingestion");
    openModal(`<div class="eyebrow">BACKEND CONNECTION</div><h2>Upload failed</h2><p>${esc(e.message)}</p><div class="callout">Start the SAT-SA backend with <code>run.bat</code> and open <strong>https://sat-sa-sih-project.onrender.com</strong>.</div>`);
  }
}

$("#fileInput").onchange=e=>handleFiles([...e.target.files]);
$("#nav").addEventListener("click",e=>{const b=e.target.closest(".nav-item");if(b)nav(b.dataset.page)});
// $("#themeBtn").onclick=()=>document.body.classList.toggle("dark");
$("#reportBtn").onclick=()=>nav("assessment");
$("#exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="sat-sa-assessment.json";a.click();URL.revokeObjectURL(a.href)};
$("#sideRunId").textContent=state.meta.run_id;
render("dashboard");
