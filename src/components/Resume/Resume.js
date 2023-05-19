import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Resume</h2>
            <a href="./Temp_resume.pdf" download>Download my Resume</a>
            <h3>Proficiencies</h3>
            <ul>
              {proficiencies.map((proficiency, index) => 
                <li key={index} className="text-dark fs-3">{proficiency}</li>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Resume;
