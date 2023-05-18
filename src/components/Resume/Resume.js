import React from 'react';
import './Resume.css'; // Create this file to add styles

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="./Temp_resume.pdf" target="_blank" rel="noopener noreferrer">Download my resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JaveScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>PWA/WebPacks</li>
        {/* Repeat the li for each of your proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;
