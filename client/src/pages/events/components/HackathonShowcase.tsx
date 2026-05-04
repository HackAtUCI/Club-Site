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

interface HackathonShowcaseProps {
	title: string;
	previousLink?: PreviousLink;
	stats: Stat[];
	tracks: string[];
	photos: string[];
}

function StatItem({ value, label, isFirst }: Stat & { isFirst: boolean }) {
	return (
		<div
			className={`flex-1 flex flex-col items-center justify-center text-center py-2 ${
				isFirst ? "" : "border-l border-[#1f1e2d]/30"
			}`}
		>
			<div className="text-[#1f1e2d] text-2xl md:text-3xl font-bold">
				{value}
			</div>
			<div className="text-[#1f1e2d] text-xs md:text-sm mt-1">{label}</div>
		</div>
	);
}

function TrackCard({ name }: { name: string }) {
	return (
		<div className="shrink-0 rounded-3xl glass-shadow bg-[#F2F2F233] px-5 py-3 flex items-center gap-3">
			<div className="w-6 h-6 rounded bg-[#cccccc] shrink-0" />
			<span className="text-[#1f1e2d] text-sm underline whitespace-nowrap">
				{name}
			</span>
		</div>
	);
}

function PhotoSlide({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="shrink-0 w-[260px] md:w-[320px] aspect-4/3 rounded-2xl overflow-hidden bg-[#cccccc] glass-shadow">
			<img src={src} alt={alt} className="w-full h-full object-cover" />
		</div>
	);
}

export default function HackathonShowcase({
	title,
	previousLink,
	stats,
	tracks,
	photos,
}: HackathonShowcaseProps) {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-6 md:py-8">
			<motion.div
				initial={{ opacity: 0, y: 80 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.2 }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
				className="mx-auto w-full max-w-4/5 rounded-[40px] hack-white-gradient p-6 sm:p-8 md:p-10 flex flex-col gap-8"
			>
				<div className="rounded-4xl glass-shadow bg-[#F2F2F233] p-6 md:p-8 flex flex-col gap-4">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
						<h2 className="gunmetal-text-gradient text-2xl md:text-3xl font-bold">
							{title}
						</h2>

						{previousLink && (
							<a
								href={previousLink.href}
								target="_blank"
								rel="noreferrer"
								className="text-[#1f1e2d] text-sm md:text-base underline hover:opacity-80 transition-opacity"
							>
								{previousLink.text}
							</a>
						)}
					</div>

					<div className="flex flex-row gap-2 mt-2">
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

				<div className="flex flex-col gap-4">
					<h3 className="gunmetal-text-gradient text-2xl md:text-3xl font-bold text-center">
						Our Tracks
					</h3>

					<div className="overflow-hidden py-2">
						<div className="marquee-row" style={{ animationDuration: "25s" }}>
							{[...tracks, ...tracks].map((track, i) => (
								<TrackCard key={`track-${i}`} name={track} />
							))}
						</div>
					</div>
				</div>

				<div className="overflow-hidden py-2">
					<div className="marquee-row" style={{ animationDuration: "40s" }}>
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