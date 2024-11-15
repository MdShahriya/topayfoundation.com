import React, { useEffect, useState } from 'react';
import '../styles/News.css';

const DailyUpdatesPage = () => {
  const [dailyUpdates, setDailyUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const response = await fetch('http://localhost:5000/api/news'); // Adjust for production URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDailyUpdates(data);
      } catch (error) {
        setError('Failed to fetch news data. Please try again later.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="news-page">
      <h1 className="updates-title">Daily Updates</h1>
      {dailyUpdates.length === 0 ? (
        <p>No news available at the moment.</p>
      ) : (
        dailyUpdates.map((update) => (
          <section className="update-section" key={update._id}>
            <h2 className="update-title">{update.title}</h2>
            <span className="update-date">{new Date(update.date).toLocaleDateString()}</span>
            {update.imageUrl && (
              <div className="image-container">
                <img src={update.imageUrl} alt={update.title} className="update-image" />
              </div>
            )}
            <p className="update-content">{update.content}</p>
          </section>
        ))
      )}
    </div>
  );
};

export default DailyUpdatesPage;
