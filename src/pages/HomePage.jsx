import React from 'react';
import { projects } from "../data/projects";
import ProjectsGrid from "../components/ProjectsGrid";
// import LogoLoopTech from '../components/LogoLoopTech';
import "../styles/HomePage.css"; 
import FallingText from '../components/FallingText';

const HomePage = () => {

  return (
    <>
    <div className="contact-card glass">
      <div className = "home-page">
        <div> 
          <h1 className="gradient-heading">Portfolio</h1>
            <p className="subtitle">
              Hi, I’m <span style={{fontWeight:600}}>Anna Piotrowska. </span>
              I'm working with front-end framework <span style={{fontWeight:600}}>React.js  </span>to build this portfolio.
            </p>
        </div>


      <div className="main-card glass">
        <h2 className="gradient-heading">My projects:</h2>
        <p className="subtitle">A collection of my best work, spanning various technologies and domains.</p>

        <ProjectsGrid projects={projects} />

        <div className="about-me-section" role="falling text animation section ">
          <FallingText
            text={`My first project with missing ; looked like this (hover me to see more)`}
            highlightWords={[";", "first", "hover"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="3rem"
            mouseConstraintStiffness={0.9}
          />
      </div>
      </div>
      </div>


      </div>
    </>
  );
};

export default HomePage;
