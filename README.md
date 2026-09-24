# SAT-SA — Supervisory Analytics Tool

Full-stack local SAT-SA prototype with a FastAPI backend, SQLite result store, CSV/JSON ingestion, supervisory analytics, assessment report, and an explainability chat layer.

## Run

### Windows
Double-click `run.bat`, then open http://127.0.0.1:8000

### Manual
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --host 127.0.0.1 --port 8000
```

## LLM explainer
The backend stores each analysis result in `backend/sat_sa.db`. The Chat/Explainer uses that stored run as its context. By default it has a deterministic local fallback, so the project works without an API key.

For a private local LLM, install Ollama and run `setup_ollama.bat`. The included `.env` uses `llama3.2:3b` through localhost. The backend sends the stored SAT-SA run context only to the local Ollama process. If Ollama is unavailable, the app automatically falls back to deterministic evidence-based explanations. An OpenAI-compatible provider can also be configured, but that is not air-gapped.

## Flow
CSV/JSON → FastAPI ingestion → normalization → Execution Gap / Negative Space / NLP checks → scoring/prioritization → SQLite run storage → dashboard/assessment report → chat explainer.

The LLM is an explanation layer; it does not replace SAT-SA rules or the human supervisory decision.
