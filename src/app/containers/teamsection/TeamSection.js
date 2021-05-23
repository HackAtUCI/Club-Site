import React from "react";
import TeamCard from "../../containers/teamcard/TeamCard.js";

import "./TeamSection.scss";

function TeamSection({ team, members }) {
  return (
    <section>
      <h3 className="team-title">{team}</h3>
      <div className="team-grid">
        {members.map((member) => (
          <TeamCard
            key={member.firstName + " " + member.lastName}
            firstName={member.firstName}
            lastName={member.lastName}
            position={member.position}
            image={member.image}
            linkedInUrl={member.linkedInUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
