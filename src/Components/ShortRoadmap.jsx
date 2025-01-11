import React from "react";
import "../styles/ShortRoadmap.css";

function ShortRoadmap() {
  const roadmapMilestones = [
    { phase: "Q4 2024", title: "Launch Website", isCompleted: true },
    { phase: "Q1 2025", title: "Develop TOPAYCHAIN & Wallet", isCompleted: false },
    { phase: "Q2 2025", title: "Expand Real Estate Partnerships", isCompleted: false },
    { phase: "Q3 2025", title: "Launch Mobile App", isCompleted: false },
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
