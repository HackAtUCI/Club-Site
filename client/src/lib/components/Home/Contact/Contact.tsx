import React, { useState } from "react";

import ContactCard from "@/lib/components/ContactCard/ContactCard";
import NewsletterSignupModal from "@/pages/contact/components/NewsLetterSignupModal/NewsletterSignupModal";

import CircularMailIcon from "@/assets/logos/circular_mail.svg";
import DiscordIcon from "@/assets/logos/circular_discord.svg";

export default function Contact({ ...props }) {
	const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

	const openNewsletterModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsNewsletterModalOpen(true);
	};

	const closeNewsletterModal = () => {
		setIsNewsletterModalOpen(false);
	};

	return (
		<section
			className="flex justify-center items-center bg-dark-blue px-14 pt-30 md:px-40"
			{...props}
		>
			<div className="container">
				<h2 className="text-subtitle mb-12">Get Involved!</h2>
				<div className="flex flex-col lg:flex-row justify-center items-center mt-4 gap-8">
					<ContactCard
						title="Join our Discord!"
						buttonText="Link →"
						href="https://discord.gg/2gZjQMjKeF"
						icon={DiscordIcon}
						forceMobile
					/>
					<ContactCard
						title="Sign up for news!"
						buttonText="Sign up →"
						onClick={openNewsletterModal}
						icon={CircularMailIcon}
						forceMobile
					/>
				</div>
				<NewsletterSignupModal
					isOpen={isNewsletterModalOpen}
					onRequestClose={closeNewsletterModal}
				/>
			</div>
		</section>
	);
}
