import React from "react";
import "../styles/TeamProfile.css";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    slogan: "Leading with vision and passion.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    slogan: "Innovating the future of tech.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Developer",
    slogan: "Turning ideas into reality.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Head",
    slogan: "Spreading ideas, one campaign at a time.",
    image: "https://via.placeholder.com/150",
  },
];

const TeamProfile = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-slogan">{member.slogan}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfile;
