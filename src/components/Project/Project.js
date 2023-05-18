import React from 'react';
import './Project.css';

function Project({ title, image, deployedUrl, githubUrl }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <a href={deployedUrl}>Deployed Application</a>
      <a href={githubUrl}>GitHub Repository</a>
    </div>
  );
}

export default Project;
