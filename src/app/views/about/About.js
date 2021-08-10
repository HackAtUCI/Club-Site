import React, { useState, useEffect } from "react";

import getSheetsData from "app/services/google-sheets-handler";
import TeamSection from "../../containers/teamsection/TeamSection.js";

import "./About.scss";
import { Header } from "../../containers";

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
