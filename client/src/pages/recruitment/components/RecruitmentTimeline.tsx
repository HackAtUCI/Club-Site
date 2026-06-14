import { useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoChevronForward, IoLocationSharp } from "react-icons/io5";

interface TimelineEvent {
	date: string;
	step: string;
	title: string;
	location?: string;
	description: string;
	link?: {
		label: string;
		href: string;
	};
	highlight?: boolean;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
	{
		date: "9/21",
		step: "Step 1",
		title: "Applications Open",
		description: "Submit your intern application by 10/21!",
		highlight: true,
	},
	{
		date: "9/23",
		step: "Step 2",
		title: "Meet Hack at AIF",
		location: "Anteater Involvement Fair",
		description:
			"Come meet our organizers to learn more about organization and how to get involved!",
	},
	{
		date: "9/24 - 6-7 PM",
		step: "Step 3",
		title: "Hack's First Meeting & Intern Panel #1",
		location: "DBH 6011",
		description:
			"Join us for our first meeting where we'll be talking about what our club is about and share details about the intern experience through our first intern panel!",
	},
	{
		date: "9/25",
		step: "Step 4",
		title: "ICS Bonfire",
		location: "ICS Bonfire Area",
		description:
			"Visit us at ICS Bonfire to talk about our experiences and bond over marshmallows and pizza!",
	},
	{
		date: "10/20 - 6-7 PM",
		step: "Step 5",
		title: "Intern Panel #2",
		location: "DBH 6011",
		description:
			"Join us at DBH 6011 to learn more about what it means to be an intern and get a more in-depth look at our committees!",
	},
	{
		date: "10/21 - 11:59 PM",
		step: "Step 6",
		title: "Applications Close",
		description:
			"Our applications will close at 11:59PM but we will offer a one hour grace period for any issues with submissions!",
		highlight: true,
	},
	{
		date: "Week 5 - Date TBD",
		step: "Step 7",
		title: "Intern Social",
		location: "TBD",
		description:
			"An invite only event. A short social for us to get to know you and see how you work with others!",
	},
	{
		date: "10/26 - 10/30",
		step: "Step 8",
		title: "Coffee Chats",
		location: "TBD",
		description:
			"An invite only event. A short chat to get to know you better and see if Hack fits you and if you fit us!",
	},
];

const DESKTOP_VISIBLE_EVENTS = 3;
const MOBILE_VISIBLE_EVENTS = 1;

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 767px)");

		const updateIsMobile = () => {
			setIsMobile(mediaQuery.matches);
		};

		updateIsMobile();

		mediaQuery.addEventListener("change", updateIsMobile);

		return () => {
			mediaQuery.removeEventListener("change", updateIsMobile);
		};
	}, []);

	return isMobile;
}

function TimelineCard({ event }: { event: TimelineEvent }) {
	return (
		<div
			className={`h-full rounded-2xl ${
				event.highlight
					? "bg-linear-to-r from-[#1D976C] to-[#93F9B9] p-1.25"
					: "bg-white/5 p-px"
			}`}
		>
			<article className="gunmetal-gradient flex h-full min-h-96 flex-col rounded-[calc(1rem-5px)] p-5 text-white/90">
				<div className="self-start rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold text-white">
					{event.date}
				</div>

				<div className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/40">
					{event.step}
				</div>

				<h3 className="mt-2 text-xl font-extrabold leading-tight text-white">
					{event.title}
				</h3>

				{event.location ? (
					<div className="mt-4 flex items-start gap-2 text-sm leading-snug text-white/75">
						<IoLocationSharp className="mt-0.5 h-4 w-4 shrink-0 text-white" />
						<span>{event.location}</span>
					</div>
				) : null}

				{event.link ? (
					<a
						href={event.link.href}
						target="_blank"
						rel="noreferrer"
						className="mt-4 self-start text-sm font-semibold text-white/80 underline underline-offset-4 transition-opacity hover:opacity-75"
					>
						{event.link.label}
					</a>
				) : null}

				<div className="my-5 h-px w-full bg-white/15" />

				<p className="text-sm leading-relaxed text-white/75">
					{event.description}
				</p>
			</article>
		</div>
	);
}

