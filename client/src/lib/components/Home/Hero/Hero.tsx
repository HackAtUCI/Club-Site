import React, { forwardRef } from "react";
import { motion, type Variants } from "framer-motion";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
	onClick?: () => void;
}

const containerVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.22,
			delayChildren: 0.25,
		},
	},
};

const itemVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 32,
		scale: 0.96,
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 1.25,
			ease: "easeOut",
		},
	},
};

const Hero = forwardRef<HTMLDivElement, HeroProps>(
	({ onClick, className = "", ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={`relative isolate flex min-h-[calc(100svh+12rem)] w-full flex-col items-center justify-center overflow-hidden px-6 pb-30 md:px-12 ${className}`}
				{...props}
			>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="show"
					className="relative z-10 flex max-w-4xl flex-col items-center gap-6 text-center md:gap-8"
				>
					<motion.p
						variants={itemVariants}
						className="glass-shadow rounded-full border text-primary px-6 py-2 text-2xl font-normal"
					>
						Est. 2013
					</motion.p>

					<motion.h1
						variants={itemVariants}
						className="text-6xl max-w-[18ch] gunmetal-text-gradient font-extrabold"
					>
						Hack At UCI
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="max-w-2xl text-lg font-medium text-black md:text-xl"
					>
						a student-run organization established to provide students with a
						platform to learn, grow, and develop technology of the future.
					</motion.p>

					<motion.button
						variants={itemVariants}
						whileHover={{
							scale: 1.08,
						}}
						whileTap={{
							scale: 0.96,
						}}
						type="button"
						onClick={onClick}
						className="glass-shadow mt-2 rounded-full gunmetal-gradient px-12 py-2.5 text-2xl font-bold cursor-pointer"
					>
						Learn More
					</motion.button>
				</motion.div>
			</div>
		);
	},
);

Hero.displayName = "Hero";

export default Hero;