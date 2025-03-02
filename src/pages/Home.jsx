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
  const observerRef = useRef(null); // Keep a reference to observer
  const [visibleSections, setVisibleSections] = useState({});

  // Function to observe sections
  const observeSections = useCallback(() => {
    // Disconnect previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          requestAnimationFrame(() => {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: entry.isIntersecting, // Detects both scroll up & down
            }));
          });
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px", // Smooth detection for up and down scrolling
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current.disconnect(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    observeSections();
  }, [observeSections]);

  // Close popup on click
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
