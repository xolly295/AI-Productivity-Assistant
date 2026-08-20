import openai

class OpenAIClient:
    def __init__(self, api_key: str, model: str = None):
        openai.api_key = api_key
        self.model = model or ("gpt-4o-mini" if "gpt-4o-mini" else "gpt-4o")

    def generate(self, prompt: str, max_tokens: int = 512, temperature: float = 0.2):
        """Synchronous simple wrapper around OpenAI chat completion. Returns the assistant's content as a string."""
        try:
            completion = openai.ChatCompletion.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "You are a helpful assistant specialized in workplace productivity."},
                    {"role": "user", "content": prompt},
                ],
                max_tokens=max_tokens,
                temperature=temperature,
            )
            return completion.choices[0].message.content.strip()
        except Exception as e:
            # Surface a helpful error; in production, log details instead of returning raw exceptions
            return f"Error calling OpenAI API: {e}"
