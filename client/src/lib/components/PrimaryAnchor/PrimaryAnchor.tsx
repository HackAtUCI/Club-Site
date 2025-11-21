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
	const isExternal = href.startsWith("http");
	return (
		<Link
			to={href}
			target={isExternal ? "_blank" : undefined}
			rel={isExternal ? "noreferrer" : undefined}
			className={`primary-gradient-anchor ${className}`}
			{...props}
		>
			{children} ›
		</Link>
	);
};

export default PrimaryAnchor;
