import React, { useState, useEffect, startTransition } from "react"; // Added startTransition
import "../styles/Home.css";
import BoxReveal from "./BoxReveal";
import ShortRoadmap from "../Components/ShortRoadmap";
import AnimatedBackground from "../Components/NonInteractiveBlockWeb";
import FeatureCard from "../Components/FeatureCard";
import EventCard from "../Components/EventCard";

function Home() {
  const serviceEvents = [
    {
      src: "/images/vevent.png",
      link: "https://www.linkedin.com/events/fromvolunteertovisionary-buildi7285378117110530048/",
      eventType: "Online event",
      title: "Start Journey with us",
      date: "01-02-2025",
      description: "Start as a dedicated volunteer and grow into a valued permanent team member.",
    },
    {
      src: "/images/sevent.gif",
      eventType: "Online event",
      title: "Token Pre-sell: TOPAY Coin",
      date: "Soon",
      description: "TopayCoin is a utility token for seamless digital transactions. Join the presale for early access and exclusive perks.",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % serviceEvents.length);
    }, 5000); // Change event every 5 seconds
  
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [serviceEvents]);  

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

      {/* Short Roadmap Section */}
        <ShortRoadmap />

      {/* Running Events Section */}
        <section className="running-event">
          <h2 className="section-title">Events & Activities</h2>
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
    </div>
  );
}

export default Home;
