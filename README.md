



SAT-SA — Supervisory Analytics Tool
A full-stack supervisory analytics platform for CSV/JSON ingestion, execution-gap detection, negative-space analysis, prioritization, assessment reporting, evidence traceability, and an evidence-grounded AI explainer.

Live
Frontend: https://sat-sa-sih-project.vercel.app/

Backend: https://sat-sa-sih-project.onrender.com

API Health: https://sat-sa-sih-project.onrender.com/api/health

GitHub: https://github.com/Gautamkumar098/SAT-SA-SIH-PROJECT

Overview
SAT-SA separates supervisory analytics from operational SOC/SIEM functions.

CSV / JSON
    ↓
Ingestion & Validation
    ↓
Normalization & Entity Context
    ↓
Execution-Gap Detection ───┐
                           ├──→ Anomaly / NLP Analysis
Negative-Space Detection ──┘
                           ↓
                 Scoring & Prioritization
                           ↓
                 Assessment Report
                           ↓
                Evidence & Explainability
                           ↓
                     AI Explainer
                           ↓
                  Human Supervisor
The AI layer explains stored SAT-SA findings; it does not replace the deterministic analytics or human supervisory decision.

Features
Data ingestion
CSV and JSON uploads

Alert, case and entity records

Severity and timestamps

Investigation notes

Disposition/status

Asset criticality

Escalation information

Analytics
Normalization — converts input data to a common schema.

Execution Gap Engine — detects procedural/evidence mismatches.

Negative Space Engine — detects missing expected evidence/activity.

Anomaly/NLP Layer — identifies selected anomalous or low-information patterns.

Scoring & Prioritization — ranks cases/entities for supervisory review.

Assessment Report
The dashboard provides an assessment-report view based on the stored analysis run, including findings, severity, entities, priority cases, rules and evidence/explanations.

AI Explainer
The explainer uses the stored SAT-SA run as context. Example questions:

How many findings are present?
How many critical findings are there?
Explain the critical findings.
Why is this case high priority?
Give me a concise assessment summary.
What evidence supports the highest-priority finding?
Which rules were triggered?
If an LLM is unavailable, the backend has a deterministic evidence-based fallback for supported questions.

Architecture
             CSE / Assessment Submissions
                    CSV / JSON
                         │
                         ▼
              Ingestion & Validation
                         │
                         ▼
              Normalization + Context
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
       Execution Gap          Negative Space
              └──────────┬──────────┘
                         ▼
                  Anomaly / NLP
                         │
                         ▼
              Scoring + Prioritization
                         │
                         ▼
             Assessment / Dashboard
                         │
                         ▼
              Evidence + AI Explainer
                         │
                         ▼
                  Human Supervisor
Technology Stack
Frontend

HTML5

CSS3

JavaScript

Vercel

Backend

Python

FastAPI

Uvicorn

SQLite

Pydantic

python-dotenv

AI

Ollama support

OpenAI-compatible provider support

Deterministic fallback

Deployment

Vercel — frontend

Render — backend

Project Structure
SAT-SA-SIH-PROJECT/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── sat_sa.db
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── data/
│       └── demo-summary.json
│
├── .gitignore
├── README.md
├── run.bat
└── setup_ollama.bat
Keep .env, .venv, caches and secrets out of Git.

Local Setup
Requirements
Python 3.10+

Git

Modern browser

Optional: Ollama

1. Clone
git clone https://github.com/Gautamkumar098/SAT-SA-SIH-PROJECT.git
cd SAT-SA-SIH-PROJECT
2. Create backend environment
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
3. Install dependencies
pip install -r requirements.txt
4. Environment variables
Create backend/.env.

Example:

LLM_PROVIDER=ollama
OLLAMA_URL=http://127.0.0.1:11434/api/chat
OLLAMA_MODEL=llama3.2:3b
For supported questions, SAT-SA can use its deterministic fallback when no LLM is available.

5. Start backend
python -m uvicorn main:app --reload --port 8000
Open:

http://127.0.0.1:8000
Swagger/API docs:

http://127.0.0.1:8000/docs
Health:

http://127.0.0.1:8000/api/health
6. Start static frontend locally
From the project root:

cd frontend
python -m http.server 5500
Open:

http://127.0.0.1:5500
Ollama / Local AI
Install Ollama and pull the configured model:

ollama pull llama3.2:3b
Run:

ollama serve
Then use:

LLM_PROVIDER=ollama
OLLAMA_URL=http://127.0.0.1:11434/api/chat
OLLAMA_MODEL=llama3.2:3b
Important: a local Ollama process on your PC is not automatically reachable by a cloud Render service. For cloud AI, configure a hosted OpenAI-compatible provider through backend environment variables.

API
Health
GET /api/health
Analyze CSV/JSON
POST /api/analyze
Multipart field:

file
Latest run
GET /api/runs/latest
Run history
GET /api/runs
AI Explainer
POST /api/chat
Example:

{
  "message": "How many findings are present?",
  "run_id": "optional-run-id"
}
Chat history
GET /api/chat/history/{run_id}
Data Storage
SQLite is used for the current prototype.

backend/sat_sa.db
It stores analysis runs and chat history. The explainer uses the stored run context containing findings, severity, entities, cases and evidence.

Production Deployment
Vercel — Frontend
Deploy the frontend directory.

Recommended settings:

Framework Preset: Other
Root Directory: frontend
Build Command: empty
Output Directory: .
Install Command: empty
Live:

https://sat-sa-sih-project.vercel.app/

Render — Backend
Use backend as the root directory.

Recommended:

Root Directory: backend
Build Command: pip install -r requirements.txt
Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
Live:

https://sat-sa-sih-project.onrender.com

The deployed frontend should point its API base URL to:

https://sat-sa-sih-project.onrender.com
Production Flow
Vercel Frontend
      │
      │ HTTPS
      ▼
Render FastAPI Backend
      │
      ├── Ingestion
      ├── Normalization
      ├── Execution Gap
      ├── Negative Space
      ├── NLP / Anomaly
      ├── Scoring
      └── Prioritization
      │
      ▼
Assessment Report
      │
      ▼
Stored Analysis Run
      │
      ▼
AI Explainer
      │
      ▼
Evidence-grounded Answer
Design Principles
Evidence first: findings should be traceable to records and rules.

Deterministic analytics: core findings are produced by explicit rules.

Explainability: the system provides the reason behind findings.

Human supervision: final decisions remain with the human supervisor.

Separation of concerns: SAT-SA is a supervisory analytics layer, not a replacement for a production SOC/SIEM.

Local-first capability: local processing and Ollama are supported.

Future Improvements
PostgreSQL production persistence

Cloud object storage for uploaded datasets

Authentication and role-based access

Persistent production storage

Advanced peer benchmarking

Time-series trend analysis

More advanced anomaly detection

Evidence-graph visualization

PDF assessment export

Hosted LLM integration

Background processing for large datasets

Versioned analytics configurations

Stronger audit logging

Project Links
Live Demo: https://sat-sa-sih-project.vercel.app/

Backend: https://sat-sa-sih-project.onrender.com

GitHub: https://github.com/Gautamkumar098/SAT-SA-SIH-PROJECT

License
This project is currently presented as a prototype/project implementation. Add an appropriate open-source license before distributing it as a reusable open-source project.
