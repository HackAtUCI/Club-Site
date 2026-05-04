import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";

import UTCSocialPic from "@/assets/images/UTCSocialPic.jpg";
import CDMBonfirePic from "@/assets/images/CDMBonfirePic.jpg";
import HackHikePic from "@/assets/images/HackHikePic.jpg";
import LAHacksPic from "@/assets/images/LAHacksPic.jpeg";
import ZHMatchaPic from "@/assets/images/ZHMatchaPic.jpg";
import IHVictoryPic from "@/assets/images/IHVictoryPic.jpg";
import HackHikePic2 from "@/assets/images/HackHikePic2.jpg";
import HackHikePic3 from "@/assets/images/HackHikePic3.jpg";
import DisneyPic from "@/assets/images/DisneyPic.jpg";

type Slide = {
	id: string;
	imgSrc: string;
	imgAlt: string;
};

type CarouselCardProps = {
	slide: Slide;
	variant: "left" | "center" | "right";
	direction: number;
};

const CarouselCard: React.FC<CarouselCardProps> = ({
	slide,
	variant,
	direction,
}) => {
	const isCenter = variant === "center";

	return (
		<div
			className={`relative overflow-hidden rounded-[34px] ${
				isCenter
					? "glass-shadow hack-white-gradient-transparent h-[550px] w-[900px] ring-1 ring-black/10"
					: "h-[260px] w-[360px] bg-black/15"
			}`}
		>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={slide.id}
					src={slide.imgSrc}
					alt={slide.imgAlt}
					loading="lazy"
					custom={direction}
					initial={{
						opacity: 0,
						x: direction * 45,
						scale: 1.06,
					}}
					animate={{
						opacity: isCenter ? 0.95 : 0.55,
						x: 0,
						scale: 1,
					}}
					exit={{
						opacity: 0,
						x: direction * -45,
						scale: 1.03,
					}}
					transition={{
						duration: 0.9,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</AnimatePresence>

			<div
				className={`pointer-events-none absolute inset-0 z-10 ${
					isCenter
						? "bg-linear-to-b from-white/25 to-black/5"
						: "bg-linear-to-b from-white/10 to-black/25"
				}`}
			/>
		</div>
	);
};

const MobileCarouselCard: React.FC<{ slide: Slide; direction: number }> = ({
	slide,
	direction,
}) => {
	return (
		<div className="glass-shadow hack-white-gradient-transparent relative h-[300px] w-full overflow-hidden rounded-[28px] ring-1 ring-black/10 sm:h-[520px]">
			{" "}
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={slide.id}
					src={slide.imgSrc}
					alt={slide.imgAlt}
					loading="lazy"
					custom={direction}
					initial={{
						opacity: 0,
						x: direction * 35,
						scale: 1.06,
					}}
					animate={{
						opacity: 0.95,
						x: 0,
						scale: 1,
					}}
					exit={{
						opacity: 0,
						x: direction * -35,
						scale: 1.03,
					}}
					transition={{
						duration: 0.55,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</AnimatePresence>
			<div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-white/25 to-black/5" />
		</div>
	);
};

const carouselArrowBtn =
	"rounded-full p-2 text-white/80 transition hover:text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/60";

const mobileCarouselArrowBtn =
	"absolute top-1/2 z-20 -translate-y-1/2 bg-transparent p-0 text-white opacity-95 transition hover:opacity-100 focus-visible:rounded-full focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/70";

const Organization: React.FC = () => {
	const slides: Slide[] = useMemo(
		() => [
			{
				id: "utc-social-pic",
				imgSrc: UTCSocialPic,
				imgAlt: "Hack @ UCI UTC Social",
			},
			{
				id: "cdm-bonfire-pic",
				imgSrc: CDMBonfirePic,
				imgAlt: "Hack @ UCI Corona Del Mar Beach Bonfire",
			},
			{
				id: "zot-hacks-matcha-pic",
				imgSrc: ZHMatchaPic,
				imgAlt: "Hack @ UCI ZotHacks 2025",
			},
			{
				id: "hack-hike-pic",
				imgSrc: HackHikePic,
				imgAlt: "Hack @ UCI 4 AM Hike",
			},
			{
				id: "la-hacks-pic",
				imgSrc: LAHacksPic,
				imgAlt: "Hack @ LA Hacks 2026",
			},
			{
				id: "hack-hike-pic-2",
				imgSrc: HackHikePic2,
				imgAlt: "Hack @ UCI Hike",
			},
			{
				id: "hack-hike-pic-3",
				imgSrc: HackHikePic3,
				imgAlt: "Hack @ UCI Hike",
			},
			{
				id: "ih-victory-pic",
				imgSrc: IHVictoryPic,
				imgAlt: "Hack @ UCI Victory Pose",
			},
			{
				id: "disney-pic",
				imgSrc: DisneyPic,
				imgAlt: "Hack @ UCI Disney",
			},
		],
		[]
	);

	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const goPrev = () => {
		setDirection(-1);
		setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
	};

	const goNext = () => {
		setDirection(1);
		setActiveIndex((i) => (i + 1) % slides.length);
	};

	const activeSlide = slides[activeIndex] ?? slides[0];

	if (!activeSlide) return null;

	const leftIndex = (activeIndex - 1 + slides.length) % slides.length;
	const rightIndex = (activeIndex + 1) % slides.length;

	const leftSlide = slides[leftIndex] ?? activeSlide;
	const rightSlide = slides[rightIndex] ?? activeSlide;

	return (
		<motion.section
			initial={{
				opacity: 0,
				scale: 0.5,
			}}
			whileInView={{
				opacity: 1,
				scale: 1,
			}}
			viewport={{
				amount: 0.15,
			}}
			transition={{
				duration: 0.7,
				ease: "easeOut",
				delay: 0.35,
			}}
			className="flex w-full justify-center px-4 pb-20 pt-14 md:px-30 md:pb-34 md:pt-18"
		>
			<div className="hack-white-gradient w-full max-w-7xl rounded-[45px] p-6 md:p-12">
				<div
					className="rounded-[45px] bg-white/20 p-6 md:p-10"
					style={{
						boxShadow: "0px 3.6px 3.6px rgba(0, 0, 0, 0.25)",
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

					<div className="relative mt-10 w-full md:hidden">
						<MobileCarouselCard slide={activeSlide} direction={direction} />

						<motion.button
							type="button"
							aria-label="Previous slide"
							onClick={goPrev}
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.92 }}
							className={`${mobileCarouselArrowBtn} left-2`}
						>
							<IoIosArrowDropright className="h-10 w-10 -translate-x-px rotate-180 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" />
						</motion.button>

						<motion.button
							type="button"
							aria-label="Next slide"
							onClick={goNext}
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.92 }}
							className={`${mobileCarouselArrowBtn} right-2`}
						>
							<IoIosArrowDropright className="h-10 w-10 translate-x-px drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" />
						</motion.button>
					</div>

					<div className="relative mt-12 hidden md:block">
						<div className="relative mx-auto h-[500px] w-full max-w-[1400px]">
							<motion.div
								key={`left-${leftSlide.id}`}
								initial={{ opacity: 0, x: -30, scale: 0.9 }}
								animate={{ opacity: 0.6, x: 0, scale: 0.95 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
								className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center"
							>
								<CarouselCard
									slide={leftSlide}
									variant="left"
									direction={direction}
								/>
							</motion.div>

							<motion.div
								key={`right-${rightSlide.id}`}
								initial={{ opacity: 0, x: 30, scale: 0.9 }}
								animate={{ opacity: 0.6, x: 0, scale: 0.95 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
								className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center"
							>
								<CarouselCard
									slide={rightSlide}
									variant="right"
									direction={direction}
								/>
							</motion.div>

							<div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
								<CarouselCard
									slide={activeSlide}
									variant="center"
									direction={direction}
								/>
							</div>
						</div>

						<motion.button
							type="button"
							aria-label="Previous slide"
							onClick={goPrev}
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.92 }}
							className={`absolute left-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer md:left-10 ${carouselArrowBtn}`}
						>
							<IoIosArrowDropright className="h-12 w-12 rotate-180" />
						</motion.button>

						<motion.button
							type="button"
							aria-label="Next slide"
							onClick={goNext}
							whileHover={{ scale: 1.12 }}
							whileTap={{ scale: 0.92 }}
							className={`absolute right-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer md:right-10 ${carouselArrowBtn}`}
						>
							<IoIosArrowDropright className="h-12 w-12" />
						</motion.button>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Organization;
