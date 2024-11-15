import React from 'react';
import '../styles/Home.css';

function Home() {
  const eventImages = [
    { src: '/images/event1.png', link: 'https://www.topayfoundation.com/Proofcoin' },
    { src: '/images/coming.png', link: '' },
    { src: '/images/coming.png', link: '' },
  ];

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to TOPAY Foundation</h1>
          <p className="hero-subtitle">Empowering the Future of Finance with Web3 Innovations</p>
        </div>
        <div className="hero-cta">
          <a href="/Proofcoin">
            <button className="btn explore-button">
              <strong>Get $Proofcoin</strong>
            </button>
          </a>
        </div>
      </section>

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
    </div>
  );
}

export default Home;
