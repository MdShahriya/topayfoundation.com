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
      phase: "Phase 1 – Community Building & Awareness",
      date: "Q1 2025 - Q2 2025",
      tasks: [
        { description: "Grow the Topay community by launching social media campaigns and engaging with audiences.", isTicked: false },
        { description: "Host educational webinars and AMAs to build trust and awareness.", isTicked: false },
        { description: "Introduce incentives for early community members, including referral programs.", isTicked: false },
      ],
    },
    {
      phase: "Phase 2 – Token Listing, Airdrop & Initial Partnerships",
      date: "Q3 2025 - Q4 2025",
      tasks: [
        { description: "List the Main Token on major decentralized and centralized exchanges.", isTicked: false },
        { description: "Launch a strategic airdrop campaign to reward community participation and attract more users.", isTicked: false },
        { description: "Initiate discussions and collaborations with leading global companies for initial partnerships.", isTicked: false },
        { description: "Build alliances to support long-term ecosystem growth and adoption.", isTicked: false },
      ],
    },
    {
      phase: "Phase 3 – Research, Development, and Strategic Partnerships",
      date: "Q1 2026 - Q4 2026",
      tasks: [
        { description: "Research next-generation blockchain technology with light nodes for everyday usability.", isTicked: false },
        { description: "Explore solutions for creating a quantum-resistant, highly secure blockchain.", isTicked: false },
        { description: "Develop proof-of-concept solutions for lightweight data technology integration.", isTicked: false },
        { description: "Establish strategic partnerships with key industry players to accelerate blockchain innovation.", isTicked: false },
        { description: "Brainstorm additional blockchain-based products for diverse real-world applications.", isTicked: false },
      ],
    },
    {
      phase: "Phase 4 – Testnet Development & Stakeholder Engagement",
      date: "Q1 2027 - Q4 2027",
      tasks: [
        { description: "Launch a testnet to demonstrate technological advancements and scalability.", isTicked: false },
        { description: "Engage with developers and early adopters for small-scale testing.", isTicked: false },
        { description: "Host investor summits to secure additional funding and partnerships.", isTicked: false },
        { description: "Deepen strategic alliances with leading companies to integrate Topay solutions.", isTicked: false },
      ],
    },
    {
      phase: "Phase 5 – Platform Rollout & Ecosystem Development",
      date: "Q1 2028 and Beyond",
      tasks: [
        { description: "Release the Topay Wallet with advanced blockchain functionalities.", isTicked: false },
        { description: "Launch real-world pilots of Topay's ecosystem in collaboration with corporate partners.", isTicked: false },
        { description: "Introduce DeFi tools with cross-chain interoperability and staking options.", isTicked: false },
        { description: "Expand global partnerships and transition to fully decentralized governance.", isTicked: false },
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
