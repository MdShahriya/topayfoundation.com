import React from "react";
import "../styles/Roadmap.css";

// Format text with bold without using dangerouslySetInnerHTML
function formatTextWithBold(text) {
  const regex = /\((.*?)\)/g; // Matches text inside parentheses
  const parts = [];
  let lastIndex = 0;

  text.replace(regex, (match, p1, offset) => {
    parts.push(text.substring(lastIndex, offset));
    parts.push(<strong key={offset}>{p1}</strong>);
    lastIndex = offset + match.length;
    return match;
  });

  parts.push(text.substring(lastIndex)); // Add remaining text
  return parts;
}

function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Phase 1 – Foundation Building & Research",
      date: "Q1 2025 - Q3 2025",
      tasks: [
        { description: "Finalize mission, vision, and goals for Topay.", isTicked: false },
        { description: "Publish a streamlined whitepaper to attract potential investors.", isTicked: false },
        { description: "Start developing the blockchain core (focus on a minimal viable product).", isTicked: false },
      ],
    },
    {
      phase: "Phase 2 – Testnet Development (Fundraising Parallelly)",
      date: "Q4 2025 - Q3 2026",
      tasks: [
        { description: "Launch an early testnet to demonstrate proof of concept to stakeholders.", isTicked: false },
        { description: "Begin small-scale testing with developers and early adopters.", isTicked: false },
        { description: "Focus on community building and securing grants or additional funding.", isTicked: false },
      ],
    },
    {
      phase: "Phase 3 – Incremental Platform Rollout",
      date: "Q4 2026 - Q4 2027",
      tasks: [
        { description: "Launch Topay Wallet with basic functionality.", isTicked: false },
        { description: "Roll out Topay Pay system in select pilot sectors (e.g., real estate).", isTicked: false },
        { description: "Implement staking and governance features.", isTicked: false },
      ],
    },
    {
      phase: "Phase 4 – Full Ecosystem Expansion",
      date: "2028 and beyond",
      tasks: [
        { description: "Scale partnerships with global organizations and industries.", isTicked: false },
        { description: "Expand DeFi tools and integrate cross-chain interoperability.", isTicked: false },
        { description: "Transition to a fully decentralized governance model.", isTicked: false },
      ],
    },
  ];

  return (
    
      <section className="roadmap">
        <h2>Our Roadmap</h2>
        <div className="timeline">
          {roadmapPhases.map((phase, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{phase.phase}</h3>
                <span className="date">{phase.date}</span>
                <ul>
                  {phase.tasks.map((task, idx) => (
                    <li key={idx} className={task.isTicked ? "ticked" : ""}>
                      {formatTextWithBold(task.description)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    
  );
}

export default Roadmap;
