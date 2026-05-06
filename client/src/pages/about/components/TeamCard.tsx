import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

interface TeamCardProps {
	name: string;
	position: string;
	image?: string;
	linkedInUrl?: string;
}

const teamCardVariants = {
	hidden: {
		opacity: 0,
		x: 80,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};

const TeamCard: React.FC<TeamCardProps> = ({
	name,
	position,
	image,
	linkedInUrl,
}) => {
	return (
		<motion.div
			variants={teamCardVariants}
			transition={{
				duration: 0.7,
				ease: "easeOut",
			}}
			className="flex flex-col w-11/12 mb-5"
		>
			<div className="relative mb-2 aspect-square overflow-hidden rounded-2xl transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
				<img
					src={image}
					alt={name}
					loading="eager"
					decoding="async"
					className="w-full aspect-square object-cover scale-115 rounded-2xl"
				/>
			</div>

			<div className="flex min-h-8 items-center justify-between">
				<h5
					className={`leading-tight wrap-break-word font-semibold ${
						name.length > 18 ? "text-xs md:text-lg" : "text-sm md:text-xl"
					}`}
				>
					{name}
				</h5>

				{linkedInUrl && (
					<a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
						<FaLinkedin className="h-4 w-4 md:h-5 md:w-5" />
					</a>
				)}
			</div>

			<h6 className="text-xs md:text-lg">{position}</h6>
		</motion.div>
	);
};

export default TeamCard;
