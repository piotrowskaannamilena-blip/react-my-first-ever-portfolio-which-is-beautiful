import React from "react";
import "../styles/ProfileCard.css";
import cvFile from "../assets/textfiles/Anna_Piotrowska_CV_202025-1.pdf";

function ProfileCard({ contact }) {
  const { name, position, email, phone, website, yt_link, linkedin, url } = contact;

  return (
    <div className="profile-card">
      <div className="profile-photo">
        <img src={url} alt={`Portrait of ${name}`} />
      </div>

      <div className="profile-info">
        <h2>{name}</h2>
        <p className="role">{position}</p>

        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        {/* Social links*/}     
        <div className="social-links">
          <a href={website} target="_blank">GitHub</a>
          <a href={yt_link} target="_blank">YouTube</a>
          <a href={linkedin} target="_blank">LinkedIn</a>
        </div>

        <a href={cvFile} download className="cv-btn">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;   