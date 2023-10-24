import React, { useState, useEffect } from 'react';
import { Developer } from '../../assets';
import { motion } from 'framer-motion';

function ContactSection() {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prevIsUp) => !prevIsUp);
    }, 1000); // Adjust the interval duration as needed
    return () => clearInterval(interval);
  }, []);

  const iconStyle = {
    width: '90%',
    height: '90%',
    y: isUp ? -50 : 0,
  };

  return (
    <div className="font-baiJamjuree px-7 md:px-24 py-8 lg:py-14 bg-[#121212] flex justify-center items-center md:items-start text-whitePrimary gap-10 md:gap-8 flex-col md:flex-row">
      <div className="left-up w-full md:w-1/2 flex justify-center md:justify-start">
        <motion.div
          initial={{ y: 0 }}
          animate={iconStyle}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img
            src={Developer}
            alt="developer-illus"
            className=" pt-10 md:pt-5 w-full md:w-[80%]"
          />
        </motion.div>
      </div>
      <div className="right-down w-full md:w-1/2 flex gap-8 justify-center items-center md:items-start flex-col">
        {/* heading section */}
        <h2 className="text-3xl md:text-5xl py-1 font-bold capitalize text-gradient inline-flex">
          get in touch
        </h2>

        <div className="form w-full">
          <form action="#" method="post" className="flex flex-col gap-5">
            <div className="flex gap-5 flex-col md:flex-row">
              <input
                type="text"
                name="f-name"
                id="f-name"
                placeholder="first name"
                className="capitalize p-2 py-3 glassy-div md:w-1/2 rounded-md focus:outline-none cursor-pointer focus:bg-[#474747] w-full"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email address"
                className="w-full md:w-1/2 p-2 py-3 glassy-div rounded-md focus:outline-none cursor-pointer focus:bg-[#474747]"
              />
            </div>
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="6"
              className="w-full glassy-div rounded-md p-2 focus:outline-none cursor-pointer focus:bg-[#474747]"
            >
              Message
            </textarea>
            <button
              type="submit"
              className="w-28 text-center p-2 capitalize br-gradient hover:shadow-lg hover:shadow-gradientPurple text-lg"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
