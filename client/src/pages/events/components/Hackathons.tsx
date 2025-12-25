import { useState } from "react";
import IrvineHacksTab from "./IrvineHacksTab";
import ZotHacksTab from "./ZotHacksTab";
import "@/lib/components/Tabs/Tabs.css";

type HackathonTab = "IrvineHacks" | "ZotHacks";

const hackathonTabs: {
	buttonText: HackathonTab;
	tabComponent: React.ReactNode;
}[] = [
	{
		buttonText: "IrvineHacks",
		tabComponent: <IrvineHacksTab />,
	},
	{
		buttonText: "ZotHacks",
		tabComponent: <ZotHacksTab />,
	},
];

export default function Hackathons() {
	const [activeTab, setActiveTab] = useState<HackathonTab>("IrvineHacks");

	const activeTabComponent = hackathonTabs.find(
		(tab) => tab.buttonText === activeTab
	)?.tabComponent;

	return (
		<>
			<div className="bg-[#2D2D3E] p-6 pb-12 sm:p-12 sm:pb-16 md:p-16 md:pb-20 lg:p-20 lg:pb-24">
				<h2 className="text-subtitle text-center">Our Hackathons</h2>
				<div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex items-center justify-center flex-wrap gap-2 sm:gap-4">
					{hackathonTabs.map((tab) => (
						<button
							key={tab.buttonText}
							onClick={() => setActiveTab(tab.buttonText)}
							className={`tab-button ${
								activeTab === tab.buttonText ? "active" : ""
							} `}
						>
							{tab.buttonText}
						</button>
					))}
				</div>
			</div>
			<div className="relative -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">
				{activeTabComponent}
			</div>
		</>
	);
}
