import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [role, setRole] = useState("Full-Stack Developer");

  // Rotate through different roles
  useEffect(() => {
    const roles = ["Full-Stack Developer", "React Developer", "Web Developer"];
    let index = 0;
    const interval = setInterval(() => {
      setRole(roles[index]);
      index = (index + 1) % roles.length;
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <section
      id="home"
      className="home d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* Dark overlay to improve text visibility */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <Container className="text-center position-relative" style={{ zIndex: 2 }}>
        <Row>
          <Col>
            {/* Main Heading */}
            <h1 className="display-3 fw-bold mb-3 text-shadow" style={{ fontSize: "3rem" }}>
              Hello, This is
            </h1>
            <h2 className="display-2 mb-3 text-light" style={{ fontSize: "4rem" }}>
              Jothika M
            </h2>
            <h3 className="mb-4" style={{ fontSize: "1.5rem" }}>
              And I'm a <br />
              <span className="text-light">{role}</span>
            </h3>
            
            {/* View Projects Button */}
            <a
              href="https://github.com/Jothika1912/HTML-CSS-JAVASCRIPT-REACT"
              className="btn btn-outline-light rounded-pill px-5 py-3 mb-4 shadow-lg"
              style={{ border: "2px solid white", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              View Projects
            </a>

            {/* Social Media Links */}
            <div className="mt-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/Jothika2001"
                className="mx-2 text-light"
                style={{
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#f8f9fa"}
                onMouseOut={(e) => e.currentTarget.style.color = "white"}
              >
                <FaGithub size={30} />
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/jothika-m-187a8a235"
                className="mx-2 text-light"
                style={{
                  fontSize: "1.5rem",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#f8f9fa"}
                onMouseOut={(e) => e.currentTarget.style.color = "white"}
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
