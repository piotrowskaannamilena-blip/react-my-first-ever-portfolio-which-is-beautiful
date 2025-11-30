import React from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import { projects } from "../data/projects";
import "../styles/ProjectsPage.css";

export default function ProjectsPage() {
  return (
    <div className="main-card glass">
      <h1 className="gradient-heading">Project Page</h1>
      <p className="subtitle">
        A collection of my best work, spanning various technologies and domains.
      </p>
        {/* Projects */}
      <ProjectsGrid projects={projects} />
    </div>
  );
}
