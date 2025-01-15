import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    
    <section className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Discover the range of services we will offer to empower your cryptocurrency journey.</p>
      </div>
      <div className="services-coming-soon">
        <h3>Coming Soon</h3>
        <p>We are working hard to bring you top-notch services. Stay tuned for updates!</p>
      </div>
      <div className="services-placeholder">
        <div className="service">
          <h4>Consulting (Soon)</h4>
          <p>Expert advice to navigate the complexities of the crypto world.</p>
        </div>
        <div className="service">
          <h4>Development (Soon)</h4>
          <p>Cutting-edge blockchain solutions tailored to your needs.</p>
        </div>
        <div className="service">
          <h4>Security Audits (Soon)</h4>
          <p>Comprehensive security audits to protect your assets.</p>
        </div>
        <div className="service">
          <h4>Platforms (Soon)</h4>
          <p>Advanced platforms to facilitate your crypto operations.</p>
        </div>
        <div className="service">
          <h4>Apps (Soon)</h4>
          <p>Custom applications designed for seamless integration and usability.</p>
        </div>
        <div className="service">
          <a href="/Projects"><h4>Projects</h4>
          <p>Projects backed by TOPAY FOUNDATION</p></a>
        </div>
      </div>
    </section>
  );
}

export default Services;
