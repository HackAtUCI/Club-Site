import React from "react";
import linkedinLogo from "@/assets/logos/linkedin.svg";

interface TeamCardProps {
	name: string;
	position: string;
	image?: any;
	linkedInUrl?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
	name,
	position,
	image,
	linkedInUrl,
}) => {
	return (
		<div className="flex flex-col w-4/5 mb-5">
			<div className="relative mb-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
				<img
					src={image}
					alt={name}
					className="w-full aspect-square object-cover rounded-md bg-gray-600"
				/>
			</div>

			<div className="flex items-center justify-between">
				<h5
					className="text-sm md:text-lg font-bold text-white"
				>
					{name}
				</h5>

				<a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
					<img
						src={linkedinLogo}
						alt="LinkedIn"
						className="w-4 h-4 md:w-5 md:h-5 opacity-90 hover:opacity-100"
					/>
				</a>
			</div>

			<h6 className="text-xs md:text-sm text-gray-200">{position}</h6>
		</div>
	);
};

export default TeamCard;
