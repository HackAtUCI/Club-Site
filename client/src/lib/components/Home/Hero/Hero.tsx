import React, { forwardRef } from "react";

import heroVectorLeft from "@/assets/hero-decor/hero-vector-left.svg";
import heroVectorRight from "@/assets/hero-decor/hero-vector-right.svg";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
	onClick?: () => void;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
	({ onClick, className = "", ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={`relative isolate flex min-h-svh w-full flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12 ${className}`}
				{...props}
			>
				{/* Background: light hero field → dark handoff (matches Figma paint0 / solid band) */}
				<div
					className="pointer-events-none absolute inset-0 bg-[#ECEFFD]"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-100% to-dark-blue to-100%"
					aria-hidden
				/>

				{/* Green vector clusters (anchored + clamp sizing for consistent layout) */}
				<img
					src={heroVectorRight}
					alt=""
					draggable={false}
					aria-hidden
					className="pointer-events-none absolute top-25 right-0 z-0 w-[clamp(200px,29vw,440px)] translate-x-[30%] -translate-y-[10%] select-none"
				/>
				<img
					src={heroVectorLeft}
					alt=""
					draggable={false}
					aria-hidden
					className="pointer-events-none absolute bottom-0 left-0 z-0 w-[clamp(200px,29vw,440px)] -translate-x-[20%] translate-y-[10%] select-none"
				/>

				{/* Content */}
				<div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center md:gap-8">
					<p className="box-shadow rounded-full border text-primary px-6 py-2 text-2xl font-normal">
						Est. 2013
					</p>

					<h1 className="text-6xl max-w-[18ch] gunmetal-text-gradient font-extrabold">
						Hack At UCI
					</h1>

					<p className="max-w-2xl text-lg font-medium text-black md:text-xl">
					    a student-run organization established to provide students with a platform to learn, grow, and develop technology of the future.
					</p>

					<button
						type="button"
						onClick={onClick}
						className="box-shadow mt-2 rounded-full gunmetal-gradient px-12 py-2.5 text-2xl font-bold"
					>
						Learn More
					</button>
				</div>
			</div>
		);
	},
);

Hero.displayName = "Hero";

export default Hero;
