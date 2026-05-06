import { motion } from "framer-motion";

import EmailIcon from "@/assets/sponsor-decor/email-icon.svg";
import PersonIcon from "@/assets/sponsor-decor/person-icon.svg";
import BlueCircleOutline from "@/assets/sponsor-decor/blue-circle-outline.svg";
import GreenCircleOutline from "@/assets/sponsor-decor/green-circle-outline.svg";

export default function AnimatedBackground() {
	return (
		<>
			<motion.img
				src={EmailIcon}
				alt=""
				aria-hidden="true"
				initial={{
					opacity: 0,
					x: 200,
					rotate: 12,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					rotate: 0,
				}}
				animate={{
					y: [0, -20, 0],
				}}
				viewport={{ amount: 0.3 }}
				transition={{
					opacity: {
						duration: 0.7,
						ease: "easeOut",
					},
					x: {
						duration: 0.7,
						ease: "easeOut",
					},
					rotate: {
						duration: 0.7,
						ease: "easeOut",
					},
					y: {
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					},
				}}
				className="pointer-events-none absolute right-80 top-[62%] z-0 hidden w-100 select-none lg:block"
			/>

			<motion.img
				src={PersonIcon}
				alt=""
				aria-hidden="true"
				initial={{
					opacity: 0,
					x: 250,
					rotate: -12,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					rotate: 0,
				}}
				animate={{
					y: [0, -20, 0],
				}}
				viewport={{ amount: 0.3 }}
				transition={{
					opacity: {
						duration: 0.7,
						ease: "easeOut",
					},
					x: {
						duration: 0.7,
						ease: "easeOut",
					},
					rotate: {
						duration: 0.7,
						ease: "easeOut",
					},
					y: {
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					},
				}}
				className="pointer-events-none absolute right-6 top-[74%] z-0 hidden w-100 select-none lg:block"
			/>

			<motion.img
				src={BlueCircleOutline}
				alt=""
				aria-hidden="true"
				initial={{
					opacity: 0,
					scale: 0.6,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				viewport={{ amount: 0.2 }}
				transition={{
					duration: 0.5,
					ease: "easeOut",
				}}
				className="pointer-events-none absolute -bottom-75 -left-8 z-0 hidden w-150 select-none lg:block"
			/>

			<motion.img
				src={GreenCircleOutline}
				alt=""
				aria-hidden="true"
				initial={{
					opacity: 0,
					scale: 0.6,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				viewport={{ amount: 0.2 }}
				transition={{
					duration: 0.5,
					ease: "easeOut",
				}}
				className="pointer-events-none absolute -bottom-100 -right-16 z-0 hidden w-150 select-none lg:block"
			/>
		</>
	);
}