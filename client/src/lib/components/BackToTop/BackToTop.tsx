import { motion } from "framer-motion";

export default function BackToTop() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 80,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{ amount: 0.1 }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
			className="z-50 flex items-center justify-center pb-24"
		>
			<motion.button
				onClick={scrollToTop}
				whileHover={{
					scale: 1.04,
					y: -4,
				}}
				whileTap={{
					scale: 0.97,
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 18,
				}}
				className="z-50 cursor-pointer rounded-4xl p-6 hack-white-gradient"
			>
				<div className="flex w-full items-center justify-center rounded-4xl border border-white/10 px-10 py-2 glass-shadow">
					<h1 className="gunmetal-text-gradient text-2xl font-bold md:text-4xl">
						Back to the top
					</h1>
				</div>
			</motion.button>
		</motion.section>
	);
}