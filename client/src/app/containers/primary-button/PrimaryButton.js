import React from "react";
import "./PrimaryButton.scss";

function PrimaryButton({ children, onClick, href, ...props }) {
	const Component = href ? "a" : "button";
	
	return (
		<Component 
			className="primary-button" 
			onClick={onClick}
			href={href}
			{...props}
		>
			{children}
		</Component>
	);
}

export default PrimaryButton;

