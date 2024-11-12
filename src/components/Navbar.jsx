// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioNavbar() {
  return (
    <Navbar
      fixed="top"
      variant="dark"   
      expand="lg"
      className="shadow-sm navbar-light py-3"
      style={{backgroundColor:"black"}}
    >
      <Container>
        {/* Brand Name */}
        <Navbar.Brand href="#" className="fw-bold fs-4 text-light">
          PORTFOLIO
        </Navbar.Brand>

        {/* Navbar Toggle Button (for mobile view) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation Links */}
            <Nav.Link href="#home" className="nav-link-custom px-3 py-2">
              <strong>Home</strong>
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom px-3 py-2">
              <strong>About</strong>
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom px-3 py-2">
              <strong>Skills</strong>
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom px-3 py-2">
              <strong>Projects</strong>
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom px-3 py-2">
              <strong>Contact</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
