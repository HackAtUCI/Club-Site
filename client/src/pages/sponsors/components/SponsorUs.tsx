export default function SponsorUs() {
	return (
		<section className="relative flex flex-col gap-24 md:gap-48 px-6 md:px-16 py-32">
			<div className="flex flex-col gap-10 hack-white-gradient max-w-4xl rounded-4xl p-4 md:p-12">
				<div className="box-shadow rounded-full border border-white/10 bg-[#F2F2F233] px-8 py-4 text-center">
					<h2 className="text-heading gunmetal-text-gradient">Sponsor Us!</h2>
				</div>

				<div className="box-shadow flex flex-col gap-6 rounded-4xl border border-white/10 bg-[#F2F2F233] p-6 backdrop-blur-md md:p-8">
					<ul className="text-body text-black list-disc space-y-1 pl-5">
						<li>
							Showcase your product/platform to our vast network of
							next generation tech talent both on social media and in person at
							our events.
						</li>

						<li>
							Gain direct access to a diverse pool of passionate student
							developers who are actively building, learning, and looking for
							opportunities to make an impact.
						</li>

						<li>
							We work with you to craft a personalized sponsorship experience
							that aligns with your recruiting goals, budget, and technical
							focus.
						</li>
					</ul>

					<div className="flex justify-center md:justify-start">
						<a
							href="mailto:hack@uci.edu"
							className="rounded-4xl gunmetal-gradient px-12 py-2 text-body font-bold text-[#FFFFFF] transition-transform duration-200 hover:scale-105"
						>
							Contact Us
						</a>
					</div>
				</div>
			</div>

			<div className="flex justify-center">
				<div className="hack-white-gradient rounded-4xl px-5 md:px-8 py-3 md:py-4">
					<div className="box-shadow rounded-full border border-white/10 bg-[#F2F2F233] px-8 py-3 text-center">
						<p className="text-md md:text-4xl gunmetal-text-gradient font-bold">
							Thank you to all our sponsors ❤️
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
