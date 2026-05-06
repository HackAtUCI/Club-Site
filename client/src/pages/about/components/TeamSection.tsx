import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/team.ts";
import { motion } from "framer-motion";

interface TeamMember {
	name: string;
	position: string;
	image: string;
	linkedInUrl?: string;
}

const teamGridVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.18,
		},
	},
};

export default function TeamSection() {
	return (
		<section className="flex justify-center items-center text-[#2D2D3E] px-6 md:px-10 pb-30 lg:px-46">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.05 }}
				transition={{
					duration: 0.1,
					ease: "easeOut",
				}}
				className="container z-40"
			>
				<div className="flex flex-col gap-16 rounded-4xl px-4 md:px-10 py-16 hack-white-gradient">
					<div className="flex justify-center">
						<h1 className="text-heading font-bold md:mb-4 gunmetal-text-gradient">
							Our Team
						</h1>
					</div>

					{Object.entries(teamMembers).map(
						([teamName, members]: [string, TeamMember[]]) => (
							<section
								key={teamName}
								className="w-full p-4 md:p-10 rounded-4xl border border-white/10 glass-shadow"
							>
								<div className="flex items-center justify-center gap-2 mb-6">
									<h2 className="text-2xl md:text-3xl font-bold">{teamName}</h2>
								</div>

								<motion.div
									variants={teamGridVariants}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-5 md:place-items-start"
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
								</motion.div>
							</section>
						)
					)}
				</div>
			</motion.div>
		</section>
	);
}
