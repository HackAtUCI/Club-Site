import { motion } from "framer-motion";
export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  return (
    <motion.section 
        initial={{
				opacity: 0,
				y: 80,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{ amount: 0.1 }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
        className="flex justify-center items-center pb-24 z-50"
    >
        <div className="flex flex-col z-50 rounded-4xl p-6 hack-white-gradient cursor-pointer" onClick={scrollToTop}>
            <button
                onClick={scrollToTop}
                className="flex w-full z-50 rounded-4xl px-10 py-2 justify-center items-center border border-white/10 cursor-pointer box-shadow"
            >
                <h1 className="text-2xl md:text-4xl font-bold gunmetal-text-gradient">
                    Back to the top
                </h1>
            </button>
        </div>
    </motion.section>	

  );
}