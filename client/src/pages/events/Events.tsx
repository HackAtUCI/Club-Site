import Hero from "./components/Hero";
import Hackathons from "./components/Hackathons";
import HackathonShowcase from "./components/HackathonShowcase";
import Testimonials from "./components/Testimonials";
import InterestSection from "./components/InterestSection";
import BackToTop from "@/lib/components/BackToTop/BackToTop";
import Background from "./components/Background";

import {
	IRVINE_HACKS_SHOWCASE,
	ZOT_HACKS_SHOWCASE,
} from "./constants/HackathonShowcase";

export default function Events() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<Background />

			<div className="relative z-20">
				<Hero />
				<Hackathons />

				<HackathonShowcase {...IRVINE_HACKS_SHOWCASE} />
				<HackathonShowcase {...ZOT_HACKS_SHOWCASE} />

				<Testimonials />
				<InterestSection />
				<BackToTop />
			</div>
		</main>
	);
}