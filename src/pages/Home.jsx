import React, { useState, Suspense, useMemo, useEffect } from "react";
import "../styles/Home.css";

const BoxReveal = React.lazy(() => import("./BoxReveal"));
const AnimatedBackground = React.lazy(() => import("../Components/NonInteractiveBlockWeb"));

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

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

  // Feature Card data
  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "Secure Transactions",
      description: "State-of-the-art security protocols ensure your transactions are protected with the highest level of encryption and blockchain verification.",
    },
    {
      icon: "fas fa-globe",
      title: "Global Reach",
      description: "Connect with a borderless financial ecosystem that operates 24/7, enabling seamless transactions across countries and time zones.",
    },
    {
      icon: "fas fa-rocket",
      title: "Innovative Solutions",
      description: "Our cutting-edge Web3 technology delivers next-generation financial services that are ethical, transparent, and compliant with Islamic principles.",
    },
    {
      icon: "fas fa-handshake",
      title: "Ethical Finance",
      description: "Experience financial services built on the foundation of fairness, transparency, and shared prosperity without exploitative practices.",
    },
  ];

  // Roadmap data
  const roadmapMilestones = [
    { phase: "Q4 2024", title: "Launch Website & Start Journey", isCompleted: true },
    { phase: "Q1 2025", title: "Begin Community Building Campaigns", isCompleted: false },
    { phase: "Q3 2025", title: "List Main Token on Exchanges", isCompleted: false },
    { phase: "Q1 2026", title: "Launch Testnet", isCompleted: false },
    { phase: "Q2 2026", title: "Research Next-Gen Blockchain Solutions & Apply on Testnet", isCompleted: false },
    { phase: "Q3 2026", title: "Launch Mainnet", isCompleted: false },
    { phase: "Q1 2027", title: "Release Topay Wallet Complete Version", isCompleted: false },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is Riba?",
      answer: "Riba refers to usury or interest, which is the practice of charging extra money on loans or transactions. It is strictly prohibited in Islamic finance because it promotes unfair wealth accumulation and exploitation.",
    },
    {
      question: "What is Blockchain?",
      answer: "Blockchain is a decentralized and transparent ledger technology that records transactions securely across multiple computers. It eliminates intermediaries, ensures trust and security, and is widely used in cryptocurrencies and digital finance.",
    },
    {
      question: "How does Blockchain align with Islamic finance?",
      answer: "Blockchain promotes transparency, fairness, and trust, which align with Islamic financial principles. It eliminates uncertainty (Gharar) and ensures all transactions are clear, reducing fraud and unethical financial practices.",
    },
    {
      question: "What is a Riba-free Blockchain?",
      answer: "A Riba-free blockchain follows Islamic financial ethics by avoiding interest-based lending, ensuring fair and transparent transactions, using asset-backed tokens, and promoting profit-sharing models like Mudarabah and Musharakah.",
    },
    {
      question: "How can I participate in the TOPAY ecosystem?",
      answer: "You can participate by joining our community, contributing to our open-source projects, becoming an early investor, or partnering with us for business opportunities. Visit our 'Get Involved' section for more details.",
    }
  ];

  // FAQ toggle function
  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Memoize FAQ list for better performance
  const faqItems = useMemo(
    () => faqs.map((faq, index) => (
      <div key={index} className="faq-item">
        <button 
          className="faq-question" 
          onClick={() => toggleFAQ(index)} 
          aria-expanded={openFaqIndex === index ? "true" : "false"}
          aria-controls={`faq-answer-${index}`}
        >
          {faq.question}
          <span className={`faq-toggle ${openFaqIndex === index ? "open" : ""}`}>
            {openFaqIndex === index ? "⨉" : "▼"}
          </span>
        </button>
        <p 
          id={`faq-answer-${index}`} 
          className={`faq-answer ${openFaqIndex === index ? "show" : ""}`}
        >
          {faq.answer}
        </p>
      </div>
    )),
    [openFaqIndex]
  );

  return (
    <div className="home-container">
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Ramadan Mubarak!</h2>
            <img src="/images/ramadan.webp" alt="Ramadan" className="popup-image" />
            <p>Welcome to TOPAY Foundation! May this Ramadan bring you peace, blessings, and prosperity.</p>
            <button onClick={closePopup} className="popup-close-btn">Close</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
        <BoxReveal animationDuration="0s">
          <section className="hero">
            <AnimatedBackground />
            <div className="hero-content">
              <h1 className="hero-title">Welcome to TOPAY Foundation</h1>
              <p className="hero-subtitle">
                The First Islamic Blockchain & Services – Ethical, Transparent, and Riba-Free
              </p>
              <div className="hero-cta">
                <a href="#features" className="btn primary-btn">Explore Our Services</a>
                <a href="https://docs.topayfoundation.com" className="btn secondary-btn">Read Documentation</a>
              </div>
            </div>
          </section>
        </BoxReveal>
      </Suspense>

      {/* Mission Statement */}
      <section id="mission" className="mission-section animate-section">
        <div className={`mission-content ${visibleSections['mission'] ? 'fade-in' : ''}`}>
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-statement">
            <p>
              At TOPAY Foundation, we're building the future of ethical finance through blockchain technology. 
              Our mission is to create a financial ecosystem that adheres to Islamic principles while leveraging 
              the power of decentralized technology to provide transparent, accessible, and fair financial services to everyone.
            </p>
            <div className="mission-stats">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Riba-Free</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Global Access</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">0%</span>
                <span className="stat-label">Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card Component */}
      <section id="features" className="features-section animate-section">
        <div className={`feature ${visibleSections['features'] ? 'fade-in' : ''}`}>
          <h2 className="section-title">Why Choose TOPAY?</h2>
          <div className="features-content">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Roadmap Component */}
      <section id="roadmap" className="roadmap-section animate-section">
        <div className={`shortmap ${visibleSections['roadmap'] ? 'fade-in' : ''}`}>
          <h2 className="section-title">Our Strategic Roadmap</h2>
          <div className="short-roadmap">
            <ul className="milestones">
              {roadmapMilestones.map(({ phase, title, isCompleted }, index) => (
                <li key={index} className={isCompleted ? "milestone completed" : "milestone"}>
                  <span className="milestone-icon">{isCompleted ? "✔" : index + 1}</span>
                  <div className="milestone-content">
                    <h3>{phase}</h3>
                    <p>{title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="cta-section animate-section">
        <div className={`cta-container ${visibleSections['cta'] ? 'fade-in' : ''}`}>
          <h2>Ready to Join the Future of Ethical Finance?</h2>
          <p>Be part of our growing community and stay updated on our latest developments.</p>
          <div className="cta-buttons">
            <a href="https://t.me/TOPAYfoundation" className="btn primary-btn">Join Our Community</a>
            <a href="/invest" className="btn secondary-btn">Become an Investor</a>
          </div>
        </div>
      </section>

      {/* FAQ Component */}
      <section id="faq" className="faq-section animate-section">
        <div className={`faq ${visibleSections['faq'] ? 'fade-in' : ''}`}>
          <div className="faq-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid">{faqItems}</div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="newsletter-section animate-section">
        <div className={`newsletter-container ${visibleSections['newsletter'] ? 'fade-in' : ''}`}>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates on our progress and upcoming events.</p>
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