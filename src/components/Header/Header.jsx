import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="font-baiJamjuree px-7 md:px-24 bg-transparent sticky top-0 w-full z-20">
      <nav className="flex justify-between py-5 items-center">
        <div className="heading uppercase font-semibold text-3xl md:text-4xl text-whiteSecondary">
          JayRai
        </div>
        <Link to={'/'}>
          <div className="home-logo cursor-pointer tap-transp">
            <i className="fa-solid fa-house-chimney-user fa-xl text-gradient px-4 hover:shadow-lg hover:shadow-gradientPurple rounded-full py-6"></i>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
