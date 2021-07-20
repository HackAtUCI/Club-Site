import React from "react";
import "./Contact.scss";

import { Header } from "../../containers";
import Newsletter from "../../components/newsletter/Newsletter";
import FacebookIcon from "../../../assets/FacebookIconPink.png";
import InstagramIcon from "../../../assets/InstagramIconPink.png";
import LinkedInIcon from "../../../assets/LinkedInLogoPink.png";
import YouTubeIcon from "../../../assets/YouTubeIconPink.png"

function Contact(props) {
  return (
    <div className="Contact" style={props.style}>
      <Header title="Contact Us"/>

      <div className="contact-body align-content-center">
        <label id="sm-title">Social Media</label>
        <div className="contact-icons-container">
          <div className="contact-icon d-inline-block">
            <a href="https://www.facebook.com/UCI.Hack/">Facebook</a>
            <div className="contact-icon-image">
              <a href="https://www.facebook.com/UCI.Hack/">
                <img src={FacebookIcon} alt="Facebook Icon"/>
              </a>
            </div>
          </div>
          <div className="contact-icon d-inline-block">
            <a href="https://www.instagram.com/hackatuci/">Instagram</a>
            <div className="contact-icon-image">
              <a href="https://www.instagram.com/hackatuci/">
                <img src={InstagramIcon} alt="Instagram Icon"/>
              </a>
            </div>
          </div>
          <div className="contact-icon d-inline-block">
            <a href="https://www.linkedin.com/company/hackuci">LinkedIn</a>
            <div className="contact-icon-image">
              <a href="https://www.linkedin.com/company/hackuci">
                <img src={LinkedInIcon} alt="LinkedIn Icon"/>
              </a>
            </div>
          </div>
          <div className="contact-icon d-inline-block">
            <a href="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ">YouTube</a>
            <div className="contact-icon-image">
              <a href="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ">
                <img src={YouTubeIcon} alt="YouTube Icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default Contact;
