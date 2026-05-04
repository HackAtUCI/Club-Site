import Dropdown from "./Dropdown";

const FAQ_ITEMS: string[] = [
	"What even is a Hackathon?",
	"Do I need to be an ICS major to apply?",
	"What can I get out of Hack at UCI?",
	"Do I need to have attended IrvineHacks or other hackathons to apply?",
	"Am I eligible to participate in IrvineHacks or ZotHacks if selected as an organizer / intern?",
	"I won't be on campus for the next few quarters. What should I do?",
	"As an organizer, what kind of social experiences can I expect?",
	"As an organizer, what kind of social experiences can I expect?",
	"How can I be successful during the Hack recruitment process?",
];

export default function FAQs() {
	return (
		<section className="px-4 sm:px-6 md:px-10 py-12">
			<div className="mx-auto w-full max-w-[1032px] rounded-[40px] bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] p-6 sm:p-8 md:p-10 shadow-[0_3.2px_3.2px_#00000040]">
				<div className="rounded-[40px] bg-white/20 shadow-[inset_0_3.2px_3.2px_#00000040,0_3.2px_3.2px_#00000040] p-6 md:p-12 flex flex-col gap-6 md:gap-8">
					<h2 className="bg-linear-to-br from-[#3a3a4a] to-[#1a1a28] bg-clip-text text-transparent text-4xl md:text-5xl font-bold text-center">
						FAQs
					</h2>
					<div className="flex flex-col gap-5 md:gap-6">
						{FAQ_ITEMS.map((question, index) => (
							<Dropdown key={`${index}-${question}`} question={question}>
								Placeholder Answer
							</Dropdown>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
