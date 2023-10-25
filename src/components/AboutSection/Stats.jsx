import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

function Stats() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const statsData = [
    {
      number: '103',
      title: 'clients delivered',
    },
    {
      number: '35',
      title: 'Global Customers',
    },
    {
      number: '1700',
      title: 'Website reach',
    },
    {
      number: '7',
      title: 'years of experience',
    },
  ];

  return (
    <div className="font-baiJamjuree w-full flex py-7 lg:py-12 my-8 lg:my-10 justify-between br-gradient flex-col md:flex-row flex-wrap gap-12 md:gap-0 lg:gap-0">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="w-full flex justify-between flex-col md:flex-row gap-12 md:gap-0"
      >
        {statsData.map((data) => (
          <div
            id="count-up-section"
            className="w-full md:w-[50%] lg:w-[17%]"
            key={data.number}
          >
            {isVisible && (
              <div className="flex flex-col justify-center items-center gap-3 md:py-5 lg:py-0">
                <div className=" text-4xl lg:text-5xl text-gradient font-semibold ">
                  <span>
                    <CountUp
                      start={0}
                      end={data.number}
                      duration={7}
                      className=""
                    />
                  </span>
                  <span>+</span>
                </div>
                <div className="text-md md:text-lg capitalize">
                  {data.title}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stats;
