import React from 'react';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menu from "../Menu"




function NavBar(){
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary bg-danger">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-light">Slice and Sizzle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#superSellers" className="text-light">Supersellers</Nav.Link>
            <Nav.Link href="#menu" className="text-light">Menu</Nav.Link>
            <Nav.Link href="#yourOrder" className="text-light">Your Order</Nav.Link>
            <Nav.Link href="#reviews" className="text-light">Customer Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
};

export default NavBar;

