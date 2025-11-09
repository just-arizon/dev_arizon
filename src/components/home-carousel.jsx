import React from "react";
import { motion } from "framer-motion";

const HomeCarousel = () => {
  const text = "Personal Portfolio";
  
  return (
    <div className="relative top-20 overflow-hidden bg-white py-4  lg:-rotate-2 -rotate-4">
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
            <span className="text-[#c084fcd9]  font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-[#c084fcd9] /60 mx-4">•</span>
            <span className="text-[#c084fcd9]  font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-[#c084fcd9] /60 mx-4">•</span>
            <span className="text-[#c084fcd9]  font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-[#c084fcd9] /60 mx-4">•</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default HomeCarousel;