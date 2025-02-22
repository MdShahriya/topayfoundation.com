/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Proofcoin.css';
import tokenomicsImage from '../assets/images/Tokenomics.png'; // Adjust the path as needed
import memeImage from '../assets/images/PPGIF.gif'; // Placeholder for a fun meme image

function Proofcoin() {
  return (
    <div className="proofcoin-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={memeImage} className="meme-mascot" />
          <h1>Welcome to Proofcoin 🚀</h1>
          <p>Are You Joking?</p>
          <p>The Memecoin That’s Actually Useful (and Hilarious)! 😂</p>
          <p>Proofcoin rewards your inner gentleness while powering the ultimate memecoin ecosystem.</p>
          <div className="hero-buttons">
            <a href="/Whitepapers/Proofcoin-wp.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn whitepaper-btn">Read the Whitepaper 📄</button>
            </a>
           {/*  <a href="" target="_blank" rel="noopener noreferrer">
              <button className="btn buy-btn">Buy Proofcoin 💸</button>
            </a>*/}
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="btn earn-btn">Earn $Proofcoin 💎</button>
            </a>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="tokenomics">
        <h2>Tokenomics 🤑</h2>
        <p>How Proofcoin is distributed to the *gentle* moon! 🌕</p>
        <div className="tokenomics-content">
          <img src={tokenomicsImage} alt="Tokenomics" className="tokenomics-image" />
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <h2>Roadmap 🛤️</h2>
        <p>Our journey to meme greatness:</p>
        <ul className="roadmap-list">
          <li>
            <h3>Phase 1 - 🌱</h3>
            <p>Launch Community Airdrop Event</p>
            
          </li>
          <li>
            <h3>Phase 2 - 🚀</h3>
            <p>4 round presale.</p>
          </li>
          <li>
            <h3>Phase 3 - 📸</h3>
            <p>Snapshot of Airdrop eligibility.</p>
          </li>
          <li>
            <h3>Phase 4 - 🌕</h3>
            <p>Airdrop distribution and Exchange listing</p>
          </li>
        </ul>
      </section>

      {/* Community Section */}
      <section className="community">
        <h2>Join the Proofcoin Community 💬</h2>
        <p>Stay updated on our journey to the memecoin hall of fame!</p>
        <div className="social-links">
          <a href="https://twitter.com/proofcoin_ton" target="_blank" rel="noopener noreferrer" className="twitter-link">
            Twitter 🐦
          </a>
          <a href="https://t.me/proofcointon" target="_blank" rel="noopener noreferrer" className="telegram-link">
            Telegram 💬
          </a>
        </div>
      </section>
    </div>
  );
}

export default Proofcoin;
