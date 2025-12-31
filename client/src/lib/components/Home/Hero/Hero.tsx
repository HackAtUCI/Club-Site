import React from "react";
import HackLogo from "@/assets/logos/hack.svg";
import PrimaryButton from "@/lib/components/PrimaryButton/PrimaryButton";

interface HeroProps {
	[x: string]: unknown;
}

const Hero: React.FC<HeroProps> = ({ onClick, ...props }) => {
	return (
		<div
			className="flex h-screen w-full flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-24"
			{...props}
		>
			<div className="flex items-center justify-center">
				<img
					src={HackLogo}
					alt="Hack at UCI Logo"
					width={300}
					height={300}
					className="w-[30%] lg:w-[300px]"
				/>
			</div>
			<div className="flex flex-col items-center justify-center gap-8">
				<h1 className="text-heading text-center">Hack at UCI</h1>
				<PrimaryButton className="px-32" onClick={onClick}>
					Get Involved
				</PrimaryButton>
			</div>
		</div>
	);
};

export default Hero;
