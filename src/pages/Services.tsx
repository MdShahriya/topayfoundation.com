import React from "react";
import '../styles/Services.css';

interface Service {
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const servicesList: Service[] = [
    {
      title: "Islamic Finance Consulting",
      description: "Expert guidance on implementing Riba-free blockchain strategies."
    },
    {
      title: "Blockchain Development",
      description: "Custom blockchain solutions built with Shariah compliance in mind."
    },
    {
      title: "Smart Contract Auditing",
      description: "Thorough review of smart contracts for Shariah compliance and security."
    },
    {
      title: "Educational Resources",
      description: "Comprehensive learning materials on Islamic finance in blockchain."
    },
    {
      title: "Tokenization Services",
      description: "Ethical tokenization of assets following Islamic principles."
    },
    {
      title: "Compliance Certification",
      description: "Verification of blockchain projects against Islamic finance standards."
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Empowering your journey with ethical, transparent, and Riba-free blockchain solutions.</p>
      </div>

      <div className="services-available">
        <h3>Our Key Offerings</h3>
        <p>Explore our tailored solutions designed for secure and Shariah-compliant financial innovation.</p>
      </div>

      <div className="services-list">
        {servicesList.map((service, index) => (
          <div className="service" key={index}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h3>Ready to Transform Your Blockchain Strategy?</h3>
        <p>Contact us today to discuss how our services can benefit your organization.</p>
      </div>
    </section>
  );
};

export default Services;