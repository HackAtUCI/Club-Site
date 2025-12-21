import React from "react";
import "./Box.scss";

function Box({ children, className = "", ...props }) {
	return (
		<div className={`box ${className}`} {...props}>
			{children}
		</div>
	);
}

export default Box;

