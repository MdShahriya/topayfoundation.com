import React from 'react';
import '../styles/BrandingPage.css'; // Ensure the CSS file exists for styling

const BrandingPage = () => {
  const colors = [
    { hex: '#0D7CE9' },
    { hex: '#15CFF1' },
    { hex: '#333333' },
    { hex: '#rgb(255, 255, 255)' },
    { hex: '#252833' },
    { hex: '#15192b' },
  ];

  const copyColorsToClipboard = () => {
    const colorCodes = colors.map(color => color.hex).join(', ');
    navigator.clipboard.writeText(colorCodes);
    alert('All color codes copied to clipboard!');
  };

  return (
    <div className="branding-page">
      <header className="branding-header">
        <h1 className="branding-title">Our Brand Identity</h1>
        <p className="branding-subtitle">Reflecting who we are and what we stand for.</p>
      </header>

      <section className="branding-mission">
        <h2>Our Mission</h2>
        <p>
          At Topay Foundation, our mission is to create a safer, more transparent, and future-proof digital economy. We strive to empower communities by delivering cutting-edge solutions to address modern challenges.
        </p>
      </section>

      <section className="branding-visual-identity">
        <h2>Visual Identity</h2>
        <p>
          Our visual identity represents innovation, trust, and resilience. Below are the core elements that define our brand:
        </p>
        <div className="branding-elements">
          <div className="branding-element">
            <h3>Logo</h3>
            <img src="/images/Logo.png" alt="Brand Logo" className="branding-logo" />
            <p>
              The logo embodies our commitment to transparency and security. It should always be used with adequate spacing and in its proper color variations.
            </p>
            <button className="download-btn">
              <a href="/source/Brand.zip" download="Brand.zip" className="download-link">
                Download Brand Assets
              </a>
            </button>
          </div>
          <div className="branding-element">
            <h3>Colors</h3>
            <div className="branding-colors">
              {colors.map((color, index) => (
                <div key={index} className="color-swatch" style={{ backgroundColor: color.hex }}></div>
              ))}
            </div>
            <button className="copy-all-btn" onClick={copyColorsToClipboard}>
              Copy All Colors
            </button>
            <p>
              Our primary colors symbolize trust, innovation, and growth. Use these colors consistently across all mediums.
            </p>
          </div>
          <div className="branding-element">
            <h3>Typography</h3>
            <p>
              We prioritize modern and clean typography to ensure professionalism and readability. Our primary digital font is "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif".
            </p>
          </div>
        </div>
      </section>

      <section className="branding-tone">
        <h2>Brand Tone and Voice</h2>
        <p>
          Our tone is approachable, informative, and professional. We believe in creating meaningful connections through clear and transparent communication.
        </p>
      </section>
    </div>
  );
};

export default BrandingPage;
