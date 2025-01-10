import React from 'react';
import '../styles/Invest.css'; // Assuming you have a separate CSS file for styling

const Invest = () => {
  return (
    <div className="invest-container">
      <header className="invest-header">
        <h1>Investment Information</h1>
        <p>Read the risks and benefits before making an investment.</p>
      </header>
      <section className="invest-section">
        <div className="invest-details">
          <h2>Benefits of Investing with Us</h2>
          <ul>
            <li><i className="fas fa-check-circle"></i> Access to diversified investment options.</li>
            <li><i className="fas fa-check-circle"></i> Transparency and security in transactions.</li>
            <li><i className="fas fa-check-circle"></i> Potential for high returns on investment.</li>
            <li><i className="fas fa-check-circle"></i> Continuous support and guidance from our team.</li>
          </ul>
        </div>

        <div className="invest-details">
          <h2>Warnings</h2>
          <ul>
            <li><i className="fas fa-warning"></i> Investments are subject to market risks.</li>
            <li><i className="fas fa-warning"></i> Ensure you understand the risks involved before committing.</li>
            <li><i className="fas fa-warning"></i> Only invest money you can afford to lose.</li>
            <li><i className="fas fa-warning"></i> Consult with a financial advisor before investing.</li>
          </ul>
        </div>

        <div className="invest-details">
          <h2>Risks of Investment</h2>
          <ul>
            <li><i className="fas fa-exclamation-circle"></i> Investments may lose value over time.</li>
            <li><i className="fas fa-exclamation-circle"></i> Market volatility can impact returns.</li>
            <li><i className="fas fa-exclamation-circle"></i> There is no guarantee of profit.</li>
            <li><i className="fas fa-exclamation-circle"></i> Investment requires long-term commitment.</li>
          </ul>
        </div>

        <div className="invest-button-container">
          <a href="https://forms.gle/sgn4SiMUk2KYLqUMA" target="_blank" rel="noopener noreferrer">
            <button className="invest-button">Invest Now</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Invest;
