import React from "react";
import "./Contact.scss";

import { Newsletter } from "app/components";
import { Header } from "app/containers";

import MailIcon from "assets/icons/mail_icon.svg";
import FacebookIcon from "assets/icons/facebook_icon.svg";
import InstagramIcon from "assets/icons/instagram_icon.svg";
import LinkedInIcon from "assets/icons/linkedin_icon.svg";
import YouTubeIcon from "assets/icons/youtube_icon.svg";

function Contact(props) {
  return (
    <div className="Contact" style={props.style}>
      <Header title="Contact Us"/>

      <div className="container contact-icons">
        <ContactIcon
          title="Email"
          link="mailto:hack@uci.edu"
          image={MailIcon}
        />
        <ContactIcon
          title="Facebook"
          link="https://www.facebook.com/UCI.Hack/"
          image={FacebookIcon}
        />
        <ContactIcon
          title="Instagram"
          link="https://www.instagram.com/hackatuci/"
          image={InstagramIcon}
        />
        <ContactIcon
          title="LinkedIn"
          link="https://www.linkedin.com/company/hackuci"
          image={LinkedInIcon}
        />
        <ContactIcon
          title="YouTube"
          link="https://www.youtube.com/channel/UCeQbk4CMo3mxPHMtY80PtFQ"
          image={YouTubeIcon}
        />
      </div>
      <Newsletter />
    </div>
  );
}

function ContactIcon({ title, link, image }) {
  return (
    <div className="contact-icon">
      <a href={link}>
        <div className="contact-label">{title}</div>
        <img src={image} alt="" />
      </a>
    </div>
  );
}

export default Contact;
