import React from 'react';
import { motion } from 'framer-motion';

function ProjectsSection() {
  // for text strechs
  const textVariants = {
    normal: {
      scaleX: 1,
      transition: {
        duration: 0.2,
      },
    },
    stretched: {
      scaleX: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="font-baiJamjuree px-7 md:px-24 py-8 lg:py-14 bg-[#121212] flex justify-center items-center flex-col text-whitePrimary gap-5 md:gap-8">
      {/* heading section */}
      <h2 className="text-3xl md:text-5xl py-1 font-bold capitalize text-gradient">
        Projects
      </h2>
      {/* title section */}
      <motion.div
        whileHover="stretched"
        initial="normal"
        variants={textVariants}
      >
        <div className="text-2xl tap-transp text-center lg:text-3xl mt-5 cursor-pointer capitalize">
          Here are my skill-showcasing projects
        </div>
      </motion.div>

      {/* projects section */}
      <div className="uppercase text-3xl text-gradient font-bold mt-10 animate-bounce">
        Coming soon...
      </div>
    </div>
  );
}

export default ProjectsSection;
