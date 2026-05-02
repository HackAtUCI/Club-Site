import SponsorRow from "./SponsorRow";
import { sponsorRows } from "@/data/sponsors";

export default function SponsorGrid() {
	return (
		<section className="flex flex-col gap-8 md:gap-10 py-8 md:py-12">
			{sponsorRows.map((row, index) => (
				<div
					key={index}
					className="hack-white-gradient-transparent overflow-hidden backdrop-blur-md not-last:py-8">
					<SponsorRow
						sponsors={row}
						direction={index % 2 === 0 ? "right" : "left"}
					/>
				</div>
			))}
		</section>
	);
}
