import React from 'react';
import './About.css'; // Create this file to add styles
import portraitImage from './portrait.jpg'; // Add this line

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <img src={portraitImage} alt="Neel Chakravartty" /> {/* Update this line */}
      <p>
        I am a full-stack web developer and Environmental Engineer who looks forward to learning and expanding my skill thought jobs and research projects
      </p>
    </section>
  );
}

export default About;
