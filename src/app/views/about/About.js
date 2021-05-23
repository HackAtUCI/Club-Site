import React, { useState, useEffect } from "react";

import getSheetsData from "app/services/google-sheets-handler";
import TeamSection from "../../containers/teamsection/TeamSection.js";

import "./About.scss";
import HeaderCord from "../../../assets/cord_1_kat.png";
import HeaderAnt from "../../../assets/ant_kat.png";

function About(props) {
  const [teamMembers, setTeamMembers] = useState({});

  useEffect(() => {
    getSheetsData("members")
      .then((data) => {
        setTeamMembers(data);
      })
      .catch((err) => {
        console.log("could not acquire team members:", err);
      });
  }, []);

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
          <img src={HeaderAnt} alt="ant" />
        </div>
        <div className="global-description-container container">
          <p className="global-description-font">
            Hack at UCI is a student-run organization established to provide
            students with a platform to learn, grow, and develop technology of
            the future. Established in 2013, our mission is to promote, educate,
            and enhance the community around us by giving students the platform
            to learn and create technology.
          </p>
        </div>
      </div>

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
          <h2>Our Teams</h2>
          {Object.entries(teamMembers).map(([team, members]) => (
            <TeamSection key={team} team={team} members={members} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
