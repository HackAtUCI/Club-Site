import { useRef } from "react";

import Hero from "@/lib/components/Home/Hero/Hero";
import Events from "@/lib/components/Home/Events/Events";
import Stats from "@/lib/components/Home/Stats/Stats";
import OurAlumni from "@/lib/components/Home/Alumni/OurAlumni";
import Organization from "@/lib/components/Home/Organization/Organization";

import HomeDecor from "./HomeDecor";
import Pill from "@/lib/components/Pill/Pill";

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
			<HomeDecor>
				<Hero ref={heroRef} onClick={() => scrollToRef({ ref: contactRef })} />
				<Events />
			</HomeDecor>
			<div className="home-background">
				<Stats />
				<OurAlumni />
				<Organization />

				<div className="flex mx-auto items-center w-full px-3 pt-6 mb-30 md:px-5">
					<Pill 
						as="button"
						onClick={() => {
							scrollToRef({ ref: heroRef });
						}}
						className="mx-auto w-fit p-3 md:p-9"
						roundedClassName="rounded-[50px]"
						innerClassName="px-7 py-3.5 md:px-10 md:py-4"
					>
						<span className="block whitespace-nowrap text-center text-3xl font-black leading-none tracking-[-0.02em] gunmetal-text-gradient md:text-[40px]">
							Back to the top
						</span>
					</Pill>
				</div>
			</div>
		</div>
	);
}
