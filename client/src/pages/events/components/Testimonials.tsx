import { motion } from "framer-motion";

interface Testimony {
	name: string;
	role: string;
	statement: string;
}

const PLACEHOLDER_TESTIMONY: Testimony = {
	name: "FirstName LastName",
	role: "Role @ Event",
	statement: "Testimony Statement that we can pull from feedback forms",
};

const TESTIMONIES: Testimony[] = Array.from({ length: 6 }, () => ({
	...PLACEHOLDER_TESTIMONY,
}));

function TestimonyCard({ name, role, statement }: Testimony) {
	return (
		<div className="rounded-3xl glass-shadow bg-[#F2F2F233] p-5 md:p-6 flex flex-col gap-3">
			<div>
				<h3 className="text-black font-bold text-base md:text-lg">
					{name}
				</h3>
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
					{TESTIMONIES.map((t, i) => (
						<TestimonyCard key={i} {...t} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
