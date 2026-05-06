import React from "react";
import { Link } from "react-router-dom";

import ContactIcon from "../ContactIcon/ContactIcon";

import HackLogo from "@/assets/logos/HackLogo.svg";

import { FaDiscord, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

import "./Footer.css";

const navLinks = [
	{ href: "/about", label: "About" },
	{ href: "/events", label: "Event" },
	{ href: "/sponsors", label: "Sponsors" },
];

export default function Footer() {
	return (
		<footer className="bg-black w-full px-4 pt-8 pb-10 md:px-24 md:py-10">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:items-center md:gap-10">
				<div className="flex flex-col items-center gap-2 p-8 md:p-0">
					<Link to="/" className="flex items-center gap-3 mb-2">
						<img
							src={HackLogo}
							alt="Hack at UCI Logo"
							className="h-17 w-17 shrink-0 cursor-pointer"
						/>
						<p className="text-[26px] font-semibold text-white">Hack at UCI</p>
					</Link>
					<p className="text-center text-sm md:text-xl text-white">
						Made with &hearts; Hack &lsquo;26-&rsquo;27
					</p>
				</div>

				<div className="flex flex-col items-center gap-7 p-8 md:p-0">
					<div className="flex items-center justify-center gap-6 md:gap-8">
						<ContactIcon
							title="Instagram"
							link="https://www.instagram.com/hackatuci/"
							image={FaInstagram}
							className="h-7 w-7 md:h-9 md:w-9"
						/>
						<ContactIcon
							title="LinkedIn"
							link="https://www.linkedin.com/company/hack-at-uci/"
							image={FaLinkedin}
							className="h-7 w-7 md:h-9 md:w-9"
						/>
						<ContactIcon
							title="Discord"
							link="https://discord.gg/2gZjQMjKeF"
							image={FaDiscord}
							className="h-7 w-7 md:h-9 md:w-9"
						/>
						<ContactIcon
							title="Tiktok"
							link="https://www.tiktok.com/@hackatuci"
							image={FaTiktok}
							className="h-7 w-7 md:h-9 md:w-9"
						/>
						<ContactIcon
							title="Email"
							link="mailto:hack@uci.edu"
							image={FaRegEnvelope}
							className="h-7 w-7 md:h-9 md:w-9"
							isMail
						/>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-3 text-center text-[19px] text-white md:text-2xl">
						{navLinks.map((link, index) => (
							<React.Fragment key={link.href}>
								<Link to={link.href} className="hover:underline">
									{link.label}
								</Link>
								{index < navLinks.length - 1 && <span>•</span>}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
