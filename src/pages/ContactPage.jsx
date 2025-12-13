import React from "react";
import contacts from "../data/contacts.json";
import ProfileCard from "../components/ProfileCard";
import "../styles/ContactPage.css";
import FallingText from '../components/FallingText';



export default function ContactPage() {
  const main = contacts[0]; 

  return (
    <>

    <div className="contact-card glass">

      <h1 className="gradient-heading" role="columnheader">Contact Me</h1>
      <p className="subtitle">I'd love to hear from you! (contact form will be available soon) </p>

      {/* Profile Card */}
    <div className="profile-wrapper" role="textbox for profile card">
        <ProfileCard contact={main} />
    </div>

    <div className = "personal-info" role="textbox personal info section">

      <h2 className="gradient-heading" role="header gradient heading about me">About me:</h2>


      <p className= "subtitle" role="paragraph with Anna's experience">
        I’m <strong>Anna</strong>, a <strong>junior developer</strong> transitioning into tech after a successful career in the telecoms/utilities sector. 
        - working in telecoms helped me develop strong communication, teamwork, leadership, and problem-solving skills. 
        - also overcome significant health challenges that reshaped my life. 
        These experiences strengthened my <strong>resilience, adaptability, and determination. </strong> 
        These are the qualities that now influence the way I approach learning and software development. 
        In August 2025 I started working on my career switch. 
        I’m consistently growing, learning quickly, and building a portfolio to demonstrate both my 
        technical progress and <strong>long-term potential. </strong> 
        I’m now seeking <strong>opportunities</strong> where I can bring together my past experience and my new technical skills 
        to deliver meaningful, user-focused software.</p>
    </div>



    <div className="about-me-section" role="falling text animation section ">
      <FallingText
        text={`Anna developer tech career 
        Engineering communication teamwork leadership problem-solving skills
        resilience adaptability determination
        learning
        career-switch
        Full-Stack 
        technology
        React HTML CSS JavaScript Python
        growing experimenting
        technical progress long-term potential
        opportunities experience technical skills 
        software `}
            highlightWords={["React", "portfolio", "Anna", "React", "JavaScript", "CSS", "Python", "learning", "growing", "Full-Stack", "experimenting"]}
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
  </>
  );
  
}
