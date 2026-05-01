import React from "react";

type StatColumnProps = {
	value: string;
	label: string;
	subLabel: string;
};

const StatColumn: React.FC<StatColumnProps> = ({ value, label, subLabel }) => {
	return (
		<div className="flex flex-1 flex-col items-center text-center">
			<h3 className="text-black text-5xl font-extrabold leading-none md:text-7xl">
				{value}
			</h3>
			<p className="mt-3 text-xl font-semibold text-black md:text-3xl">{label}</p>
			<span className="mt-1 text-base text-black text-medium">{subLabel}</span>
		</div>
	);
};

const Stats: React.FC = () => {
	return (
		<section className="w-full">
			<div className="hack-white-gradient-transparent w-full shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between md:gap-28 ">
					<StatColumn value="2600+" label="Hackers" subLabel="since 2021" />
					<StatColumn value="$35,000+" label="in Prizes" subLabel="since 2021" />
					<StatColumn value="300+" label="Projects" subLabel="since 2021" />
				</div>
			</div>
		</section>
	);
};

export default Stats;