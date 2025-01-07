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
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h4>Resources</h4>
          {/*<Link to="">Documentation</Link>*/}
          <a href="/Whitepapers/Topayfoundation-wp.pdf" target="_blank" rel="noopener noreferrer">
            WhitePaper
          </a>
          {/*<Link to="">Blog</Link>*/}
          <Link to="/privacy-policy">PrivacyPolicy</Link>
          <Link to="/terms-of-service">Terms and Conditions</Link>
        </div>

        {/* Community Section */}
        <div className="footer-section">
          <h4>Community</h4>
          {/*<Link to="">Careers (Soon)</Link>*/}
          <Link to="/contact">Contact Us</Link>
          <Link to="/socialmedia">Social Media</Link>
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
