import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

import "./app-navbar.scss";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Hack at UCI</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/events">Events</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/sponsors">Sponsorship</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About Us</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
