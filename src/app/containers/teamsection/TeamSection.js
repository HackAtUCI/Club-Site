import React from "react";
import TeamCard from "../../containers/teamcard/TeamCard.js";

import "./TeamSection.scss";

function TeamSection({ team, members }) {
  return (
    <section>
      <h2 className="team-title">{team}</h2>
      <div className="team-grid">
        {members.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
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
