import React from "react";
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";

function Home() {
  const eventImages = [
    { src: "/images/coming.png", link: "#" },
    { src: "/images/coming.png", link: "#" },
    { src: "/images/coming.png", link: "#" },
  ];

  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "Secure Transactions",
      description: "State-of-the-art security for all your transactions.",
    },
    {
      icon: "fas fa-globe",
      title: "Global Reach",
      description: "Connect with a global financial ecosystem.",
    },
    {
      icon: "fas fa-rocket",
      title: "Innovative Solutions",
      description: "Bringing cutting-edge Web3 solutions to the table.",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <BoxReveal animationDuration="0.8s">
        <section className="hero">
          <AnimatedBackground />
          <div className="hero-content">
            <h1 className="hero-title">Welcome to TOPAY Foundation</h1>
            <p className="hero-subtitle">
              Empowering the Future of Finance with Web3 Innovations
            </p>
          </div>
        </section>
      </BoxReveal>

      {/* Features Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="features">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-content">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </BoxReveal>

      {/* Short Roadmap Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <ShortRoadmap />
      </BoxReveal>

      {/* Running Events Section */}
      <BoxReveal animationDuration="1s" triggerOffset={150}>
        <section className="running-event">
          <h2 className="section-title">Running Events</h2>
          <div className="marquee">
            <div className="marquee-content">
              {eventImages.map((image, index) => (
                <EventCard key={index} src={image.src} link={image.link} />
              ))}
              {eventImages.map((image, index) => (
                <EventCard
                  key={`duplicate-${index}`}
                  src={image.src}
                  link={image.link}
                />
              ))}
            </div>
          </div>
        </section>
      </BoxReveal>
    </div>
  );
}

export default Home;
