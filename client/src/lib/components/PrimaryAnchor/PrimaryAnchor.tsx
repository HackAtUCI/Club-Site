import React from "react";
import { Link } from "react-router-dom";
import "./PrimaryAnchor.css";

interface PrimaryAnchorProps {
	children: React.ReactNode;
	href: string;
	className?: string;
}

const PrimaryAnchor: React.FC<PrimaryAnchorProps> = ({
	children,
	href,
	className = "",
	...props
}) => {
	const isExternal = !href.startsWith("/");

	return isExternal ? (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={`primary-gradient-anchor ${className}`}
			{...props}
		>
			{children} ›
		</a>
	) : (
		<Link
			to={href}
			target={undefined}
			rel={undefined}
			className={`primary-gradient-anchor ${className}`}
			{...props}
		>
			{children} ›
		</Link>
	);
};

export default PrimaryAnchor;
