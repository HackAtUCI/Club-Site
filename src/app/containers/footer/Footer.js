import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer" style={props.style}>
        <div className="footer-elements container">
            <h1>Contact Us</h1>
            <a href="mailto:hackuci@gmail.com">HackUCI@gmail.com</a>
        </div>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/event">Events</Link></li>
            <li><Link to="/sponsor">Sponsor</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}

export default Footer;
