import React from 'react';
import '../styles/About.css';
import BoxReveal from './BoxReveal';

function About() {
  return (
    <BoxReveal>
    <section className="about-roadmap">
      <h1 className="roadmap-heading">Our Journey with TOPAY FOUNDATION</h1>
      <div className="roadmap-container">
        <div className="roadmap-step left">
          <div className="step-circle">1</div>
          <div className="step-content">
            <h2>Foundation & Vision</h2>
            <p>
              <strong>TOPAY FOUNDATION</strong>, the first of its kind in South Asia, was established with the vision of revolutionizing the cryptocurrency space by offering secure, efficient, and innovative financial solutions. Our mission is to empower users and enterprises to navigate the digital economy with confidence.
            </p>
          </div>
        </div>
        
        <div className="roadmap-step right">
          <div className="step-circle">2</div>
          <div className="step-content">
            <h2>Launch of $TOPAY</h2>
            <p>
              The introduction of <strong>$TOPAY</strong> marked a pivotal moment in our journey. As the native currency of our ecosystem, it drives the core functions of our platform and provides utility for staking, rewards, and transactions.
            </p>
          </div>
        </div>

        <div className="roadmap-step left">
          <div className="step-circle">3</div>
          <div className="step-content">
            <h2>Innovative App</h2>
            <p>
              Our app will launch as an exciting feature where users can earn <strong>$TOPAY</strong> through various events and tasks. This initiative enhances user engagement and offers a seamless way to integrate cryptocurrency into everyday activities.
            </p>
          </div>
        </div>

        <div className="roadmap-step right">
          <div className="step-circle">4</div>
          <div className="step-content">
            <h2>Future Growth & Expansion</h2>
            <p>
              Looking forward, we are focused on expanding our ecosystem with new features, partnerships, and enhanced functionality for <strong>$TOPAY</strong>. Our goal is to provide users with a robust, decentralized platform where they can grow, earn, and contribute.
            </p>
          </div>
        </div>
      </div>
    </section></BoxReveal>
  );
}

export default About;
