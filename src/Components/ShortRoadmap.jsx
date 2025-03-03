import React from "react";
import "../styles/ShortRoadmap.css";

const roadmapMilestones = [
  { phase: "Q4 2024", title: "Launch Website & Start Journey", isCompleted: true },
  { phase: "Q1 2025", title: "Begin Community Building Campaigns", isCompleted: false },
  { phase: "Q3 2025", title: "List Main Token on Exchanges", isCompleted: false },
  { phase: "Q1 2026", title: "Launch Testnet", isCompleted: false },
  { phase: "Q2 2026", title: "Research Next-Gen Blockchain Solutions & Apply on Testnet", isCompleted: false },
  { phase: "Q3 2026", title: "Launch Mainnet", isCompleted: false },
  { phase: "Q1 2027", title: "Release Topay Wallet Complete Version", isCompleted: false },
];

const ShortRoadmap = () => (
  <section className="short-roadmap">
    <h2 className="roadmap-title">Our Moral Roadmap</h2>
    <ul className="milestones">
      {roadmapMilestones.map(({ phase, title, isCompleted }, index) => (
        <li key={index} className={isCompleted ? "milestone completed" : "milestone"}>
          <span className="milestone-icon">{isCompleted ? "✔" : "⨉"}</span>
          <div className="milestone-content">
            <h3>{phase}</h3>
            <p>{title}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ShortRoadmap;
