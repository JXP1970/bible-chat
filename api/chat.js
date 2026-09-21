import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.VITE_CLAUDE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { system, messages } = req.body;

  try {
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: system,
      messages: messages
    });

    const content = response.content[0]?.text || '';
    res.status(200).json({ content });
  } catch (error) {
    console.error('Claude API error:', error);
    res.status(500).json({ error: error.message || 'Failed to call Claude API' });
  }
}
