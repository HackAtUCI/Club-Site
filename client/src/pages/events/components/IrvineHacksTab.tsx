import Box from "@/lib/components/Box/Box";
import StatBox from "./StatBox";
import Carousel from "@/lib/components/Carousel/Carousel";
import IrvineHacksImg from "@/assets/images/IrvineHacks_img.png";
import ZotHacksImg from "@/assets/images/ZotHacks_img.png";

export default function IrvineHacksTab() {
	return (
		<Box alt>
			<div className="flex w-full">
				<div className="flex w-1/2 flex-col pr-8">
					<h2 className="text-subtitle mb-8">IrvineHacks</h2>
					<p>
						IrvineHacks is the largest collegiate hackathon in Orange County.
						Each year, we bring like-minded individuals of different backgrounds
						and skill sets together to create something in 36 hours!
					</p>
				</div>
				<div className="w-1/2">
					<Carousel
						options={{ loop: true }}
						dotsClassName="mt-8 flex justify-center"
					>
						<img src={IrvineHacksImg} alt="IrvineHacks" className="w-full" />
						<img src={ZotHacksImg} alt="ZotHacks" className="w-full" />
						<img src={ZotHacksImg} alt="ZotHacks" className="w-full" />
					</Carousel>
				</div>
			</div>
			<div className="mt-8">
				<StatBox count={10} text="attendees" />
				<StatBox count={10} text="colleges" />
				<StatBox count={10} text="first-timers" />
				<StatBox count={10} text="projects submitted" />
			</div>
		</Box>
	);
}
