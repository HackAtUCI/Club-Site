import React from "react";

type AlumniCardProps = {
	name: string;
	title: string;
	company: string;
	quote: string;
};

const AlumniCard: React.FC<AlumniCardProps> = ({ name, title, company, quote }) => {
	return (
		<div className="box-shadow flex h-full flex-col rounded-[22px] bg-white/20 p-6 md:p-7">
			<div className="flex items-start justify-between gap-4">
				<div className="flex items-center gap-4">
					<div className="h-12 w-12 shrink-0 rounded-full bg-black/10 ring-1 ring-black/10" />
					<div className="min-w-0">
						<p className="truncate text-lg font-bold text-primary md:text-xl">
							{name}
						</p>
						<p className="truncate text-sm font-semibold text-black/70 md:text-base">
							{title}
						</p>
					</div>
				</div>

				<span className="shrink-0 text-3xl leading-none text-black/60">“</span>
			</div>

			<p className="mt-4 flex-1 text-sm leading-6 text-black/80 md:text-base md:leading-7">
				{quote}
			</p>

			<div className="mt-5 flex items-center justify-between gap-4">
				<span className="text-sm font-semibold text-black/70 md:text-base">
					{company}
				</span>
				<span className="text-3xl leading-none text-black/60">”</span>
			</div>
		</div>
	);
};

const OurAlumni: React.FC = () => {
	return (
		<section className="flex w-full justify-center px-4 py-14 md:px-8 md:py-18">
			<div className="hack-white-gradient w-full max-w-7xl rounded-[45px] p-6 md:p-10">
				<div className="box-shadow rounded-[45px] bg-white/20 p-6 md:p-10">
					<div className="mb-8 flex flex-col items-center text-center md:mb-12">
						<h2 className="gunmetal-text-gradient text-4xl font-extrabold leading-none md:text-5xl">
							Our Alumni
						</h2>
						<p className="mt-3 text-base text-black/75 md:text-lg">
              Over the years, our alumni have gone on to do great things beyond Hack at UCI. Here are some of their experiences!
						</p>
					</div>

					<div className="flex flex-col gap-6 md:flex-row md:gap-10">
						<AlumniCard
							name="Alex Ngo"
							title="Corporate Director"
							company="Hack at UCI '23-'26"
							quote="Hack at UCI gave me the confidence to ship real projects with a team. The community is unmatched."
						/>
						<AlumniCard
							name="Priya Patel"
							title="Product Designer"
							company="Figma"
							quote="Organizing events taught me how to lead, communicate, and build experiences that people actually love."
						/>
						<AlumniCard
							name="Ethan Lee"
							title="Data Scientist"
							company="Meta"
							quote="From workshops to hackathons, I learned more by building alongside others than I ever did alone."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurAlumni;