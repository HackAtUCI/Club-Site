import { motion } from "framer-motion";

import BlueBlob from "@/assets/events-decor/blue-blob.svg";
import BlueCircleOutline from "@/assets/events-decor/blue-circle-outline.svg";
import BlueCircle from "@/assets/events-decor/blue-circle.svg";
import GreenBlobBottom from "@/assets/events-decor/green-blob-bottom.svg";
import GreenBlobMiddle from "@/assets/events-decor/green-blob-middle.svg";
import GreenCircleOutline from "@/assets/events-decor/green-circle-outline.svg";
import WhiteCircle from "@/assets/events-decor/white-circle.svg";

export default function EventsBackground() {
	return (
		<>
			<motion.img
				src={WhiteCircle}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, x: -160, rotate: -8 }}
				whileInView={{ opacity: 1, x: 0, rotate: 0 }}
				viewport={{ amount: 0.3 }}
				transition={{
					opacity: { duration: 0.7, ease: "easeOut" },
					x: { duration: 0.7, ease: "easeOut" },
					rotate: { duration: 0.7, ease: "easeOut" },
				}}
                className="pointer-events-none absolute -left-16 top-100 z-0 w-48 select-none lg:w-96"
                />

			<motion.img
				src={BlueCircle}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, scale: 0.6 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ amount: 0.2 }}
				transition={{
					opacity: { duration: 0.5, ease: "easeOut" },
					scale: { duration: 0.5, ease: "easeOut" },
				}}
                className="pointer-events-none absolute -right-8 top-12 z-0 w-24 select-none lg:w-100"
                />

			<motion.img
				src={GreenCircleOutline}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, scale: 0.6 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ amount: 0.2 }}
				transition={{
					opacity: { duration: 0.5, ease: "easeOut" },
					scale: { duration: 0.5, ease: "easeOut" },
				}}
                className="pointer-events-none absolute -right-4 top-240 z-0 w-36 select-none lg:w-100"
                />

			<motion.img
				src={BlueCircleOutline}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, scale: 0.6 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ amount: 0.2 }}
				transition={{
					opacity: { duration: 0.5, ease: "easeOut" },
					scale: { duration: 0.5, ease: "easeOut" },
				}}
                className="pointer-events-none absolute -left-20 top-350 z-0 w-48 select-none lg:w-100"
                />

			<motion.img
				src={GreenBlobMiddle}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, x: 180, rotate: -8 }}
				whileInView={{ opacity: 1, x: 0, rotate: 0 }}
				viewport={{ amount: 0.3 }}
				transition={{
					opacity: { duration: 0.7, ease: "easeOut" },
					x: { duration: 0.7, ease: "easeOut" },
					rotate: { duration: 0.7, ease: "easeOut" },
				}}
				className="pointer-events-none absolute right-0 bottom-365 z-0 hidden w-450 select-none lg:block"
			/>

			<motion.img
				src={BlueBlob}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, x: 180, rotate: 8 }}
				whileInView={{ opacity: 1, x: 0, rotate: 0 }}
				viewport={{ amount: 0.3 }}
				transition={{
					opacity: { duration: 0.7, ease: "easeOut" },
					x: { duration: 0.7, ease: "easeOut" },
					rotate: { duration: 0.7, ease: "easeOut" },
				}}
				className="pointer-events-none absolute -right-24 bottom-8 z-0 hidden w-96 select-none lg:block"
			/>

			<motion.img
				src={GreenBlobBottom}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, x: -180, rotate: 8 }}
				whileInView={{ opacity: 1, x: 0, rotate: 0 }}
				viewport={{ amount: 0.3 }}
				transition={{
					opacity: { duration: 0.7, ease: "easeOut" },
					x: { duration: 0.7, ease: "easeOut" },
					rotate: { duration: 0.7, ease: "easeOut" },
				}}
				className="pointer-events-none absolute -left-36 bottom-0 z-0 hidden w-160 select-none lg:block"
			/>
		</>
	);
}
