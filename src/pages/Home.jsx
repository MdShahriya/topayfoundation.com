import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";

function Home() {
  const serviceEvents = [
    {
      src: "/images/coming.png",
      link: "",
      eventType: "Airdrop",
      title: "First Token Airdrop Campaign",
      date: "stay tuned",
      description: "starts soon",
    },
    {
      src: "/images/coming.png",
      link: "",
      eventType: "Project Launch",
      title: " Blockchain Testing (Testnet)",
      date: "stay tuned",
      description: "starts soon",
    },
    {
      src: "/images/coming.png",
      link: "",
      eventType: "Sale",
      title: "Token Sale: Limited Time Offer",
      date: "stay tuned",
      description: "starts soon",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % serviceEvents.length);
    }, 5000); // Change event every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [serviceEvents.length]);

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
          <h2 className="section-title">Service Events</h2>
          <div className="event-carousel">
            <div
              className="event-card-wrapper"
              style={{
                transform: `translateX(-${currentEventIndex * 100}%)`,
                transition: "transform 0.8s ease-in-out",
                width: `${serviceEvents.length * 100}%`, // Adjust the wrapper width
                display: "flex",
              }}
            >
              {serviceEvents.map((event, index) => (
                <div key={index} className="event-card-container" style={{ width: "100%" }}>
                  <EventCard
                    src={event.src}
                    link={event.link}
                    eventType={event.eventType}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </BoxReveal>
    </div>
  );
}

export default Home;
