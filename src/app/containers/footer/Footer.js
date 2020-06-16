import React from "react";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer" style={props.style}>
        <div className="footer-elements container">
            <h1>Contact Us</h1>
            <a>HackUCI@gmail.com</a>
        </div>
    </div>
  );
}

export default Footer;
