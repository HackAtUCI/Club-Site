import Box from "@/lib/components/Box/Box";
import PrimaryAnchor from "@/lib/components/PrimaryAnchor/PrimaryAnchor";

export default function AboutUs() {
	return (
		<div className="mt-4 mb-30 flex items-center justify-center md:mb-48">
			<Box>
				<h2 className="text-subtitle mb-4">About Us</h2>
				<p className="mb-6">
					Hack at UCI is a student-run organization established to provide
					students with a platform to learn, grow, and develop technology of the
					future. Established in 2013, our mission is to promote, educate, and
					enhance the community around us by giving students the platform to
					learn and create technology.
				</p>
				<PrimaryAnchor href="/about">Read more about us</PrimaryAnchor>
			</Box>
		</div>
	);
}
