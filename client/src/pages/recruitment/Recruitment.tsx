import Hero from "./components/Hero";
import Committees from "./components/Committees";
import FAQs from "./components/FAQs";

const IS_RECRUITMENT_OPEN = true;

export default function Recruitment() {
	return (
		<>
			<Hero showApplyButton={IS_RECRUITMENT_OPEN} />
			<Committees />
			<FAQs />
		</>
	);
}
