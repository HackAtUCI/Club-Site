import SponsorHero from "./components/SponsorHero";
import SponsorGrid from "./components/SponsorGrid";
import SponsorUs from "./components/SponsorUs";

export default function Sponsors() {
	return (
		<main className="min-h-screen bg-dark-blue">
			<SponsorHero />
			<SponsorGrid />
			<SponsorUs />
		</main>
	);
}
