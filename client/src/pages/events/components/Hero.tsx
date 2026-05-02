const HACKATHONS_LINK =
	"https://www.notion.so/hackatuci/HACKATHONS-311393c84e5d80cf8d22e466e1e6e6ed";

const PLACEHOLDER_IMAGE =
	"https://placehold.co/900x420/cccccc/666666?text=Hackathon+Photo";

export default function Hero() {
	return (
		<section className="px-4 sm:px-6 md:px-10 pt-28 md:pt-32 pb-12">
			<div className="mx-auto w-full max-w-[1032px] rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-6 sm:p-8 md:p-10 shadow-[0_3.2px_3.2px_#00000040]">
				<div className="rounded-[40px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] p-6 md:p-10 flex flex-col items-center gap-4 md:gap-6">
					<h1 className="bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-[56px] md:leading-[64px] font-bold text-center">
						Our Events
					</h1>

					<p className="text-[#1f1e2d] text-sm md:text-base text-center max-w-2xl">
						Explore what our annual{" "}
						<a
							href={HACKATHONS_LINK}
							target="_blank"
							rel="noreferrer"
							className="underline font-semibold hover:opacity-80 transition-opacity"
						>
							hackathons
						</a>{" "}
						have to offer
					</p>

					<div className="w-full rounded-2xl overflow-hidden bg-[#cccccc] aspect-[2.4/1] mt-2">
						<img
							src={PLACEHOLDER_IMAGE}
							alt="Hack at UCI hackathon placeholder"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
