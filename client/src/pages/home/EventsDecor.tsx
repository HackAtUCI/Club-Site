import React from "react";

import blueCircle from "@/assets/home-decor/blue-circle.svg";
import greenBlobLeft from "@/assets/home-decor/green-blob-left.svg";

type EventsDecorProps = {
	children: React.ReactNode;
};

export default function EventsDecor({ children }: EventsDecorProps) {
	return (
		<div className="relative isolate overflow-visible">
			<img
				src={greenBlobLeft}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute left-0 top-[clamp(26rem,52vh,50rem)] z-10 w-[clamp(340px,48vw,840px)] -translate-x-[40%] -translate-y-[-42%] select-none opacity-85 md:top-[clamp(28rem,50vh,52rem)] md:translate-x-[0%]"
			/>

			<img
				src={blueCircle}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute right-0 top-[clamp(30rem,56vh,54rem)] z-10 w-[clamp(160px,24vw,340px)] translate-x-[42%] -translate-y-[-30%] select-none opacity-90 md:top-[clamp(32rem,54vh,56rem)] md:translate-x-[15%]"
			/>

			<div className="relative z-20">{children}</div>
		</div>
	);
}
