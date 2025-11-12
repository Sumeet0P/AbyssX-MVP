import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Carousel from "./Carousel";

const Hero = () => {
  const imageSectionRef = useRef(null);
  const isInView = useInView(imageSectionRef, { once: true, margin: "-100px" });
  return (
    <motion.div
      className="hero pt-24 text-white w-[80%] mx-auto flex items-center justify-center flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Carousel />

      <motion.div
        ref={imageSectionRef}
        className="mx-auto py-16 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      >
        <img
          className="image"
          src="./joinLife.png"
          alt="Join Life"
          width={800}
        />
        <p className="text-xs mt-6">JOIN LIFE</p>
        <span className="text-sm">EXPERIENCE THE JOURNEY</span>
      </motion.div>
      
    </motion.div>
  );
};

export default Hero;