export default function RecruitmentTimeline() {
	const isMobile = useIsMobile();

	const visibleEventCount = isMobile
		? MOBILE_VISIBLE_EVENTS
		: DESKTOP_VISIBLE_EVENTS;

	const maxStartIndex = Math.max(0, TIMELINE_EVENTS.length - visibleEventCount);

	const [startIndex, setStartIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const safeStartIndex = Math.min(startIndex, maxStartIndex);

	const mobileScrollRef = useRef<HTMLDivElement | null>(null);
	const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

	const visibleEvents = useMemo(
		() =>
			TIMELINE_EVENTS.slice(
				safeStartIndex,
				safeStartIndex + visibleEventCount,
			),
		[safeStartIndex, visibleEventCount],
	);

	const isAtStart = safeStartIndex === 0;
	const isAtEnd = safeStartIndex === maxStartIndex;

	const goToIndex = (index: number) => {
		const nextIndex = Math.max(0, Math.min(maxStartIndex, index));

		setDirection(nextIndex > safeStartIndex ? 1 : -1);
		setStartIndex(nextIndex);

		if (isMobile) {
			requestAnimationFrame(() => {
				mobileCardRefs.current[nextIndex]?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			});
		}
	};

	const goPrevious = () => {
		if (isAtStart) return;
		goToIndex(safeStartIndex - 1);
	};

	const goNext = () => {
		if (isAtEnd) return;
		goToIndex(safeStartIndex + 1);
	};

	const handleMobileScroll = () => {
		const container = mobileScrollRef.current;
		if (!container) return;

		const containerCenter = container.scrollLeft + container.clientWidth / 2;

		let closestIndex = 0;
		let closestDistance = Number.POSITIVE_INFINITY;

		mobileCardRefs.current.forEach((card, index) => {
			if (!card) return;

			const cardCenter = card.offsetLeft + card.offsetWidth / 2;
			const distance = Math.abs(containerCenter - cardCenter);

			if (distance < closestDistance) {
				closestDistance = distance;
				closestIndex = index;
			}
		});

		setStartIndex((current) => {
			if (closestIndex !== current) {
				setDirection(closestIndex > current ? 1 : -1);
			}

			return closestIndex;
		});
	};

	return (
		<section className="px-6 py-12 lg:px-10">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.45,
					ease: "easeOut",
				}}
				className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-[40px] hack-white-gradient p-6 sm:p-8 lg:p-10"
			>
				<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] p-5 sm:p-6 md:p-10">
					<h2 className="gunmetal-text-gradient text-center text-4xl font-extrabold leading-none md:text-5xl">
						Intern Recruitment Timeline
					</h2>

					<div className="mt-8 md:mt-10">
						{isMobile ? (
							<div
								ref={mobileScrollRef}
								onScroll={handleMobileScroll}
								className="-mx-2 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden"
							>
								<div className="flex gap-3 md:gap-4">
									{TIMELINE_EVENTS.map((event, index) => {
										const isActive = index === safeStartIndex;

										return (
											<div
												key={`${event.step}-${event.title}`}
												ref={(node) => {
													mobileCardRefs.current[index] = node;
												}}
												onClick={(clickEvent) => {
													if (isActive) return;

													clickEvent.preventDefault();
													goToIndex(index);
												}}
												onKeyDown={(keyEvent) => {
													if (isActive) return;

													if (
														keyEvent.key === "Enter" ||
														keyEvent.key === " "
													) {
														keyEvent.preventDefault();
														goToIndex(index);
													}
												}}
												role={isActive ? undefined : "button"}
												tabIndex={isActive ? undefined : 0}
												className={`w-[84%] shrink-0 snap-center transition-transform ${
													isActive ? "" : "cursor-pointer"
												}`}
											>
												<TimelineCard event={event} />
											</div>
										);
									})}
								</div>
							</div>
						) : (
							<div className="grid items-center gap-4 md:grid-cols-[auto_minmax(0,1fr)_auto]">
								<motion.button
									type="button"
									aria-label="Previous timeline events"
									onClick={goPrevious}
									disabled={isAtStart}
									whileTap={{ scale: 0.92 }}
									className={`hidden h-12 w-12 items-center justify-center rounded-full text-white glass-shadow transition-colors enabled:cursor-pointer md:flex ${
										isAtStart ? "gunmetal-gradient opacity-60" : "gunmetal-gradient"
									}`}
								>
									<IoChevronForward className="h-7 w-7 rotate-180" />
								</motion.button>

								<div className="min-w-0 overflow-hidden">
									<AnimatePresence
										mode="wait"
										initial={false}
										custom={direction}
									>
										<motion.div
											key={`${safeStartIndex}-${visibleEventCount}`}
											custom={direction}
											initial={{ opacity: 0, x: direction * 12 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: direction * -12 }}
											transition={{ duration: 0.22, ease: "easeOut" }}
											className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-3"
										>
											{visibleEvents.map((event) => (
												<TimelineCard
													key={`${event.step}-${event.title}`}
													event={event}
												/>
											))}
										</motion.div>
									</AnimatePresence>
								</div>

								<motion.button
									type="button"
									aria-label="Next timeline events"
									onClick={goNext}
									disabled={isAtEnd}
									whileTap={{ scale: 0.92 }}
									className={`hidden h-12 w-12 items-center justify-center rounded-full text-white glass-shadow transition-colors enabled:cursor-pointer md:flex ${
										isAtEnd ? "gunmetal-gradient opacity-60" : "gunmetal-gradient"
									}`}
								>
									<IoChevronForward className="h-7 w-7" />
								</motion.button>
							</div>
						)}
					</div>

					<div className="mt-6 flex justify-center gap-2">
						{Array.from({ length: maxStartIndex + 1 }).map((_, index) => {
							const endEventNumber = Math.min(
								index + visibleEventCount,
								TIMELINE_EVENTS.length,
							);

							return (
								<button
									key={index}
									type="button"
									aria-label={`Show timeline events ${
										index + 1
									} through ${endEventNumber}`}
									onClick={() => goToIndex(index)}
									className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
										index === safeStartIndex
											? "w-6 bg-[#4d4d70]"
											: "w-2 bg-[#4d4d70]/25 hover:bg-[#4d4d70]/45"
									}`}
								/>
							);
						})}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
