import React, { useState, useEffect } from "react";

import getSheetsData from "app/services/google-sheets-handler";
import TeamSection from "../../containers/teamsection/TeamSection.js";
import TeamPhoto from "../../../assets/team/hack_group_photo.svg";

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
          <h1 className="mission-statement">Our Mission Statement</h1>
          <p>Promote, educate, and enhance the community around us by giving students the platform to learn and create technology.</p>
        </div>
        <div className="team-photo">
          <img src={TeamPhoto} alt="hackuci team"/>
        </div>
        <div className="gray-background">
          <div className="container about-description">
            <h1>Meet the Team</h1>
            <p>
              We strive to provide students with a platform to learn, grow, and develop technology of the future.
              With every event Hack at UCI puts on, there is an outstanding team behind it composed of four hardworking
              departments: Corporate, Marketing, Logistics, and Tech.
            </p>
          </div>
          <div className="container about-teams">
            {Object.entries(teamMembers).map(([team, members]) => (
              <TeamSection key={team} team={team} members={members} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
