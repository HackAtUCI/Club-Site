import SponsorHero from "./components/SponsorHero";
import SponsorGrid from "./components/SponsorGrid";
import SponsorUs from "./components/SponsorUs";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Sponsors() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<img
				src="/background/green-circle.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -left-24 lg:-left-5 top-20 z-0 w-90 select-none lg:block"
			/>

			<img
				src="/background/blue-blob.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -right-32 top-180 z-0 w-250 select-none lg:block"
			/>

			<img
				src="/background/green-blob.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -left-45 lg:-left-100 -bottom-45 lg:bottom-75 z-0 w-200 select-none lg:block"
			/>
      <AnimatedBackground />
			<div className="relative z-20">
				<SponsorHero />
				<SponsorGrid />
				<SponsorUs />
			</div>
		</main>
	);
}
