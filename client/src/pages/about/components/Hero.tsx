import retreatImg from "@/assets/images/Retreat2025.jpeg"
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
			viewport={{ amount: 0.3 }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
			className="flex flex-col md:flex-row justify-center items-center pt-36 pb-24 px-4 md:p-36 lg:p-56"
		>
			<div className="container z-40">
				<div className="flex rounded-[40px] p-10 bg-gradient-to-b from-[#ECEFFD] to-[#B7C2F3]">
					<div className="flex flex-col gap-2 p-4 md:p-10 rounded-[40px] items-center justify-center border border-white/10 bg-white/20 backdrop-blur-lg shadow-[0_3px_3px_0px_#00000040,inset_0_3px_3px_0px_#00000040]">
						<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-[#2D2D3E] via-[#2D2D3E] to-[#4D4D70E5] bg-clip-text text-transparent ">
							About
						</h1>
						<p className="text-center text-base md:text-lg text-[#2D2D3E]">
							Hack at UCI is Irvine’s premiere collegiate hackathon committee.
							We strive to unite students passionate about hacking and retaining 
							the spirit of community.
						</p>
						<img
							src={retreatImg}
							alt="Hack About Group Photo"
							className="rounded-2xl md:rounded-[40px]"
						/>
					</div>

				</div>
			</div>
		</motion.section>
	);
}
