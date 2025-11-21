import Tabs, { type TabInterface } from "@/lib/components/Tabs/Tabs";
import IrvineHacksTab from "./IrvineHacksTab";
import ZotHacksTab from "./ZotHacksTab";
interface HackathonTabInterface extends Omit<TabInterface, "buttonText"> {
	buttonText: "IrvineHacks" | "ZotHacks";
}

const hackathonTabs: HackathonTabInterface[] = [
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
	return (
		<>
			<h2 className="text-subtitle text-center">Our Hackathons</h2>
			<Tabs tabs={hackathonTabs} useAltButton />
		</>
	);
}
