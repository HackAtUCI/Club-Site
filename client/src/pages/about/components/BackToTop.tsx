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
        <div className="flex flex-col z-50 rounded-[40px] p-6 bg-linear-to-b from-[#ECEFFD] to-[#B7C2F3] cursor-pointer" onClick={scrollToTop}>
            <button
                onClick={scrollToTop}
                className="flex w-full z-50 rounded-[40px] px-10 py-2 justify-center items-center border border-white/10 cursor-pointer bg-white/20 backdrop-blur-lg shadow-[0_3px_3px_0px_#00000040,inset_0_3px_3px_0px_#00000040]"
            >
                <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-b from-[#2D2D3E] via-[#2D2D3E] to-[#4D4D70E5] bg-clip-text text-transparent ">
                    Back to the top
                </h1>
            </button>
        </div>
    </motion.section>	

  );
}