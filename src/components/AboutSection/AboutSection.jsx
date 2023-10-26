import React from 'react';
import { Profile } from '../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Stats } from '../index.js';

function AboutSection() {
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
    <div className="font-baiJamjuree px-7 md:px-24 py-8 lg:py-14 bg-[#151515] text-whitePrimary flex justify-center items-center flex-col gap-5 md:gap-8">
      {/* heading section */}
      <h2 className="text-3xl md:text-5xl font-bold capitalize text-gradient">
        About me
      </h2>
      {/* title section */}
      <motion.div
        whileHover="stretched"
        initial="normal"
        variants={textVariants}
        className='tap-transp'
      >
        <div className="text-2xl lg:text-3xl cursor-pointer capitalize">
          Full stack web developer
        </div>
      </motion.div>
      {/* intro section */}
      <div className="flex py-8 lg:py-10 flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] flex flex-col  min-h-full lg:justify-around gap-10 lg:gap-0 justify-center items-center lg:items-start">
          <div className="font-inter text-lightGrey text-md lg:text-lg flex gap-4 flex-col">
            <div className="flex gap-4">
              <span>
                <i className="fa-solid fa-star text-gradient"></i>
              </span>
              Delivering lightning-fast, top-quality websites is my expertise!
            </div>
            <div className=" flex gap-4">
              <span>
                <i className="fa-solid fa-star text-gradient"></i>
              </span>
              I help businesses to grow their online presence and increase their
              sales by creating beautiful animated, responsive and fast
              websites.
            </div>
            <div className="flex gap-4">
              <span>
                <i className="fa-solid fa-star text-gradient"></i>
              </span>
              I specialize in crafting fully responsive and animated web
              experiences that leave a lasting impression.
            </div>
          </div>
          <Link to={'/contact'} className="w-[40%] md:w-[22%] lg:w-[24%]">
            <button className="br-gradient px-3 py-2  text-whitePrimary animate-pulse hover:shadow-lg hover:shadow-gradientPurple text-lg">
              Resume (CV)
            </button>
          </Link>
        </div>
        <div className="image flex pt-20 lg:pt-0 w-full lg:w-[40%] justify-center">
          <img
            src={Profile}
            alt="profile-pic"
            className="moving-div w-[50%] rounded-xl"
          />
        </div>
      </div>
      {/* stats section */}
      <Stats />
    </div>
  );
}

export default AboutSection;
