import { UnspacedBox } from "@/lib/components/Box/Box";
import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";
import clsx from "clsx";

import "./ContactCard.css";

interface ContactCardProps {
	title: string;
	buttonText: string;
	href?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	icon: string;
	forceMobile?: boolean;
}

export default function ContactCard({
	title,
	buttonText,
	href,
	onClick,
	icon,
	forceMobile = false,
}: ContactCardProps) {
	return (
		<UnspacedBox
			className={clsx("contact-card", forceMobile && "force-mobile")}
		>
			<div className="contact-card-icon">
				<img src={icon} alt={title} />
			</div>

			<div className="contact-card-content">
				<h2>{title}</h2>
				<PrimaryButton href={href} onClick={onClick}>
					{buttonText}
				</PrimaryButton>
			</div>
		</UnspacedBox>
	);
}
