import React, { useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type StatColumnProps = {
	value: number;
	suffix?: string;
	prefix?: string;
	label: string;
	subLabel: string;
};

const StatColumn: React.FC<StatColumnProps> = ({
	value,
	suffix = "",
	prefix = "",
	label,
	subLabel,
}) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		amount: 0.4,
		once: true,
	});

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		duration: 2200,
		bounce: 0,
	});

	const [displayValue, setDisplayValue] = React.useState(0);

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, motionValue, value]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			setDisplayValue(Math.round(latest));
		});

		return () => unsubscribe();
	}, [springValue]);

	return (
		<div ref={ref} className="flex flex-1 flex-col items-center text-center">
			<h3 className="text-5xl font-extrabold leading-none text-black md:text-7xl">
				{prefix}
				{displayValue.toLocaleString()}
				{suffix}
			</h3>

			<p className="mt-3 text-xl font-semibold text-black md:text-3xl">
				{label}
			</p>

			<span className="mt-1 text-base text-medium text-black">{subLabel}</span>
		</div>
	);
};

const Stats: React.FC = () => {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 35,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{
				amount: 0.2,
				once: true,
			}}
			transition={{
				duration: 1.5,
				ease: "easeOut",
			}}
			className="mb-16 w-full md:mb-50"
		>
			<div className="hack-white-gradient-transparent mx-4 rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.25)] md:mx-0 md:w-full md:rounded-none">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 py-14 md:flex-row md:items-center md:justify-between md:gap-28">
					<StatColumn value={2600} suffix="+" label="Hackers" subLabel="since 2021" />
					<StatColumn
						value={35000}
						prefix="$"
						suffix="+"
						label="in Prizes"
						subLabel="since 2021"
					/>
					<StatColumn value={300} suffix="+" label="Projects" subLabel="since 2021" />
				</div>
			</div>
		</motion.section>
	);
};

export default Stats;