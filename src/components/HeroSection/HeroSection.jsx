import React from 'react';
import { HeroIcon, WhatsappIcon } from '../../assets';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

function HeroSection() {
  const textVariants = {
    normal: {
      scaleX: 1,
      transition: {
        duration: 0.2,
      },
    },
    stretched: {
      scaleX: 1.02, // Adjust the scaleX value as needed
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="font-baiJamjuree w-full -mt-24" id='hero-section'>
      <div className="flex flex-col lg:flex-row px-7 md:px-24 py-[25%] md:py-[17%] lg:py-[11%] h-full bg-hero-section">
        {/* left section */}

        <div className="left-up w-full lg:w-[60%]">
          <h1 className="moving-text font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-gradient py-4 leading-[3rem]">
            <Typewriter
              options={{
                strings: [
                  'Hi, My Name is Jay Rai',
                  'MERN Stack Developer',
                  'Full Stack Developer',
                  'Building Online Presence',
                  '< hardwork + skills />',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                cursor: '|',
                cursorClassName: 'text-Purple',
              }}
            />
          </h1>
          <p className="text-lightGrey text-md md:text-lg lg:pr-[21%] pt-5 lg:pt-7 pb-5 font-inter">
            I&apos;m here to build you a digital masterpiece - a visually
            stunning and animated website that speaks volumes. Let&apos;s bring
            your online dreams to life.
          </p>
          <motion.div
            whileHover="stretched"
            initial="normal"
            variants={textVariants}
          >
            <div className="tag-line text-gradient w-full lg:w-[90%] font-bold text-2xl md:text-4xl tracking-wide pb-10 font-inter cursor-pointer tap-transp">
              while((!success) = try())
            </div>
          </motion.div>

          <div className="buttons flex gap-5 lg:gap-8 flex-col md:flex-row">
            <Link to={'/contact'} className="w-[30%] md:w-[22%] lg:w-[16%]">
              <button className="br-gradient px-3 py-2  text-whitePrimary animate-pulse hover:shadow-lg hover:shadow-gradientPurple text-lg">
                Hire me
              </button>
            </Link>
            <Link
              to={'https://wa.me/+916351468706'}
              className="w-[68%] md:w-[35%] lg:w-[35%]"
            >
              <button className="br-gradient px-3 py-2  text-whitePrimary animate-pulse hover:shadow-lg hover:shadow-gradientPurple text-lg flex items-center justify-center gap-3">
                Freelance with me{' '}
                <img
                  src={WhatsappIcon}
                  alt="whatsapp-icon"
                  className="w-[15%]"
                />
              </button>
            </Link>
          </div>
        </div>

        {/* right section */}

        <div className="right-down pt-20 md:pt-36 lg:pt-0 w-full lg:w-[40%] flex justify-center items-center up-and-down-div">
          <img src={HeroIcon} alt="hero-icon" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
