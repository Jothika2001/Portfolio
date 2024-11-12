import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section id="about" className="about bg-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: About Text */}
          <Col md={6} className="text-center text-md-left mb-4 mb-md-0">
            <div className="about-text">
              {/* Title Section */}
              <h2 className="title mb-4 text-dark display-4">ABOUT ME</h2>
              
              {/* Introduction */}
              <h3 className="text-dark mb-3">Hi, I'm Jothika</h3>
              <p className="text-muted mb-4">
                I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies. 
                I specialize in creating dynamic, scalable, and high-performance applications using the latest technologies.
              </p>
              
              {/* Skills and Experience */}
              <p className="text-muted mb-4">
                With a deep understanding of <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>Node.js</strong>,
                and <strong>MySQL</strong>, I aim to bridge the gap between design and functionality.
              </p>
              
              {/* Opportunity and Growth */}
              <p className="text-muted mb-4">
                I’m looking for opportunities where I can apply my skills to solve real-world problems, and I’m always eager to learn and grow.
              </p>
              
              {/* Resume Button */}
              <Button 
                variant="primary" 
                href="https://drive.google.com/file/d/1QFXZCgrgWjDwngRAvitc2ema7dPdBaJI/view?usp=sharing" 
                target="_blank"
                size="lg"
                className="mt-4 px-5 py-3 shadow-lg border-0 hover-shadow"
              >
                Download Resume
              </Button>
            </div>
          </Col>

          {/* Right Column: Profile Image */}
          <Col md={6} className="text-center">
            <img 
              src="/about.jpg" 
              alt="Jothika"
              className="img-fluid rounded-circle shadow-lg hover-img"
              style={{ maxWidth: '80%' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
