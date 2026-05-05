import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

import LogisticsText from "./committee-texts/LogisticsText";
import CorporateText from "./committee-texts/CorporateText";
import DesignText from "./committee-texts/DesignText";
import MarketingText from "./committee-texts/MarketingText";
import TechnologyText from "./committee-texts/TechnologyText";

import LogisticsGroupPic from "@/assets/images/recruitment/LogisticsGroupPic.jpeg";
import CorporateGroupPic from "@/assets/images/recruitment/CorporateGroupPic.jpeg";
import MarketingGroupPic from "@/assets/images/recruitment/MarketingGroupPic.jpeg";
import DesignGroupPic from "@/assets/images/recruitment/DesignGroupPic.jpeg";
import TechnologyGroupPic from "@/assets/images/recruitment/TechnologyGroupPic.jpeg";

interface Committee {
	key: string;
	label: string;
	text: ReactNode;
	imageSrc?: string;
	faqs: string[];
}

const COMMITTEES: Committee[] = [
	{
		key: "corporate",
		label: "Corporate",
		text: <CorporateText />,
		imageSrc: CorporateGroupPic,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "logistics",
		label: "Logistics",
		text: <LogisticsText />,
		imageSrc: LogisticsGroupPic,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "marketing",
		label: "Marketing",
		text: <MarketingText />,
		imageSrc: MarketingGroupPic,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "design",
		label: "Design",
		text: <DesignText />,
		imageSrc: DesignGroupPic,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "technology",
		label: "Technology",
		text: <TechnologyText />,
		imageSrc: TechnologyGroupPic,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
];

export default function Committees() {
	const [activeKey, setActiveKey] = useState(COMMITTEES[0].key);
	const active = COMMITTEES.find((c) => c.key === activeKey) ?? COMMITTEES[0];

	return (
		<section className="px-6 md:px-10 py-12">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.45,
					ease: "easeOut",
				}}
				className="mx-auto w-full max-w-5xl rounded-[40px] hack-white-gradient p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-10"
			>
				<h2 className="gunmetal-text-gradient text-4xl font-extrabold leading-none md:text-5xl text-center">
					Learn About Our Committees
				</h2>

				<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] p-6 md:p-10 flex flex-col gap-6">
					<div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between md:px-16 gap-2 sm:gap-3 md:gap-4">
						{" "}
						{COMMITTEES.map((c) => {
							const isActive = c.key === activeKey;

							return (
								<button
									key={c.key}
									type="button"
									onClick={() => setActiveKey(c.key)}
									className={`rounded-full px-4 py-2 text-sm md:text-xl font-semibold transition-all duration-200 cursor-pointer ${
										isActive
											? "bg-[#B5EDC9] text-black"
											: "text-black/70 hover:text-black hover:bg-white/20"
									}`}
								>
									{c.label}
								</button>
							);
						})}
					</div>

					<div className="rounded-2xl overflow-hidden bg-[#cccccc] aspect-square md:aspect-[2.4/1] glass-shadow">
						<img
							src={active.imageSrc}
							alt={`${active.label}`}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="text-black text-sm md:text-lg leading-normal">
						{active.text}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
