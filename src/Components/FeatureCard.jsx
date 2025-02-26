import React from "react";
import "../styles/FeatureCard.css"; // External CSS file

function FeatureCard() {
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
    <section className="features">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features-content">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <i className={feature.icon}></i>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


export default FeatureCard;
