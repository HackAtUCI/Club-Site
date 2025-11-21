import React from "react";
import "./Carousel.css";

interface CarouselDotButtonProps {
	selected: boolean;
	onClick: () => void;
	className?: string;
}

const CarouselDotButton: React.FC<CarouselDotButtonProps> = ({
	selected,
	onClick,
	className = "",
}) => {
	return (
		<button
			type="button"
			className={`carousel-dot-button ${
				selected ? "selected" : ""
			} ${className}`}
			onClick={onClick}
			aria-label={selected ? "Selected slide" : "Go to slide"}
		/>
	);
};

export default CarouselDotButton;
