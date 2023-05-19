import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css'; 

function Project({ title, imageSrc, deployedUrl, githubUrl }) {
  return (
    <Card className="mb-4 fs-3">
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <a href={deployedUrl}>Live Demo</a> | <a href={githubUrl}>GitHub Repo</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;
