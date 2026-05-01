import React, { useMemo, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

import IrvineHacksClosingImg from "@/assets/images/IH26-closing.png";
import IrvineHacksOpeningImg from "@/assets/images/IH26-opening.png";
import ZotHacksImg from "@/assets/images/ZH25-hacking.png";

type Slide = {
	id: string;
	imgSrc: string;
	imgAlt: string;
};

type CarouselCardProps = {
	slide: Slide;
	variant: "left" | "center" | "right";
};

const CarouselCard: React.FC<CarouselCardProps> = ({ slide, variant }) => {
	const isCenter = variant === "center";

	return (
		<div
			className={`relative overflow-hidden rounded-[26px] ${
				isCenter
					? "box-shadow hack-white-gradient-transparent h-[230px] w-[360px] ring-1 ring-black/10"
					: "h-[190px] w-[300px] bg-black/15"
			}`}
		>
			{isCenter ? (
				<div className="absolute inset-0 bg-linear-to-b from-white/50 to-white/5" />
			) : (
				<div className="absolute inset-0 bg-linear-to-b from-white/10 to-black/10" />
			)}

			<img
				src={slide.imgSrc}
				alt={slide.imgAlt}
				loading="lazy"
				className={`absolute inset-0 h-full w-full object-cover ${
					isCenter ? "opacity-95" : "opacity-60"
				}`}
			/>
		</div>
	);
};

const Organization: React.FC = () => {
	const slides: Slide[] = useMemo(
		() => [
			{
				id: "irvinehacks-opening",
				imgSrc: IrvineHacksOpeningImg,
				imgAlt: "IrvineHacks opening ceremony",
			},
			{
				id: "zothacks-hacking",
				imgSrc: ZotHacksImg,
				imgAlt: "ZotHacks hacking session",
			},
			{
				id: "irvinehacks-closing",
				imgSrc: IrvineHacksClosingImg,
				imgAlt: "IrvineHacks closing ceremony",
			},
		],
		[],
	);

	const [activeIndex, setActiveIndex] = useState(1);

	const goPrev = () =>
		setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
	const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);

	const leftIndex = (activeIndex - 1 + slides.length) % slides.length;
	const rightIndex = (activeIndex + 1) % slides.length;

	return (
		<section className="flex w-full justify-center px-4 py-14 md:px-30 md:py-18">
			<div className="hack-white-gradient w-full max-w-7xl rounded-[45px] p-6 md:p-20">
				<div
					className="rounded-[45px] bg-white/20 p-6 md:p-10"
					style={{ // copied from figma, prolly turn into a css class later
						boxShadow:
							"0px 3.6px 3.6px rgba(0, 0, 0, 0.25)",
					}}
				>
					<div className="flex flex-col items-center text-center">
						<h2 className="text-2xl font-extrabold text-primary md:text-4xl">
							Want to be a part of our organization?
						</h2>
						<a
							href="/recruitment"
							className="mt-2 text-sm font-semibold text-primary underline underline-offset-4 md:text-base"
						>
							Learn more about what we have to offer!
						</a>
					</div>

					<div className="relative mt-10">
						{/* Overlapped carousel stack (matches mock) */}
						<div className="relative mx-auto h-[230px] w-full max-w-[980px]">
							{/* Side cards */}
							<div className="absolute inset-y-0 left-6 hidden items-center md:flex">
								<div className="opacity-70">
									<CarouselCard slide={slides[leftIndex]} variant="left" />
								</div>
							</div>
							<div className="absolute inset-y-0 right-6 hidden items-center md:flex">
								<div className="opacity-70">
									<CarouselCard slide={slides[rightIndex]} variant="right" />
								</div>
							</div>

							{/* Center card */}
							<div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
								<CarouselCard slide={slides[activeIndex]} variant="center" />
							</div>
						</div>

						<button
							type="button"
							aria-label="Previous slide"
							onClick={goPrev}
							className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:text-white md:left-6"
						>
							<IoIosArrowDropright className="h-10 w-10 rotate-180" />
						</button>
						<button
							type="button"
							aria-label="Next slide"
							onClick={goNext}
							className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 hover:text-white md:right-6"
						>
							<IoIosArrowDropright className="h-10 w-10" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Organization;