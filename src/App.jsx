import { useBibleReading } from './hooks/useBibleReading';
import { useClaudeChat } from './hooks/useClaudeChat';
import { useSpeech } from './hooks/useSpeech';
import { BibleReading } from './components/BibleReading';
import { ChatBox } from './components/ChatBox';
import { SpeechInput } from './components/SpeechInput';
import { LanguageToggle } from './components/LanguageToggle';
import './App.css';

function App() {
  const { reading, loading: readingLoading } = useBibleReading();
  const { messages, loading: chatLoading, sendMessage } = useClaudeChat();
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    speak,
    language,
    toggleLanguage,
    isSpeaking
  } = useSpeech();

  const handleSendMessage = async (text) => {
    if (!reading || !text.trim()) return;

    try {
      const response = await sendMessage(text, reading, language);
      speak(response, language);
    } catch (err) {
      console.error('Error handling message:', err);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📖 BiBel-Chat</h1>
        <p>Biblische Lektüre vertiefen — im Gespräch mit KI</p>
      </header>

      <main className="app-main">
        <div className="sidebar">
          <BibleReading reading={reading} loading={readingLoading} />
          <div className="language-section">
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </div>
        </div>

        <div className="chat-section">
          <ChatBox messages={messages} loading={chatLoading} />
          <SpeechInput
            isListening={isListening}
            transcript={transcript}
            onStartListening={startListening}
            onStopListening={stopListening}
            onSend={handleSendMessage}
            loading={chatLoading || isSpeaking}
            language={language}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>💡 Tipp: Drücke 🎤 zum Sprechen oder tippe deine Frage</p>
      </footer>
    </div>
  );
}

export default App;
