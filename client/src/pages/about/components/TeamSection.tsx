import React from "react";
import TeamCard from "./TeamCard";
import { teamMembers } from "../../../data/team"; 

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedInUrl?: string;
}

export default function TeamSection() {
  return (
    <div className="flex flex-col gap-16 p-10 md:p-56">
      {Object.entries(teamMembers).map(([teamName, members]: [string, TeamMember[]]) => (
        
        <section key={teamName} className="w-full">
          
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{teamName}</h2>
          </div>

          <div
            className="grid grid-cols-1 place-items-center md:grid-cols-5 md:place-items-start"
          >
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
      
      ))}
    </div>
  );
}
