import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

import "./app-navbar.scss";

export default function AppNavbar() {
  return (
    <Navbar className="nav-color" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Hack at UCI</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/events">Events</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/sponsor">Sponsor</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">Contact</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
