import React from "react";
import "../styles/Skills.css";
import { techIcons } from "../data/projects";

export default function Skills({ techs = [], selectedTech, onSelectTech }) {


  return (
    <section id="skills">
      <h1 className="gradient-heading">My skills</h1>

      <div className="skills-grid">
        {techs.map(t => {
          const Icon = techIcons[t];
          const isActive = selectedTech === t;

          // click same tech again clears
          //  const handleClick = () => {
          //   onSelectTech(isActive ? "" : t);
          // };


          return (
            <div
              key={t}
              className={`skill-card ${isActive ? "active" : ""}`}
              onClick={() => onSelectTech(isActive ? "" : t)}
              role="button"

            >
            
            {Icon && <Icon className="skill-icon" aria-label= {t} />}
            <span>{t}</span>

            </div>
          );
        })}
      </div>
    </section>
  );
}