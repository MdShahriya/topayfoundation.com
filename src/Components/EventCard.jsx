import React from "react";
import '../styles/EventCard.css'; // External CSS file

function EventCard({ src, eventType, title, date, description }) {
  return (
    <div className="event-card" style={{ backgroundImage: `url(${src})` }}>
      {/* Blurred Section */}
      <div className="blurred-section">
        <span className="event-type">{eventType}</span>
        <h3 className="title">{title}</h3>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>

      {/* Clear Section */}
      <div className="clear-section"></div>
    </div>
  );
}

export default EventCard;
