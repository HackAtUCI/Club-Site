import { motion } from "framer-motion";

import EventsPic from "@/assets/images/EventsPic.jpg";

export default function Hero() {
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
			viewport={{
				amount: 0.3,
				once: true,
			}}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
			className="px-6 md:px-10 pt-28 md:py-48 pb-20"
		>
			<div className="mx-auto w-full max-w-5xl rounded-[40px] hack-white-gradient p-6 sm:p-8 md:p-10">
				<div className="rounded-[40px] glass-shadow p-6 md:p-10 flex flex-col items-center gap-2 md:gap-6 bg-[#F2F2F233]">
					<h1 className="gunmetal-text-gradient text-heading">Our Events</h1>

					<p className="text-[#111111] text-body text-center">
						Explore what our annual{" "}
						<a
							href="https://www.notion.so/hackatuci/HACKATHONS-311393c84e5d80cf8d22e466e1e6e6ed"
							target="_blank"
							rel="noreferrer"
							className="underline font-semibold cursor-pointer"
						>
							hackathons
						</a>{" "}
						have to offer
					</p>

					<div className="w-full rounded-3xl overflow-hidden bg-[#cccccc] aspect-[0.95/1] md:aspect-[2.4/1] mt-2">
						<img
							src={EventsPic}
							alt="IrvineHacks 2026"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
