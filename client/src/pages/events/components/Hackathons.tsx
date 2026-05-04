import { motion } from "framer-motion";

import ZotHacksLogo from "@/assets/images/ZotHacksLogo.png";
import IrvineHacksLogo from "@/assets/images/IrvineHacksLogo.png";

interface HackathonPreview {
	name: string;
	description: string;
	logoSrc: string;
	href: string;
	index?: number;
}

function PreviewCard({
	name,
	description,
	logoSrc,
	href,
	index = 0,
}: HackathonPreview) {
	return (
		<motion.div
				initial={{
					opacity: 0,
					scale: 0.5,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				viewport={{
					amount: 0.15,
				}}
				transition={{
					duration: 0.7,
					ease: "easeOut",
					delay: 0.35,
				}}
			className="flex-1 rounded-[40px] hack-white-gradient p-6 sm:p-8 flex flex-col gap-6"
		>
			<div className="rounded-4xl overflow-hidden bg-[#1a1a2e] aspect-4/3">
				<img
					src={logoSrc}
					alt={`${name} logo`}
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="rounded-4xl glass-shadow p-6 flex flex-col gap-3 items-center text-center bg-[#F2F2F233]">
				<h2 className="gunmetal-text-gradient text-2xl md:text-3xl font-bold">
					{name}
				</h2>
				<p className="text-black text-sm md:text-base">{description}</p>
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="gunmetal-gradient rounded-4xl px-12 py-2 text-lg md:text-xl font-bold text-[#FFFFFF] transition-transform duration-200 hover:scale-105 cursor-pointer"
				>
					More Information
				</a>
			</div>
		</motion.div>
	);
}

export default function Hackathons() {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-6 md:py-8">
			<div className="mx-auto w-full max-w-3/4 flex flex-col md:flex-row gap-6 md:gap-32 pb-20 md:pb-48">
				<PreviewCard
					index={0}
					name="ZotHacks"
					description="Our beginner hackathon taking place during Fall Quarter"
					logoSrc={ZotHacksLogo}
					href="https://zothacks.com/"
				/>
				<PreviewCard
					index={1}
					name="IrvineHacks"
					description="Our premiere hackathon that takes places during Winter Quarter"
					logoSrc={IrvineHacksLogo}
					href="https://irvinehacks.com/"
				/>
			</div>
		</section>
	);
}
