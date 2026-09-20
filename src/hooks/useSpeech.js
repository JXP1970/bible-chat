import { useState, useEffect, useRef } from 'react';

export function useSpeech() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [language, setLanguage] = useState('de-DE');
  const recognitionRef = useRef(null);
  const isSpeakingRef = useRef(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech Recognition not supported');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = language;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + transcript + ' ');
        } else {
          interimTranscript += transcript;
        }
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognitionRef.current = recognition;
  }, [language]);

  const startListening = () => {
    if (recognitionRef.current && !isSpeakingRef.current) {
      setTranscript('');
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const speak = (text, lang = language) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'de-DE' ? 'de-DE' : 'en-US';
    utterance.rate = 1;

    utterance.onstart = () => {
      isSpeakingRef.current = true;
    };

    utterance.onend = () => {
      isSpeakingRef.current = false;
    };

    window.speechSynthesis.speak(utterance);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'de-DE' ? 'en-US' : 'de-DE'));
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    speak,
    language,
    toggleLanguage,
    isSpeaking: isSpeakingRef.current
  };
}
