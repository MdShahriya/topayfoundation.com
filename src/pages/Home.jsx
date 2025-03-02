import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";
import FAQ from "../Components/FAQ";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Popup on page load
  const sectionsRef = useRef([]); // Store references to sections
  const [visibleSections, setVisibleSections] = useState({}); // Track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home-container">
      {/* Popup Window for Ramadan Greeting with optional image */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Ramadan Mubarak!</h2>
            <img
              src="/images/ramadan.png" // Replace with your image URL
              alt="Ramadan Image"
              className="popup-image"
            />
            <p>Welcome to TOPAY Foundation! May this Ramadan bring you peace, blessings, and prosperity.</p>
            <button onClick={closePopup} className="popup-close-btn">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <BoxReveal animationDuration="0s">
        <section className="hero">
          <AnimatedBackground />
          <div className="hero-content">
            <h1 className="hero-title">Welcome to TOPAY Foundation</h1>
            <p className="hero-subtitle">The First Islamic Blockchain – Ethical, Transparent, and Riba-Free</p>
          </div>
        </section>
      </BoxReveal>

      {/* Lazy Loaded Sections */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        data-section="feature"
        className={`fade-section ${visibleSections["feature"] ? "fade-in" : ""}`}
      >
        <FeatureCard />
      </div>

      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        data-section="roadmap"
        className={`fade-section ${visibleSections["roadmap"] ? "fade-in" : ""}`}
      >
        <ShortRoadmap />
      </div>

      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        data-section="event"
        className={`fade-section ${visibleSections["event"] ? "fade-in" : ""}`}
      >
        <EventCard />
      </div>

      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        data-section="faq"
        className={`fade-section ${visibleSections["faq"] ? "fade-in" : ""}`}
      >
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
