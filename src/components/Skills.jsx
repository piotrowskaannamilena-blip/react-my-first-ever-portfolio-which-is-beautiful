import React from "react";
import "../styles/Skills.css";
import { techIcons } from "../data/projects";

export default function Skills({ techs = [] }) {
  return (
    <section>
      <h1 className="gradient-heading">Skills</h1>
      <div className="skills-grid">
        {techs.map(t => {
          const Icon = techIcons[t];
          return (
            <div className="skill-card" key={t}>
              {Icon && <Icon />}
              <span>{t}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}