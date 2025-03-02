import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";

// Lazy-loaded components
const ShortRoadmap = lazy(() => import("../Components/ShortRoadmap"));
const FeatureCard = lazy(() => import("../Components/FeatureCard"));
const EventCard = lazy(() => import("../Components/EventCard"));
const FAQ = lazy(() => import("../Components/FAQ"));

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="home-container">
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Ramadan Mubarak!</h2>
            <img
              src="/images/ramadan.png"
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

      {/* Lazy Loading for Mobile */}
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
          {isMobile ? <ShortRoadmap /> : <ShortRoadmap />}
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
      </Suspense>
    </div>
  );
};

export default Home;
