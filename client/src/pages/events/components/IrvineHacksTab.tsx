import StatBox from "./StatBox";
import Carousel from "@/lib/components/Carousel/Carousel";
import IrvineHacksImg from "@/assets/images/IrvineHacks_img.png";
import ZotHacksImg from "@/assets/images/ZotHacks_img.png";

export default function IrvineHacksTab() {
	return (
		<div className="w-full p-4 sm:p-6 md:p-8 lg:p-12">
			<div className="bg-linear-to-b from-green-300 to-blue-400 p-2 rounded-4xl	">
				<div className="bg-dark-blue rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
					<div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0">
						<div className="flex w-full lg:w-1/2 flex-col lg:pr-8">
							<h2 className="text-subtitle mb-4 sm:mb-6 md:mb-8">
								IrvineHacks
							</h2>
							<p>
								IrvineHacks is the largest collegiate hackathon in Orange
								County. Each year, we bring like-minded individuals of different
								backgrounds and skillsets together to create something in 36
								hours!
							</p>
						</div>
						<div className="w-full lg:w-1/2">
							<Carousel
								options={{ loop: true }}
								dotsClassName="mt-4 sm:mt-6 md:mt-8 flex justify-center"
							>
								<img
									src={IrvineHacksImg}
									alt="IrvineHacks"
									className="aspect-3/2"
								/>
								<img src={ZotHacksImg} alt="ZotHacks" className="aspect-3/2" />
								<img src={ZotHacksImg} alt="ZotHacks" className="aspect-3/2" />
							</Carousel>
						</div>
					</div>
					<div className="mt-6 sm:mt-8">
						<StatBox boxText="500 +" text="hackers" />
						<StatBox boxText="40 +" text="schools" />
						<StatBox boxText="100 +" text="first-timers" />
						<StatBox boxText="80 +" text="projects submitted" />
					</div>
				</div>
			</div>
		</div>
	);
}
