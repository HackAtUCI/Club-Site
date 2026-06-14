import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UTCPic from "@/assets/images/recruitment/UTCPic.jpg";
import FunnyPic from "@/assets/images/recruitment/FunnyPic.jpg";
import RetreatPic from "@/assets/images/recruitment/RetreatPic.jpg";
import SeasidePic from "@/assets/images/recruitment/SeaSidePic.jpg";
import BonfirePic from "@/assets/images/recruitment/BonfirePic.jpg";
import LogDinnerPic from "@/assets/images/recruitment/LogDinnerPic.jpg";
import FourAMHikePic from "@/assets/images/recruitment/4AmHikePic.jpg";
import RetreatPic2 from "@/assets/images/recruitment/RetreatPic2.jpg";
import SeasidePic2 from "@/assets/images/recruitment/SeasidePic2.jpg";
import BanquetPic from "@/assets/images/recruitment/BanquetPic.jpg";

const PILLARS = [
	{
		title: "Build",
		context: "hackathons, projects, workshops",
		description: "Establish a safe space to inspire others to build projects.",
	},
	{
		title: "Grow",
		context: "career, leadership, networking",
		description: "Grow as a professional and as a person.",
	},
	{
		title: "Belong",
		context: "retreats, hikes, dinners, socials",
		description:
			"Create a friendly community that empowers people to do their best.",
	},
];

const COMMUNITY_POINTS = [
	"We value a strong community, so we focus on each other. We host an annual retreat, a quarterly hike, 1-3 social events per quarter, and small-group matchy meetups to help everyone connect in a more comfortable setting.",
	"We are genuine people who want to get to know you and what makes you, you!",
	"HACKATHONS!",
];

const HACKATHONS_LINK =
	"https://app.notion.com/p/hackatuci/HACKATHONS-311393c84e5d80cf8d22e466e1e6e6ed";

const GALLERY_SLIDES = [
	[
		{ src: FunnyPic, alt: "Funny Photo" },
		{ src: RetreatPic, alt: "Retreat Photo" },
		{ src: SeasidePic, alt: "Seaside Photo" },
	],
	[
		{ src: BonfirePic, alt: "Bonfire Photo" },
		{ src: LogDinnerPic, alt: "Log Dinner Photo" },
		{ src: FourAMHikePic, alt: "4 AM Hike Photo" },
	],
	[
		{ src: RetreatPic2, alt: "Retreat Photo 2" },
		{ src: SeasidePic2, alt: "Seaside Photo 2" },
		{ src: BanquetPic, alt: "Banquet Photo" },
	],
];

function TriangleBullet() {
	return (
		<span
			aria-hidden="true"
			className="mt-2 h-0 w-0 shrink-0 border-x-[7px] border-b-11 border-x-transparent border-b-[#2d2d3e]"
		/>
	);
}

export default function WhyJoinHack() {
	const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
	const [galleryDirection, setGalleryDirection] = useState(1);
	const activeGallery = GALLERY_SLIDES[activeGalleryIndex];

	const goToGallery = (index: number) => {
		setGalleryDirection(index > activeGalleryIndex ? 1 : -1);
		setActiveGalleryIndex(index);
	};

	return (
		<section className="px-6 py-12 lg:px-10">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.45,
					ease: "easeOut",
				}}
				className="mx-auto w-full max-w-6xl rounded-[40px] hack-white-gradient p-6 sm:p-8 lg:p-10"
			>
				<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] p-6 md:p-10">
					<div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
						<img
							src={UTCPic}
							alt="UTC Photo"
							className="rounded-3xl h-full w-full object-cover scale-105 aspect-[1.28/1]"
						/>

						<div className="flex flex-col gap-6">
							<div>
								<h2 className="gunmetal-text-gradient text-4xl font-extrabold leading-none md:text-5xl">
									Why Join Hack?
								</h2>
								<p className="mt-5 text-lg tracking-[0.1rem] text-[#2d2d3e]/60 md:text-xl">
									Three Pillars
								</p>
							</div>

							<div className="flex flex-col gap-5 text-[#2d2d3e]/75">
								{PILLARS.map((pillar, index) => (
									<div key={pillar.title}>
										<p className="text-lg leading-snug md:text-xl">
											<span className="font-extrabold">
												{index + 1}. {pillar.title}
											</span>{" "}
											<span>({pillar.context})</span>
										</p>

										<div className="mt-3 flex gap-3 pl-6 text-base md:text-lg">
											<TriangleBullet />
											<p>{pillar.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="my-8 h-px w-full bg-[#2d2d3e]/10 md:my-10" />

					<div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
						<div className="text-[#2d2d3e]">
							<h3 className="text-3xl font-extrabold leading-tight gunmetal-text-gradient">
								What makes us Hack?
							</h3>

							<p className="mt-6 text-lg font-extrabold uppercase tracking-[0.12em] gunmetal-text-gradient">
								Community First!
							</p>

							<p className="mt-4 text-base md:text-lg">
								We don't just host hackathons. We build the community that makes
								it possible. We <strong>LOVE</strong> our community and put one
								another <strong>FIRST!</strong> We are what holds each other
								together and makes hackathons possible!
							</p>

							<div className="mt-5 flex flex-col gap-4 text-base md:text-lg">
								{COMMUNITY_POINTS.map((point) => (
									<div key={point} className="flex gap-3">
										<TriangleBullet />
										<p>
												{point === "HACKATHONS!" ? (
													<a
														href={HACKATHONS_LINK}
														target="_blank"
														rel="noreferrer"
														className="font-bold underline underline-offset-3 transition-opacity hover:opacity-75"
													>
														{point}
													</a>
												) : (
													point
												)}
										</p>
									</div>
								))}
							</div>
						</div>

						<div>
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={activeGalleryIndex}
									initial={{ opacity: 0, x: galleryDirection * 18 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: galleryDirection * -18 }}
									transition={{ duration: 0.24, ease: "easeOut" }}
									className="grid grid-cols-2 gap-4 md:gap-5"
								>
									<img
										src={activeGallery[0].src}
										alt={activeGallery[0].alt}
										className="rounded-3xl h-full w-full object-cover scale-105 aspect-[1.45/1]"
									/>
									<img
										src={activeGallery[1].src}
										alt={activeGallery[1].alt}
										className="rounded-3xl h-full w-full object-cover scale-105 aspect-[1.45/1]"
									/>
									<img
										src={activeGallery[2].src}
										alt={activeGallery[2].alt}
										className="rounded-3xl h-full w-full object-cover col-span-2 aspect-[1.95/1]"
									/>
								</motion.div>
							</AnimatePresence>

							<div className="mt-5 flex justify-center gap-2">
								{GALLERY_SLIDES.map((_, index) => (
									<button
										key={index}
										type="button"
										aria-label={`Show community photos set ${index + 1}`}
										onClick={() => goToGallery(index)}
										className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${
											index === activeGalleryIndex
												? "w-6 bg-[#4d4d70]"
												: "w-2 bg-[#4d4d70]/25 hover:bg-[#4d4d70]/45"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
