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
		<div className="rounded-[24px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] p-5 md:p-6 flex flex-col gap-3">
			<div>
				<h3 className="text-[#1f1e2d] font-bold text-base md:text-lg">
					{name}
				</h3>
				<p className="text-[#1f1e2d]/70 text-sm">{role}</p>
			</div>
			<p className="text-[#1f1e2d] text-sm md:text-base">{statement}</p>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-6 md:py-8">
			<div className="mx-auto w-full max-w-[1032px] rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-6 sm:p-8 md:p-10 shadow-[0_3.2px_3.2px_#00000040] flex flex-col gap-6 md:gap-8">
				<div className="rounded-[40px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] px-6 py-6 flex items-center justify-center">
					<h2 className="text-[#1f1e2d] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
						Build, Learn, Connect
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{TESTIMONIES.map((t, i) => (
						<TestimonyCard key={i} {...t} />
					))}
				</div>
			</div>
		</section>
	);
}
