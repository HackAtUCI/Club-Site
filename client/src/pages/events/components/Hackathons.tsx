import IrvineHacksTab from "./IrvineHacksTab";
import ZotHacksTab from "./ZotHacksTab";
import Tabs from "@/lib/components/Tabs/Tabs";

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
	return <Tabs tabs={hackathonTabs} title="Our Hackathons" />;
}
