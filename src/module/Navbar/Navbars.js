import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import image from '../../images/logo.png';
import { Switch, Route, Routes, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbars() {
  return (
    <>
    <Navbar className='bgColor textColor' expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={image} style={{ height: "53px", width: "53px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/Frontpage" className="words">Home</Nav.Link>

            <NavDropdown title="Wildlife Sanctuary" id="basic-nav-dropdown" className="words">
              <NavDropdown.Item as={Link} to="/sanctuary">Searching wildilife</NavDropdown.Item>
               </NavDropdown>

               <NavDropdown title="Join Our Team" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Dashboard">Join Us</NavDropdown.Item>
               </NavDropdown>

               <NavDropdown title="Contact Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/ContactUs">Contact</NavDropdown.Item>
              </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbars;