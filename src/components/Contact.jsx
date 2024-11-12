import React from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <section id="contact" className="contact py-5 bg-info">
      <Container>
        <h2 className="title text-center text-white mb-5">CONTACT ME</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg rounded-lg border-0">
              <Card.Body className="p-5">
                <h4 className="text-center mb-4 text-dark">Get in Touch</h4>
                <p className="text-muted text-center mb-4">
                  Feel free to reach out if you have any questions or opportunities. I am always open to discussing new projects, ideas, and collaborations.
                </p>
                <ListGroup variant="flush" className="mb-4">
                  <ListGroup.Item className="border-0">
                    <strong>Name:</strong> Jothika M
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    <strong>Email:</strong> <a href="mailto:mjothi680@gmail.com" className="text-decoration-none">mjothi680@gmail.com</a>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    <strong>Phone:</strong> <a href="tel:+918098890723" className="text-decoration-none">8098890723</a>
                  </ListGroup.Item>
                </ListGroup>
                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    href="mailto:mjothi680@gmail.com"
                    size="lg"
                    className="py-2 px-4 rounded-pill border-0 shadow-sm hover-shadow"
                  >
                    Send an Email
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
