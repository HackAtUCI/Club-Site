import { useState, useEffect } from "react";

export default function useScrollFromTop() {
	const [hasScrolledFromTop, setHasScrolledFromTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setHasScrolledFromTop(window.scrollY !== 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return hasScrolledFromTop;
}
