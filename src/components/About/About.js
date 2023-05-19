import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Add the Bootstrap components
import './About.css';
import portraitImage from './portrait.jpg';

function About() {
  return (
    <section className="about fs-2" id="about">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6} >
            <Image src={portraitImage} alt="Neel Chakravartty" className="portrait" fluid />
          </Col>
          <Col sm={6} className="d-flex align-items-center fs-3" >
            <p>
              I am a full-stack web developer and Environmental Engineer who looks forward to learning and expanding my skill thought jobs and research projects
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
