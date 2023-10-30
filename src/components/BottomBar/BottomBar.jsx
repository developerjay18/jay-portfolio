import React from 'react';
import {MenuLinks} from '../index.js';

const Bottombar = () => {
  return (
    <div className="btmcnt fixed bottom-24 left-10 w-full bg-transparent h-10 z-10 flex justify-between items-center p-5 text-whitePrimary">
      <MenuLinks />
    </div>
  );
};

export default Bottombar;
