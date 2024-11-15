import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../styles/Contact.css';

const Socialmedia = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">Social Media</h1>
        <p className="contact-paragraph">
          Follow us on social media for the latest updates and feel free to reach out through our channels.
        </p>
        <div className="social-media">
          <a href="https://x.com/TopayFoundation" id="twitter" className="social-button" aria-label="Twitter">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://linktr.ee/topayfoundation" id="linktree" className="social-button" aria-label="Linktree">
            <i className="fab fa-linktree"></i> Linktree
          </a>
          <a href="https://www.facebook.com/share/Rz4qycvKRLy1g8be" id="facebook" className="social-button" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i> acebook
          </a>
          <a href="https://t.me/Toptaskonproof" id="telegram" className="social-button" aria-label="Telegram">
            <i className="fab fa-telegram-plane"></i> Telegram
          </a>
          <a href="https://www.youtube.com/@topayfoundation" id="youtube" className="social-button" aria-label="YouTube">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socialmedia;
