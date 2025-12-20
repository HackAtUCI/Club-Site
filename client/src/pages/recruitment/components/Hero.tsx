import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

export default function Hero({
	showApplyButton,
}: {
	showApplyButton: boolean;
}) {
	return (
		<section className="flex flex-col justify-center items-center gap-12 h-screen">
			<h1 className="text-heading">Recruitment</h1>
			{showApplyButton ? (
				<PrimaryButton>Apply to be an organizer!</PrimaryButton>
			) : (
				<PrimaryButton>Learn more about our committees!</PrimaryButton>
			)}
		</section>
	);
}
