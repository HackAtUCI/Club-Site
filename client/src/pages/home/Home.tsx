import { useEffect, useRef, useState } from "react";

import Hero from "@/lib/components/Home/Hero/Hero";
import Events from "@/lib/components/Home/Events/Events";
import Stats from "@/lib/components/Home/Stats/Stats";
import OurAlumni from "@/lib/components/Home/Alumni/OurAlumni";
import Organization from "@/lib/components/Home/Organization/Organization";

import HomeDecor from "./HomeDecor";
import EventsDecor from "./EventsDecor";
import OurAlumniDecor from "./OurAlumniDecor";
import OrganizationDecor from "./OrganizationDecor";
import Pill from "@/lib/components/Pill/Pill";
import BackToTop from "@/lib/components/BackToTop/BackToTop";

export default function Home() {
	const heroRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const backToTopRevealRef = useRef<HTMLDivElement>(null);
	const [backToTopInView, setBackToTopInView] = useState(false);

	const scrollToRef = ({
		ref,
	}: {
		ref: React.RefObject<HTMLElement | null>;
	}) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const el = backToTopRevealRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setBackToTopInView(Boolean(entry?.isIntersecting));
			},
			{ threshold: 0.15 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen overflow-x-hidden">
			<HomeDecor>
				<Hero ref={heroRef} onClick={() => scrollToRef({ ref: contactRef })} />
				<EventsDecor>
					<Events />
					<Stats />
				</EventsDecor>
			</HomeDecor>
			<div className="home-background">
				<OurAlumniDecor>
					<OurAlumni />
				</OurAlumniDecor>
				<OrganizationDecor>
					<Organization />
					<div
						ref={backToTopRevealRef}
						className={`flex mx-auto w-full items-center px-3 pt-6 pb-0 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:scale-100 md:px-5 ${
							backToTopInView ? "opacity-100 scale-100" : "opacity-0 scale-50"
						}`}
					>
					</div>
					<BackToTop />
				</OrganizationDecor>
			</div>
		</div>
	);
}
