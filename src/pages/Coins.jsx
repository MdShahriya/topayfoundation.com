import React from 'react';
import '../styles/Coins.css';

function Coins() {
  const coins = [
    {
      id: 1,
      name: 'Proofcoin',
      symbol: 'PROOF',
      url: 'https://www.topfoundation.co/Proofcoin', // Add URL for Proofcoin
    },
    { id: 2, name: '🔒', symbol: 'SOON', launchDate: 'Coming Soon', description: 'SOON', details: 'SOON', contractAddress: 'SOON', url: '#' },
    { id: 3, name: '🔒', symbol: 'SOON', launchDate: 'Coming Soon', description: 'SOON', details: 'SOON', contractAddress: 'SOON', url: '#' },
  ];

  return (
    <div className="coins-page">
      <div className="coins-header">
        <h1>Our Upcoming Coins</h1>
        <p>Here are the details of the coins our company will be launching soon:</p>
      </div>
      <div className="coins-list">
        {coins.map(coin => (
          <div key={coin.id} className="coin-item">
            <h2>{coin.name} ({coin.symbol})</h2>
            <p><strong>Launch Date:</strong> {coin.launchDate}</p>
            {coin.url !== '#' ? (
              <a href={coin.url} target="_blank" rel="noopener noreferrer">
                <button className="details">Read More</button>
              </a>
            ) : (
              <button className="details disabled" disabled>
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coins;
