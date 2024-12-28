import React from "react";

function EventCard({ src, link }) {
  return (
    <a href={link} className="event-card">
      <img src={src} alt="Event" className="event-image" />
    </a>
  );
}

export default EventCard;
