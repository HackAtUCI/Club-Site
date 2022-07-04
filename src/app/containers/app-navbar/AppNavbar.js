import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import HackLogo from "assets/hack-at-uci-logo.svg";

import "./app-navbar.scss";

function AppNavbar() {
  return (
    <Navbar className="navbar-color" expand="lg" variant="dark">
      <Navbar.Brand as={NavLink} exact to="/">
        <img className="navbar-logo" src={HackLogo} alt="Hack at UCI" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="inner-navbar-nav" />
      <Navbar.Collapse id="inner-navbar-nav">
        <Nav className="ml-auto">
          <NavLinkItem to="/about">About</NavLinkItem>
          <NavLinkItem to="/events">Events</NavLinkItem>
          <NavLinkItem to="/sponsors">Sponsors</NavLinkItem>
          {/* <NavLinkItem to="/recruit">Recruiting</NavLinkItem> */}
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function NavLinkItem(props) {
  return (
    <Nav.Item as="li">
      <Nav.Link as={NavLink} {...props} />
    </Nav.Item>
  );
}

export default AppNavbar;
