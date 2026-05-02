import DiscordIcon from "@/assets/logos/discord.svg";
import InstagramIcon from "@/assets/logos/instagram.svg";

const DISCORD_URL = "https://discord.gg/HhPNuAj";
const INSTAGRAM_URL = "https://www.instagram.com/hackatuci/";
const ZOTHACKS_MENTORS_FORM = "#";
const ZOTHACKS_JUDGING_FORM = "#";

function PrimaryFormButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="text-center rounded-full bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] px-6 py-3 text-white text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
		>
			{children}
		</a>
	);
}

export default function InterestSection() {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-6 md:py-8">
			<div className="mx-auto w-full max-w-[1032px] rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-8 sm:p-12 md:p-16 shadow-[0_3.2px_3.2px_#00000040] flex flex-col items-center gap-6">
				<h2 className="text-[#1f1e2d] text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-2xl">
					Interested in competing, mentoring, or volunteering?
				</h2>

				<p className="text-[#1f1e2d] text-sm md:text-base text-center">
					Get updates by joining our discord or following our instagram!
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
					<a
						href={DISCORD_URL}
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-3 hover:opacity-80 transition-opacity"
					>
						<img src={DiscordIcon} alt="Discord" className="w-10 h-10" />
						<span className="text-[#1f1e2d] text-sm md:text-base underline font-semibold">
							Discord Invite
						</span>
					</a>

					<a
						href={INSTAGRAM_URL}
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-3 hover:opacity-80 transition-opacity"
					>
						<img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
						<span className="text-[#1f1e2d] text-sm md:text-base font-semibold">
							@HackatUCI
						</span>
					</a>
				</div>

				<div className="flex flex-col gap-3 w-full max-w-md mt-2">
					<PrimaryFormButton href={ZOTHACKS_MENTORS_FORM}>
						Interest form for ZotHacks Mentors!
					</PrimaryFormButton>
					<PrimaryFormButton href={ZOTHACKS_JUDGING_FORM}>
						Interest form for ZotHacks Judging
					</PrimaryFormButton>
				</div>
			</div>
		</section>
	);
}
