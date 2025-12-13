import React, {useState} from "react";
import { projects } from "../data/projects";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import "../styles/Skills.css";


const SkillsPage = () => {
  //maps all Tech
  const allTech = Array.from(new Set(projects.flatMap(p => p.technologies || [])));

  // Selected icon - for filtering
  const [selectedTech, setSelectedTech] = useState("");

  // Filtered projects logic on selected tech
  const filteredProjects =
    selectedTech
    ?  projects.filter(p => (p.technologies ||  []).includes(selectedTech)) 
    : projects;


  const resetFilter = () => setSelectedTech("");

  return (
    <div className="contact-card glass">
    <div className="skills-page">

      <Skills
        techs={allTech}
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
      />

      {selectedTech && (
        <button id = "resetFilterButton" aria-label="Aria label for reset skills filter button" className="reset-btn" onClick={resetFilter}>
          Reset
        </button>
      )}

      <div className="main-card glass">
        <h1 className="gradient-heading"> {selectedTech ? 
        `Projects using  ${selectedTech}` : "All Projects"} </h1>
        
          <ProjectsGrid projects={filteredProjects} />
      </div>

    </div>
    </div>
  );
};


export default SkillsPage;