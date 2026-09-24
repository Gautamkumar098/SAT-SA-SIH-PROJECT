@echo off
echo SAT-SA local LLM setup
where ollama >nul 2>nul
if errorlevel 1 (echo Ollama is not installed. Install Ollama first from https://ollama.com and run this script again.&pause&exit /b 1)
ollama pull llama3.2:3b
echo Local LLM ready.
pause
