import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team.ts";

interface TeamMember {
	name: string;
	position: string;
	image: string;
	linkedInUrl?: string;
}

export default function TeamSection() {
	return (
		<section className="flex justify-center items-center text-[#2D2D3E] px-10 pb-30 md:px-36 lg:px-46">
			<div className="container z-40">
				<div className="flex flex-col gap-16 rounded-[40px] px-10 py-16 bg-gradient-to-b from-[#ECEFFD] to-[#B7C2F3]">
					<div className="flex justify-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-[#2D2D3E] to-[#4D4D70E5] bg-clip-text text-transparent ">
							Our Team
						</h1>
					</div>
					{Object.entries(teamMembers).map(
						([teamName, members]: [string, TeamMember[]]) => (
							<section key={teamName} className="w-full p-10 rounded-[40px] bg-white/20 backdrop-blur-lg shadow-[0_3px_3px_0px_#00000040,inset_0_3px_3px_0px_#00000040]">
								<div className="flex items-center justify-center gap-2 mb-6">
									<h2 className="text-2xl md:text-3xl font-bold">
										{teamName}
									</h2>
								</div>

								<div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 md:place-items-start">
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
						)
					)}
				</div>
			</div>
		</section>
	);
}
