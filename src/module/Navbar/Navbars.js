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
          backgroundColor: "#00FF80",
          className: "ml-auto",
          minHeight: "35px",
          padding: "1rem",
                    // maxHeight:"65px", marginTop:"50px"}
                    height:"60px"
        }}
      >
        <Container>
          <h1>
            <img src={Wildlife} style={{ width: "200px", height: "100px"}} />
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
                  style={{ fontSize: "20px" }}
                >
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/overview"
                  style={{ fontSize: "20px" }}
                >
                  About
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/gallery-animal"
                  style={{ fontSize: "20px" }}
                >
                  Species
                </Nav.Link>
              </li>
              <br></br>
              <br></br>
              <NavDropdown
                style={{ padding: "19px 19px", fontSize: "20px" }}
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
                  to="/Services-WildlifeSupporting"
                  style={{ fontSize: "20px" }}
                >
                  Wildlife Supporting
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Services-WildlifeEducation"
                  style={{ fontSize: "20px" }}
                >
                  Wildlife Education
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Services-WildlifeSave"
                  style={{ fontSize: "20px" }}
                >
                  Wildlife Save
                </NavDropdown.Item>
              </NavDropdown>
              <li>
                <Nav.Link as={Link} to="/Front" style={{ fontSize: "20px" }}>
                  Join Us
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  as={Link}
                  to="/ContactUs"
                  style={{ fontSize: "20px" }}
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

