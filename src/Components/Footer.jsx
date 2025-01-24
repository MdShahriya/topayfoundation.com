import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Get Started Section */}
        <div className="footer-section">
          <h4>Get Started</h4>
          {/*<Link to="">Get a Wallet</Link>*/}
          {/*<Link to="">Get TOPAY</Link>*/}
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/invest">Invest us</Link>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4>Resources</h4>
          {/*<Link to="">Documentation</Link>*/}
          <a href="https://drive.google.com/file/d/1zxZcFMNSjET9dr5EsQ1p-QRJ24_pQ5Zf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            WhitePaper
          </a>
          <a href="https://drive.google.com/file/d/1NBHyVTQpJSaI_D1vXnYKXa7mz8m88cdn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            Tokenomics
          </a>
          {/*<Link to="">Blog</Link>*/}
        </div>
        <div className="footer-section">
          <h4>Security Resources</h4>
          <Link to="/licenses">Licenses & Registrations</Link>
          <Link to="/privacy-policy">PrivacyPolicy</Link>
          <Link to="/terms-of-service">Terms and Conditions</Link>
        </div>
        {/* Community Section */}
        <div className="footer-section">
          <h4>Community</h4>
          {/*<Link to="">Careers (Soon)</Link>*/}
          <Link to="https://linktr.ee/topay_foundation">Linktree</Link>
          <Link to="https://patreon.com/topayfoundation?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink">Patreon</Link>
        </div>
        <div className="footer-section">
          <h4>Developer Resources</h4>
          <Link to="/brand">Brand</Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
      <p className="footer-logo">Operated by <a  href="https://society.topayfoundation.com"  target="_blank"  rel="noopener noreferrer" className="footer-link"><strong> TOPAY SOCIETY</strong></a></p>     <div className="footer-icons">
          <a href="https://www.linkedin.com/company/105530643/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://t.me/TOPAYfoundation" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="https://github.com/TOPAY-FOUNDATION" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/TOPAYFoundation" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://medium.com/@topayfoundation" target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
