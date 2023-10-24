import React, { useState } from 'react';
import tools from './data';

const TechTools = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-7 md:px-24 w-full overflow-hidden">
      <div
        className={`scroll-content ${isHovered ? 'paused' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="marquee-content flex  gap-10 py-7 items-center">
          {tools.map((tool) => (
            <>
              <div className="rounded-lg p-2 font-semibold capitalize text-lg hover:shadow-lg hover:shadow-gradientPurple gap-2 flex justify-between min-w-[45%] md:min-w-[40%] lg:min-w-[15%] items-center glassy-div hover:bg-[#2e2e2e] cursor-pointer tap-transp">
                <img
                  src={tool.url}
                  alt="tailwind"
                  className="w-[30%] min-h-full object-contain"
                />
                <div className="name">{tool.name}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTools;
