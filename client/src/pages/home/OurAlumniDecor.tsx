import React from "react";

import blueBlobLeft from "@/assets/home-decor/blue-blob-left.svg";
import greenBlobLeft from "@/assets/home-decor/green-blob-left.svg";

type OurAlumniDecorProps = {
	children: React.ReactNode;
};

/**
 * Decorative blobs behind the Our Alumni panel (same stacking context as content).
 */
export default function OurAlumniDecor({ children }: OurAlumniDecorProps) {
	return (
		<div className="relative isolate w-full overflow-visible">
			<div
				className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-10 overflow-visible"
				aria-hidden
			>
				{/* Large blue — left, roughly vertically centered with the card */}
				<img
					src={blueBlobLeft}
					alt=""
					draggable={false}
					className="pointer-events-none absolute left-0 top-1/2 z-10 w-[clamp(200px,34vw,480px)] -translate-x-[38%] -translate-y-[28%] select-none opacity-85 md:w-[clamp(240px,32vw,520px)] md:-translate-x-[0%]"
				/>
				{/* Large green — right (mirror green-blob-left for the right edge) */}
				<img
					src={greenBlobLeft}
					alt=""
					draggable={false}
					className="pointer-events-none absolute right-0 top-[clamp(2rem,10vh,5rem)] z-10 w-[clamp(200px,34vw,480px)] translate-x-[40%] -scale-x-100 select-none opacity-85 md:top-[clamp(2.5rem,9vh,5.5rem)] md:w-[clamp(240px,32vw,520px)] md:translate-x-[0%]"
				/>
			</div>

			<div className="relative z-20">{children}</div>
		</div>
	);
}
