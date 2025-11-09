import React from "react";
import { motion } from "framer-motion";

const ProjectCarousel = () => {
  const text = "Take a look these projects";
  
  return (
    <div className="mt-20 overflow-hidden bg-[#8ef105] py-4  -rotate-2">
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
            <span className="text-black font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-black/60 mx-4">•</span>
            <span className="text-black font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-black/60 mx-4">•</span>
            <span className="text-black font-clash text-lg mx-8 whitespace-nowrap">
              {text}
            </span>
            <span className="text-black/60 mx-4">•</span>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default ProjectCarousel;