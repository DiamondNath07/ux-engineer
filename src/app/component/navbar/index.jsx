import React from 'react';
import Button from '../button';
import '../../../app/globals.css';
import { navLinks } from '../../../app/constants';

const Navbar = () => {
  return (
    <div className="bg-white border-b-[1px] w-full border-[#929292] h-[87px] flex items-center justify-between px-[15%]">
      <div className="flex flex-row gap-3">
        <img src={'./images/myLogo.png'} alt="logo" width={25} height={25} />
        <img
          src={'./images/alertImg.png'}
          alt="logo"
          width={25}
          height={25}
          className="smooth-blinking-image"
        />
        <p className="text-[#525560]">Accepting new clients</p>
      </div>
      <div>
        <ul className="flex flex-row list-none justify-center text-[#525560] text-base ">
          {navLinks.map((link) => (
            <li key={link.id} className="mx-2">
              <a className="hover:text-[#000] cursor-pointer" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="cursor-pointer">
        <Button label="Get in touch" />
      </div>
    </div>
  );
};

export default Navbar;
