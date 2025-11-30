import React from "react";
import contacts from "../data/contacts.json";
import ProfileCard from "../components/ProfileCard";
import "../styles/ContactPage.css";

export default function ContactPage() {
  const main = contacts[0]; 

  return (
    <div className="contact-card glass">

      <h1 className="gradient-heading">Contact Me</h1>
      <p className="subtitle">I'd love to hear from you!</p>

      {/* Profile Card */}
      <div className="profile-wrapper">
        <ProfileCard contact={main} />
      </div>

    <div>
      <hr></hr>
      <h2>About me:</h2>

      <p>I’m Anna, a developer transitioning into tech after a successful career in the telecoms/utilities sector. 
        I hold an Engineering degree in Computer Science, Faculty of Electrical Engineering and Computer Science, 
        Lublin University of Technology (Poland) (2009-2013). 
        
        Although my early career moved in a different direction, 
        working in telecoms helped me develop strong communication, teamwork, leadership, and problem-solving skills. 
        I’ve also overcome significant health challenges that reshaped my life. 
        These experiences strengthened my resilience, adaptability, and determination. 
        These are the qualities that now influence the way I approach learning and software development. 
        In August 2025 I started working on my career switch. 
        In September 2025, I made the decision to apply for Full Stack Skills Bootcamp with Step8Up 
        which helps me to return to technology and pursue development full-time. 
        Since then, I’ve been building full-stack projects using React, HTML, CSS, JavaScript, and Python.
        I’m consistently growing, learning quickly, and building a portfolio to demonstrate both my 
        technical progress and long-term potential. 
        I’m now seeking opportunities where I can bring together my past experience and my new technical skills 
        to deliver meaningful, user-focused software.</p>
    </div>
    </div>
  );
}
