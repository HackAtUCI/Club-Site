import SponsorHero from "./components/SponsorHero";
import SponsorGrid from "./components/SponsorGrid";
import SponsorUs from "./components/SponsorUs";
import AnimatedBackground from "./components/AnimatedBackground";

import GreenCircle from "@/assets/sponsor-decor/green-circle.svg";
import BlueBlob from "@/assets/sponsor-decor/blue-blob.svg";
import GreenBlob from "@/assets/sponsor-decor/green-blob.svg";

export default function Sponsors() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<img
				src={GreenCircle}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -left-24 top-20 z-0 w-90 select-none lg:-left-5 lg:block"
			/>

			<img
				src={BlueBlob}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -right-32 top-180 z-0 w-250 select-none lg:block"
			/>

			<img
				src={GreenBlob}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -left-45 -bottom-45 z-0 w-200 select-none lg:-left-100 lg:bottom-75 lg:block"
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