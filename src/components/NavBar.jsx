import React from "react";
import contacts from "../data/contacts.json";
import "../styles/NavBar.css";
import Display from "./Display";
import Logo from "/images/lania_logo.jpg";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";


export const NavBar = ({ selectedPage = "home", onSetPage = ()=>{} }) => {
  const main = contacts[0] || {};
  const pages = ["home", "skills", "contact"];

  const { theme, toggleTheme } = useTheme();  

  return (
    <header className="top-nav">
      <div className="nav-inner">
        {/* Left logo - link to home */}
        <div className="nav-left" onClick={() => onSetPage("home")}>
          <img src= {Logo} alt="logo" className="nav-logo"/>
        </div>

        {/* Center menu links */}
        <nav className="nav-center">
          <ul className="nav-list">
            {pages.map(p => (
              <li key={p} className={`nav-item ${p===selectedPage ? "active":""}`} onClick={()=>onSetPage(p)}>
                {p[0].toUpperCase() + p.slice(1)}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right social icons */}
        <div className="nav-right">
          <a className="social-link" href={main.website} target="_blank" rel="noreferrer" aria-label="GitHub Link"><FaGithub /></a>
          <a className="social-link" href={main.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Link"><FaLinkedin /></a>
          <a className="social-link" href={main.yt_link} target="_blank" rel="noreferrer" aria-label="YouTube Link"><FaYoutube /></a>
            
        {/* Right theme button */}
        <span>
    {/* Current Theme -display component reads the themeColor from the ThemeContext */}
          <Display />
          <button id= "themeToggleBtn" aria-label="Aria theme selector light and dark theme" className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </span>

        </div>
      </div>
    </header>
  );
};