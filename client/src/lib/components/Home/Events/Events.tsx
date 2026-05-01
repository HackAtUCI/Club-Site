import React from "react";
import IrvineHacksClosingImg from "@/assets/images/IH26-closing.png";
import IrvineHacksOpeningImg from "@/assets/images/IH26-opening.png";
import ZotHacksImg from "@/assets/images/ZH25-hacking.png";

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
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="group block w-full"
		>
			<div className="hack-white-gradient mx-4 md:mx-0 rounded-[44px] p-4 ring-1 ring-black/10 transition group-hover:brightness-[1.02] md:p-10">
				<div className="rounded-[36px]  box-shadow bg-white/20 p-6 md:p-10">
					<h3 className="gunmetal-text-gradient text-center text-3xl font-extrabold leading-none md:text-4xl">
						{title}
					</h3>
					<p className="mt-5 text-center text-lg leading-5 text-black md:mt-6 md:text-base md:leading-6 font-medium">
						{description}
					</p>

					<div className="mt-7 flex justify-center md:mt-8">
						<div className="relative w-full max-w-[360px] overflow-hidden rounded-[26px] p-0">
							<div className="overflow-hidden rounded-[44px] border-[3px] border-white shadow-md">
								<img
									src={src}
									alt={alt}
									loading="lazy"
									className="h-[160px] w-full object-cover md:h-[190px] rounded-[18px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}; 

const Events: React.FC = () => {
	return (
		<section className="relative isolate overflow-visible">
			{/* Continue the Hero's light field with a subtle white gradient */}
			{/* Background is provided by the shared Home wrapper so decor can span sections */}

			<div className="relative z-10 flex mx-auto w-full max-w-7xl flex-col px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
				{/* Top panel */}
				<div className="hack-white-gradient ring-1 ring-black/10 w-full rounded-[44px] p-7 md:p-12">
					<div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
						<div className="flex flex-col justify-center box-shadow bg-white/20 rounded-[50px] p-6 md:p-10">
	
							<h2 className="text-4xl mb-9 gunmetal-text-gradient font-bold">Our Events</h2>
							<p className="mb-5 max-w-xl text-black text-lg leading-6">
								We aim to celebrate UC Irvine&apos;s spirit of innovation by
								organizing ZotHacks, a beginner friendly hackathon, and IrvineHacks,
								Orange County&apos;s largest hackathon. Furthermore, our
								organization regularly host technical and professional development
								workshops that teach students industry-relevant skills.
							</p>
							<a
								href="/events"
								className="box-shadow mt-2 rounded-full gunmetal-gradient px-12 py-2.5 text-2xl inline-flex items-center justify-center text-center w-full font-medium"
								style={{
									maxWidth: "250px",
								}}
							>
								<span className="whitespace-nowrap w-full text-center flex justify-center items-center">
									More Information
								</span>
							</a>
		
		
		
						</div>

						<div className="relative overflow-hidden rounded-[32px] ring-2 ring-white/70">
							<img
								src={IrvineHacksClosingImg}
								alt="IrvineHacks 2026 Closing Ceremony"
								className="h-full min-h-[240px] w-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

			</div>

			{/* Event cards area (dark) */}
			<div className="">
				<div className="mx-auto w-full max-w-3/4 md:max-w-md px-3 pt-6 md:px-5">
					<div className="hack-white-gradient ring-1 ring-black/10 rounded-[56px] p-5 md:p-8">
						<div className="rounded-[56px] box-shadow bg-white/20 p-2">
							<h2 className="gunmetal-text-gradient text-center text-2xl font-extrabold md:text-[40px] tracking-tight">
								Hackathons
							</h2>
						</div>
					</div>
				</div>

				<div className="mx-auto w-full max-w-6xl px-4 pb-30 pt-10 md:px-8 md:pb-36 md:pt-12">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-15">
						<EventCard
							src={IrvineHacksOpeningImg}
							alt="IrvineHacks 2026 Opening Ceremony"
							title="IrvineHacks"
							description="HackUCI is the largest collegiate hackathon in Orange County. Each year, we bring like-minded individuals of different backgrounds and skill sets together to create something in 36 hours."
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
				</div>
			</div>
		</section>
	);
};

export default Events;
