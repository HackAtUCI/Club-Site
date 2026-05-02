import ZotHacksLogo from "@/assets/images/ZotHacksLogo.png";
import IrvineHacksLogo from "@/assets/images/IrvineHacksLogo.png";

interface HackathonPreview {
	name: string;
	description: string;
	logoSrc: string;
	href: string;
}

function PreviewCard({ name, description, logoSrc, href }: HackathonPreview) {
	return (
		<div className="flex-1 rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-6 sm:p-8 shadow-[0_3.2px_3.2px_#00000040] flex flex-col gap-6">
			<div className="rounded-[32px] overflow-hidden bg-[#1a1a2e] aspect-square">
				<img
					src={logoSrc}
					alt={`${name} logo`}
					className="w-full h-full object-cover"
				/>
			</div>

			<div className="rounded-[32px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] p-6 flex flex-col gap-3 items-center text-center">
				<h2 className="bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
					{name}
				</h2>
				<p className="text-[#1f1e2d] text-sm md:text-base">{description}</p>
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="mt-2 rounded-full bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] px-6 py-2.5 text-white text-sm font-medium hover:opacity-90 transition-opacity"
				>
					More Information
				</a>
			</div>
		</div>
	);
}

export default function Hackathons() {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-6 md:py-8">
			<div className="mx-auto w-full max-w-[1032px] flex flex-col md:flex-row gap-6 md:gap-8">
				<PreviewCard
					name="ZotHacks"
					description="Our beginner hackathon taking place during Fall Quarter"
					logoSrc={ZotHacksLogo}
					href="https://zothacks.com/"
				/>
				<PreviewCard
					name="IrvineHacks"
					description="Our premiere hackathon that takes places during Winter Quarter"
					logoSrc={IrvineHacksLogo}
					href="https://irvinehacks.com/"
				/>
			</div>
		</section>
	);
}
