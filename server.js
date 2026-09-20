import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, system } = req.body;
    const apiKey = process.env.VITE_CLAUDE_API_KEY;

    console.log('Available env vars:', Object.keys(process.env).filter(k => k.includes('CLAUDE') || k.includes('API')));
    console.log('VITE_CLAUDE_API_KEY:', apiKey ? 'SET' : 'MISSING');

    if (!apiKey) {
      return res.status(400).json({ error: 'Claude API key not configured' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-5',
        max_tokens: 1024,
        system,
        messages
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error: error.error?.message || 'Claude API error' });
    }

    const data = await response.json();
    console.log('Claude response content length:', data.content?.length);
    console.log('First content block:', JSON.stringify(data.content?.[0]).substring(0, 200));
    return res.json(data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
