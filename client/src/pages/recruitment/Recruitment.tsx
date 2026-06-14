import Hero from "./components/Hero";
import Committees from "./components/Committees";
import RecruitmentTimeline from "./components/RecruitmentTimeline";
import FAQs from "./components/FAQs";
import Background from "./components/Background";
import BackToTop from "../../lib/components/BackToTop/BackToTop";

export default function Recruitment() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<Background />

			<div className="relative z-20">
				<Hero showApplyButton={false} />
				<Committees />
				<RecruitmentTimeline />
				<FAQs />
				<BackToTop />
			</div>
		</main>
	);
}
