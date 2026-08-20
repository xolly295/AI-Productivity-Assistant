# AI Productivity Assistant

An AI-powered assistant to automate workplace tasks including:

- Email generation
- Meeting summarization
- Task planning
- Research assistance
- Chatbot interaction

This repository contains the project plan, prompt templates, architecture notes, and a minimal FastAPI prototype to get started.

Deadline: Friday at 11:00 AM (build milestones and deliverables below aim to complete features and documentation by the deadline).

Quickstart

1. Create a virtual environment and install dependencies:

   python -m venv .venv
   source .venv/bin/activate  # macOS / Linux
   .\.venv\Scripts\activate  # Windows
   pip install -r requirements.txt

2. Create a .env file with your OpenAI API key (or set OPENAI_API_KEY in your environment):

   OPENAI_API_KEY=sk-...

3. Run the FastAPI prototype:

   uvicorn src.app.main:app --reload

What's included in this commit

- README.md (this file)
- ARCHITECTURE.md (design & components)
- PROMPTS.md (prompt templates and prompt-engineering notes)
- Minimal FastAPI prototype under src/app
- requirements.txt and .gitignore

How to contribute

- Follow the issues and milestones in GitHub. Keep changes small and focused.
- Add unit tests and run locally before opening PRs.

Ethics & Safety

This project follows responsible AI guidelines: explicit user consent before sending sensitive data to third-party APIs; redaction guidelines for PII; and rate limiting and monitoring recommendations in ARCHITECTURE.md.
