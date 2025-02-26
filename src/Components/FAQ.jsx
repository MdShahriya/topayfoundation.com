import React from "react";
import { useState } from "react";
import "../styles/FAQ.css"; // Import CSS file

const faqs = [
  {
    question: "What is Riba?",
    answer: "Riba refers to usury or interest, which is the practice of charging extra money on loans or transactions. It is strictly prohibited in Islamic finance because it promotes unfair wealth accumulation and exploitation.",
  },
  {
    question: "What is Blockchain?",
    answer: "Blockchain is a decentralized and transparent ledger technology that records transactions securely across multiple computers. It eliminates intermediaries, ensures trust and security, and is widely used in cryptocurrencies and digital finance.",
  },
  {
    question: "How does Blockchain align with Islamic finance?",
    answer: "Blockchain promotes transparency, fairness, and trust, which align with Islamic financial principles. It eliminates uncertainty (Gharar) and ensures all transactions are clear, reducing fraud and unethical financial practices.",
  },
  {
    question: "What is a Riba-free Blockchain?",
    answer: "A Riba-free blockchain follows Islamic financial ethics by avoiding interest-based lending, ensuring fair and transparent transactions, using asset-backed tokens, and promoting profit-sharing models like Mudarabah and Musharakah.",
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-toggle ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "⨉" : "▼"}
              </span>
            </button>
            <p className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
