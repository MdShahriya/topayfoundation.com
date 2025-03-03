import React, { useState, useEffect, useRef } from "react";
import "../styles/EventCard.css"; // External CSS file

function EventCard() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const intervalRef = useRef(null);

  const serviceEvents = [
    {
      src: "/events/vevent.webp",
      link: "https://www.linkedin.com/events/fromvolunteertovisionary-buildi7285378117110530048/",
      eventType: "Online event",
      title: "Start Journey with us",
      date: "01-02-2025",
      description: "Start as a dedicated volunteer and grow into a valued permanent team member. We are planning for future!",
    },
    {
      src: "/events/sevent.gif",
      link: "https://event-link.com",
      eventType: "Online event",
      title: "Token Pre-sell: TOPAY Coin",
      date: "Soon",
      description: "TopayCoin is a utility token for seamless digital transactions. Join the presale for early access and exclusive perks.",
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % serviceEvents.length);
    }, 5000);

    return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
  }, []);

  return (
    <section className="running-event">
      <h2 className="section-title">Events & Activities</h2>
      <div className="event-carousel">
        <div
          className="event-card-wrapper"
          style={{
            transform: `translateX(-${currentEventIndex * 100}%)`,
            transition: "transform 0.8s ease-in-out",
            width: `${serviceEvents.length * 100}%`,
            display: "flex",
          }}
        >
          {serviceEvents.map((event, index) => (
            <div key={index} className="event-card-container" style={{ width: "100%" }}>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-card-link">
                <div
                  className="event-card"
                  style={{ backgroundImage: `url(${event.src})` }}
                  role="img"
                  aria-label={`${event.title} - ${event.eventType}`} // Improves accessibility
                >
                  <div className="blurred-section">
                    <span className="event-type">{event.eventType}</span>
                    <h3 className="title">{event.title}</h3>
                    <p className="date">{event.date}</p>
                    <p className="description">{event.description}</p>
                  </div>
                  <div className="clear-section"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventCard;
