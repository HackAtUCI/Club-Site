import { useState } from "react";

import "./Tabs.css";

export interface TabInterface {
	buttonText: string;
	tabComponent: React.ReactNode;
}

interface TabsInterface {
	title?: string;
	tabs: TabInterface[];
	useAltButton?: boolean;
}

export default function Tabs({
	title,
	tabs,
	useAltButton = false,
}: TabsInterface) {
	const [activeTab, setActiveTab] = useState<TabInterface | undefined>(tabs[0]);

	return (
		<>
			<div className="bg-[#2D2D3E] p-6 pb-12 sm:p-12 sm:pb-16 md:p-16 md:pb-20 lg:p-20 lg:pb-24">
				{title && <h2 className="text-subtitle text-center">{title}</h2>}
				<div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex items-center justify-center flex-wrap gap-2 sm:gap-4">
					{tabs.map((tab: TabInterface) =>
						useAltButton ? (
							<a
								key={tab.buttonText}
								onClick={() => setActiveTab(tab)}
								className={`anchor-color text-4xl ${
									activeTab?.buttonText === tab.buttonText ? "active" : ""
								} `}
							>
								{tab.buttonText}
							</a>
						) : (
							<button
								key={tab.buttonText}
								onClick={() => setActiveTab(tab)}
								className={`tab-button ${
									activeTab?.buttonText === tab.buttonText ? "active" : ""
								} `}
							>
								{tab.buttonText}
							</button>
						)
					)}
				</div>
			</div>
			<div className="relative -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">
				{activeTab?.tabComponent}
			</div>
		</>
	);
}
