const APPLY_URL =
	"https://www.notion.so/hackatuci/Hack-at-UCI-Spring-2026-Organizer-Recruitment-311393c84e5d80fabf9eea424ddee5c7?source=copy_link";

const PLACEHOLDER_IMAGE =
	"https://placehold.co/600x440/cccccc/666666?text=Group+Photo";

function HeaderPill() {
	return (
		<div className="rounded-[40px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] px-6 py-6 flex items-center justify-center">
			<h1 className="bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold">
				Recruitment
			</h1>
		</div>
	);
}

function JoinUsCard({ showApplyButton }: { showApplyButton: boolean }) {
	return (
		<div className="rounded-[40px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] flex flex-col justify-between gap-6 p-6 md:p-8 flex-1 md:max-w-[490px]">
			<div className="flex flex-col gap-4">
				<h2 className="bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] bg-clip-text text-transparent text-2xl md:text-[32px] leading-[1.2] font-bold">
					Join Us!
				</h2>
				<div className="flex flex-col gap-3 text-[#1f1e2d] text-sm md:text-[14.4px] leading-[1.35]">
					<p>
						More than organizing hackathons, we're a community where you'll{" "}
						<strong>build</strong> real projects, <strong>grow</strong> as a
						professional, and <strong>belong</strong> to a group of people who
						genuinely care about you.
					</p>
					<p>
						From annual retreats to casual meetups, we put community first,
						because we know that's what makes everything else possible.
					</p>
				</div>
			</div>
			{showApplyButton && (
				<a
					href={APPLY_URL}
					target="_blank"
					rel="noreferrer"
					className="self-start rounded-full bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] px-6 py-2.5 text-white text-sm font-medium hover:opacity-90 transition-opacity"
				>
					Apply to be an Organizer
				</a>
			)}
		</div>
	);
}

export default function Hero({
	showApplyButton,
}: {
	showApplyButton: boolean;
}) {
	return (
		<section className="px-4 sm:px-6 md:px-10 pt-28 md:pt-32 pb-12">
			<div className="mx-auto w-full max-w-[1032px] rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-6 sm:p-8 md:p-10 shadow-[0_3.2px_3.2px_#00000040] flex flex-col gap-6 md:gap-10">
				<HeaderPill />

				<div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
					<JoinUsCard showApplyButton={showApplyButton} />

					<div className="flex-1 rounded-2xl overflow-hidden bg-[#cccccc] aspect-[4/3] md:aspect-auto md:min-h-[200px]">
						<img
							src={PLACEHOLDER_IMAGE}
							alt="Hack at UCI Group Photo Placeholder"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
