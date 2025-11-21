import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Navbar from "@/lib/components/Navbar/Navbar";
import Footer from "@/lib/components/Footer/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Events from "@/pages/events";
import Sponsors from "@/pages/sponsors";
import Recruitment from "@/pages/recruitment";
import Contact from "@/pages/contact";
import NotFound from "@/pages/notFound";

import "./App.css";

function App() {
	return (
		<div className="bg-dark-blue antialiased">
			<Router basename="/Club-Site">
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/events" component={Events} />
						<Route exact path="/sponsors" component={Sponsors} />
						<Route exact path="/recruitment" component={Recruitment} />
						<Route exact path="/contact" component={Contact} />
						{/* <Route
							exact
							path="/mentor"
							component={() => {
								window.location.href =
									"https://hack.ics.uci.edu/contact/#mentors";
							}}
						/> */}
						<Route
							exact
							path="/sponsorship-deck"
							component={() => {
								window.location.href =
									"Hack%20at%20UCI%20Sponsorship%20Deck%202021-2022.pdf";
								return null;
							}}
						/>
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
