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
			className="flex flex-col lg:flex-row justify-center items-center pt-36 pb-24 px-4 lg:p-48"
		>
			<div className="container z-40">
				<div className="flex rounded-4xl p-10 hack-white-gradient">
					<div className="flex flex-col gap-2 p-4 lg:p-10 rounded-4xl items-center justify-center border border-white/10 glass-shadow">
						<h1 className="text-heading font-bold mb-4 gunmetal-text-gradient">
							About
						</h1>
						<p className="lg:px-48 lg:py-4 text-center text-base lg:text-lg text-body gunmetal-text-gradient">
							Hack at UCI is Irvine’s premier collegiate hackathon committee. We
							strive to unite students passionate about hacking and retaining
							the spirit of community.
						</p>
						<img
							src={"team/group_hack_photo.webp"}
							alt="Hack About Group Photo"
							className="rounded-2xl lg:rounded-4xl h-64 w-full object-cover lg:h-auto lg:w-auto"
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
