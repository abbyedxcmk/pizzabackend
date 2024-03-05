import React from 'react';

import '../Navbar/index.css';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";




function NavBar(){
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container fluid>
        <Navbar.Brand href="#Hero" className="text-light">Slice and Sizzle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Supersellers" className="text-light">Supersellers</Nav.Link>
            <Nav.Link href="#Menu" className="text-light">Menu</Nav.Link>
            <Nav.Link href="#Order" className="text-light">Order</Nav.Link>
            <Nav.Link href="#Feedback" className="text-light">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
};

export default NavBar;

