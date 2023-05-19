import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Add Container, Row, Col
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // send the form data to a server. 
    // for now, we'll show it in the console.
    console.log('Form submitted');
  }

  return (
    <section className="contact py-5" id="contact">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 fs-3">
                <Form.Control type="text" name="name" placeholder="Name" required />
              </Form.Group>
              <Form.Group className="mb-3 fs-3">
                <Form.Control type="email" name="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3 fs-3">
                <Form.Control as="textarea" name="message" placeholder="Message" required />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
