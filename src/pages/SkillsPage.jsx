//  gathers unique techs and passes them into Skills Page

import React from "react";
import { projects } from "../data/projects";
import Skills from "../components/Skills";

const SkillsPage = () => {
  //maps all Tech
  const allTech = Array.from(new Set(projects.flatMap(p => p.technologies || [])));
  return <Skills techs={allTech} />;
};

export default SkillsPage;