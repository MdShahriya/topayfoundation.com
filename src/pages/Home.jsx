import React, { useState, Suspense } from "react";
import "../styles/Home.css";

const BoxReveal = React.lazy(() => import("./BoxReveal"));
const ShortRoadmap = React.lazy(() => import("../Components/ShortRoadmap"));
const AnimatedBackground = React.lazy(() => import("../Components/NonInteractiveBlockWeb"));
const FeatureCard = React.lazy(() => import("../Components/FeatureCard"));
const EventCard = React.lazy(() => import("../Components/EventCard"));
const FAQ = React.lazy(() => import("../Components/FAQ"));

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="home-container">
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Ramadan Mubarak!</h2>
            <img src="/images/ramadan.webp" alt="Ramadan" className="popup-image" />
            <p>Welcome to TOPAY Foundation! May this Ramadan bring you peace, blessings, and prosperity.</p>
            <button onClick={closePopup} className="popup-close-btn">Close</button>
          </div>
        </div>
      )}

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
        
        <FeatureCard />
        <ShortRoadmap />
        <EventCard />
        <FAQ />
      </Suspense>
    </div>
  );
};

export default Home;
