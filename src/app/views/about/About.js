import React, { Component } from "react";

import TeamSection from "../../containers/teamsection/TeamSection.js";

import "./About.scss";
import HeaderCord from "../../../assets/cord_1_kat.png";
import HeaderAnt from "../../../assets/ant_kat.png";

function About(props) {
  return (
    <div className="about">
      <div className="jumbotron jumbotron-fluid global-header">
        <div className="home-header-cord">
          <img src={HeaderCord} alt="usb-cord" />
        </div>
          <div className="home-header-ants">
          <img src={HeaderAnt} alt="ant" />
          <img src={HeaderAnt} alt="ant" />
          <img src={HeaderAnt} alt="ant" />
        </div>
        <div className="global-description-container container">
          <p className="global-description-font">
            Hack at UCI is an organization that promotes developer culture by
            encouraging people to think creatively, develop technology boldly,
            and pursue the leading edge of technical innovation.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container about-description">
          <p>
            There might be some text here explaining Hack at UCI’s mission
            statement, or maybe some general information about the different
            teams we have (Corporate, Marketing, Logistics, Graphics, Tech). I’m
            not sure. But I’m just going to put this placeholder text here so
            that I have a better idea of what things might look like lol. I’m
            also not too sure how we should organize our members. By team? Or
            maybe just put the directors near the top?
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
