import React, { ReactNode } from "react";
import "../styles/Invest.css"; 
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaPencilAlt, FaHandshake } from "react-icons/fa"; 

interface InvestStep {
  icon: ReactNode;
  text: string;
}

const Invest: React.FC = () => {
  const benefits: string[] = [
    "Access to diversified investment options.",
    "Transparency and security in transactions.",
    "Potential for high returns on investment.",
    "Continuous support and guidance from our team.",
  ];

  const warnings: string[] = [
    "Investments are subject to market risks.",
    "Ensure you understand the risks involved before committing.",
    "Only invest money you can afford to lose.",
    "Consult with a financial advisor before investing.",
  ];

  const risks: string[] = [
    "Investments may lose value over time.",
    "Market volatility can impact returns.",
    "There is no guarantee of profit.",
    "Investment requires long-term commitment.",
  ];

  const howToInvest: InvestStep[] = [
    { icon: <FaPencilAlt />, text: "Fill out the investment form to express interest." },
    { icon: <FaHandshake />, text: "Our team will contact you through your given information." },
  ];

  return (
    <div className="invest-container">
      <header className="invest-header">
        <h1>Investment Information</h1>
      </header>
      
      <section className="invest-section">
        <div className="invest-details">
          <h2>Why Investors Choose Us</h2>
          <p>
            We offer trustworthy leadership with a proven track record of successful investments,
            transparent and ethical business practices, and personalized support for each investor.
          </p>
        </div>

        <div className="invest-details">
          <h2>Benefits of Investing with Us</h2>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle aria-hidden="true" /> {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="invest-details">
          <h2>Warnings</h2>
          <ul>
            {warnings.map((warning, index) => (
              <li key={index}>
                <FaExclamationTriangle aria-hidden="true" /> {warning}
              </li>
            ))}
          </ul>
        </div>

        <div className="invest-details">
          <h2>Risks of Investment</h2>
          <ul>
            {risks.map((risk, index) => (
              <li key={index}>
                <FaExclamationCircle aria-hidden="true" /> {risk}
              </li>
            ))}
          </ul>
        </div>

        <div className="invest-details">
          <h2>How to Invest</h2>
          <ul>
            {howToInvest.map((step, index) => (
              <li key={index}>
                {step.icon} {step.text}
              </li>
            ))}
          </ul>
          
          <div className="invest-button-container">
            <a href="https://forms.gle/sgn4SiMUk2KYLqUMA" target="_blank" rel="noopener noreferrer">
              <button type="button" className="invest-button">Invest Form</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;