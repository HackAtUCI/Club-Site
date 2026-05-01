import { useState, type ReactNode } from "react";

import LogisticsText from "./committee-texts/LogisticsText";
import CorporateText from "./committee-texts/CorporateText";
import DesignText from "./committee-texts/DesignText";
import MarketingText from "./committee-texts/MarketingText";
import TechnologyText from "./committee-texts/TechnologyText";
import Dropdown from "./Dropdown";

const PLACEHOLDER_IMAGE =
	"https://placehold.co/900x400/cccccc/666666?text=Committee+Photo";

interface Committee {
	key: string;
	label: string;
	text: ReactNode;
	faqs: string[];
}

const COMMITTEES: Committee[] = [
	{
		key: "logistics",
		label: "Logistics",
		text: <LogisticsText />,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "corporate",
		label: "Corporate",
		text: <CorporateText />,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "design",
		label: "Design",
		text: <DesignText />,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "marketing",
		label: "Marketing",
		text: <MarketingText />,
		faqs: [
			"What kind of candidates are we looking for?",
			"What can I expect for the coffee chat?",
		],
	},
	{
		key: "tech",
		label: "Tech",
		text: <TechnologyText />,
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
		<section className="px-4 sm:px-6 md:px-10 py-12">
			<div className="mx-auto w-full max-w-[1032px] rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-6 sm:p-8 md:p-10 shadow-[0_3.2px_3.2px_#00000040] flex flex-col gap-6 md:gap-10">
				<h2 className="bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-[56px] md:leading-[64px] font-bold text-center">
					Learn About Our Committees
				</h2>

				<div className="rounded-[40px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] p-6 md:p-10 flex flex-col gap-6">
					<div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
						{COMMITTEES.map((c) => {
							const isActive = c.key === activeKey;
							return (
								<button
									key={c.key}
									type="button"
									onClick={() => setActiveKey(c.key)}
									className={`rounded-full px-4 py-2 text-sm md:text-base font-semibold transition-colors cursor-pointer ${
										isActive
											? "bg-[#B5EDC9] text-[#1f1e2d]"
											: "text-[#1f1e2d]/70 hover:text-[#1f1e2d]"
									}`}
								>
									{c.label}
								</button>
							);
						})}
					</div>

					<div className="rounded-2xl overflow-hidden bg-[#cccccc] aspect-[2.2/1]">
						<img
							src={PLACEHOLDER_IMAGE}
							alt={`${active.label} committee placeholder`}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="text-[#1f1e2d] text-sm md:text-[14.4px] leading-[1.5]">
						{active.text}
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="text-[#1f1e2d] font-bold text-base md:text-lg">
							Committee FAQs
						</h3>
						<div className="flex flex-col gap-4">
							{active.faqs.map((question, index) => (
								<Dropdown
									key={`${active.key}-${index}-${question}`}
									question={question}
								>
									Placeholder Answer
								</Dropdown>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
