import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { AppNavbar, Footer } from "app/containers";
import { Sponsorship, Events, About, Home, NotFound, Contact } from "app/views";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/sponsors" component={Sponsorship} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/mentor" component={() => {
              window.location.href = "https://hack.ics.uci.edu/contact/#mentors"
            }}/>
            <Route exact path="/recruit" component={() => {
              window.location.href = "https://forms.gle/brneFigWnpNAW26Y8";
            }}/>
            <Route exact path="/sponsorship-deck" component={() => {
              window.location.href = 'Hack%20at%20UCI%20Sponsorship%20Deck%202021-2022.pdf';
              return null;
            }}/>
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
