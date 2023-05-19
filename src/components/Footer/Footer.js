// Footer.js
import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <Navbar sticky="bottom" bg="dark" variant="dark" className="footer">
      <Navbar.Brand href="https://github.com/NeelCheo" target="_blank" rel="noreferrer">GitHub</Navbar.Brand>
      <Navbar.Brand href="https://www.linkedin.com/in/neel-chak/" target="_blank" rel="noreferrer">LinkedIn</Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
