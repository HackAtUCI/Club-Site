import React from "react";
import { FaLinkedin }	from "react-icons/fa";

interface TeamCardProps {
	name: string;
	position: string;
	image?: string;
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
					loading="lazy"
					className="w-full aspect-square object-cover rounded-2xl bg-gray-600"
				/>
			</div>

			<div className="flex items-center justify-between">
				<h5
					className={`leading-tight wrap-break-word font-semibold ${
						name.length > 18 ? "text-xs md:text-lg" : "text-sm md:text-xl"
					} `}
				>
					{name}
				</h5>

				<a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
					<FaLinkedin className="h-4 w-4 md:h-5 md:w-5" />
				</a>
			</div>

			<h6 className="text-xs md:text-lg">{position}</h6>
		</div>
	);
};

export default TeamCard;
