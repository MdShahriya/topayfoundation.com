import React, { ReactNode } from "react";
import "../styles/Roadmap.css";

// Function to format text inside parentheses as bold
const formatTextWithBold = (text: string): ReactNode[] => {
  return text.split(/\((.*?)\)/g).map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

interface Task {
  description: string;
  isTicked: boolean;
}

interface RoadmapPhase {
  phase: string;
  date: string;
  tasks: Task[];
}

const Roadmap: React.FC = () => {
  const roadmapPhases: RoadmapPhase[] = [
    {
      phase: "Phase 1 – Community Building & Awareness",
      date: "Q1 2025 - Q2 2025",
      tasks: [
        { description: "Expand the Topay community through targeted social media campaigns and outreach.", isTicked: false },
        { description: "Host educational webinars on Riba-free blockchain and Islamic finance.", isTicked: false },
        { description: "Introduce referral programs and incentives for early adopters.", isTicked: false },
        { description: "Engage with Islamic finance experts to validate Shariah-compliant blockchain principles.", isTicked: false },
      ],
    },
    {
      phase: "Phase 2 – Token Listing, Airdrop & Initial Partnerships",
      date: "Q3 2025 - Q4 2025",
      tasks: [
        { description: "List the Topay Utility Token (TUT) on major decentralized and centralized exchanges.", isTicked: false },
        { description: "Launch a strategic airdrop campaign to reward early contributors and community members.", isTicked: false },
        { description: "Form initial partnerships with Islamic banks and financial institutions.", isTicked: false },
        { description: "Expand ecosystem awareness through global Islamic finance summits.", isTicked: false },
      ],
    },
    {
      phase: "Phase 3 – Research, Development, and Strategic Alliances",
      date: "Q1 2026 - Q4 2026",
      tasks: [
        { description: "Develop a quantum-resistant, highly secure blockchain infrastructure.", isTicked: false },
        { description: "Research and implement decentralized identity solutions for secure user onboarding.", isTicked: false },
        { description: "Collaborate with blockchain experts to enhance smart contract security and Shariah compliance.", isTicked: false },
        { description: "Design and prototype asset-backed tokens that align with Halal finance principles.", isTicked: false },
        { description: "Establish partnerships with global fintech leaders to accelerate Riba-free blockchain adoption.", isTicked: false },
      ],
    },
    {
      phase: "Phase 4 – Testnet Launch & Developer Engagement",
      date: "Q1 2027 - Q4 2027",
      tasks: [
        { description: "Launch the Topay testnet with full transparency and user accessibility.", isTicked: false },
        { description: "Engage developers with bounty programs and hackathons for smart contract innovation.", isTicked: false },
        { description: "Onboard institutional stakeholders, including Halal businesses and fintech startups.", isTicked: false },
        { description: "Establish blockchain sandboxes for regulatory compliance and testing.", isTicked: false },
      ],
    },
    {
      phase: "Phase 5 – Mainnet Rollout & Ecosystem Expansion",
      date: "Q1 2028 and Beyond",
      tasks: [
        { description: "Launch the fully operational Topay Blockchain mainnet with built-in security layers.", isTicked: false },
        { description: "Release the Topay Wallet with seamless, Riba-free financial services.", isTicked: false },
        { description: "Deploy DeFi tools, staking, and cross-chain interoperability for Halal investments.", isTicked: false },
        { description: "Expand partnerships globally and transition governance to a decentralized model.", isTicked: false },
        { description: "Foster financial inclusion by enabling Shariah-compliant microfinance tools on blockchain.", isTicked: false },
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
                  <li
                    key={idx}
                    className={task.isTicked ? "ticked" : ""}
                    onTouchStart={(e) => e.stopPropagation()} // Prevents accidental double taps
                  >
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
};

export default Roadmap;