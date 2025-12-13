import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsGrid.css";

import TextPressure from './TextPressure';

export default function ProjectsGrid({ projects }) {
  return (
    <section className="projects-section">

    <div style={{position: 'relative', height: '200px', width: '100%', padding: '10px'}}>
          <TextPressure
            text="Projects!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={10}
          />
    </div>

      <div className="projects-list">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}