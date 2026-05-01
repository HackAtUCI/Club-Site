import type { Sponsor } from "@/data/sponsors";

type SponsorRowProps = {
	sponsors: Sponsor[];
	direction: "left" | "right";
};

export default function SponsorRow({
	sponsors,
	direction = "left",
}: SponsorRowProps) {
	const duplicatedSponsors = [...sponsors, ...sponsors];

	return (
		<div className="overflow-hidden">
			<div
				className={`flex gap-10 md:gap-20 py-4 md:py-6 w-max animate-scroll-${
					direction === "left" ? "left" : "right"
				}`}
			>
				{duplicatedSponsors.map((sponsor, index) => (
					<a
						key={index}
						href={sponsor.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105"
					>
						<img
							src={sponsor.logo}
							alt={sponsor.name}
							className="h-20 md:h-auto w-auto object-contain"
						/>
					</a>
				))}
			</div>
		</div>
	);
}
