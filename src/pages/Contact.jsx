import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-paragraph">
          We’d love to hear from you.
        </p>
        {/* Email Section */}
        <div className="email-contact">
          <p className="email-label">Email us at:</p>
          <a href="mailto:contact@topayfoundation.com" className="email-link">
            contact@topayfoundation.com
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
