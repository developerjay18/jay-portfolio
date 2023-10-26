import React from 'react';
import { useState } from 'react';
import Menu from './Menu';

const MenuLinks = () => {
  const [click, setClick] = useState('false');

  return (
    <div
      className={`menuLinks font-baiJamjuree md:ml-10 md:-mb-[80px] -mb-[100px] ${
        !click ? '' : 'animate-pulse'
      }`}
    >
      <ul className={`menus ${!click ? 'active' : ''}`}>
        <div
          className="togglers ml-[-191px] md:ml-[-170px]"
          onClick={() => setClick(!click)}
        >
          <i className="fa-solid fa-circle-plus"></i>
        </div>
        <Menu
          i={0}
          clr={'#ff2972'}
          setClick={setClick}
          click={click}
          href={'/'}
          title={'Home'}
          svg={<i className="fa-solid fa-house-user"></i>}
        />
        <Menu
          i={1}
          clr={'#FF00FF'}
          setClick={setClick}
          click={click}
          href={'/about-me'}
          title={'About Me'}
          svg={<i className="fa-solid fa-user"></i>}
        />

        <Menu
          i={2}
          clr={'#ffc0cb'}
          setClick={setClick}
          click={click}
          href={'/skills'}
          title={'Skills'}
          svg={<i className="fa-solid fa-award"></i>}
        />
        <Menu
          i={3}
          clr={'#00b0fe'}
          setClick={setClick}
          click={click}
          href={'/projects'}
          title={'Projects'}
          svg={<i className="fa-solid fa-puzzle-piece"></i>}
        />
        <Menu
          i={4}
          clr={'#fea600'}
          setClick={setClick}
          click={click}
          href={'/contact'}
          title={'Contact'}
          svg={<i className="fa-solid fa-id-card"></i>}
        />
        <Menu
          i={5}
          clr={'#fea600'}
          setClick={setClick}
          click={click}
          href={'/contact'}
          title={'Call me'}
          svg={<i className="fa-solid fa-phone-volume"></i>}
        />
      </ul>
    </div>
  );
};

export default MenuLinks;
