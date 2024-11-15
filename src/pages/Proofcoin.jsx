import React from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../styles/Proofcoin.css';
import tokenomicsImage from '../assets/images/Tokenomics.png'; // Adjust the path as needed

Chart.register(ChartDataLabels);

function Proofcoin() {
  // Tokenomics data for Proofcoin
  return (
    <div className="proofcoin-page">
      {/* Hero Section */}
      <section className="heo">
        <div className="social-inks">
          <a href="/Whitepapers/Proofcoin-wp.pdf" target="_blank" rel="noopener noreferrer">WhitePaper</a>
        </div>
      <p className='Note'><strong>NOTE : Airdrop supply is Limited! more details in Social Updates</strong></p>
        <h2>Welcome to Proofcoin - The Gentle Memecoin</h2>
        <p>Reward token for Gentle and platform use.</p>
        <h3>About Proofcoin</h3>
        <p>Proofcoin is a utility memecoin that will have many use case in our ecosystem...</p>
        
        <a href="" target="_blank" rel="noopener noreferrer">
          <button className="cta-btton">Buy Proofcoin</button>
        </a>
        <a href="https://t.me/proofcoin_bot" target="_blank" rel="noopener noreferrer">
          <button className="earn-btton">Earn $Proofcoin</button>
        </a>
      </section>      
      {/* Tokenomics Section */}
      <section id="tokenomics" className="tokenomics">
  <div className="tokenomics-content">
    <img src={tokenomicsImage} className="tokenomics-image" />
  </div>
</section>

      {/* Roadmap Section */}
      <section id="roadmp" className="roadmp">
        <h3>Roadmap</h3>
        <ul className="roadmap-list">
          <li>      <p className='Note'><strong>NOTE : Airdrop supply is Limited! more details in Social Updates</strong></p>
          <h4>Phase 1</h4><p>Launch Proofcoin bot for Community Airdrop</p></li>
          <li><h4>Phase 2</h4><p>1st-4th round presale</p></li>
          <li><h4>Phase 3</h4><p>Snapshot of Airdrop</p></li>
          <li><h4>Phase 4</h4><p>listing & Airdrop distribution</p></li>
        </ul>
        </section>
      {/* Community Section */}
      <section id='community' className='community'>
        <h3>Join the Community</h3>
        <p>Follow us on social media and join our Telegram to stay updated!</p>
        <div className="social-inks">
          <a href="https://twitter.com/proofcoin_ton" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://t.me/proofcointon" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </section>
    </div>
  );
}

export default Proofcoin;
