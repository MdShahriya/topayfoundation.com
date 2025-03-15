import React, { useState, Suspense, useEffect } from "react";
import "../styles/Home.css";

const AnimatedBackground = React.lazy(() => import("../components/NonInteractiveBlockWeb"));

interface SectionVisibility {
  [key: string]: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

const Home: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<SectionVisibility>({});

  const closePopup = () => setIsPopupOpen(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.animate-section').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('.animate-section').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // FAQ data
  const faqItems: FaqItem[] = [
    {
      question: "What is TOPAY FOUNDATION?",
      answer: "TOPAY FOUNDATION is a pioneering blockchain initiative focused on providing Riba-free financial solutions. We're committed to ethical, transparent, and Shariah-compliant blockchain services."
    },
    {
      question: "How does TOPAY ensure Shariah compliance?",
      answer: "We adhere to strict Islamic finance principles, avoiding interest-based transactions (Riba), excessive uncertainty (Gharar), and gambling-like activities (Maysir). Our solutions are reviewed by Shariah scholars."
    },
    {
      question: "What services does TOPAY offer?",
      answer: "We offer a range of services including Islamic finance consulting, blockchain development, smart contract auditing, and educational resources on Shariah-compliant blockchain solutions."
    },
    {
      question: "How can I get involved with TOPAY?",
      answer: "You can join our community through our social media channels, participate in our upcoming token launch, or reach out for partnership opportunities through our contact page."
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Canvas Background */}
      <section className="hero">
        <Suspense fallback={<div className="loading-placeholder">Loading animation...</div>}>
          <AnimatedBackground />
        </Suspense>
        <div className="hero-content">
          <h1 className="hero-title">TOPAY FOUNDATION</h1>
          <h2 className="hero-subtitle">The First Riba-Free Blockchain Initiative</h2>
          <div className="hero-cta">
            <a href="https://docs.topayfoundation.com" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
              Documentation
            </a>
            <a href="#mission" className="btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section animate-section">
        <div className={`mission-content ${visibleSections['mission'] ? 'fade-in' : ''}`}>
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-statement">
            At TOPAY FOUNDATION, we're pioneering the integration of Islamic finance principles with blockchain technology. Our mission is to create a transparent, ethical, and Riba-free financial ecosystem that empowers individuals and businesses globally.
          </p>
          <div className="mission-stats">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Riba-Free</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Global Access</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0%</div>
              <div className="stat-label">Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section animate-section">
        <div id="features" className={`features ${visibleSections['features'] ? 'fade-in' : ''}`}>
          <h2 className="section-title">Why Choose TOPAY?</h2>
          <div className="features-content">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Shariah Compliant</h3>
              <p>All our solutions adhere to Islamic finance principles, ensuring ethical and Riba-free transactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Secure & Transparent</h3>
              <p>Built on blockchain technology for maximum security, transparency, and immutability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Accessibility</h3>
              <p>Breaking down barriers to provide financial services to everyone, everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Short Roadmap Section */}
      <section className="roadmap-section animate-section">
        <div id="shortmap" className={`short-roadmap ${visibleSections['shortmap'] ? 'fade-in' : ''}`}>
          <h2 className="roadmap-title">Our Journey</h2>
          <ul className="milestones">
            <li className="milestone completed">
              <div className="milestone-icon">✓</div>
              <div className="milestone-content">
                <h3>Foundation Established</h3>
                <p>TOPAY FOUNDATION was created with a vision for ethical blockchain solutions.</p>
              </div>
            </li>
            <li className="milestone completed">
              <div className="milestone-icon">✓</div>
              <div className="milestone-content">
                <h3>Research & Development</h3>
                <p>Extensive research into Shariah-compliant blockchain applications.</p>
              </div>
            </li>
            <li className="milestone">
              <div className="milestone-icon">3</div>
              <div className="milestone-content">
                <h3>Token Launch</h3>
                <p>Upcoming launch of our native token to power the ecosystem.</p>
              </div>
            </li>
            <li className="milestone">
              <div className="milestone-icon">4</div>
              <div className="milestone-content">
                <h3>Global Expansion</h3>
                <p>Expanding our services and partnerships worldwide.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section animate-section">
        <div id="cta" className={`cta-container ${visibleSections['cta'] ? 'fade-in' : ''}`}>
          <h2>Ready to Join the Future of Ethical Finance?</h2>
          <p>Be part of our growing community and stay updated on our latest developments.</p>
          <div className="cta-buttons">
            <a href="https://docs.topayfoundation.com" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
              Read Documentation
            </a>
            <a href="https://t.me/TOPAYfoundation" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
              Join Community
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section animate-section">
        <div id="faq" className={`faq-container ${visibleSections['faq'] ? 'fade-in' : ''}`}>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqItems.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className={`faq-toggle ${openFaqIndex === index ? 'open' : ''}`}>▼</span>
                </button>
                <div className={`faq-answer ${openFaqIndex === index ? 'show' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section animate-section">
        <div id="newsletter" className={`newsletter-container ${visibleSections['newsletter'] ? 'fade-in' : ''}`}>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest news and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn primary-btn">Subscribe</button>
          </form>
          <p className="privacy-note">We respect your privacy and will never share your information.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;