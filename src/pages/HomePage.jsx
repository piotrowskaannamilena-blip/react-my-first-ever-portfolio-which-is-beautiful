// HomePage.js
import React from 'react';
import { projects } from "../data/projects";
import ProjectsGrid from "../components/ProjectsGrid";

const HomePage = () => {
  return (
    <>

      <div>
        <h2 className="gradient-heading">Portfolio</h2>
        <p className="subtitle">Hi, I’m Anna Piotrowska. I'm working with front-end framework React.js to build this portfolio.</p>
        <p>I am Full Stack Web Developer. </p>
 
        <p className="subtitle">
          Full-Stack Developer – Problem Solver 
        </p>
      </div>

      <div className="main-card glass">
        <h1 className="gradient-heading">My projects:</h1>
        <p>
          A collection of my best work, spanning various technologies and domains.
        </p>
        
        {/* Projects */}
      <ProjectsGrid projects={projects} />


      </div>

    </>
  );
};

export default HomePage;
