import { useState } from "react";

import "./Tabs.css";

export interface TabInterface {
	buttonText: string;
	tabComponent: React.ReactNode;
}

interface TabsInterface {
	tabs: TabInterface[];
	useAltButton?: boolean;
}

export default function Tabs({ tabs, useAltButton = false }: TabsInterface) {
	const [activeTab, setActiveTab] = useState<TabInterface | undefined>(tabs[0]);

	return (
		<div>
			<div className="my-12 flex items-center justify-center">
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
			<div className="relative">{activeTab?.tabComponent}</div>
		</div>
	);
}
