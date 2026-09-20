export function LanguageToggle({ language, onToggle }) {
  const isEnglish = language === 'en-US';

  return (
    <button className="language-toggle" onClick={onToggle} title="Sprache wechseln">
      <span className={isEnglish ? 'inactive' : 'active'}>🇩🇪 Deutsch</span>
      <span className="separator">|</span>
      <span className={isEnglish ? 'active' : 'inactive'}>🇬🇧 English</span>
    </button>
  );
}
