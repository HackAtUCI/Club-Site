import React from "react";
import "./Box.css";

interface BoxProps {
	children: React.ReactNode;
	className?: string;
	alt?: boolean;
}

const Box: React.FC<BoxProps> = ({ children, className = "", alt }) => {
	return (
		<div
			className={`${
				alt ? "box-style bg-[#232332]" : "bg-box shadow-box-glow"
			} rounded-3xl p-10 mx-4  md:px-16 md:py-12 ${className}`}
		>
			{children}
		</div>
	);
};

export const UnspacedBox: React.FC<BoxProps> = ({
	children,
	className = "",
	alt,
}) => {
	return (
		<div
			className={`${
				alt ? "box-style bg-[#232332]" : "bg-box shadow-box-glow"
			} rounded-3xl ${className}`}
		>
			{children}
		</div>
	);
};

export default Box;
