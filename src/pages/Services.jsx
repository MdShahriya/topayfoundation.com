import React from "react";
import '../styles/Services.css';

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Empowering your journey with ethical, transparent, and Riba-free blockchain solutions.</p>
      </div>

      <div className="services-available">
        <h3>Our Key Offerings</h3>
        <p>Explore our tailored solutions designed for secure and Shariah-compliant financial innovation.</p>
      </div>

      <div className="services-list">
        <div className="service">
          <h4>Islamic Finance Consulting</h4>
          <p>Expert guidance on implementing Riba-free blockchain strategies.</p>
        </div>
        <div className="service">
          <h4>Blockchain Development</h4>
          <p>Custom-built decentralized solutions for transparent and ethical financial transactions.</p>
        </div>
        <div className="service">
          <h4>Smart Contract Audits</h4>
          <p>Ensuring security, transparency, and Shariah compliance in blockchain agreements.</p>
        </div>
        <div className="service">
          <h4>Halal Crypto Platforms</h4>
          <p>Creating platforms that adhere to Islamic finance principles.</p>
        </div>
        <div className="service">
          <h4>Decentralized Apps</h4>
          <p>Innovative applications for seamless Riba-free financial transactions.</p>
        </div>
        <div className="service">
          <a href="/Projects">
            <h4>Our Projects</h4>
            <p>Discover initiatives backed by TOPAY FOUNDATION.</p>
          </a>
        </div>
      </div>

      <div className="services-coming-soon">
        <h3>More Services Coming Soon</h3>
        <p>We are expanding our ecosystem with new, impactful blockchain solutions. Stay tuned!</p>
      </div>
    </section>
  );
}

export default Services;
