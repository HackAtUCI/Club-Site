// import React, { useState, useEffect } from "react";

import { Header } from "app/containers";
// import getSheetsData from "app/services/google-sheets-handler";
import TeamPhoto from "../../../assets/team/group_hack_photo.jpg";

import TeamSection from "./TeamSection";
import "./About.scss";

import { teamMembers } from "../../../data/team.js"

function About() {
  // const [teamMembers, setTeamMembers] = useState({});

  // useEffect(() => {
  //   getSheetsData("members")
  //     .then((data) => {
  //       setTeamMembers(data);
  //     })
  //     .catch((err) => {
  //       console.log("could not acquire team members:", err);
  //     });
  // }, []);

  return (
    <div className="about">
      <Header title="About Us" />

      <div className="about-content">
        <div className="container about-description">
          <h2 className="mission-statement">Our Mission Statement</h2>
          <p>Promote, educate, and enhance the community around us by giving students the platform to learn and create technology.</p>
        </div>
        <div className="team-photo">
          <img src={TeamPhoto} alt="hackuci team"/>
        </div>
        <div className="gray-background">
          <div className="container about-description">
            <h2>Meet the Team</h2>
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
