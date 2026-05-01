import SponsorHero from "./components/SponsorHero";
import SponsorGrid from "./components/SponsorGrid";
import SponsorUs from "./components/SponsorUs";

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

			<img
				src="/background/email-icon.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute right-80 top-[62%] z-0 hidden w-100 select-none lg:block"
			/>

			<img
				src="/background/person-icon.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute right-6 top-[74%] z-0 hidden w-100 select-none lg:block"
			/>
      <img
        src="/background/blue-circle-outline.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-75 -left-8 z-0 hidden w-150 select-none lg:block"
        />
      <img
        src="/background/green-circle-outline.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-100 -right-16 z-0 hidden w-150 select-none lg:block"
        />
      <div className="relative z-20">
			<SponsorHero />
			<SponsorGrid />
			<SponsorUs />
      </div>
		</main>
	);
}
