import React from "react";
import TeamCard from "../../containers/teamcard/TeamCard.js";
import TeamInfo from "../../../assets/team/team.json";

import "./TeamSection.scss";

function TeamSection(props) {
  return (
    <div>
      <h1 className="team-title">
        <b> {props.section}</b>
      </h1>
      <div className="team-grid">
        {TeamInfo[props.section] &&
          TeamInfo[props.section].map(function(item, i) {
            return (
              <TeamCard
                firstName={item["first_name"]}
                lastName={item["last_name"]}
                linkedinUrl={item["linkedin"]}
                position={item["position"]}
                profpic={item["image"]}
              />
            );
          })}
      </div>
    </div>
  );
}

export default TeamSection;
