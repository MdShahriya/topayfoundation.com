import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";
import FAQ from "../Components/FAQ";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Popup on page load

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home-container">
      {/* Popup Window for Ramadan Greeting with optional image */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Ramadan Mubarak !</h2>
            {/* Optional image */}
            <img
              src="/images/ramadan.png"  // Replace with your image URL
              alt="Ramadan Image"
              className="popup-image"
            />
            <p>
              Welcome to TOPAY Foundation! May this Ramadan bring you
              peace, blessings, and prosperity.
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

      <FeatureCard />
      <ShortRoadmap />
      <EventCard />
      <FAQ />
    </div>
  );
};

export default Home;
