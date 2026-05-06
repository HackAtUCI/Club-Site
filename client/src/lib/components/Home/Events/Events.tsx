import React from "react";
import { motion } from "framer-motion";
import IrvineHacksClosingImg from "@/assets/images/home/IH26-closing.png";
import IrvineHacksOpeningImg from "@/assets/images/home/IH26-opening.png";
import ZotHacksImg from "@/assets/images/home/ZH25-hacking.png";
import Pill from "@/lib/components/Pill/Pill";

interface EventCardProps {
	src: string;
	alt: string;
	title: string;
	description: string;
	href: string;
}

const EventCard: React.FC<EventCardProps> = ({
	src,
	alt,
	title,
	description,
	href,
}) => {
	return (
		<div className="group block w-full">
			<div className="hack-white-gradient mx-4 rounded-[44px] p-4 ring-1 ring-black/10 md:mx-0 md:p-10">
				<div className="glass-shadow rounded-[36px] bg-white/20 p-6 md:p-10">
					<a href={href} target="_blank" rel="noreferrer">
						<h3 className="gunmetal-text-gradient text-center text-3xl font-extrabold leading-none md:text-4xl">
							{title}
						</h3>
					</a>

					<p className="mt-5 text-center text-lg font-medium leading-5 text-black md:mt-6 md:text-base md:leading-6">
						{description}
					</p>

					<div className="mt-7 flex justify-center md:mt-8">
						<div className="relative w-full max-w-[360px] overflow-hidden rounded-[26px] p-0">
							<div className="overflow-hidden rounded-[44px] border-[3px] border-white shadow-md">
								<img
									src={src}
									alt={alt}
									loading="lazy"
									className="h-40 w-full rounded-[18px] object-cover md:h-[190px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Events: React.FC = () => {
	return (
		<section className="relative isolate overflow-visible">
			<motion.div
				initial={{
					opacity: 0,
					y: 90,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					amount: 0.3,
					once: true
				}}
				transition={{
					duration: 0.7,
					ease: "easeOut",
				}}
				className="relative z-10 mx-auto mb-16 flex w-full max-w-7xl flex-col px-4 py-10 sm:px-6 sm:py-12 md:mb-28 md:px-8 md:py-14"
			>
				<div className="hack-white-gradient w-full rounded-[44px] p-7 ring-1 ring-black/10 md:p-12">
					<div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
						<div className="glass-shadow flex flex-col justify-center rounded-[50px] bg-white/20 p-6 md:p-10">
							<h2 className="gunmetal-text-gradient mb-9 text-4xl font-bold">
								Our Events
							</h2>

							<p className="mb-5 max-w-xl text-lg leading-6 text-black">
								We aim to celebrate UC Irvine&apos;s spirit of innovation by
								organizing ZotHacks, a beginner friendly hackathon, and
								IrvineHacks, Orange County&apos;s largest hackathon.
								Furthermore, our organization regularly host technical and
								professional development workshops that teach students
								industry-relevant skills.
							</p>

							<a
								href="/events"
								className="box-shadow gunmetal-gradient mt-2 inline-flex w-full cursor-pointer items-center justify-center rounded-full px-12 py-2.5 text-center text-2xl font-medium transition-transform duration-200 ease-out hover:scale-[1.1]"
								style={{
									maxWidth: "250px",
								}}
							>
								<span className="flex w-full items-center justify-center whitespace-nowrap text-center">
									More Information
								</span>
							</a>
						</div>

						<div className="relative overflow-hidden rounded-4xl ring-2 ring-white/70">
							<img
								src={IrvineHacksClosingImg}
								alt="IrvineHacks 2026 Closing Ceremony"
								className="h-full min-h-60 w-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</motion.div>

			<div>
				<motion.div
					initial={{
						opacity: 0,
						y: 85,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						amount: 0.3,
					}}
					transition={{
						duration: 0.6,
						ease: "easeOut",
					}}
					className="mx-auto w-full max-w-3/4 px-3 pt-6 md:max-w-md md:px-5"
				>
					<Pill className="p-5 md:p-8" innerClassName="p-2">
						<h2 className="gunmetal-text-gradient text-center text-2xl font-extrabold tracking-tight md:text-[40px]">
							Hackathons
						</h2>
					</Pill>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						y: 130,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						amount: 0.15,
						once: true,
					}}
					transition={{
						duration: 0.6,
						ease: "easeOut",
					}}
					className="mx-auto w-full max-w-6xl px-4 pb-30 pt-10 md:px-8 md:pb-36 md:pt-12"
				>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-15">
						<EventCard
							src={IrvineHacksOpeningImg}
							alt="IrvineHacks 2026 Opening Ceremony"
							title="IrvineHacks"
							description="IrvineHacks is the largest collegiate hackathon in Orange County. Each year, we bring like-minded individuals of different backgrounds and skill sets together to create something in 36 hours."
							href="https://irvinehacks.com/"
						/>

						<EventCard
							src={ZotHacksImg}
							alt="ZotHacks event"
							title="ZotHacks"
							description="ZotHacks is a beginner-friendly hackathon where students with minimal computer science experience will learn new skills, take part in a community of creative people, and build projects."
							href="https://zothacks.com/"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Events;
