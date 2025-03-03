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
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/invest">Invest us</Link>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="https://docs.topayfoundation.com/docs/resources/whitepaper" target="_blank" rel="noopener noreferrer" title="Read the WhitePaper">
            WhitePaper
          </a>
          <a href="https://docs.topayfoundation.com/docs/resources/tokenomics" target="_blank" rel="noopener noreferrer" title="Check Tokenomics">
            Tokenomics
          </a>
          <a href="https://docs.topayfoundation.com/blog" target="_blank" rel="noopener noreferrer" title="Read our Blog">
            Blog
          </a>
        </div>
        <div className="footer-section">
          <h4>Security Resources</h4>
          <Link to="/licenses">Licenses & Registrations</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms and Conditions</Link>
        </div>
        {/* Community Section */}
        <div className="footer-section">
          <h4>Community</h4>
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
        <p className="footer-logo">
          Operated by{" "}
          <a href="https://society.topayfoundation.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            <strong>TOPAY SOCIETY</strong>
          </a>
        </p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/105530643/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://t.me/TOPAYfoundation" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>
          <a href="https://github.com/TOPAY-FOUNDATION" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/TOPAYFoundation" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://medium.com/@topayfoundation" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <FaMedium />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
