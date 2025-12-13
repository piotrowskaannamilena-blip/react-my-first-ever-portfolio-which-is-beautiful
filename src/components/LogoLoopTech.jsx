import React from "react";
import LogoLoop from "./LogoLoop";

import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSequelize,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiJsonwebtokens,
  SiPython,
} from "react-icons/si";

import { FaServer } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

  const techIcons = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiReact />, title: "React", href: "https://reactjs.org/" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiSequelize />, title: "Sequelize", href: "https://sequelize.org/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
  { node: <SiJsonwebtokens />, title: "JWT" },
  { node: <FaServer />, title: "APIs", href: "https://en.wikipedia.org/wiki/API" },
  { node: <MdDevices />, title: "Responsive Design", href: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
];


export default function LogoLoopTech() {

  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
    <LogoLoop
      logos={techIcons}
      speed={50}
      direction="right"
      logoHeight={48}
      gap={40}
      hoverSpeed={0}
      scaleOnHover
      fadeOut
      fadeOutColor="#ffffff"
      ariaLabel="Technology logos loop"
    />
    </div>
  );
}