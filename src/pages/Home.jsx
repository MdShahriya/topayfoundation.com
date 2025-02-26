import React from "react";
import "../styles/Home.css";
import BoxReveal from "./BoxReveal"
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";
import FAQ from "../Components/FAQ"

function Home() {
  
  return (
    <div className="home-container">
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
}

export default Home;
