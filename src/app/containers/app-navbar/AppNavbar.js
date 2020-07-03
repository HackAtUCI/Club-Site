import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HackLogo from "../../../assets/2018-09-15-Logo-transparent.png"

import { Link } from "react-router-dom";

import "./app-navbar.scss";

export default function AppNavbar() {
  return (
    <Navbar className="nav-color" bg="dark" variant="dark">
      <Navbar.Brand href="/"><img className="nav-logo" src={HackLogo} alt="Hack at UCI"/></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/events">Events</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/sponsors">Sponsor</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">Contact</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
