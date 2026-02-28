import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import CarouselDotButton from "./CarouselDotButton";

import "./Carousel.css";

interface CarouselProps {
	children: React.ReactNode[];
	options?: EmblaOptionsType;
	className?: string;
	dotsClassName?: string;
	caption?: string;
}

const Carousel: React.FC<CarouselProps> = ({
	children,
	options,
	className = "",
	dotsClassName = "",
	caption = "",
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	// Dot button logic
	const onNavButtonClick = useCallback(
		(emblaApi: EmblaCarouselType | undefined) => {
			const autoplay = emblaApi?.plugins()?.autoplay;
			if (!autoplay) return;
			const resetOrStop =
				autoplay.options.stopOnInteraction === false
					? autoplay.reset
					: autoplay.stop;
			resetOrStop();
		},
		[]
	);

	// Dot navigation hook
	const scrollSnaps = emblaApi?.scrollSnapList() ?? [];
	const onDotButtonClick = useCallback(
		(index: number) => {
			if (!emblaApi) return;
			emblaApi.scrollTo(index);
			onNavButtonClick(emblaApi);
		},
		[emblaApi, onNavButtonClick]
	);

	useEffect(() => {
		if (!emblaApi) return;
		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();
		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	return (
		<div className={`embla ${className}`}>
			<div className="embla__viewport shadow-box-glow" ref={emblaRef}>
				<div className="embla__container">
					{React.Children.map(children, (child, idx) => (
						<div
							className="embla__slide rounded-2xl [&>*]:rounded-2xl"
							key={idx}
						>
							{child}
						</div>
					))}
				</div>
			</div>
			<div
				className={clsx(
					dotsClassName,
					"flex justify-center items-center mt-2 sm:mt-4 md:mt-6"
				)}
			>
				{scrollSnaps.map((_, idx) => (
					<CarouselDotButton
						key={idx}
						selected={selectedIndex === idx}
						onClick={() => onDotButtonClick(idx)}
					/>
				))}
				{caption && <p className="ml-8">{caption}</p>}
			</div>
		</div>
	);
};

export default Carousel;
