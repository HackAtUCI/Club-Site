import Hero from "@/lib/components/Home/Hero/Hero";
import AboutUs from "@/lib/components/Home/AboutUs/AboutUs";
import Events from "@/lib/components/Home/Events/Events";
import Sponsors from "@/lib/components/Home/Sponsors/Sponsors";

export default function Home() {
	return (
		<div className="home-background min-h-screen">
			<Hero />
			<AboutUs />
			<Events />
			<Sponsors />
		</div>
	);
}
