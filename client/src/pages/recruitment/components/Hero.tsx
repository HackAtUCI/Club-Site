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
				<PrimaryButton href="#committees">
					Apply to be an organizer!
				</PrimaryButton>
			) : (
				<PrimaryButton href="https://www.notion.so/hackatuci/Hack-at-UCI-c0c393c84e5d8297957f8112679502fb?source=copy_link">
					Learn more about our committees!
				</PrimaryButton>
			)}
		</section>
	);
}
