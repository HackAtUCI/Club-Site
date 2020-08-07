import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../../assets/FacebookIcon.png"
import InstagramIcon from "../../../assets/InstagramIcon.png"
import LinkedInIcon from "../../../assets/LinkedInIcon.png"

import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer" style={props.style}>
        <div className="footer-elements">
            <p>Contact Us</p>
            <a id="HackUCI-Email" href="mailto:hackuci@gmail.com">HackUCI@gmail.com</a>
            <div>
                <a href="https://www.facebook.com/UCI.Hack/"><img src={FacebookIcon} alt="Facebook"/></a>
                <a href="https://www.instagram.com/hackatuci/"><img src={InstagramIcon} alt="Instagram"/></a>
                <a href="https://www.linkedin.com/company/hackuci"><img src={LinkedInIcon} alt="LinkedIn"/></a>
            </div>
        </div>
        <ul className="footer-ul">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/sponsors">Sponsor</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}

export default Footer;
