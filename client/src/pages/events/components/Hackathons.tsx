import { motion } from "framer-motion";

import ZotHacksLogo from "@/assets/logos/ZotHacksLogo.png";
import IrvineHacksLogo from "@/assets/logos/IrvineHacksLogo.png";

interface HackathonPreview {
	name: string;
	description: string;
	logoSrc: string;
	href: string;
	index?: number;
}

function PreviewCard({ name, description, logoSrc, href }: HackathonPreview) {
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

			<div className="rounded-4xl glass-shadow p-6 flex flex-1 flex-col gap-3 justify-between items-center text-center bg-[#F2F2F233]">
				<div className="flex flex-col gap-3 items-center">
					<h2 className="gunmetal-text-gradient text-2xl lg:text-3xl font-bold">
						{name}
					</h2>
					<p className="text-black text-sm lg:text-base">{description}</p>
				</div>
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="gunmetal-gradient rounded-4xl px-4 lg:px-12 py-2 text-md lg:text-xl font-bold text-[#FFFFFF] transition-transform duration-200 hover:scale-105 cursor-pointer"
				>
					More Information
				</a>
			</div>
		</motion.div>
	);
}

export default function Hackathons() {
	return (
		<section className="px-1 lg:px-10 py-6 lg:py-8">
			<div className="mx-auto w-full max-w-3/4 flex flex-col lg:flex-row gap-6 lg:gap-32 pb-20 lg:pb-48">
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
					description="Our premier hackathon that takes places during Winter Quarter"
					logoSrc={IrvineHacksLogo}
					href="https://irvinehacks.com/"
				/>
			</div>
		</section>
	);
}
