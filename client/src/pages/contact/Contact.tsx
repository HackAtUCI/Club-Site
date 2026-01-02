import React, { useState } from "react";

import ContactCard from "@/lib/components/ContactCard/ContactCard";
import NewsletterSignupModal from "./components/NewsLetterSignupModal/NewsletterSignupModal";

import MailIcon from "@/assets/icons/mail.svg";
import FacebookIcon from "@/assets/logos/facebook.svg";
import InstagramIcon from "@/assets/logos/instagram.svg";
import LinkedInIcon from "@/assets/logos/white_linkedin.svg";
import YouTubeIcon from "@/assets/logos/youtube.svg";
import CircularMailIcon from "@/assets/logos/circular_mail.svg";
import DiscordIcon from "@/assets/logos/circular_discord.svg";

import "./Contact.css";
import ContactIcon from "@/lib/components/ContactIcon/ContactIcon";

export default function Contact() {
	const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

	const openNewsletterModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsNewsletterModalOpen(true);
	};

	const closeNewsletterModal = () => {
		setIsNewsletterModalOpen(false);
	};

	return (
		<div className="Contact">
			<header className="contact-header">
				<h1>Contact Us</h1>
			</header>

			<div className="contact-icons">
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
				<ContactCard
					title="Sign up for our newsletter!"
					buttonText="Sign up →"
					onClick={openNewsletterModal}
					icon={CircularMailIcon}
				/>
				<ContactCard
					title="Join our Discord!"
					buttonText="Join →"
					href="https://discord.gg/2gZjQMjKeF"
					icon={DiscordIcon}
				/>
			</div>

			<NewsletterSignupModal
				isOpen={isNewsletterModalOpen}
				onRequestClose={closeNewsletterModal}
			/>
		</div>
	);
}
