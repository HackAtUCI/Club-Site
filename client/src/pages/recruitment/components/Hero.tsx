import { motion } from "framer-motion";

import RecruitmentGroupPic from "@/assets/images/RecruitmentGroupPic.jpg";

const APPLY_URL =
	"https://www.notion.so/hackatuci/Hack-at-UCI-Spring-2026-Organizer-Recruitment-311393c84e5d80fabf9eea424ddee5c7?source=copy_link";

function HeaderPill() {
	return (
		<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] px-6 py-6 flex items-center justify-center text-heading">
			<h1 className="gunmetal-text-gradient text-heading">
				Recruitment
			</h1>
		</div>
	);
}

function JoinUsCard({ showApplyButton }: { showApplyButton: boolean }) {
	return (
		<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] flex flex-col justify-between gap-6 p-6 md:p-8 flex-1 md:max-w-[490px]">
			<div className="flex flex-col gap-4">
				<h2 className="gunmetal-text-gradient text-2xl md:text-[32px] leading-[1.2] font-bold">
					Join Us!
				</h2>

				<div className="flex flex-col gap-3 text-black text-sm md:text-[14.4px] leading-[1.35]">
					<p>
						More than organizing hackathons, we're a community where you'll{" "}
						<strong>build</strong> real projects, <strong>grow</strong> as a
						professional, and <strong>belong</strong> to a group of people who
						genuinely care about you.
					</p>

					<p>
						From annual retreats to casual meetups, we put community first,
						because we know that's what makes everything else possible.
					</p>
				</div>
			</div>

			{showApplyButton && (
				<a
					href={APPLY_URL}
					target="_blank"
					rel="noreferrer"
					className="self-start rounded-full gunmetal-gradient px-6 py-2.5 text-white text-body font-bold transition-transform duration-200 hover:scale-105"
				>
					Apply to be an Organizer
				</a>
			)}
		</div>
	);
}

export default function Hero({
	showApplyButton,
}: {
	showApplyButton: boolean;
}) {
	return (
		<section className="px-6 md:px-10 pt-28 md:py-48 pb-12">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.45,
					ease: "easeOut",
				}}
				className="mx-auto w-full max-w-5xl rounded-[40px] hack-white-gradient p-6 sm:p-8 md:p-10 flex flex-col gap-6 md:gap-10"
			>
				<HeaderPill />

				<div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
					<JoinUsCard showApplyButton={showApplyButton} />

					<div className="flex-1 rounded-2xl overflow-hidden bg-[#cccccc] aspect-4/3 md:aspect-auto md:min-h-[200px] glass-shadow">
						<img
							src={RecruitmentGroupPic}
							alt="Hack at UCI Group Photo"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
}