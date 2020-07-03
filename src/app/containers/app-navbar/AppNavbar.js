import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HackLogo from "../../../assets/2018-09-15-Logo-transparent.png";

import { Link, useLocation } from "react-router-dom";

import "./app-navbar.scss";

export default function AppNavbar() {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");

  useEffect(() => {
    setcurrentPath(location.pathname);
  }, [location]);

  return (
    <Navbar className="nav-color" expand="lg">
      <Navbar.Brand href="/">
        <img className="nav-logo" src={HackLogo} alt="Hack at UCI" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="iner-navbar-nav" />
      <Navbar.Collapse id="inner-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link
              to="/about"
              className={currentPath.includes("about") && "selected"}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/events"
              className={currentPath.includes("events") && "selected"}
            >
              Events
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/sponsors"
              className={currentPath.includes("sponsors") && "selected"}
            >
              Sponsor
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/contact"
              className={currentPath.includes("contact") && "selected"}
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
