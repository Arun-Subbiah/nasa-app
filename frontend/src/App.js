import React, { useEffect, useState } from 'react';

function App() {
  const [apod, setApod] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/apod")
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setApod(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1 style={{ fontSize: '2.5rem' }}> NASA APP</h1>
      {apod ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img
            src={apod.url}
            alt={apod.title}
            style={{
              width: '200px',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
          <div style={{ maxWidth: '400px', textAlign: 'left' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{apod.title}</h3>
            <p style={{ fontSize: '0.9rem' }}>
              {apod.explanation}...
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
