import React from "react";
import "./Contact.scss";

import HeaderCord from "../../../assets/cord_1_kat.png";
import Newsletter from "../../components/newsletter/Newsletter";
import FacebookIcon from "../../../assets/FacebookIconPink.png";
import InstagramIcon from "../../../assets/InstagramIconPink.png";
import LinkedInIcon from "../../../assets/LinkedInLogoPink.png";

function Contact(props) {
  return (
    <div className="Contact" style={props.style}>
      <div className="jumbotron jumbotron-fluid global-header">
        <div className="home-header-cord">
          <img src={HeaderCord} alt="usb-cord" />
        </div>
        <div className="global-description-container container">
          <p className="global-description-font">
            Wondering where to get more information about Hack at UCI? Follow us
            on Facebook, Instagram and LinkedIn to be up to date on all events,
            workshops and hackathons. You can also reach out to us over email at{" "}
            <a href="mailto:hackuci@gmail.com">hack@uci.edu</a>
            <br />
          </p>
        </div>
      </div>
      <div className="contact-body align-content-center">
        <label id="sm-title">Social Media</label>
        <div>
          <div className="contact-icon d-inline-block">
            <a href="https://www.facebook.com/UCI.Hack/">Facebook</a>
            <div className="contact-icon-image">
              <a href="https://www.facebook.com/UCI.Hack/">
                <img src={FacebookIcon} />
              </a>
            </div>
          </div>
          <div className="contact-icon d-inline-block">
            <a href="https://www.instagram.com/hackatuci/">Instagram</a>
            <div className="contact-icon-image">
              <a href="https://www.instagram.com/hackatuci/">
                <img src={InstagramIcon} />
              </a>
            </div>
          </div>
          <div className="contact-icon d-inline-block">
            <a href="https://www.linkedin.com/company/hackuci">LinkedIn</a>
            <div className="contact-icon-image">
              <a href="https://www.linkedin.com/company/hackuci">
                <img src={LinkedInIcon} />
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
