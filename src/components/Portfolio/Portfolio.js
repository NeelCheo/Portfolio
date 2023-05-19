import React from 'react';
import Project from '../Project/Project';
import { Container, Row, Col } from 'react-bootstrap';
import './Portfolio.css';
import sampleImage from './sample.jpg';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio fs-3">
      <Container>
        <Row>
          <Col xs={12} className="text-white">
            <h2>Portfolio</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Project title="Weather Forcast" imageSrc={sampleImage} deployedUrl="https://neelcheo.github.io/weather_forcast/" githubUrl="https://github.com/NeelCheo/weather_forcast" />
          </Col>
          <Col xs={12} md={4}>
            <Project title="Social Network API" imageSrc={sampleImage} deployedUrl="https://github.com/NeelCheo/social_network_API" githubUrl="https://github.com/NeelCheo/social_network_API" />
          </Col>
          <Col xs={12} md={4}>
            <Project title="E-Commerce back end" imageSrc={sampleImage} deployedUrl="https://github.com/NeelCheo/E-Commerce_back_end" githubUrl="https://github.com/NeelCheo/E-Commerce_back_end" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Project title="Coding Quiz" imageSrc={sampleImage} deployedUrl="https://neelcheo.github.io/coding_quiz/" githubUrl="https://github.com/NeelCheo/coding_quiz" />
          </Col>
          <Col xs={12} md={4}>
            <Project title="ReadMe Generator" imageSrc={sampleImage} deployedUrl="https://github.com/NeelCheo/ReadMe_Generator" githubUrl="https://github.com/NeelCheo/ReadMe_Generator" />
          </Col>
          <Col xs={12} md={4}>
            <Project title="Text Editor PWA" imageSrc={sampleImage} deployedUrl="https://frozen-journey-86105.herokuapp.com/" githubUrl="https://github.com/NeelCheo/text_editor_pwa" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
