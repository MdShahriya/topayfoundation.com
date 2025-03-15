import React, { useContext, useState } from "react";
import { NotificationContext, NotificationContextType } from "../context/NotificationContext";
import "../styles/BrandingPage.css";
import { FaDownload, FaCopy, FaPalette, FaFont, FaVoicemail } from "react-icons/fa";

const BrandingPage: React.FC = () => {
  const { showNotification } = useContext(NotificationContext) as NotificationContextType;
  const [activeTab, setActiveTab] = useState<string>("visual");

  const colorPalette = [
    { name: "Primary Blue", hex: "#0D7CE9", rgb: "13, 124, 233" },
    { name: "Secondary Blue", hex: "#15CFF1", rgb: "21, 207, 241" },
    { name: "Dark Gray", hex: "#333333", rgb: "51, 51, 51" },
    { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255" },
    { name: "Dark Blue", hex: "#252833", rgb: "37, 40, 51" },
    { name: "Deep Blue", hex: "#15192b", rgb: "21, 25, 43" }
  ];

  const copyToClipboard = (text: string, message: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      showNotification(`✔ ${message}`, "success");
    });
  };

  const copyColorsToClipboard = (): void => {
    const colorText = colorPalette.map(color => `${color.name}: ${color.hex}`).join("\n");
    copyToClipboard(colorText, "Color palette copied to clipboard!");
  };

  const copyHexCode = (hex: string): void => {
    copyToClipboard(hex, `${hex} copied to clipboard!`);
  };

  return (
    <div className="branding-page">
      <header className="branding-header">
        <h1 className="branding-title">Brand Guidelines</h1>
        <p className="branding-subtitle">
          A comprehensive guide to TOPAY Foundation's visual identity and brand voice
        </p>
      </header>

      <div className="branding-tabs">
        <button 
          className={`tab-button ${activeTab === "visual" ? "active" : ""}`} 
          onClick={() => setActiveTab("visual")}
        >
          Visual Identity
        </button>
        <button 
          className={`tab-button ${activeTab === "mission" ? "active" : ""}`} 
          onClick={() => setActiveTab("mission")}
        >
          Mission & Values
        </button>
        <button 
          className={`tab-button ${activeTab === "voice" ? "active" : ""}`} 
          onClick={() => setActiveTab("voice")}
        >
          Tone & Voice
        </button>
        <button 
          className={`tab-button ${activeTab === "usage" ? "active" : ""}`} 
          onClick={() => setActiveTab("usage")}
        >
          Usage Guidelines
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "visual" && (
          <section className="branding-visual-identity">
            <div className="section-intro">
              <h2><FaPalette className="section-icon" /> Visual Identity</h2>
              <p>Our visual identity represents innovation, trust, and resilience in the digital economy.</p>
            </div>

            <div className="branding-elements">
              {/* Logo Section */}
              <div className="branding-element logo-section">
                <h3>Logo</h3>
                <div className="logo-showcase">
                  <div className="logo-container primary">
                    <img src="/images/Logo.webp" alt="TOPAY Foundation Logo" className="branding-logo" />
                    <span className="logo-label">Primary Logo</span>
                  </div>
                  <div className="logo-variations">
                    <div className="logo-container dark">
                      <div className="logo-placeholder dark-bg">
                        <img src="/images/Logo.webp" alt="TOPAY Foundation Logo Dark" className="branding-logo" />
                      </div>
                      <span className="logo-label">Dark Background</span>
                    </div>
                    <div className="logo-container monochrome">
                      <div className="logo-placeholder light-bg">
                        <img src="/images/Logo.webp" alt="TOPAY Foundation Logo Monochrome" className="branding-logo" />
                      </div>
                      <span className="logo-label">Monochrome</span>
                    </div>
                  </div>
                </div>
                <div className="logo-guidelines">
                  <h4>Logo Guidelines</h4>
                  <ul>
                    <li>Maintain clear space around the logo equal to the height of the "T" in TOPAY</li>
                    <li>Never distort, rotate, or alter the logo's proportions</li>
                    <li>Ensure the logo is clearly visible against its background</li>
                    <li>Minimum size: 30px height for digital, 10mm for print</li>
                  </ul>
                  <a href="/source/Brand.zip" className="download-btn">
                    <FaDownload /> Download Brand Assets
                  </a>
                </div>
              </div>

              {/* Colors Section */}
              <div className="branding-element">
                <h3>Color Palette</h3>
                <div className="color-palette">
                  {colorPalette.map((color, index) => (
                    <div key={index} className="color-item" onClick={() => copyHexCode(color.hex)}>
                      <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
                      <div className="color-info">
                        <span className="color-name">{color.name}</span>
                        <span className="color-hex">{color.hex}</span>
                        <span className="color-rgb">RGB: {color.rgb}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="copy-all-btn" onClick={copyColorsToClipboard}>
                  <FaCopy /> Copy All Colors
                </button>
                <div className="color-usage">
                  <h4>Color Usage</h4>
                  <p>
                    Primary Blue (#0D7CE9) is our main brand color, used for primary buttons, links, and key elements.
                    Secondary Blue (#15CFF1) provides accent and highlights. Dark colors provide contrast and depth,
                    while white ensures readability and clean space.
                  </p>
                </div>
              </div>

              {/* Typography Section */}
              <div className="branding-element">
                <h3><FaFont className="element-icon" /> Typography</h3>
                <div className="typography-showcase">
                  <div className="font-family primary">
                    <h4 className="font-name">Black Ops One</h4>
                    <p className="font-sample">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-sample">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="font-sample">0123456789</p>
                    <span className="font-usage">Primary Headings & Logo</span>
                  </div>
                  <div className="font-family secondary">
                    <h4 className="font-name">Inter</h4>
                    <p className="font-sample">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-sample">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="font-sample">0123456789</p>
                    <span className="font-usage">Body Text & UI Elements</span>
                  </div>
                </div>
                <div className="typography-guidelines">
                  <h4>Typography Guidelines</h4>
                  <ul>
                    <li>Use Black Ops One for main headings and brand statements</li>
                    <li>Use Inter for body text, subheadings, and UI elements</li>
                    <li>Maintain proper hierarchy with consistent font sizes</li>
                    <li>Ensure adequate contrast between text and background</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "mission" && (
          <section className="branding-mission">
            <h2>Our Mission & Values</h2>
            <div className="mission-statement">
              <h3>Mission Statement</h3>
              <blockquote>
                "At TOPAY Foundation, our mission is to create a safer, more transparent, and future-proof digital economy
                through innovative blockchain solutions that empower communities and businesses worldwide."
              </blockquote>
            </div>
            
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We constantly push boundaries to develop cutting-edge solutions that address real-world challenges.</p>
              </div>
              <div className="value-card">
                <h3>Transparency</h3>
                <p>We believe in open, honest communication and maintaining the highest standards of transparency in all operations.</p>
              </div>
              <div className="value-card">
                <h3>Security</h3>
                <p>We prioritize the security and privacy of our users through robust systems and protocols.</p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>We foster an inclusive ecosystem that empowers individuals and organizations to thrive in the digital economy.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === "voice" && (
          <section className="branding-tone">
            <h2><FaVoicemail className="section-icon" /> Brand Tone and Voice</h2>
            
            <div className="tone-principles">
              <div className="tone-principle">
                <h3>Clear & Accessible</h3>
                <p>We communicate complex concepts in simple, understandable language without unnecessary jargon.</p>
                <div className="example-box">
                  <h4>Example:</h4>
                  <p className="good-example">"Our blockchain solution securely records all transactions, making them visible to authorized parties."</p>
                  <p className="bad-example">"Our distributed ledger technology implements cryptographic hashing to ensure immutable transaction verification across nodes."</p>
                </div>
              </div>
              
              <div className="tone-principle">
                <h3>Professional & Trustworthy</h3>
                <p>We maintain a professional tone that inspires confidence while remaining approachable.</p>
                <div className="example-box">
                  <h4>Example:</h4>
                  <p className="good-example">"We've designed robust security measures to protect your assets and data."</p>
                  <p className="bad-example">"Our stuff is super secure so you don't have to worry about anything!"</p>
                </div>
              </div>
              
              <div className="tone-principle">
                <h3>Forward-Thinking</h3>
                <p>We speak with optimism about the future while acknowledging present challenges.</p>
                <div className="example-box">
                  <h4>Example:</h4>
                  <p className="good-example">"While current systems face limitations, our solution paves the way for a more efficient future."</p>
                  <p className="bad-example">"Current systems are completely broken and outdated."</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === "usage" && (
          <section className="branding-usage">
            <h2>Usage Guidelines</h2>
            
            <div className="usage-guidelines">
              <div className="guideline-section">
                <h3>Logo Usage</h3>
                <div className="do-dont-grid">
                  <div className="do-box">
                    <h4>Do</h4>
                    <ul>
                      <li>Use the logo in its original proportions</li>
                      <li>Maintain clear space around the logo</li>
                      <li>Use approved color variations</li>
                    </ul>
                  </div>
                  <div className="dont-box">
                    <h4>Don't</h4>
                    <ul>
                      <li>Stretch or distort the logo</li>
                      <li>Change the logo colors</li>
                      <li>Add effects or shadows to the logo</li>
                      <li>Place the logo on busy backgrounds</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="guideline-section">
                <h3>Brand Assets Usage</h3>
                <p>
                  All TOPAY Foundation brand assets are protected by copyright and trademark laws. 
                  Partners and media may use our assets in accordance with these guidelines.
                </p>
                <p>
                  For permission to use our brand assets in ways not covered by these guidelines, 
                  please contact <a href="mailto:brand@topayfoundation.com">brand@topayfoundation.com</a>.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BrandingPage;