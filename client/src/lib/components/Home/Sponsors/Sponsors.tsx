import PrimaryAnchor from "@/lib/components/PrimaryAnchor/PrimaryAnchor";
import Box from "@/lib/components/Box/Box";

interface Sponsor {
	src: string;
	size: string;
}

const sponsors: Sponsor[] = [
	{ src: "google.svg", size: "w-[25rem]" },
	{ src: "meta.svg", size: "w-[25rem]" },
	{ src: "microsoft.svg", size: "w-[25rem]" },
	{ src: "ibm-cloud.svg", size: "w-[18rem]" },
	{ src: "northrop.svg", size: "w-[18rem]" },
	{ src: "twilio.svg", size: "w-[18rem]" },
	{ src: "texas-instruments.svg", size: "w-[18rem]" },
	{ src: "pimco.svg", size: "w-[16rem]" },
	{ src: "anduril.svg", size: "w-[18rem]" },
	{ src: "figma.svg", size: "w-[16rem]" },
	{ src: "corsair.svg", size: "w-[13rem]" },
	{ src: "roku.svg", size: "w-[13rem]" },
	{ src: "roblox.svg", size: "w-[16rem]" },
	{ src: "costargroup.svg", size: "w-[18.5rem]" },
	{ src: "sofi.svg", size: "w-[16rem]" },
	{ src: "bentley.svg", size: "w-[14rem]" },
	{ src: "wayup.svg", size: "w-[11rem]" },
	{ src: "github.svg", size: "w-[14rem]" },
	{ src: "sendgrid.svg", size: "w-[14rem]" },
	{ src: "google-cloud.svg", size: "w-[14rem]" },
	{ src: "cockroach-labs.svg", size: "w-[14rem]" },
	{ src: "wolfram-language.svg", size: "w-[14rem]" },
	{ src: "firstamerican.svg", size: "w-[30rem]" },
	{ src: "teledyneflir.svg", size: "w-[14rem]" },
	{ src: "edwards.svg", size: "w-[5rem]" },
	{ src: "corelogic.svg", size: "w-[14rem]" },
	{ src: "toshiba.svg", size: "w-[14rem]" },
	{ src: "kareo.svg", size: "w-[12rem]" },
	{ src: "vincit.svg", size: "w-[12rem]" },
	{ src: "menlo-micro.svg", size: "w-[12rem]" },
	{ src: "melissa.svg", size: "w-[12rem]" },
	{ src: "mobilityware.svg", size: "w-[12rem]" },
	{ src: "knobbe-martens.svg", size: "w-[12rem]" },
	{ src: "glidewell-lab.svg", size: "w-[18rem]" },
	{ src: "jamcity.svg", size: "w-[8rem]" },
	{ src: "cylance.svg", size: "w-[14rem]" },
	{ src: "balsamiq.svg", size: "w-[14rem]" },
	{ src: "stickermule.svg", size: "w-[14rem]" },
	{ src: "templarbit.svg", size: "w-[12rem]" },
	{ src: "surcle.svg", size: "w-[12rem]" },
	{ src: "lyrid.svg", size: "w-[10rem]" },
	{ src: "ubix.svg", size: "w-[10rem]" },
	{ src: "mage.svg", size: "w-[10rem]" },
	{ src: "memenome.svg", size: "w-[6rem]" },
	{ src: "pariveda.svg", size: "w-[12rem]" },
	{ src: "patient-safety.svg", size: "w-[10rem]" },
	{ src: "soylent.svg", size: "w-[10rem]" },
	{ src: "glenair.svg", size: "w-[10rem]" },
	{ src: "alardent-labs.svg", size: "w-[10rem]" },
	{ src: "tech-domains.svg", size: "w-[10rem]" },
	{ src: "wemade.svg", size: "w-[12rem]" },
	{ src: "gigabyte-technology.svg", size: "w-[12rem]" },
	{ src: "rmg.svg", size: "w-[14rem]" },
	{ src: "bai.svg", size: "w-[8rem]" },
	{ src: "85.svg", size: "w-[8rem]" },
	{ src: "spfb.svg", size: "w-[8rem]" },
	{ src: "uci-oit.svg", size: "w-[16rem]" },
	{ src: "uci-donaldbren.svg", size: "w-[16rem]" },
];

export default function Sponsors() {
	return (
		<section className="py-30">
			<div className="flex justify-center items-center mt-4">
				<Box>
					<div className="container">
						<h2 className="text-subtitle mb-4">Our Sponsors</h2>
						<p className="mb-4 max-w-3xl">
							Hack at UCI&apos;s hackathons and events wouldn&apos;t be possible
							without our amazing sponsors that have helped us over the years.
							Each donation goes right back into creating an outstanding
							experience for everyone who attends.
						</p>
						<PrimaryAnchor href="mailto:hack@uci.edu">
							Contact us!
						</PrimaryAnchor>
						<div className="flex flex-wrap justify-center gap-x-4 gap-y-6 mt-10 px-10 py-12 border bg-[#ECEFFD] rounded-[20px] ">
							{sponsors.map((sponsor, idx) => {
								return (
									<img
										key={idx}
										src={`sponsors/${sponsor.src}`}
										alt={`Sponsor ${idx + 1}`}
										width="10"
										height="10"
										className={`mx-auto ${sponsor.size}`}
									/>
								);
							})}
						</div>
					</div>
				</Box>
			</div>
		</section>
	);
}
