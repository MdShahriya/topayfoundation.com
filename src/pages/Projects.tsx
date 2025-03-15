import React from "react";
import '../styles/Projects.css';

interface Project {
  id: number;
  name: string;
  symbol: string;
  launchDate: string;
  url: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {id: 1, name: 'Topay', symbol: '$topay', launchDate: 'Coming Soon', url: '#' },
    { id: 2, name: '🔒', symbol: '$', launchDate: 'Coming Soon', url: '#' },
    { id: 3, name: '🔒', symbol: '$', launchDate: 'Coming Soon', url: '#' },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Upcoming Projects</h1>
        <p>Here are the details of the projects that Topay is backing or involved in</p>
      </div>
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h2>{project.name} ({project.symbol})</h2>
            <p><strong>Launch Date:</strong> {project.launchDate}</p>
            {project.url !== '#' ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <button className="details">Read More</button>
              </a>
            ) : (
              <button className="details disabled" disabled>
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;