export function BibleReading({ reading, loading }) {
  if (loading) {
    return <div className="bible-reading loading">Lade Bibellesung...</div>;
  }

  if (!reading) {
    return <div className="bible-reading error">Bibellesung konnte nicht geladen werden</div>;
  }

  return (
    <div className="bible-reading">
      <div className="reading-header">
        <h2>{reading.book} {reading.chapter}:{reading.verses}</h2>
        <p className="reading-date">{reading.date}</p>
      </div>
      <div className="reading-text">
        <p>{reading.text}</p>
      </div>
    </div>
  );
}
