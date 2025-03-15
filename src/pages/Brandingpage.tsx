import React, { useContext } from "react";
import { NotificationContext, NotificationContextType } from "../context/NotificationContext";
import "../styles/BrandingPage.css";

const BrandingPage: React.FC = () => {
  const { showNotification } = useContext(NotificationContext) as NotificationContextType;

  const colors: string[] = ["#0D7CE9", "#15CFF1", "#333333", "#FFFFFF", "#252833", "#15192b"];

  const copyColorsToClipboard = (): void => {
    navigator.clipboard.writeText(colors.join(", ")).then(() => {
      showNotification("✔ All color codes copied to clipboard!", "success");
    });
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
          At Topay Foundation, our mission is to create a safer, more transparent, and future-proof digital economy.
          We strive to empower communities by delivering cutting-edge solutions to address modern challenges.
        </p>
      </section>

      <section className="branding-visual-identity">
        <h2>Visual Identity</h2>
        <p>Our visual identity represents innovation, trust, and resilience.</p>

        <div className="branding-elements">
          {/* Logo Section */}
          <div className="branding-element">
            <h3>Logo</h3>
            <img src="/images/Logo.webp" alt="Topay Foundation Logo" className="branding-logo" />
            <p>
              Our logo embodies our commitment to transparency and security. Use it with adequate spacing and in proper color variations.
            </p>
            <a href="/source/Brand.zip" className="download-btn">Download Brand Assets</a>
          </div>

          {/* Colors Section */}
          <div className="branding-element">
            <h3>Colors</h3>
            <div className="branding-colors">
              {colors.map((color, index) => (
                <div key={index} className="color-swatch" style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <button className="copy-all-btn" onClick={copyColorsToClipboard}>Copy All Colors</button>
            <p>Our primary colors symbolize trust, innovation, and growth. Use them consistently across all mediums.</p>
          </div>

          {/* Typography Section */}
          <div className="branding-element">
            <h3>Typography</h3>
            <p>We prioritize modern, clean typography for professionalism and readability. Our primary font is <b>Black Ops One, sans-serif</b>.</p>
          </div>
        </div>
      </section>

      <section className="branding-tone">
        <h2>Brand Tone and Voice</h2>
        <p>Our tone is approachable, informative, and professional. We believe in creating meaningful connections through clear and transparent communication.</p>
      </section>
    </div>
  );
};

export default BrandingPage;