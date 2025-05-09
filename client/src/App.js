import React from "react";
import {
	Route,
	Switch,
	BrowserRouter as Router,
	useLocation,
} from "react-router-dom";

import { AppNavbar, Footer } from "app/containers";
import {
	Sponsorship,
	Events,
	About,
	Home,
	NotFound,
	Contact,
	Recruitment,
} from "app/views";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

function AppWrapper() {
	const location = useLocation();

	console.log(location.pathname);

	// Home page and about page have background gradients in the Figma file.
	// If either of the routes are selected, then add the appropriate css class.
	let cn = "App";
	if (location.pathname === "/") {
		cn += " home-background";
	} else if (location.pathname === "/about") {
		cn += " about-background";
	}

	return (
		<div className={cn}>
			<AppNavbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/sponsors" component={Sponsorship} />
				<Route exact path="/recruit" component={Recruitment} />
				<Route exact path="/contact" component={Contact} />
				<Route
					exact
					path="/mentor"
					component={() => {
						window.location.href = "https://hack.ics.uci.edu/contact/#mentors";
					}}
				/>
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
	);
}

function App() {
	return (
		<Router>
			<AppWrapper />
		</Router>
	);
}

export default App;
