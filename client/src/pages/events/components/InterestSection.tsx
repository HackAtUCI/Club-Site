import { motion } from "framer-motion";

import { FaInstagram, FaDiscord } from "react-icons/fa";

function PrimaryFormButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="w-full rounded-full gunmetal-gradient px-6 py-3 text-center text-white text-base sm:text-lg md:text-xl font-medium tracking-wide transition-transform duration-200 hover:scale-[1.02]"
		>
			{children}
		</a>
	);
}

export default function InterestSection() {
	return (
		<section className="px-6 md:px-10 py-6 md:pb-32">
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
				className="mx-auto w-full max-w-5xl rounded-[40px] hack-white-gradient p-8 sm:p-10 md:p-12"
			>
				<div className="glass-shadow rounded-[36px] bg-[#F2F2F233] px-6 py-12 sm:px-10 md:px-16 md:py-16 flex flex-col items-center">
					<h2 className="max-w-[680px] text-center gunmetal-text-gradient text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
						Interested in competing, mentoring, or volunteering?
					</h2>

					<p className="mt-8 text-center text-black text-sm sm:text-base md:text-lg">
						Get updates by joining our discord or following our instagram!
					</p>

					<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-24">
						<a
							href="https://discord.gg/xhU5MA5Q"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 hover:opacity-80 transition-opacity"
						>
							<FaDiscord className="h-14 w-14 sm:h-16 sm:w-16"/>
							<span className="text-black text-sm sm:text-base font-bold underline">
								Discord Invite
							</span>
						</a>

						<a
							href="https://www.instagram.com/hackatuci/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 hover:opacity-80 transition-opacity"
						>
							<FaInstagram className="h-14 w-14 sm:h-16 sm:w-16"/>
							<span className="text-black text-sm sm:text-base font-bold underline">
								@HackatUCI
							</span>
						</a>
					</div>

					<div className="mt-8 flex w-full max-w-[430px] flex-col gap-4">
						<PrimaryFormButton href="https://docs.google.com/forms/d/e/1FAIpQLScRh7rVG4abACgz2WHSM7sY9YK51BXDnlkiy8BoAOoPbt6wQg/viewform">
							Interest form for ZotHacks Mentors
						</PrimaryFormButton>

						<PrimaryFormButton href="#">
							Interest form for ZotHacks Judging
						</PrimaryFormButton>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
