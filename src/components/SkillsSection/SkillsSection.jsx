import React from 'react';
import { motion } from 'framer-motion';
import { MongoDB, Express, ReactJS, NodeJS } from '../../assets';
import { TechTools } from '../index';

function SkillsSection() {
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

  // for images upside movement
  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  // stackdata
  const stackData = [
    {
      url: MongoDB,
    },
    {
      url: Express,
    },
    {
      url: ReactJS,
    },
    {
      url: NodeJS,
    },
  ];

  return (
    <div className="font-baiJamjuree px-7 md:px-24 py-8 lg:py-14 bg-left bg-[#121212] flex justify-center items-center flex-col text-whitePrimary gap-5 md:gap-8">
      {/* heading section */}
      <h2 className="text-3xl md:text-5xl font-bold capitalize text-gradient">
        Skills
      </h2>
      {/* title section */}
      <motion.div
        whileHover="stretched"
        initial="normal"
        variants={textVariants}
      >
        <div className="text-2xl lg:text-3xl mt-5 cursor-pointer capitalize">
          Tech Stack
        </div>
      </motion.div>

      {/* techstack section */}
      <div className=" w-full flex justify-between py-5 flex-wrap md:flex-nowrap gap-y-6">
        {stackData.map((stackItem) => (
          <div className="w-[47%] md:w-[20%] tap-transp" key={stackItem.url}>
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={hoverVariants}
              className="upward-hover-div  w-full h-full cursor-pointer"
            >
              <img
                src={stackItem.url}
                alt="tech-stack"
                className="w-full h-full object-cover p-5 br-gradient"
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* title section */}
      <motion.div
        whileHover="stretched"
        initial="normal"
        variants={textVariants}
      >
        <div className="text-2xl lg:text-3xl mt-5 cursor-pointer capitalize">
          Technologies and tools
        </div>
      </motion.div>

      {/* tech-tools section */}
      <TechTools />
    </div>
  );
}

export default SkillsSection;
