import { motion } from "framer-motion";

export default function Hero() {
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
			viewport={{
				amount: 0.3,
				once: true,
			}}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
			className="flex flex-col md:flex-row justify-center items-center pt-36 pb-24 px-4 md:p-36 lg:p-56"
		>
			<div className="container z-40">
				<div className="flex rounded-4xl p-10 hack-white-gradient">
					<div className="flex flex-col gap-2 p-4 md:p-10 rounded-4xl items-center justify-center border border-white/10 glass-shadow">
						<h1 className="text-heading font-bold mb-4 gunmetal-text-gradient">
							About
						</h1>
						<p className="md:px-48 md:py-4 text-center text-base md:text-lg text-body gunmetal-text-gradient">
							Hack at UCI is Irvine’s premier collegiate hackathon committee. We
							strive to unite students passionate about hacking and retaining
							the spirit of community.
						</p>
						<img
							src={"team/group_hack_photo.webp"}
							alt="Hack About Group Photo"
							className="rounded-2xl md:rounded-4xl h-64 w-full object-cover md:h-auto md:w-auto"
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
