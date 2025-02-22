/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../styles/EventCard.css'; // External CSS file

function EventCard({ src, link, eventType, title, date, description }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="event-card-link">
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
    </a>
  );
}

export default EventCard;
