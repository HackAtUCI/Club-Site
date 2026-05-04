import Hero from "./components/Hero";
import Hackathons from "./components/Hackathons";
import HackathonShowcase from "./components/HackathonShowcase";
import Testimonials from "./components/Testimonials";
import InterestSection from "./components/InterestSection";
import BackToTop from "@/lib/components/BackToTop/BackToTop";
import Background from "./components/Background";

const PLACEHOLDER_PHOTO =
	"https://placehold.co/400x300/cccccc/666666?text=Photo";

const PHOTOS = [PLACEHOLDER_PHOTO, PLACEHOLDER_PHOTO, PLACEHOLDER_PHOTO];

const TRACKS = [
	"Best Track Name",
	"Best Track Name",
	"Best Track Name",
	"Best Track Name",
	"Best Track Name",
	"Best Track Name",
];

export default function Events() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<Background />
			<div className="relative z-20">
				<Hero />
				<Hackathons />
				<HackathonShowcase
					title="IrvineHacks 2026"
					previousLink={{
						text: "View Previous IrvineHacks",
						href: "https://irvinehacks.com/",
					}}
					stats={[
						{ value: "36", label: "Hours" },
						{ value: "$10,000+", label: "in Awarded Prizes" },
						{ value: "400", label: "Hackers" },
					]}
					tracks={TRACKS}
					photos={PHOTOS}
				/>
				<HackathonShowcase
					title="ZotHacks 2025"
					previousLink={{
						text: "View Previous ZotHacks",
						href: "https://zothacks.com/",
					}}
					stats={[
						{ value: "50%", label: "ICS Majors" },
						{ value: "50%", label: "Non-ICS Majors" },
						{ value: "4:1", label: "Hacker:Mentor Ratio" },
					]}
					tracks={TRACKS}
					photos={PHOTOS}
				/>
				<Testimonials />
				<InterestSection />
				<BackToTop />
			</div>
		</main>
	);
}
