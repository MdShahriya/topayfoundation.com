import React, { useState, useEffect, useRef, useCallback, Suspense } from "react";
import "../styles/Home.css";

// Lazy load components
const BoxReveal = React.lazy(() => import("./BoxReveal"));
const ShortRoadmap = React.lazy(() => import("../Components/ShortRoadmap"));
const AnimatedBackground = React.lazy(() => import("../Components/NonInteractiveBlockWeb"));
const FeatureCard = React.lazy(() => import("../Components/FeatureCard"));
const EventCard = React.lazy(() => import("../Components/EventCard"));
const FAQ = React.lazy(() => import("../Components/FAQ"));

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const sectionsRef = useRef([]);
  const observerRef = useRef(null);

  const observeSections = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          requestAnimationFrame(() => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in"); // Add CSS class for animation
            }
          });
        });
      },
      {
        threshold: 0.2, // Adjusted for smoother visibility
        rootMargin: "0px 0px -10% 0px", // Slight delay for natural effect
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => observerRef.current.disconnect();
  }, []);

  useEffect(() => {
    observeSections();
  }, [observeSections]);

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
            <img src="/images/ramadan.png" alt="Ramadan" className="popup-image" />
            <p>Welcome to TOPAY Foundation! May this Ramadan bring you peace, blessings, and prosperity.</p>
            <button onClick={closePopup} className="popup-close-btn">Close</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <Suspense fallback={<div>Loading...</div>}>
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
            className="fade-section"
          >
            {item.component}
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default Home;
