import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const projects = [
    {
      title: "Animated Login Page",
      description: "Responsive Animated login form.",
      img: "/Animated.png",
      link: "https://jothika1912.github.io/HTML-CSS-JAVASCRIPT-REACT/AnimatedLogin/",
    },
    {
      title: "Guess The Number",
      description: "Guess the number game.",
      img: "/guess.png",
      link: "https://jothika1912.github.io/HTML-CSS-JAVASCRIPT-REACT/GuessTheNumber/",
    },
    {
      title: "Login Page",
      description: "Simple login form.",
      img: "/Login.png",
      link: "https://jothika1912.github.io/HTML-CSS-JAVASCRIPT-REACT/LoginPage/",
    },
    {
      title: "E-commerce",
      description: "Responsive E-commerce website built using HTML, CSS, and JavaScript.",
      img: "/Plant shop.png",
      link: "https://jothika1912.github.io/HTML-CSS-JAVASCRIPT-REACT/PlantShopWebsite/",
    },
    {
      title: "To Do List",
      description: "Personalized To Do list application.",
      img: "/todo.png",
      link: "https://jothika1912.github.io/HTML-CSS-JAVASCRIPT-REACT/ToDoList/",
    },
  ];

  return (
    <section id="projects" className="projects py-5 bg-light">
      <Container>
        <h2 className="title text-center mb-5">MY PROJECTS</h2>
        <Row>
          {projects.map((project, index) => (
            <Col sm={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.img} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank" className="mt-auto">
                    View the project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
