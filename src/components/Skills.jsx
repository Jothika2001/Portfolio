import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaGithub, FaGit, FaCode } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  return (
    <section id="skills" className="skills bg-info py-5">
      <Container>
        <h1 className="title text-center text-white mb-4">SKILLS</h1>
        <Row className="justify-content-center mt-5">
          {/* Left Column: Languages & Frameworks */}
          <Col md={5} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h4 className="text-center mb-3 font-weight-bold">Languages & Frameworks</h4>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaHtml5 size={30} className="mr-3" color="#E44D26" />
                    <span className="font-weight-bold">HTML5</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaCss3Alt size={30} className="mr-3" color="#1572B6" />
                    <span className="font-weight-bold">CSS3</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaJsSquare size={30} className="mr-3" color="#F7DF1E" />
                    <span className="font-weight-bold">JavaScript</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaReact size={30} className="mr-3" color="#61DAFB" />
                    <span className="font-weight-bold">ReactJS</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaBootstrap size={30} className="mr-3" color="#563D7C" />
                    <span className="font-weight-bold">Bootstrap</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaNodeJs size={30} className="mr-3" color="#339933" />
                    <span className="font-weight-bold">Node.js</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Column: Databases & Tools */}
          <Col md={5} className="mb-4">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h4 className="text-center mb-3 font-weight-bold">Databases & Tools</h4>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaDatabase size={30} className="mr-3" color="#00758F" />
                    <span className="font-weight-bold">MySQL</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaGithub size={30} className="mr-3" color="#333" />
                    <span className="font-weight-bold">GitHub</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaGit size={30} className="mr-3" color="#F05032" />
                    <span className="font-weight-bold">Git</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center p-3 hover-effect">
                    <FaCode size={30} className="mr-3" color="#007ACC" />
                    <span className="font-weight-bold">Visual Studio Code</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
