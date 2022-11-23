import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <h1>
            WILDLIFE<span> PROTECTION</span>
          </h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav style={{ padding: "15px 30px" }} className="me-auto">
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <li>
                <Nav.Link
                  as={Link}
                  to="/Frontpage"
                  className="words"
                  style={{ fontSize: "20px" }}
                >
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/aboutComponent"
                  style={{ fontSize: "20px" }}
                >
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/sanctuary"
                  style={{ fontSize: "20px" }}
                >
                  Species
                </Nav.Link>
              </li>
              <br></br>
              <br></br>
              <NavDropdown
                style={{ padding: "15px 15px", fontSize: "23px" }}
                title="Services"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/Services"
                  style={{ fontSize: "20px" }}
                >
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/WildlifeSupporting"
                  style={{ fontSize: "20px" }}
                >
                  Wildlife Supporting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/WildlifeEducation"
                  style={{ fontSize: "20px" }}
                >
                  Wildlife Education
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/WildlifeSave"
                  style={{ fontSize: "20px" }}
                >
                  Wildlife Save
                </NavDropdown.Item>
              </NavDropdown>
              <li>
                <Nav.Link as={Link} to="/Front" style={{ fontSize: "20px" }}>
                  Join
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/ContactUs"
                  style={{ fontSize: "20px" }}
                >
                  Contact
                </Nav.Link>
              </li>
              {/* <li><Nav.Link  }>Services</Nav.Link></li> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
