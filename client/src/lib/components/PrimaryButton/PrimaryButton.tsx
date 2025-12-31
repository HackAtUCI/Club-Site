import React from "react";
import "./PrimaryButton.css";

interface PrimaryButtonProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
	variant?: "default" | "apply";
	[x: string]: unknown;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	children,
	className = "",
	href,
	variant = "default",
	...props
}) => {
	const isExternal = href?.startsWith("http");
	const buttonClasses = `primary-gradient-btn px-12 py-3 rounded-full text-center text-md sm:text-button outline-none border-none shadow-none bg-transparent ${className} ${
		variant === "apply" ? "apply-style" : ""
	}`;

	if (href) {
		return (
			<a
				href={href}
				target={isExternal ? "_blank" : undefined}
				rel={isExternal ? "noreferrer" : undefined}
				className={buttonClasses}
				{...props}
			>
				{children}
			</a>
		);
	}
	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};

export default PrimaryButton;
