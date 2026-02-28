import clsx from "clsx";

import "./ContactIcon.css";

interface ContactIconProps {
	title: string;
	link: string;
	image: string;
	isYouTube?: boolean;
	isMail?: boolean;
	className?: string;
}

export default function ContactIcon({
	title,
	link,
	image,
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
			<a href={link} aria-label={title}>
				<img src={image} alt={title} />
			</a>
		</div>
	);
}
