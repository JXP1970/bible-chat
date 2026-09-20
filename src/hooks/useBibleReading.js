import { useState, useEffect } from 'react';

export function useBibleReading() {
  const [reading, setReading] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReading() {
      try {
        const apiUrl = import.meta.env.VITE_BIBELTAG_API_URL;
        const response = await fetch(`${apiUrl}/api/reading/today`);

        if (!response.ok) {
          throw new Error('Failed to fetch Bible reading');
        }

        const data = await response.json();
        setReading(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Bible reading:', err);
        setError(err.message);
        // Fallback data for testing
        setReading({
          date: new Date().toISOString().split('T')[0],
          book: 'Matthäus',
          chapter: 5,
          verses: '1-12',
          text: 'Und Jesus sah die Volksmenge und ging auf den Berg. Und er setzte sich, und seine Jünger traten zu ihm.',
          language: 'de'
        });
      } finally {
        setLoading(false);
      }
    }

    fetchReading();
  }, []);

  return { reading, loading, error };
}
