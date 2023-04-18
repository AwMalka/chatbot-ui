export const DEFAULT_SYSTEM_PROMPT =
  process.env.DEFAULT_SYSTEM_PROMPT || "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const LLAMA_API_HOST =
  process.env.LLAMA_API_HOST || 'http://llama-server:8000';

export const LLAMA_STREAM_MODE =
  process.env.LLAMA_STREAM_MODE || '1';
