import Background from "./components/Background";
import BackToTop from "./components/BackToTop";
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";

export default function About() {	
	return (
		<div className="relative">
			<Background />	
			<Hero />
			<TeamSection />
			<BackToTop />	
		</div>
	);
}
