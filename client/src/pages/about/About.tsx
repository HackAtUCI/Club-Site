import Background from "./components/Background";
import BackToTop from "../../lib/components/BackToTop/BackToTop";
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";

export default function About() {	
	return (
		<main className="relative min-h-screen overflow-hidden bg-dark-blue">
			<Background />	
			<Hero />
			<TeamSection />
			<BackToTop />	
		</main>
	);
}
