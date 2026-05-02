"use client";

import { motion } from "framer-motion";

export default function SponsorUs() {
	return (
		<section className="relative flex flex-col gap-24 px-6 py-32 md:gap-48 md:px-16">
			<motion.div
				initial={{
					opacity: 0,
					x: -80,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{ amount: 0.3 }}
				transition={{
					duration: 0.6,
					ease: "easeOut",
				}}
				className="hack-white-gradient flex max-w-4xl flex-col gap-10 rounded-4xl p-4 md:p-12"
			>
				<div className="glass-shadow rounded-full border border-white/10 bg-[#F2F2F233] px-8 py-4 text-center">
					<h2 className="text-heading gunmetal-text-gradient">Sponsor Us!</h2>
				</div>

				<div className="glass-shadow flex flex-col gap-6 rounded-4xl border border-white/10 bg-[#F2F2F233] p-6 backdrop-blur-md md:p-8">
					<ul className="text-body list-disc space-y-1 pl-5 text-black">
						<li>
							Showcase your product/platform to our vast network of next
							generation tech talent both on social media and in person at our
							events.
						</li>

						<li>
							Gain direct access to a diverse pool of passionate student
							developers who are actively building, learning, and looking for
							opportunities to make an impact.
						</li>

						<li>
							We work with you to craft a personalized sponsorship experience
							that aligns with your recruiting goals, budget, and technical
							focus.
						</li>
					</ul>

					<div className="flex justify-center md:justify-start">
						<a
							href="mailto:hack@uci.edu"
							className="gunmetal-gradient rounded-4xl px-12 py-2 text-body font-bold text-[#FFFFFF] transition-transform duration-200 hover:scale-105"
						>
							Contact Us
						</a>
					</div>
				</div>
			</motion.div>

			<motion.div
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
				className="flex justify-center"
			>
				<div className="hack-white-gradient rounded-4xl px-5 py-3 md:px-8 md:py-4">
					<div className="glass-shadow rounded-full border border-white/10 bg-[#F2F2F233] px-8 py-3 text-center">
						<p className="gunmetal-text-gradient text-md font-bold md:text-4xl">
							Thank you to all our sponsors ❤️
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
