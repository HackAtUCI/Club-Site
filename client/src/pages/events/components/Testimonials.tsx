import { motion } from "framer-motion";

interface Testimony {
	name: string;
	role: string;
	statement: string;
}

const TESTIMONIES: Testimony[] = [
	{
		name: "Anonymous Hacker",
		role: "Hacker @ IrvineHacks 2026",
		statement:
			"The hacking space was very lively, I've been to other hackathons where the hacking space was too big or not populated, but IrvineHacks was great!",
	},
	{
		name: "Anonymous Mentor",
		role: "Mentor @ ZotHacks 2025",
		statement:
			"I loved seeing the eagerness and curiosity of my team! Watching them grow, overcome challenges, and feel proud of their final project was extremely rewarding.",
	},
	{
		name: "Anonymous Hacker",
		role: "Hacker @ IrvineHacks 2026",
		statement:
			"My favorite part of IrvineHacks was meeting new people and just putting myself out there for exposure and projects. I enjoyed the new experience and it was very insightful.",
	},
	{
		name: "Anonymous Hacker",
		role: "Hacker @ ZotHacks 2025",
		statement:
			"I loved how organized it was, how helpful the staff was, and how they facilitated learning instead of just making it a rat race to win the competition. Seriously one of the best hackathons I've been to. Will do again.",
	},
	{
		name: "Anonymous Volunteer",
		role: "Volunteer @ IrvineHacks 2026",
		statement:
			"I really enjoyed meeting the other volunteers and hack members. Everyone was very welcoming and I would like to help out next year! You guys are the best!",
	},
	{
		name: "Anonymous Hacker",
		role: "Hacker @ IrvineHacks 2026",
		statement:
			"I liked the community a lot, everyone was very friendly and supportive. The mentors and organizers were some of the best support I've seen in a hackathon.",
	},
];

function TestimonyCard({ name, role, statement }: Testimony) {
	return (
		<div className="rounded-3xl glass-shadow bg-[#F2F2F233] p-5 md:p-6 flex flex-col gap-3">
			<div>
				<h3 className="text-black font-bold text-base md:text-lg">{name}</h3>
				<p className="text-black/70 text-sm">{role}</p>
			</div>

			<p className="text-black text-sm md:text-base">{statement}</p>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section className="px-6 md:px-10 py-6 md:py-8">
			<motion.div
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
				className="mx-auto w-full max-w-5xl rounded-[40px] hack-white-gradient p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-8"
			>
				<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] px-6 py-6 flex items-center justify-center">
					<h2 className="gunmetal-text-gradient text-2xl sm:text-3xl md:text-4xl font-bold text-center">
						Build, Learn, Connect
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{TESTIMONIES.map((t) => (
						<TestimonyCard key={`${t.name}-${t.role}`} {...t} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
