import React from 'react';
import '../styles/Home.css';
import BoxReveal from './BoxReveal'; // Adjust the path based on your project structure

function Home() {
  const eventImages = [
    { src: '/images/coming.png', link: '#' },
    { src: '/images/coming.png', link: '#' },
    { src: '/images/coming.png', link: '#' },
  ];

  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Transactions',
      description: 'State-of-the-art security for all your transactions.',
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Reach',
      description: 'Connect with a global financial ecosystem.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Innovative Solutions',
      description: 'Bringing cutting-edge Web3 solutions to the table.',
    },
  ];

  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'TOPAY Foundation has transformed the way I handle finances!',
      image: '/images/testimonial1.png',
    },
    {
      name: 'John Smith',
      feedback: 'An incredible team driving innovation in Web3 space.',
      image: '/images/testimonial2.png',
    },
  ];

  const partners = [
    { name: 'Partner 1', logo: '/images/Logo.png' },
    { name: 'Partner 2', logo: '/images/Logo.png' },
    { name: 'Partner 3', logo: '/images/Logo.png' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <BoxReveal animationDuration="0.8s">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to TOPAY Foundation</h1>
            <p className="hero-subtitle">Empowering the Future of Finance with Web3 Innovations</p>
          </div>
          <div className="hero-cta">
            <a href="#">
              <button className="btn explore-button">
                <strong>Topay Testnet</strong>
              </button>
            </a>
          </div>
        </section>
      </BoxReveal>

      {/* Features Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="features">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-content">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </BoxReveal>

      {/* About Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="about">
          <h2 className="section-title">About Us</h2>
          <p>
            The TOPAY Foundation is dedicated to driving financial innovation through Web3 
            technologies. Join us in shaping the future of decentralized finance!
          </p>
        </section>
      </BoxReveal>

      {/* Running Events Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="running-event">
          <h2 className="section-title">Running Events</h2>
          <div className="marquee">
            <div className="marquee-content">
              {eventImages.map((image, index) => (
                <a href={image.link} key={index} className="event-card">
                  <img 
                    src={image.src} 
                    alt={`Event ${index + 1}`} 
                    className="event-image" 
                  />
                </a>
              ))}
              {eventImages.map((image, index) => (  // Duplicate images for smooth looping
                <a href={image.link} key={`duplicate-${index}`} className="event-card">
                  <img 
                    src={image.src} 
                    alt={`Event ${index + 1}`} 
                    className="event-image" 
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </BoxReveal>

      {/* Testimonials Section 
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="testimonials">
          <h2 className="section-title">What People Are Saying</h2>
          <div className="testimonials-content">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
                <p>{testimonial.feedback}</p>
                <h3>{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </BoxReveal>*/}

      {/* Partners Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="partners">
          <h2 className="section-title">Our Partners</h2>
          <div className="partners-content">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <img src={partner.logo} alt={`${partner.name}`} />
              </div>
            ))}
          </div>
        </section>
      </BoxReveal>
    </div>
  );
}

export default Home;
