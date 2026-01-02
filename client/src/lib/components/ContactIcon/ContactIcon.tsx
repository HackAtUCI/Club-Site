import "./ContactIcon.css";

interface ContactIconProps {
	title: string;
	link: string;
	image: string;
	isYouTube?: boolean;
	isMail?: boolean;
}

export default function ContactIcon({
	title,
	link,
	image,
	isYouTube = false,
	isMail = false,
}: ContactIconProps) {
	return (
		// Mail and YouTube icons require different sizing to maintain vertical alignment with other icons
		<div
			className={`contact-icon ${isYouTube ? "contact-icon-youtube" : ""} ${
				isMail ? "contact-icon-mail" : ""
			}`}
		>
			<a href={link} aria-label={title}>
				<img src={image} alt={title} />
			</a>
		</div>
	);
}
