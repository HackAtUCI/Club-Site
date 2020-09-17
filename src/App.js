import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import "./App.scss";

import { AppNavbar } from "./app/containers";
import { Footer } from "./app/containers";

import { Sponsorship, Events, About, Home, NotFound, Contact } from "app/views";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/sponsors" component={Sponsorship} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
