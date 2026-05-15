import "./NotFound.css"

export default function NotFound() {
	return (
		<main className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-dark-blue px-4 text-center">
			<p className="pointer-events-none absolute select-none text-[16rem] font-black leading-none text-white/10 blur-sm">
				404
			</p>

			<div className="z-10 flex flex-col items-center">
				<h1 className="mt-16 text-6xl font-bold text-white">Uh oh!</h1>

				<p className="mt-2 text-white/75">
					Looks like the page you were looking for no longer exists.
				</p>

				<a
					href="/"
					className="primary-gradient-btn mt-6 rounded-full px-32 py-3 text-center text-md shadow-none outline-none border-none sm:text-button"
				>
					Back to Home
				</a>
			</div>
		</main>
	);
}