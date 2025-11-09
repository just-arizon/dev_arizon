import React from "react";
import { motion } from "framer-motion";

const AboutCarousel = () => {
  const text = "What are your needs...";
  
  return (
    <div className="mt-20 overflow-hidden bg-[#c084fcd9] py-4  lg:rotate-2 rotate-4">
      {/* Scrolling Text Container */}
      <motion.div 
        className="flex"
        animate={{
          x: [0, -1500], // Adjust based on content width
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate text for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            <span className="text-white font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-white/60 mx-4">•</span>
            <span className="text-white font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-white/60 mx-4">•</span>
            <span className="text-white font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-white/60 mx-4">•</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default AboutCarousel;