import React from 'react';
import { Nav } from 'react-bootstrap';
import './Navigation.css';

function Navigation() {
  return (
    <Nav className="navigation fs-3" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="#about">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#resume">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
