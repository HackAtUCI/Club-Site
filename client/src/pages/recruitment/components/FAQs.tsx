import { motion } from "framer-motion";

import { type ReactNode } from "react";

import Dropdown from "./Dropdown";

interface FAQItem {
	question: string;
	answer: ReactNode;
}

const FAQ_ITEMS: FAQItem[] = [
	{
		question: "What is a Hackathon?",
		answer: (
			<a
				href="https://www.notion.so/hackatuci/FAQs-311393c84e5d808fae83fbe9d0f33c4b?source=copy_link#311393c84e5d80c09316d08d5de57e2c"
				target="_blank"
				rel="noreferrer"
				className="font-bold underline transition-opacity hover:opacity-80"
			>
				HACKATHONS
			</a>
		),
	},
	{
		question: "Do I need to be an ICS major to apply?",
		answer: "Nope! All majors/backgrounds are welcome and encouraged to apply.",
	},
	{
		question: "What can I get out of Hack at UCI?",
		answer:
			"Hack at UCI organizers gain hands-on leadership experience, ownership over large-scale initiatives, and the opportunity to make a measurable impact on 400+ hackers (500+ attendees). You’ll grow professionally, expand your network, build standout resume experience, and enjoy socials and exclusive swag (like our iconic quarter zips 😎) along the way.",
	},
	{
		question:
			"Do I need to have attended IrvineHacks or other hackathons to apply?",
		answer:
			"Nope! We understand that not everyone will have experiences attending events like IrvineHacks, so we’re open to everyone who is passionate about building the future of hackathons. Having attended or organized events is still a plus, but never a requirement. ",
	},
	{
		question:
			"Am I eligible to participate in IrvineHacks or ZotHacks if selected as an organizer / intern?",
		answer:
			"No, but there are other hackathons on campus you can participate in, such as VenusHacks, Designathon, and Datathon!",
	},
	{
		question:
			"I won't be on campus for the next few quarters. What should I do?",
		answer:
			"Given that we'll be operating in-person, we won't have the bandwidth to support remote members. Since we can't promise to offer the same engaging experience to remote members, we'd strongly encourage you to apply in our next recruitment cycle (Fall or Spring) when you're back in Irvine. ",
	},
	{
		question: "As an organizer, what kind of social experiences can I expect?",
		answer:
			"As an organizer, you can expect 1 quarterly hike, 1-3 social events (ex: kickbacks, themed outings like Seaside hangouts or group dinners), and small-group “matchy” meetups to help everyone connect in a more comfortable setting. We prioritize community just as much as execution — because the strongest hackathons are built by close-knit teams. ",
	},
	{
		question: "How can I be successful during the Hack recruitment process?",
		answer:
			"Be you! We want a diverse community with one common passion for Hack! We want to get to know who you are through our coffee chats. ",
	},
];

export default function FAQs() {
	return (
		<section className="px-6 md:px-10 py-12">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.45,
					ease: "easeOut",
				}}
				className="mx-auto w-full max-w-6xl rounded-[40px] hack-white-gradient p-6 sm:p-8 md:p-10"
			>
				<div className="rounded-[40px] glass-shadow bg-[#F2F2F233] p-6 md:p-12 flex flex-col gap-6 md:gap-8">
					<h2 className="gunmetal-text-gradient text-4xl font-extrabold leading-none md:text-5xl text-center">
						FAQs
					</h2>

					<div className="flex flex-col gap-5 md:gap-6">
						{FAQ_ITEMS.map((item, index) => (
							<Dropdown
								key={`${index}-${item.question}`}
								question={item.question}
							>
								{item.answer}
							</Dropdown>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
