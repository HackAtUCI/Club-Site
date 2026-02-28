import StatBox from "./StatBox";
import Carousel from "@/lib/components/Carousel/Carousel";
import ZH1 from "@/assets/images/ZH1-resized.jpg";
import ZH2 from "@/assets/images/ZH2-resized.jpg";
import ZH3 from "@/assets/images/ZH3-resized.jpg";

export default function ZotHacksTab() {
	return (
		<div className="w-full p-4 sm:p-6 md:p-8 lg:p-12">
			<div className="bg-linear-to-b from-green-300 to-blue-400 p-2 rounded-4xl	">
				<div className="bg-dark-blue rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
					<div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0">
						<div className="flex w-full lg:w-1/2 flex-col lg:pr-8">
							<a
								className="text-subtitle mb-4 sm:mb-6 md:mb-8 text-blue-accent underline"
								href="https://zothacks.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								ZotHacks
							</a>
							<p>
								ZotHacks is a beginner-friendly hackathon where students with
								minimal computer science experience will learn new skills, take
								part in a community of creative people, and build projects!
							</p>
						</div>
						<div className="w-full lg:w-1/2">
							<Carousel options={{ loop: true }}>
								<img
									src={ZH1}
									alt="ZotHacks"
									className="object-cover aspect-3/2"
								/>
								<img
									src={ZH2}
									alt="ZotHacks"
									className="object-cover aspect-3/2"
								/>
								<img
									src={ZH3}
									alt="ZotHacks"
									className="object-cover aspect-3/2"
								/>
							</Carousel>
						</div>
					</div>
					<div className="mt-6 sm:mt-8">
						<StatBox boxText="60" text="students" />
						<StatBox boxText="19" text="majors" />
						<StatBox boxText="15" text="projects submitted" />
					</div>
				</div>
			</div>
		</div>
	);
}
