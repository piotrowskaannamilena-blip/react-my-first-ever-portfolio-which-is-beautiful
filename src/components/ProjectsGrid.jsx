import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsGrid.css";

import TextPressure from './TextPressure';

export default function ProjectsGrid({ projects }) {
  return (
    <section className="projects-section">
      {/* <h2 className="gradient-heading">Projects</h2> */}

    <div style={{position: 'relative', height: '300px'}}>
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
            minFontSize={20}
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