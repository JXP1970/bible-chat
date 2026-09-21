import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { system, messages, apiKey } = req.body;
  if (!apiKey) {
    return res.status(400).json({ error: 'API key required' });
  }

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
