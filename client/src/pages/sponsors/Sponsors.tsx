import SponsorHero from "./components/Hero";
import SponsorGrid from "./components/SponsorGrid";
import SponsorUs from "./components/SponsorUs";
import Background from "./components/Background";

export default function Sponsors() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<Background />

			<div className="relative z-20">
				<SponsorHero />
				<SponsorGrid />
				<SponsorUs />
			</div>
		</main>
	);
}