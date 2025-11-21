import {
	Route,
	Switch,
	BrowserRouter as Router,
	NavLink,
} from "react-router-dom";

import "./App.css";

function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Events() {
	return <h2>Events</h2>;
}

function Sponsorship() {
	return <h2>Sponsorship</h2>;
}

function Recruitment() {
	return <h2>Recruitment</h2>;
}

function Contact() {
	return <h2>Contact</h2>;
}

function NotFound() {
	return <h2>404 Not Found</h2>;
}

function AppNavbar() {
	return (
		<div>
			<NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> |{" "}
			<NavLink to="/events">Events</NavLink> |{" "}
			<NavLink to="/sponsors">Sponsorship</NavLink> |{" "}
			<NavLink to="/recruit">Recruitment</NavLink> |{" "}
			<NavLink to="/contact">Contact</NavLink>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<Router basename="/Club-Site">
				<div>
					<AppNavbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/events" component={Events} />
						<Route exact path="/sponsors" component={Sponsorship} />
						<Route exact path="/recruit" component={Recruitment} />
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
					{/* <Footer /> */}
				</div>
			</Router>
		</div>
	);
}

export default App;
