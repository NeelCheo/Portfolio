import React from 'react';
import './Resume.css';

function Resume() {
  const proficiencies = [
    'JavaScript',
    'HTML & CSS',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB'
  ];

  return (
    <section className="resume" id="resume">
      <h2>Resume</h2>
      <a href="./Temp_resume.pdf" download>Download my Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => 
          <li key={index}>{proficiency}</li>
        )}
      </ul>
    </section>
  );
}

export default Resume;
