import React, { ReactNode } from "react";
import "../styles/Invest.css"; 
import { 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaExclamationTriangle, 
  FaPencilAlt, 
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaUserTie
} from "react-icons/fa"; 

interface InvestStep {
  icon: ReactNode;
  title: string;
  text: string;
}

const Invest: React.FC = () => {
  const benefits: string[] = [
    "Access to diversified investment options.",
    "Transparency and security in transactions.",
    "Potential for high returns on investment.",
    "Continuous support and guidance from our team.",
    "Regular performance updates and reports."
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
    { 
      icon: <FaPencilAlt />, 
      title: "Express Interest", 
      text: "Fill out the investment form to express interest and provide your contact details." 
    },
    { 
      icon: <FaUserTie />, 
      title: "Consultation", 
      text: "Our investment team will contact you to discuss your investment goals and options." 
    },
    { 
      icon: <FaHandshake />, 
      title: "Agreement", 
      text: "Once terms are agreed upon, we'll finalize the investment agreement." 
    },
    { 
      icon: <FaChartLine />, 
      title: "Growth", 
      text: "Monitor your investment growth through our regular updates and reports." 
    }
  ];

  return (
    <div className="invest-container">
      <header className="invest-header">
        <h1>Investment Opportunities</h1>
        <p className="invest-tagline">Secure your financial future with strategic investments</p>
      </header>
      
      <section className="invest-intro">
        <div className="invest-intro-content">
          <h2>Partner With Us for Growth</h2>
          <p>
            At TOPAY Foundation, we believe in creating sustainable investment opportunities 
            that benefit both our investors and the communities we serve. Our approach combines 
            innovative strategies with ethical practices to deliver consistent returns.
          </p>
        </div>
      </section>

      <section className="invest-grid">
        <div className="invest-card">
          <div className="card-icon"><FaShieldAlt size={40} /></div>
          <h2>Why Investors Choose Us</h2>
          <p>
            We offer trustworthy leadership with a proven track record of successful investments,
            transparent and ethical business practices, and personalized support for each investor.
          </p>
        </div>

        <div className="invest-card">
          <div className="card-icon"><FaCheckCircle size={40} /></div>
          <h2>Benefits of Investing with Us</h2>
          <ul className="invest-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" aria-hidden="true" /> {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="invest-card">
          <div className="card-icon"><FaExclamationTriangle size={40} /></div>
          <h2>Warnings</h2>
          <ul className="invest-list">
            {warnings.map((warning, index) => (
              <li key={index}>
                <FaExclamationTriangle className="list-icon" aria-hidden="true" /> {warning}
              </li>
            ))}
          </ul>
        </div>

        <div className="invest-card">
          <div className="card-icon"><FaExclamationCircle size={40} /></div>
          <h2>Risks of Investment</h2>
          <ul className="invest-list">
            {risks.map((risk, index) => (
              <li key={index}>
                <FaExclamationCircle className="list-icon" aria-hidden="true" /> {risk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="invest-process">
        <h2>How to Invest With Us</h2>
        <div className="invest-steps">
          {howToInvest.map((step, index) => (
            <div key={index} className="invest-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="invest-cta">
        <h2>Ready to Start Your Investment Journey?</h2>
        <p>Complete our investment form to begin the process. Our team is ready to assist you every step of the way.</p>
        <div className="invest-button-container">
          <a href="https://forms.gle/sgn4SiMUk2KYLqUMA" target="_blank" rel="noopener noreferrer">
            <button type="button" className="invest-button">Start Investing Now</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Invest;