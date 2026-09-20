import { useState } from 'react';

export function useClaudeChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userText, bibleContext, language = 'de-DE') => {
    if (!userText.trim()) return;

    const isEnglish = language === 'en-US';
    const langName = isEnglish ? 'English' : 'Deutsch';

    // Add user message to chat
    setMessages((prev) => [...prev, { role: 'user', content: userText }]);
    setLoading(true);
    setError(null);

    try {
      const systemPrompt = `Du bist ein erfahrener Bibel-Tutor. Der Nutzer studiert diese Bibellesung:

**${bibleContext.book} ${bibleContext.chapter}:${bibleContext.verses}**
"${bibleContext.text}"

Hilf dem Nutzer, den Text tiefer zu verstehen.
- Stelle durchdachte Fragen.
- Mach Verknüpfungen zu anderen Bibelstellen, wenn relevant.
- Erkläre Wort-Bedeutungen oder kulturelle Hintergründe.
- Sei prägnant und gesprächsorientiert (das ist eine Audio-Konversation).

Antworte auf ${langName}.`;

      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          system: systemPrompt,
          messages: [
            ...messages,
            { role: 'user', content: userText }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response from Claude');
      }

      const data = await response.json();
      const assistantMessage = data.content?.[0]?.text || data.content?.[0]?.toString?.() || JSON.stringify(data);

      console.log('Claude response:', { data, assistantMessage: assistantMessage?.substring(0, 100) });

      // Add assistant message to chat
      setMessages((prev) => [...prev, { role: 'assistant', content: assistantMessage || 'Keine Antwort erhalten' }]);

      return assistantMessage;
    } catch (err) {
      console.error('Error sending message to Claude:', err);
      setError(err.message);
      // Remove the user message if there was an error
      setMessages((prev) => prev.slice(0, -1));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearChat
  };
}
