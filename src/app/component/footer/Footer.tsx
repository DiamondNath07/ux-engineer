'use client';
import Image from 'next/image';
import React from 'react';
import Button from '../button';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(./images/footerBG.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      <div className=" pt-[3%] px-[15%] pb-[5%]">
        <div className="flex gap-5 justify-between">
          <div className="w-[50%]">
            <div className="max-w-[80%]">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/myLogo.png"
                  alt="logo"
                  width={25}
                  height={25}
                />
                <h3 className="text-black">Nathaniel D.</h3>
              </div>
              <h2 className="text-3xl font-bold leading-normal mt-[2%] ">
                Just a click away from transforming your ideas to visible
                realities
              </h2>
              <div className="mt-[4%]">
                <Button
                  label="Get in touch"
                  onClick={() => console.log('great')}
                  width="w-[100%]"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%]">right</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
