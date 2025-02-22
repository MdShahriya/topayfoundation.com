/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/ShortRoadmap.css";

function ShortRoadmap() {
  const roadmapMilestones = [
    { phase: "Q4 2024", title: "Launch Website & start Journey", isCompleted: true },
    { phase: "Q1 2025", title: "Begin Community Building Campaigns", isCompleted: false },
    { phase: "Q3 2025", title: "List Main Token on Exchanges", isCompleted: false },
    { phase: "Q1 2026", title: "Launch Testnet,"},
    { phase: "Q2 2026", title: "Research Next-Gen Blockchain Solutions & apply on Testnet", isCompleted: false },
    { phase: "Q3 2026", title: "Launch Mainnet", isCompleted: false },
    { phase: "Q1 2027", title: "Release Topay Wallet Complete version", isCompleted: false },
  ];
  
  return (
    <section className="short-roadmap">
      <h2 className="roadmap-title">Our Moral Roadmap</h2>
      <div className="milestones">
        {roadmapMilestones.map((milestone, index) => (
          <div
            className={`milestone ${milestone.isCompleted ? "completed" : "pending"}`}
            key={index}
          >
            <div className="milestone-icon">
              {milestone.isCompleted ? "✔" : "⨉"}
            </div>
            <div className="milestone-content">
              <h3>{milestone.phase}</h3>
              <p>{milestone.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShortRoadmap;
