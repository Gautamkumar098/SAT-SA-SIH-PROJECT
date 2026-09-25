# SAT-SA — Supervisory Analytics Tool

> A full-stack supervisory analytics platform for data ingestion, execution-gap detection, negative-space analysis, prioritization, assessment reporting, evidence traceability, and an evidence-grounded AI Explainer.

## 🚀 Live Demo

- **Frontend:** https://sat-sa-sih-project.vercel.app/
- **Backend API:** https://sat-sa-sih-project.onrender.com
- **API Docs:** https://sat-sa-sih-project.onrender.com/docs
- **GitHub:** https://github.com/Gautamkumar098/SAT-SA-SIH-PROJECT

---

## 📌 Overview

SAT-SA is a supervisory analytics platform designed to analyze assessment data and identify important findings, execution gaps, missing evidence, severity patterns, and priority cases.

The platform combines deterministic analytics with an AI Explainer that uses the stored SAT-SA assessment run to answer questions about findings, cases, entities, severity, priority, rules, and evidence.

The AI Explainer is designed to support human supervisors rather than replace the underlying analytics or human decision-making.

---

## ✨ Key Features

### 1. Data Ingestion

- CSV file upload
- JSON data support
- Data validation
- Entity and case processing
- Severity information
- Investigation evidence
- Status and disposition information
- Assessment run storage

### 2. Execution Gap Detection

Identifies situations where expected procedures, actions, or evidence are missing or inconsistent with the available assessment data.

### 3. Negative-Space Detection

Identifies missing expected activity or evidence that may require additional supervisory review.

### 4. Anomaly / NLP Analysis

Analyzes selected textual and analytical patterns to identify potentially important cases and findings.

### 5. Scoring & Prioritization

Cases and findings are evaluated using the available evidence and severity information to help supervisors focus their review.

### 6. Assessment Report

The dashboard provides a consolidated view of:

- Findings
- Severity
- Priority cases
- Entities
- Evidence
- Triggered rules
- Assessment information

### 7. AI Explainer

The AI Explainer is grounded in the stored SAT-SA analysis run.

You can ask questions such as:

```text
How many findings are present?

How many critical findings are there?

Explain the critical findings.

Why is this case high priority?

Give me a concise assessment summary.

What evidence supports the highest-priority finding?

Which rules were triggered?

Explain the evidence behind the highest-priority finding.
