import AboutHack from "@/assets/images/AboutHack.svg";
import GreenStar from "@/assets/images/GreenStar.svg";
import Squiggle from "@/assets/images/Squiggle.svg";

export default function Hero() {
	return (
		<section className="h-screen flex flex-col md:flex-row justify-center items-center gap-12 md:gap-30 p-10 md:p-36 lg:p-56">
			<div className="max-w-40 md:max-w-80">
				<img src={AboutHack} alt="About Hack at UCI" />
			</div>

			<div className="max-w-84 font-semibold">
				<p>Hack at UCI is Irvine’s premiere collegiate hackathon committee.</p>
				<p>
					We strive to unite students passionate about hacking and retaining the
					spirit of community.
				</p>
				<div className="relative inline-flex items-center w-fit">
					<p className="text-[#71DD9C] whitespace-nowrap z-10">
						Let’s take the next step
					</p>
					<img
						src={GreenStar}
						alt="Green Star"
						className="ml-4 mt-1 w-8 h-8 z-10"
					/>
					<img
						src={Squiggle}
						alt="Squiggle"
						className="absolute -translate-x-1/32 translate-y-1/16 w-full z-0"
					/>
				</div>
			</div>
		</section>
	);
}
