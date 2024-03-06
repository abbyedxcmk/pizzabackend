import React from "react";
import "../NavBar/index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import menu from "../Menu";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-danger">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-light">
          Slice and Sizzle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#superSellers" className="text-light">
              Supersellers
            </Nav.Link>
            <Nav.Link href="#menu" className="text-light">
              Menu
            </Nav.Link>
            <Nav.Link href="#yourOrder" className="text-light">
              Your Order
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-light">
              Customer Reviews
            </Nav.Link>
            {"userID" in localStorage ? (
              <>
                {" "}
                <Nav.Link
                  as={Link}
                  to="/"
                  className="text-light"
                  onClick={() => {
                    localStorage.clear();
                    useNavigate("/");
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="text-light">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="text-light">
                  Create Account
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
