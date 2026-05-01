import { useRef } from "react";

import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";
import Hero from "@/lib/components/Home/Hero/Hero";
import Events from "@/lib/components/Home/Events/Events";
import Sponsors from "@/lib/components/Home/Sponsors/Sponsors";
import Contact from "@/lib/components/Home/Contact/Contact";

import UpArrow from "@/assets/icons/up-arrow.svg";
import bigCircleLeft from "@/assets/hero-decor/big-circle-left.svg";
import bigCircleRight from "@/assets/hero-decor/big-circle-right.svg";
import smallCircle from "@/assets/hero-decor/small-circle.svg";
import heroVectorLeft from "@/assets/hero-decor/hero-vector-left.svg";
import heroVectorRight from "@/assets/hero-decor/hero-vector-right.svg";

export default function Home() {
	const heroRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const scrollToRef = ({
		ref,
	}: {
		ref: React.RefObject<HTMLElement | null>;
	}) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="min-h-screen overflow-x-hidden">
			{/* Shared decor layer for Hero + Events so elements can span sections */}
			<div className="relative isolate overflow-visible">
				{/* Shared light background behind Hero + Events */}
				<div
					className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100svh+52rem)] hack-background-gradient"
					aria-hidden
				/>

				<img
					src={bigCircleLeft}
					alt=""
					aria-hidden
					draggable={false}
					className="pointer-events-none absolute top-35 left-30 z-10 w-[clamp(220px,24vw,520px)] -translate-x-[34%] -translate-y-[38%] select-none opacity-80"
				/>
				<img
					src={smallCircle}
					alt=""
					aria-hidden
					draggable={false}
					className="pointer-events-none absolute top-92 left-82 z-10 w-[clamp(32px,7vw,120px)] -translate-x-[34%] -translate-y-[38%] select-none opacity-80"
				/>
				<img
					src={heroVectorRight}
					alt=""
					aria-hidden
					draggable={false}
					className="pointer-events-none absolute top-0 right-0 z-10 w-[clamp(200px,29vw,440px)] translate-x-[30%] -translate-y-[10%] select-none"
				/>

				{/* Spillover assets: anchor near Hero bottom so they remain visible into Events */}
				<img
					src={heroVectorLeft}
					alt=""
					aria-hidden
					draggable={false}
					className="pointer-events-none absolute left-0 top-[calc(100svh+2rem)] z-10 w-[clamp(200px,29vw,440px)] -translate-x-[20%] select-none"
				/>
				<img
					src={bigCircleRight}
					alt=""
					aria-hidden
					draggable={false}
					className="pointer-events-none absolute right-38 top-[calc(100svh+6rem)] z-10 w-[clamp(320px,30vw,760px)] translate-x-[36%] select-none opacity-70"
				/>

				<div className="relative z-20">
					<Hero ref={heroRef} onClick={() => scrollToRef({ ref: contactRef })} />
					<Events />
				</div>
			</div>
			<div className="home-background">
				<Contact ref={contactRef} />
				<Sponsors />

				<section className="flex justify-center items-center pb-24">
					<PrimaryButton
						onClick={() => {
							scrollToRef({ ref: heroRef });
						}}
					>
						Back To Top
						<img
							src={UpArrow}
							alt="Up Arrow"
							className="w-8 h-8 ml-4 inline-block"
						/>
					</PrimaryButton>
				</section>
			</div>
		</div>
	);
}
