import React from "react";

import bigCircleLeft from "@/assets/home-decor/big-circle-left.svg";
import bigCircleRight from "@/assets/home-decor/big-circle-right.svg";
import smallCircle from "@/assets/home-decor/small-circle.svg";
import heroVectorLeft from "@/assets/home-decor/hero-vector-left.svg";
import heroVectorRight from "@/assets/home-decor/hero-vector-right.svg";

type HomeDecorProps = {
	children: React.ReactNode;
};

export default function HomeDecor({ children }: HomeDecorProps) {
	return (
		<div className="relative isolate overflow-visible">
			{/* Shared light background behind Hero + Events */}
			<div
				className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100svh+52rem)] hack-background-gradient"
				aria-hidden
			/>

			<img
				src={bigCircleLeft}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute top-35 left-30 z-10 w-[clamp(220px,24vw,520px)] -translate-x-[34%] -translate-y-[38%] select-none opacity-80"
			/>
			<img
				src={smallCircle}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute top-92 left-82 z-10 w-[clamp(32px,7vw,120px)] -translate-x-[34%] -translate-y-[38%] select-none opacity-80"
			/>
			<img
				src={heroVectorRight}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute top-0 right-0 z-10 w-[clamp(200px,29vw,440px)] translate-x-[30%] -translate-y-[10%] select-none"
			/>

			{/* Spillover assets: anchor near Hero bottom so they remain visible into Events */}
			<img
				src={heroVectorLeft}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute left-0 top-[calc(100svh+2rem)] z-10 w-[clamp(200px,29vw,440px)] -translate-x-[20%] select-none"
			/>
			<img
				src={bigCircleRight}
				alt=""
				aria-hidden
				draggable={false}
				className="pointer-events-none absolute right-38 top-[calc(100svh+6rem)] z-10 w-[clamp(320px,30vw,760px)] translate-x-[36%] select-none opacity-70"
			/>

			<div className="relative z-20">{children}</div>
		</div>
	);
}

