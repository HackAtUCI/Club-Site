import Hero from "./components/Hero";
import Committees from "./components/Committees";
import FAQs from "./components/FAQs";
import Background from "./components/Background";

export default function Recruitment() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<Background />

			<div className="relative z-20">
				<Hero showApplyButton={false} />
				<Committees />
				<FAQs />
			</div>
		</main>
	);
}