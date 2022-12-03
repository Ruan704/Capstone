import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Wildlife from "../../images/wildlife.png";
function Navbars() {
  return (
    <>
      <Navbar
        expand="sm"
        style={{
          className: "ml-auto",
        }}
      >
        <Container>
          <h1>
            <img
              src={Wildlife}
              style={{ width: "150px", height: "70px", marginTop: "25px" }}
            />
          </h1>
          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav style={{ padding: "15px 30px" }} className="me-auto">
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <li>
                <Nav.Link
                  as={Link}
                  to="/"
                  className="words"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/overview"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/gallery-animal"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Species
                </Nav.Link>
              </li>
              <NavDropdown
                style={{
                  marginTop: "6px",
                  fontSize: "20px",
                  fontFamily: "Baloo Bhai 2",
                  cursive,
                }}
                title="Services"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/Services"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Services-WildlifeSupporting"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Wildlife Supporting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Services-WildlifeEducation"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Wildlife Education
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Services-WildlifeSave"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Wildlife Save
                </NavDropdown.Item>
              </NavDropdown>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li>
                <Nav.Link
                  as={Link}
                  to="/Front"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    cursive,
                  }}
                >
                  Join Us
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/ContactUs"
                  style={{ fontSize: "20px", width: "130px" }}
                >
                  Contact Us
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

export default Navbars;
