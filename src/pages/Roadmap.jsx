import React from "react";
import "../styles/Roadmap.css";
import BoxReveal from "./BoxReveal";

function formatTextWithBold(text) {
  const regex = /\((.*?)\)/g; // Matches text inside parentheses
  return text.replace(regex, (match, p1) => `(<strong>${p1}</strong>)`);
}

function Roadmap() {
  const roadmapPhases = [
    {
      phase: "Phase 1 – Foundation and Development",
      date: "Q4 2024 - Q1 2025",
      tasks: [
        { description: "Research and development of TOPAY’s proprietary blockchain. (launch Testnet Season)", isTicked: false },
        { description: "Initial development of the TOPAY Wallet and TOPAY Pay systems.", isTicked: false },
        { description: "Establishment of partnerships within the real estate sector.", isTicked: false },
      ],
    },
    {
      phase: "Phase 2 – Platform Launch and Real Estate Integration",
      date: "Q2 2025 - Q3 2025",
      tasks: [
        { description: "Research and development of TOPAY’s proprietary blockchain. (End Testnet Season & Launch Blockchain)", isTicked: false },
        { description: "Launch TOPAY Wallet with basic functionality.", isTicked: false },
        { description: "Rollout TOPAY Pay system with pilot integration in real estate.", isTicked: false },
        { description: "Community-building initiatives and education campaigns on Web 3.0.", isTicked: false },
      ],
    },
    {
      phase: "Phase 3 – Token Launch and Full Platform Expansion",
      date: "Q4 2025 - Q1 2026",
      tasks: [
        { description: "Launch TOPAY Utility Token.", isTicked: false },
        { description: "Expand TOPAY Pay to additional sectors.", isTicked: false },
        { description: "Introduce staking and governance features.", isTicked: false },
      ],
    },
    {
      phase: "Phase 4 – Education and Community Building",
      date: "Q2 2026 and beyond",
      tasks: [
        { description: "Host Web 3.0 workshops and tutorials.", isTicked: false },
        { description: "Expand educational resources for non-technical users.", isTicked: false },
        { description: "Develop next-generation features for TOPAY Wallet and blockchain.", isTicked: false },
      ],
    },
  ];

  return (
    <BoxReveal>
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
                      <span
                        dangerouslySetInnerHTML={{
                          __html: formatTextWithBold(task.description),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BoxReveal>
  );
}

export default Roadmap;
