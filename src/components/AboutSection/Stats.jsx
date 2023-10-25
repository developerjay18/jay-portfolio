import React, { useState, useEffect, useId } from 'react';
import CountUp from 'react-countup';

function Stats() {
  const [isCounting, setIsCounting] = useState(false);

  // for increasing-counts
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('count-up-section');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
          setIsCounting(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {statsData.map((data) => (
        <div
          id="count-up-section"
          className="w-full md:w-[50%] lg:w-[17%]"
          key={data.number}
        >
          {isCounting && (
            <CountUp end={data.number} duration={4} delay={1}>
              {({ countUpRef }) => (
                <div className="flex flex-col justify-center items-center gap-3 md:py-5 lg:py-0">
                  <div className=" text-4xl lg:text-5xl text-gradient font-semibold ">
                    <span ref={countUpRef} />
                    <span>+</span>
                  </div>
                  <div className="text-md md:text-lg capitalize">
                    {data.title}
                  </div>
                </div>
              )}
            </CountUp>
          )}
        </div>
      ))}
    </div>
  );
}

export default Stats;
