import React from "react";

function EventCard({ src, link, eventType, title, date, description }) {
  return (
    <div
      className="event-card"
      style={{
        ...styles.card,
        backgroundImage: `url(${src})`,
      }}
    >
      {/* Blurred Section */}
      <div style={styles.blurredSection}>
        <span style={styles.eventType}>{eventType}</span>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.date}>{date}</p>
        <p style={styles.description}>{description}</p>
        {/*<a href={link} style={styles.button}>
          Learn More
        </a>*/}
      </div>

      {/* Clear Section */}
      <div style={styles.clearSection}></div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    height: "300px",
    width: "calc(100% - 10px)", // Leave 5px margin on each side
    maxWidth: "800px",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    margin: "5px", // Add subtle space around the card
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    color: "#fff",
  },
  blurredSection: {
    width: "50%", // Occupies the left half of the card
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    backdropFilter: "blur(10px)", // Blur effect for the left half
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    boxSizing: "border-box",
  },
  clearSection: {
    width: "50%", // Occupies the right half of the card
    height: "100%",
  },
  eventType: {
    fontSize: "0.9em",
    fontWeight: "bold",
    color: "#f39c12",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "1.6em",
    marginBottom: "15px",
    color: "#fff",
  },
  date: {
    fontSize: "1.2em",
    marginBottom: "10px",
    color: "#ddd",
  },
  description: {
    fontSize: "1.1em",
    marginBottom: "20px",
    color: "#ccc",
  },
  button: {
    display: "inline-block",
    padding: "12px 20px",
    fontSize: "1.1em",
    color: "#fff",
    backgroundColor: "#007bff",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center",
  },
};

export default EventCard;
