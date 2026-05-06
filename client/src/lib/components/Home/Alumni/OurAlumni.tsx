import React from "react";
import { motion } from "framer-motion";

type AlumniCardProps = {
	name: string;
	quote: string;
	hackRole: string;
	hackPeriod: string;
	companyTitle: string;
	company: string;
};

const AlumniCard: React.FC<AlumniCardProps> = ({
	name,
	quote,
	hackRole,
	hackPeriod,
	companyTitle,
	company,
}) => {
	return (
		<div className="glass-shadow relative flex flex-col h-full rounded-[36px] bg-white/20 p-7 md:p-8">
			<div className="absolute left-7 top-6 select-none text-[44px] font-black leading-none text-black/70 md:left-8 md:top-7 md:text-[52px]">
				“
			</div>

			<p className="mt-10 flex-1 text-balance text-md italic leading-[1.35] text-black md:mt-12">
				{quote}
			</p>

			<div className="mt-3">
				<p className="text-lg font-black leading-none tracking-[-0.02em] text-[#2d2d3e] md:text-xl">
					{name}
				</p>

				<div className="mt-2 flex flex-col gap-3 text-[#2d2d3e] lg:flex-row md:items-stretch md:gap-3">
					<div className="md:max-w-60">
						<p className="whitespace-nowrap text-xs font-extrabold leading-tight md:text-xs">
							{hackRole}
						</p>
						<p className="text-xs font-extrabold leading-tight md:text-xs">
							{hackPeriod}
						</p>
					</div>

					<div className="hidden w-[3px] shrink-0 self-stretch rounded bg-[#2d2d3e] md:block" />

					<div className="md:max-w-60">
						<p className="text-xs font-extrabold leading-tight md:text-xs">
							{companyTitle}
						</p>
						<p className="text-xs font-extrabold leading-tight md:text-xs">
							@ {company}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const OurAlumni: React.FC = () => {
	const alumni: AlumniCardProps[] = [
		{
			name: "Alex Ngo",
			hackRole: "Corporate Director",
			hackPeriod: "Hack at UCI '23-'26",
			companyTitle: "Product Manager Intern",
			company: "Microsoft",
			quote:
				"Being part of Hack at UCI for three years shaped my college experience. It helped me grow as a public speaker, build a professional network, and find a community of close friends. Giving back through hackathons and supporting other students has been incredibly rewarding.",
		},
		{
			name: "Audrey Lam",
			hackRole: "Corporate Organizer",
			hackPeriod: "Hack at UCI '22-'24",
			companyTitle: "Software Engineer",
			company: "The Trade Desk",
			quote:
				"Working with sponsors helped me gain confidence when interviewing for a job. I met a lot of other Hack members who not only inspired me and helped me navigate the CS world, but are also some of my closest friends.",
		},
		{
			name: "Randy Huynh",
			hackRole: "Tech Organizer",
			hackPeriod: "Hack at UCI '22-'24",
			companyTitle: "Software Engineer",
			company: "Amazon",
			quote:
				"I really liked the people I met and talked to within Hack and in hackathons (mentors, volunteers, sponsors and hackers). Many of the organizers I worked with are still my closest friends to this day.",
		},
	];

	return (
		<motion.section
			initial={{
				opacity: 0,
				scale: 0.5,
			}}
			whileInView={{
				opacity: 1,
				scale: 1,
			}}
			viewport={{
				amount: 0.15,
			}}
			transition={{
				duration: 0.7,
				ease: "easeOut",
				delay: 0.35,
			}}
			className="flex w-full justify-center py-14 md:py-18"
		>
			<div className="mx-auto w-full max-w-7xl px-4 md:px-8">
				<div className="hack-white-gradient w-full rounded-[45px] p-6 md:p-10">
					<div className="glass-shadow rounded-[45px] bg-white/20 p-6 md:p-10">
						<div className="mb-8 flex flex-col items-center text-center md:mb-12">
							<h2 className="gunmetal-text-gradient text-4xl font-extrabold leading-none md:text-5xl">
								Our Alumni
							</h2>
							<p className="mt-3 text-base text-black/75 md:text-lg">
								Over the years, our alumni have gone on to do great things
								beyond Hack at UCI. Here are some of their experiences!
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-8">
							{alumni.map((a) => (
								<div key={a.name} className="h-full">
									<AlumniCard {...a} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default OurAlumni;
