import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { system, messages, apiKey: frontendApiKey } = req.body;
    const apiKey = frontendApiKey || process.env.VITE_CLAUDE_API_KEY;

    if (!apiKey) {
      return res.status(400).json({ error: 'API key required' });
    }

    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: system || '',
      messages: messages || []
    });

    const content = response.content[0]?.text || '';
    return res.status(200).json({ content });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to call Claude API',
      details: error.toString()
    });
  }
}
