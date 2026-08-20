from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
import os
from .openai_client import OpenAIClient

app = FastAPI(title="AI Productivity Assistant")

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    # App will run but endpoints will return a helpful error if called without a key
    openai_client = None
else:
    openai_client = OpenAIClient(api_key=OPENAI_API_KEY)

class EmailRequest(BaseModel):
    recipient_name: str
    subject: str
    key_points: List[str]
    tone: Optional[str] = "professional"
    length: Optional[str] = "short"

class SummarizeRequest(BaseModel):
    transcript: str

class PlanRequest(BaseModel):
    project_description: str
    deadline: Optional[str]

class ResearchRequest(BaseModel):
    topic: str

class ChatRequest(BaseModel):
    message: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/generate-email")
def generate_email(req: EmailRequest):
    if not openai_client:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured. Set OPENAI_API_KEY in the environment.")
    prompt = f"You are a professional email writer. Tone: {req.tone}. Length: {req.length}.\nWrite an email to {req.recipient_name} about {req.subject}. Include these points: {', '.join(req.key_points)}. End with a clear call to action."
    resp = openai_client.generate(prompt)
    return {"email": resp}

@app.post("/summarize-meeting")
def summarize_meeting(req: SummarizeRequest):
    if not openai_client:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured. Set OPENAI_API_KEY in the environment.")
    prompt = f"Summarize the meeting transcript below. Include key takeaways, decisions, action items with owners and due dates if present, and open questions.\n\nTranscript:\n{req.transcript}"
    resp = openai_client.generate(prompt)
    return {"summary": resp}

@app.post("/plan-tasks")
def plan_tasks(req: PlanRequest):
    if not openai_client:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured. Set OPENAI_API_KEY in the environment.")
    prompt = f"Create a task plan for the project described below with a target deadline of {req.deadline}. Break the project into milestones, tasks, estimated durations, and owners.\n\n{req.project_description}"
    resp = openai_client.generate(prompt)
    return {"plan": resp}

@app.post("/research")
def research(req: ResearchRequest):
    if not openai_client:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured. Set OPENAI_API_KEY in the environment.")
    prompt = f"Research the following topic and return a concise summary, three trusted sources (with URLs), and suggested next steps.\n\nTopic: {req.topic}"
    resp = openai_client.generate(prompt)
    return {"research": resp}

@app.post("/chat")
def chat(req: ChatRequest):
    if not openai_client:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured. Set OPENAI_API_KEY in the environment.")
    prompt = f"You are a helpful assistant. Respond conversationally and ask clarifying questions when needed.\n\nUser: {req.message}"
    resp = openai_client.generate(prompt)
    return {"reply": resp}
