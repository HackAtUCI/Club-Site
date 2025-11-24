import Box from "@/lib/components/Box/Box";
import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

export default function NotFound() {
	return (
		<main className="flex h-screen w-full items-center justify-center">
			<Box className="w-full h-[65%] relative flex flex-col items-center justify-center overflow-hidden text-center">
				<p className="absolute select-none text-[16rem] font-black -translate-y-32 text-white/40 blur-sm">
					404
				</p>
				<div className="z-10 flex flex-col items-center">
					<h1 className="text-6xl font-bold mt-16">Uh oh!</h1>
					<p className="mt-2">
						Looks like the page you were looking for no longer exists.
					</p>
					<PrimaryButton href="/" className="mt-6 px-32">
						Back to Home
					</PrimaryButton>
				</div>
			</Box>
		</main>
	);
}
