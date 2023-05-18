import React from 'react';
import './Project.css'; 

function Project({ title, imageSrc, deployedUrl, githubUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} />
      <div>
        <a href={deployedUrl}>Live Demo</a> | <a href={githubUrl}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
