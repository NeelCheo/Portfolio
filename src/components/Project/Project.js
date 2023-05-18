import React from 'react';
import './Project.css'; 
function Project({ title, img, deployedUrl, repoUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <div>
        <a href={deployedUrl}>Live Demo</a> | <a href={repoUrl}>GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;
