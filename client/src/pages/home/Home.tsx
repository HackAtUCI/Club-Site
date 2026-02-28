import { useRef } from "react";

import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";
import Hero from "@/lib/components/Home/Hero/Hero";
import AboutUs from "@/lib/components/Home/AboutUs/AboutUs";
import Events from "@/lib/components/Home/Events/Events";
import Sponsors from "@/lib/components/Home/Sponsors/Sponsors";
import Contact from "@/lib/components/Home/Contact/Contact";

import UpArrow from "@/assets/icons/up-arrow.svg";

export default function Home() {
	const heroRef = useRef<HTMLInputElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const scrollToTop = () => {
		if (heroRef.current) {
			heroRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="home-background min-h-screen">
			<Hero ref={heroRef} />
			<AboutUs />
			<Events />
			<Contact ref={contactRef} />
			<Sponsors />

			<section className="flex justify-center items-center pb-24">
				<PrimaryButton onClick={scrollToTop}>
					Back To Top
					<img
						src={UpArrow}
						alt="Up Arrow"
						className="w-8 h-8 ml-4 inline-block"
					/>
				</PrimaryButton>
			</section>
		</div>
	);
}
