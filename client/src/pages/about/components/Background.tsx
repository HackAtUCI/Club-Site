import greenBlob from "@/assets/blobs/green-blob.svg";
import blueBlob from "@/assets/blobs/blue-blob.svg";
import whiteBlob from "@/assets/blobs/white-blob.svg";
import { motion } from "framer-motion";

export default function Background() {
    return (
        <div className="absolute inset-0 h-full">
            <motion.img
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
				src={greenBlob}
				alt=""
				className="absolute right-0 top-[4%] z-0 pointer-events-none select-none"
			/>
			<motion.img
                aria-hidden="true"
				initial={{
					opacity: 0,
                    x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					rotate: 0,
				}}
				viewport={{ amount: 0.2 }}
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
				src={blueBlob}
				alt=""
				className="absolute left-0 top-[18%] z-0 pointer-events-none select-none"
			/>
			<motion.img
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
				viewport={{ amount: 0.2 }}
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
				src={whiteBlob}
				alt=""
				className="absolute right-0 top-[60%] z-0 pointer-events-none select-none"
			/>
        </div>
    );
}