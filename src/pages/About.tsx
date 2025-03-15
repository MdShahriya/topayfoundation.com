import React, { useState, useEffect, useRef } from "react";
import "../styles/About.css";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={aboutRef} className={`about-roadmap ${isVisible ? "fade-in" : ""}`}>
      <h1 className="roadmap-heading">Our Journey with TOPAY FOUNDATION</h1>
      <div className="roadmap-container">
        
        <div className="roadmap-step left">
          <div className="step-circle">1</div>
          <div className="step-content">
            <h2>Foundation & Vision</h2>
            <p>
              <strong>TOPAY FOUNDATION</strong> was created as the first Riba-free blockchain initiative, ensuring ethical and transparent financial solutions.
            </p>
          </div>
        </div>

        <div className="roadmap-step right">
          <div className="step-circle">2</div>
          <div className="step-content">
            <h2>Launch of $TOPAY</h2>
            <p>The introduction of <strong>$TOPAY</strong> marks a new era in ethical digital finance.</p>
          </div>
        </div>

        <div className="roadmap-step left">
          <div className="step-circle">3</div>
          <div className="step-content">
            <h2>Riba-Free Financial App</h2>
            <p>Our upcoming app will enable users to earn $TOPAY through Halal investments and educational events.</p>
          </div>
        </div>

        <div className="roadmap-step right">
          <div className="step-circle">4</div>
          <div className="step-content">
            <h2>Future Growth & Expansion</h2>
            <p>TOPAY FOUNDATION is committed to expanding partnerships with Islamic banks and fintech innovators.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;