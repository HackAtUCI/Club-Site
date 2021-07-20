import React from "react";

import TeamSection from "../../containers/teamsection/TeamSection.js";

import "./About.scss";
import { Header } from "../../containers";

function About(props) {
  return (
    <div className="about">
      <Header title="About Us"/>

      <div className="about-content">
        <div className="container about-description">
          <p>
            Hack at UCI strives to provide students with a platform to learn,
            grow, and develop technology of the future. With every event Hack at
            UCI puts on, there is an outstanding team behind it composed of
            three hardworking departments: Corporate, Marketing, and Logistics.
          </p>
        </div>
        <div className="container about-teams">
          <h1>
            <b>Our Teams</b>
          </h1>
          <TeamSection section="Corporate" />
          <TeamSection section="Marketing" />
          <TeamSection section="Logistics" />
          <TeamSection section="Alumni" />
        </div>
      </div>
    </div>
  );
}

export default About;
