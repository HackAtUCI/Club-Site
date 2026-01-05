import Tabs, { type TabInterface } from "@/lib/components/Tabs/Tabs";
import Box from "@/lib/components/Box/Box";
// import PrimaryButton from "../PrimaryButton/PrimaryButton";
import CorporateText from "./committee-texts/CorporateText";
import LogisticsText from "./committee-texts/LogisticsText";
import MarketingText from "./committee-texts/MarketingText";
import GraphicsText from "./committee-texts/GraphicsText";
import TechnologyText from "./committee-texts/TechnologyText";

// Extend TabInterface to restrict buttonText to specific committee names
interface CommitteeTabInterface extends Omit<TabInterface, "buttonText"> {
	buttonText:
		| "Corporate"
		| "Logistics"
		| "Marketing"
		| "Graphics"
		| "Technology";
}

const committeeTabs: CommitteeTabInterface[] = [
	{
		buttonText: "Corporate",
		tabComponent: (
			<RecruitmentTab
				headingText="Corporate"
				textComponent={<CorporateText />}
			/>
		),
	},
	{
		buttonText: "Logistics",
		tabComponent: (
			<RecruitmentTab
				headingText="Logistics"
				textComponent={<LogisticsText />}
			/>
		),
	},
	{
		buttonText: "Marketing",
		tabComponent: (
			<RecruitmentTab
				headingText="Marketing"
				textComponent={<MarketingText />}
			/>
		),
	},
	{
		buttonText: "Graphics",
		tabComponent: (
			<RecruitmentTab headingText="Graphics" textComponent={<GraphicsText />} />
		),
	},
	{
		buttonText: "Technology",
		tabComponent: (
			<RecruitmentTab
				headingText="Technology"
				textComponent={<TechnologyText />}
			/>
		),
	},
];

function RecruitmentTab({
	textComponent,
	headingText,
}: {
	textComponent: React.ReactNode;
	headingText: string;
}) {
	return (
		<>
			<Box className="pt-18 pb-24">
				<h3 className="text-subtitle mb-8">{headingText}</h3>
				{textComponent}
			</Box>
			{/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <PrimaryButton
                    className="px-[10rem]"
                    variant="apply"
                >
                    Apply
                </PrimaryButton>
            </div> */}
		</>
	);
}

export default function Committees() {
	return (
		<section className="py-30">
			<h2 className="text-subtitle text-center">Our Committees</h2>
			<Tabs tabs={committeeTabs} />
		</section>
	);
}
