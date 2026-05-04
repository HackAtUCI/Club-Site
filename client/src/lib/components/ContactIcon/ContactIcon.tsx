import clsx from "clsx";
import type { ComponentType } from "react";

import "./ContactIcon.css";

interface ContactIconProps {
	title: string;
	link: string;
	image: ComponentType<{ className?: string }>; // Now takes a component
	isYouTube?: boolean;
	isMail?: boolean;
	className?: string;
}

export default function ContactIcon({
	title,
	link,
	image: Icon, // renamed for clarity
	isYouTube = false,
	isMail = false,
	className = "",
}: ContactIconProps) {
	return (
		// Mail and YouTube icons require different sizing to maintain vertical alignment with other icons
		<div
			className={clsx(
				"contact-icon",
				{
					"contact-icon-youtube": isYouTube,
					"contact-icon-mail": isMail,
				},
				className
			)}
		>
			<a
				href={link}
				aria-label={title}
				className="flex size-full items-center justify-center"
			>
				<Icon className="size-full" />
			</a>
		</div>
	);
}
