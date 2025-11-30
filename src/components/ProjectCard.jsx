import React, { useEffect, useRef } from "react";
import "../styles/ProjectCard.css";
import { techIcons } from "../data/projects"; 

export default function ProjectCard({ project }) {
  const { title, description, technologies = [], image, screen_recording, githubUrl, liveUrl } = project;
  
  const videoRef = useRef(null);

  useEffect(()=> {
    if (!videoRef.current) return;
    const v = videoRef.current;
    
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e=> {
        if (e.isIntersecting) v.play().catch(()=>{});
        else v.pause();
      });
    }, { threshold: 0.6 });
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  return (
      <div className="project-row">
        <div className="project-card">

          <div className="project-body">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{description}</p>

            <div className="project-tech">
              {technologies.map((t, i) => {
                const Icon = techIcons[t];
                return (
                  <span className="tech-chip" key={i}>
                    {Icon && <Icon className="tech-icon" />}
                    {t}
                  </span>
                );
              })}
            </div>
            <div className="project-links">
              {githubUrl && <a className="link-btn" href={githubUrl}>Code</a>}
              {liveUrl && <a className="link-btn" href={liveUrl}>Live</a>}
            </div>
          </div>


          <div className="project-media">
            {image && <img src={image} className="project-thumbnail" alt={title} />}
            {screen_recording && (
              <video ref={videoRef} src={screen_recording} muted playsInline className="project-video" />
            )}
          </div>
        </div>
      </div>
  );
}