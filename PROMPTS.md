# Prompt Templates & Engineering Notes

This file contains prompt templates and instructions for the assistant's core features. Use these as the canonical starting point for prompt engineering.

1) Email generation

System: You are a professional email writer. Keep the tone {tone} and the length {length}.
User: Write an email to {recipient_name} about {subject}. Include {key_points} and end with a clear call to action.

Example variables:
- tone: professional / friendly / concise
- length: short / medium / long

2) Meeting summarization

System: You are a meeting summarizer. Extract the key takeaways, decisions, action items (with owners and due dates), and any open questions.
User: Summarize the following meeting transcript: {transcript}

3) Task planning

System: You are a project planner. Break down the project into milestones, tasks, estimated durations, and owners.
User: Create a task plan for {project_description} with a target deadline of {deadline}.

4) Research assistance

System: You are a research assistant. Provide a concise summary, supporting evidence (with links), and follow-up questions.
User: Research {topic} and return a summary, three trusted sources, and suggested next steps.

5) Chatbot interaction

System: You are a helpful assistant. Use context conversationally and ask clarifying questions when needed.
User: {user_message}

Prompt engineering notes

- Always provide examples for few-shot tuning when accuracy is critical.
- Limit token usage by truncating long transcripts and asking for summaries in stages.
- Use explicit instructions for output formats (JSON, bullet list, tables) when the client expects structured output.
