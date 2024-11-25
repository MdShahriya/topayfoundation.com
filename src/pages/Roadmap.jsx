import React from 'react';
import '../styles/Roadmap.css'
import BoxReveal from './BoxReveal';

function Roadmap() {
  const roadmapItems = [
    { quarter: 'Q4 2024', tasks: ['Launch Website', 'Build Community', 'Initiate Telegram minigame'] },
    { quarter: 'Q1 2025', tasks: ['Partnership Announcements', 'Global Marketing Campaign', 'Mobile App Development'] },
    { quarter: 'Q2 2025', tasks: ['Expand Team', 'List on Exchanges','Token Staking Platform'] },
    { quarter: 'Q3 2025', tasks: ['Launch Mobile App', 'New Features Development', 'Roadmap for next Gen'] },
    { quarter: 'Q4 2025', tasks: ['Reveal  soon'] },

  ];

  return (
    <BoxReveal>
    <section className="roadmap">
      <h2 id='R'>Our Roadmap</h2>
      <div className="roadmap-container">
        {roadmapItems.map((item, index) => (
          <div key={index} className="roadmap-item">
            <h3>{item.quarter}</h3>
            <ul>
              {item.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section></BoxReveal>
  );
}

export default Roadmap;
