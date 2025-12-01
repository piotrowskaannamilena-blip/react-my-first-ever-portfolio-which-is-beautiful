import React from "react";
import Footer from "./Footer";
import DotGrid from "./DotGrid";
import { NavBar } from "./NavBar";

import "../styles/Layout.css";

import { useTheme } from "../contexts/ThemeContext";

export default function Layout({ children, selectedPage, onSetPage }) {
  const { theme } = useTheme();
  
  return (
    <div className={`layout-root ${theme}`}>
      
      {/* dotgrid background from reactbits  */}
      <DotGrid className="dot-background" />
      
      <div className="layout-wrapper">

      {/* Navbar  */}
      <NavBar selectedPage={selectedPage} onSetPage={onSetPage} />


      {/* Centered wrapper */}
        <div className="page-wrapper">

          <div className="layout-content">
            {children}
          </div>

            {/* Footer  */}
            <Footer />
        </div>
      </div>
    </div>
  );
}
