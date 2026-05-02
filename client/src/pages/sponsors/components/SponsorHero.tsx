"use client";

import { motion } from "framer-motion";

export default function SponsorHero() {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 80,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{ amount: 0.3 }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
			className="relative flex justify-center px-6 pt-32 pb-20"
		>
			<div className="hack-white-gradient w-full max-w-5xl rounded-4xl px-6 py-8 md:px-32 md:py-14">
				<div className="box-shadow flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#F2F2F233] p-6 text-center backdrop-blur-md md:px-12 md:py-8">
					<h1 className="text-heading gunmetal-text-gradient">Sponsors</h1>

					<p className="text-body text-dark-blue">
						Our sponsors are what make our hackathons possible!
					</p>
				</div>
			</div>
		</motion.section>
	);
}
