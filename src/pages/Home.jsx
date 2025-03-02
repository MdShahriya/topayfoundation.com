import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";
import FAQ from "../Components/FAQ";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  // UseCallback to avoid unnecessary re-renders
  const observeSections = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              setVisibleSections((prev) => ({
                ...prev,
                [entry.target.dataset.section]: true,
              }));
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px", // Helps on mobile
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    observeSections();
  }, [observeSections]);

  // Close popup with better touch response
  const closePopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(false);
  };

  return (
    <div className="home-container">
      {/* Popup Window */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Ramadan Mubarak!</h2>
            <img
              src="/images/ramadan.png"
              alt="Ramadan Image"
              className="popup-image"
            />
            <p>
              Welcome to TOPAY Foundation! May this Ramadan bring you peace,
              blessings, and prosperity.
            </p>
            <button onTouchStart={closePopup} className="popup-close-btn">
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
            <p className="hero-subtitle">
              The First Islamic Blockchain – Ethical, Transparent, and Riba-Free
            </p>
          </div>
        </section>
      </BoxReveal>

      {/* Lazy Loaded Sections */}
      {[
        { component: <FeatureCard />, section: "feature" },
        { component: <ShortRoadmap />, section: "roadmap" },
        { component: <EventCard />, section: "event" },
        { component: <FAQ />, section: "faq" },
      ].map((item, index) => (
        <div
          key={item.section}
          ref={(el) => (sectionsRef.current[index] = el)}
          data-section={item.section}
          className={`fade-section ${visibleSections[item.section] ? "fade-in" : ""}`}
        >
          {item.component}
        </div>
      ))}
    </div>
  );
};

export default Home;
