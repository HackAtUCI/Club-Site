import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

export default function OurMission() {
	return (
		<section className="flex justify-center items-center bg-box px-10 py-30 md:px-36 lg:px-56">
			<div className="container">
				<h2 className="text-subtitle mb-4">Our Mission</h2>
				<p className="mb-14 max-w-3xl">
					Promote, educate, and enhance the community around us by giving
					students the platform to learn and create technology.
				</p>
				<PrimaryButton href="/recruitment">Join Us</PrimaryButton>
			</div>
		</section>
	);
}
