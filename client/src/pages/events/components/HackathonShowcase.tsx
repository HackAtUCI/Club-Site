import { motion } from "framer-motion";

import "./HackathonShowcase.css";

interface Stat {
	value: string;
	label: string;
}

interface PreviousLink {
	text: string;
	href: string;
}

interface Track {
	name: string;
	iconSrc: string;
}

interface HackathonShowcaseProps {
	title: string;
	previousLink?: PreviousLink;
	stats: Stat[];
	tracks?: Track[];
	photos: string[];
	showTracks?: boolean;
}

function StatItem({ value, label, isFirst }: Stat & { isFirst: boolean }) {
	return (
		<div
			className={`flex-1 flex flex-col items-center justify-center text-center py-5 sm:py-2 ${
				isFirst ? "" : "border-t sm:border-t-0 sm:border-l border-[#1f1e2d]/30"
			}`}
		>
			<div className="text-[#1f1e2d] text-2xl md:text-3xl font-bold">
				{value}
			</div>
			<div className="text-[#1f1e2d] text-xs md:text-lg mt-1">{label}</div>
		</div>
	);
}

function TrackCard({ name, iconSrc }: Track) {
	return (
		<div className="shrink-0 rounded-[28px] glass-shadow bg-[#F2F2F233] px-6 py-4 flex items-center gap-4 min-w-[280px]">
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/30">
				<img
					src={iconSrc}
					alt=""
					aria-hidden="true"
					className="h-8 w-8 object-contain"
				/>
			</div>

			<span className="max-w-[260px] text-[#1f1e2d] text-sm md:text-base font-semibold leading-tight">
				{name}
			</span>
		</div>
	);
}

function PhotoSlide({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px] aspect-[1.35/1] sm:aspect-4/3 rounded-2xl overflow-hidden bg-[#cccccc] glass-shadow">
			<img src={src} alt={alt} className="w-full h-full object-cover" />
		</div>
	);
}

export default function HackathonShowcase({
	title,
	previousLink,
	stats,
	tracks = [],
	photos,
	showTracks = true,
}: HackathonShowcaseProps) {
	return (
		<section className="px-6 md:px-10 py-6 md:py-8">
			<motion.div
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.2 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				className="mx-auto w-full max-w-5xl rounded-[40px] hack-white-gradient p-4 sm:p-8 md:p-10 flex flex-col gap-7 md:gap-8"
			>
				<div className="rounded-[28px] md:rounded-4xl glass-shadow bg-[#F2F2F233] p-5 sm:p-6 md:p-8 flex flex-col gap-4">
					<div className="flex flex-col items-center text-center gap-1 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:gap-2">
						<h2 className="gunmetal-text-gradient text-2xl md:text-3xl font-bold">
							{title}
						</h2>

						{previousLink && (
							<a
								href={previousLink.href}
								target="_blank"
								rel="noreferrer"
								className="text-[#1f1e2d] text-sm md:text-lg font-semibold underline hover:opacity-80 transition-opacity"
							>
								{previousLink.text}
							</a>
						)}
					</div>

					<div className="flex flex-col sm:flex-row gap-0 sm:gap-2 mt-2">
						{stats.map((stat, i) => (
							<StatItem
								key={`${stat.label}-${i}`}
								value={stat.value}
								label={stat.label}
								isFirst={i === 0}
							/>
						))}
					</div>
				</div>

				{showTracks && tracks.length > 0 && (
					<div className="flex flex-col gap-4">
						<h3 className="gunmetal-text-gradient text-2xl md:text-3xl font-bold text-center">
							Our Tracks
						</h3>

						<div className="overflow-hidden py-2">
							<div className="marquee-row" style={{ animationDuration: "35s" }}>
								{[...tracks, ...tracks].map((track, i) => (
									<TrackCard key={`track-${i}`} {...track} />
								))}
							</div>
						</div>
					</div>
				)}

				<div className="overflow-hidden py-2">
					<div className="marquee-row" style={{ animationDuration: "45s" }}>
						{[...photos, ...photos].map((photo, i) => (
							<PhotoSlide
								key={`${title}-photo-${i}`}
								src={photo}
								alt={`${title} photo ${(i % photos.length) + 1}`}
							/>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
