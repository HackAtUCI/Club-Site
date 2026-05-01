import React from "react";
import IrvineHacksImg from "@/assets/images/IH26-closing.png";

const Events: React.FC = () => {
	return (
		<section className="relative isolate overflow-visible">
			{/* Continue the Hero's light field with a subtle white gradient */}
			{/* Background is provided by the shared Home wrapper so decor can span sections */}

			<div className="relative z-10 flex mx-8 flex-col px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
				{/* Top panel */}
				<div className="hack-white-gradient ring-1 ring-black/10 w-full rounded-[44px] p-7 md:p-12">
					<div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
						<div className="flex flex-col justify-center box-shadow bg-white/20 rounded-4xl p-6 md:p-10">
	
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
								src={IrvineHacksImg}
								alt="IrvineHacks 2026 Closing Ceremony"
								className="h-full min-h-[240px] w-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				</div>

			</div>

			{/* Event cards area (dark) */}
			{/* <div className="bg-box">
				<div className="mx-auto w-full max-w-7xl px-6 pb-30 md:px-12 md:pb-36">
					<EventCard
						src={IrvineHacksImg}
						alt="IrvineHacks event"
						title="IrvineHacks"
						description="HackUCI is the largest collegiate hackathon in Orange County. Each year, we bring like-minded individuals of different backgrounds and skill sets together to create something in 36 hours."
						accent="blue"
						href="https://irvinehacks.com/"
					/>
					<EventCard
						src={ZotHacksImg}
						alt="ZotHacks event"
						title="ZotHacks"
						description="ZotHacks is a beginner-friendly hackathon where students with minimal computer science experience will learn new skills, take part in a community of creative people, and build projects."
						isReversed
						accent="green"
						href="https://zothacks.com/"
					/>
				</div>
			</div> */}
		</section>
	);
};

export default Events;
