import { useState } from 'react';

export function SpeechInput({
  isListening,
  transcript,
  onStartListening,
  onStopListening,
  onSend,
  loading,
  language
}) {
  const [manualInput, setManualInput] = useState('');
  const currentInput = manualInput || transcript;

  const handleSend = () => {
    if (currentInput.trim()) {
      onSend(currentInput);
      setManualInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e) => {
    setManualInput(e.target.value);
  };

  return (
    <div className="speech-input">
      <div className="input-area">
        <textarea
          value={currentInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Sprich oder tippe deine Frage..."
          disabled={isListening || loading}
          className="text-input"
        />
      </div>
      <div className="controls">
        <button
          onClick={isListening ? onStopListening : onStartListening}
          disabled={loading}
          className={`record-btn ${isListening ? 'active' : ''}`}
          title={isListening ? 'Aufnahme stoppen' : 'Aufnahme starten'}
        >
          🎤 {isListening ? 'Hörend...' : 'Aufnahme'}
        </button>
        <button
          onClick={handleSend}
          disabled={!currentInput.trim() || loading}
          className="send-btn"
          title="Frage senden"
        >
          📤 {loading ? 'Antwort...' : 'Senden'}
        </button>
      </div>
    </div>
  );
}
