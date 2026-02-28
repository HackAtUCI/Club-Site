import React from "react";
import { Link } from "react-router-dom";

import ContactIcon from "../ContactIcon/ContactIcon";

import HackLogo from "@/assets/logos/hack_navbar.svg";
import InstagramIcon from "@/assets/logos/instagram.svg";
import TiktokIcon from "@/assets/logos/tiktok.svg";
import DiscordIcon from "@/assets/logos/discord.svg";
import MailIcon from "@/assets/icons/mail.svg";

import "./Footer.css";

const navLinks = [
	{ href: "/about", label: "About" },
	{ href: "/events", label: "Events" },
	{ href: "/contact", label: "Contact Us" },
];

export default function Footer() {
	return (
		<footer className="footer-container w-full px-4 pt-8 pb-10 md:px-24 md:py-10">
			<div className="flex flex-col justify-center gap-0 lg:flex-row lg:gap-10">
				<Link to="/" className="flex justify-center lg:justify-start">
					<img
						src={HackLogo}
						alt="Hack at UCI Logo"
						className="h-12 w-12 cursor-pointer md:h-24 md:w-24"
					/>
				</Link>
				<div className="flex grow flex-col items-center gap-2 lg:items-start lg:gap-4">
					<p className="text-subtitle">Hack at UCI</p>
					<div className="flex items-center gap-6">
						{navLinks.map((link, index) => (
							<React.Fragment key={link.href}>
								<Link
									to={link.href}
									className="text-center text-white hover:underline"
								>
									{link.label}
								</Link>
								{index < navLinks.length - 1 && <span>•</span>}
							</React.Fragment>
						))}
					</div>
				</div>
				<div className="mt-4 flex justify-center lg:mt-0 lg:items-start lg:justify-end">
					<div className="flex justify-between gap-8">
						<ContactIcon
							title="Instagram"
							link="https://www.instagram.com/hackatuci/"
							image={InstagramIcon}
							className="h-8 w-8 md:h-15 md:w-15"
						/>
						<ContactIcon
							title="Tiktok"
							link="https://www.tiktok.com/@hackatuci"
							image={TiktokIcon}
							className="h-8 w-8 md:h-15 md:w-15"
						/>
						<ContactIcon
							title="Discord"
							link="https://discord.gg/2gZjQMjKeF"
							image={DiscordIcon}
							className="h-8 w-8 md:h-15 md:w-15"
						/>
						<ContactIcon
							title="Email"
							link="mailto:hack@uci.edu"
							image={MailIcon}
							className="h-8 w-8 md:h-15 md:w-15"
							isMail
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
