import React from 'react';
import Navigation from '../Navigation/Navigation'; 
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header className="header ">
      <Container>
        <Row>
          <Col className="fs-1">
            <h1>Neel Chakravartty Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
