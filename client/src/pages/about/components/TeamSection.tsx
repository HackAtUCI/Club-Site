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
		<section className="flex justify-center items-center px-10 py-30 md:px-36 lg:px-56">
			<div className="container">
				<div className="flex flex-col gap-16">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Meet the Team
						</h1>
						<p className="text-lg md:text-2xl">
							We strive to provide students with a platform to learn, grow, and
							develop technology of the future. With every event Hack at UCI
							puts on, there is an outstanding team behind it composed of four
							hardworking departments: Corporate, Marketing, Logistics, and
							Tech.
						</p>
					</div>
					{Object.entries(teamMembers).map(
						([teamName, members]: [string, TeamMember[]]) => (
							<section key={teamName} className="w-full">
								<div className="flex items-center gap-2 mb-6">
									<h2 className="text-2xl md:text-3xl font-bold text-white">
										{teamName}
									</h2>
								</div>

								<div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-5 md:place-items-start">
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
