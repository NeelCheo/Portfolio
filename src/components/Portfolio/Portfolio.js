import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css'; // Create this file to add styles

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <Project title="Weather Forcast" imageUrl="./sample.jpg" deployedUrl="https://neelcheo.github.io/weather_forcast/" githubUrl="https://github.com/NeelCheo/weather_forcast" />
      <Project title="Social Network API" imageUrl="./sample.jpg" deployedUrl="https://github.com/NeelCheo/social_network_API" githubUrl="https://github.com/NeelCheo/social_network_API" />
      <Project title="E-Commerce back end" imageUrl="./sample.jpg" deployedUrl="https://github.com/NeelCheo/E-Commerce_back_end" githubUrl="https://github.com/NeelCheo/E-Commerce_back_end" />
      <Project title="Coding Quiz" imageUrl="./sample.jpg" deployedUrl="https://neelcheo.github.io/coding_quiz/" githubUrl="https://github.com/NeelCheo/coding_quiz" />
      <Project title="ReadMe Generator" imageUrl="./sample.jpg" deployedUrl="https://github.com/NeelCheo/ReadMe_Generator" githubUrl="https://github.com/NeelCheo/ReadMe_Generator" />
      <Project title="Text Editor PWA" imageUrl="./sample.jpg" deployedUrl="https://frozen-journey-86105.herokuapp.com/" githubUrl="https://github.com/NeelCheo/text_editor_pwa" />
      {/* Repeat the Project component for each of your projects */}
    </section>
  );
}

export default Portfolio;
