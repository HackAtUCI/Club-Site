import React, { useState } from "react";
import "./Contact.scss";

import { Newsletter } from "app/components";
import { Header, PrimaryButton, Box } from "app/containers";

import MailIcon from "assets/icons/mail_icon.svg";
import FacebookIcon from "assets/icons/facebook_icon.svg";
import InstagramIcon from "assets/icons/instagram_icon.svg";
import LinkedInIcon from "assets/icons/linkedin_icon.svg";
import YouTubeIcon from "assets/icons/youtube_icon.svg";
import CircularMailIcon from "assets/icons/circular_mail_icon.svg";
import DiscordIcon from "assets/icons/discord_icon.svg";

function Contact(props) {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const openNewsletterModal = (e) => {
    e.preventDefault();
    setIsNewsletterModalOpen(true);
  };

  const closeNewsletterModal = () => {
    setIsNewsletterModalOpen(false);
  };

  return (
    <div className="Contact" style={props.style}>
      <Header title="Contact Us" />

      <div className="container contact-icons">
        <ContactIcon
          title="Email"
          link="mailto:hack@uci.edu"
          image={MailIcon}
          isMail={true}
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
          isYouTube={true}
        />
      </div>

      <div className="contact-cards">
        <Box className="contact-card">
          <div className="contact-card-icon">
            <img src={CircularMailIcon} alt="Mail" />
          </div>
          <div className="contact-card-content">
            <h2>Sign up for our newsletter!</h2>
            <PrimaryButton onClick={openNewsletterModal}>Sign up →</PrimaryButton>
          </div>
        </Box>

        <Box className="contact-card">
          <div className="contact-card-icon">
            <img src={DiscordIcon} alt="Discord" />
          </div>
          <div className="contact-card-content">
            <h2>Join our Discord!</h2>
            <PrimaryButton href="https://discord.gg/2gZjQMjKeF">Join →</PrimaryButton>
          </div>
        </Box>
      </div>

      <Newsletter isOpen={isNewsletterModalOpen} onRequestClose={closeNewsletterModal} />
    </div>
  );
}

function ContactIcon({ title, link, image, isYouTube = false, isMail = false }) {
  return (
    // Mail and YouTube icons require different sizing to maintain vertical alignment with other icons
    <div className={`contact-icon ${isYouTube ? 'contact-icon-youtube' : ''} ${isMail ? 'contact-icon-mail' : ''}`}>
      <a href={link} aria-label={title}>
        <img src={image} alt={title} />
      </a>
    </div>
  );
}

export default Contact;
