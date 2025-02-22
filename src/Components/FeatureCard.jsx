/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
