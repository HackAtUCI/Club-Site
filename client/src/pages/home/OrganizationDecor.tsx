import React from "react";

import blueCircleRight from "@/assets/home-decor/blue-circle-right.svg";
import greenHexagonLeft from "@/assets/home-decor/green-hexagon-left.svg";

type OrganizationDecorProps = {
	children: React.ReactNode;
};

/**
 * Bottom-corner SVGs behind Organization + “Back to the top”.
 * `bottom-0` is relative to this wrapper — include those blocks as children so the art
 * anchors to the real bottom of the home page (above the global footer), not only the org card.
 */
export default function OrganizationDecor({ children }: OrganizationDecorProps) {
	return (
		<div className="relative isolate w-full overflow-visible pb-12 md:pb-16">
			<div
				className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-10 overflow-visible"
				aria-hidden
			>
				<img
					src={greenHexagonLeft}
					alt=""
					draggable={false}
					className="pointer-events-none absolute bottom-0 left-0 z-10 w-[clamp(220px,38vw,520px)] -translate-x-[38%] translate-y-[22%] select-none opacity-90 md:w-[clamp(260px,36vw,600px)] md:-translate-x-[34%] md:translate-y-[0%]"
				/>
				<img
					src={blueCircleRight}
					alt=""
					draggable={false}
					className="pointer-events-none absolute bottom-0 right-0 z-10 w-[clamp(140px,26vw,320px)] translate-x-[42%] translate-y-[18%] select-none opacity-90 md:w-[clamp(170px,28vw,360px)] md:translate-x-[40%] md:translate-y-[0%]"
				/>
			</div>

			<div className="relative z-20">{children}</div>
		</div>
	);
}
