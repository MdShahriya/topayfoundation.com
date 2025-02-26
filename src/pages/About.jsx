import React from "react";
import '../styles/About.css';
import './BoxReveal';

function About() {
  return (
    <section className="about-roadmap">
      <h1 className="roadmap-heading">Our Journey with TOPAY FOUNDATION</h1>
      <div className="roadmap-container">
        
        <div className="roadmap-step left">
          <div className="step-circle">1</div>
          <div className="step-content">
            <h2>Foundation & Vision</h2>
            <p>
              <strong>TOPAY FOUNDATION</strong> was created as the first Riba-free blockchain initiative, ensuring ethical and transparent financial solutions. Our vision is to bridge Islamic finance with blockchain technology, empowering individuals and businesses to engage in Shariah-compliant financial activities.
            </p>
          </div>
        </div>

        <div className="roadmap-step right">
          <div className="step-circle">2</div>
          <div className="step-content">
            <h2>Launch of $TOPAY</h2>
            <p>
              The introduction of <strong>$TOPAY</strong> marks a new era in ethical digital finance. As a native token, it powers a Riba-free ecosystem, enabling staking, rewards, and transactions without interest-based mechanisms.
            </p>
          </div>
        </div>

        <div className="roadmap-step left">
          <div className="step-circle">3</div>
          <div className="step-content">
            <h2>Riba-Free Financial App</h2>
            <p>
              Our upcoming Shariah-compliant app will enable users to earn $TOPAY through various engagements, including Halal investments, educational events, and ethical financial activities. This initiative promotes financial inclusion and encourages responsible blockchain adoption.
            </p>
          </div>
        </div>

        <div className="roadmap-step right">
          <div className="step-circle">4</div>
          <div className="step-content">
            <h2>Future Growth & Expansion</h2>
            <p>
              Looking ahead, TOPAY FOUNDATION is committed to expanding partnerships with Islamic banks, fintech innovators, and regulatory bodies. Our mission is to build a sustainable, decentralized ecosystem that aligns with Islamic financial principles while driving blockchain adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
