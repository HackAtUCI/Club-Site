import Committees from "./components/Committees";
import Hero from "./components/Hero";

const IS_RECRUITMENT_OPEN = false;

export default function Recruitment() {
	return (
		<>
			<Hero showApplyButton={IS_RECRUITMENT_OPEN} />
			<Committees showApplyButton={IS_RECRUITMENT_OPEN} />
		</>
	);
}
