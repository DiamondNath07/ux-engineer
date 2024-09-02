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
          <div className="w-[50%]">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base text-black font-medium">
                  Case studies
                </h3>
                <ul className="flex flex-col mt-[2%] font-normal leading-normal text-sm">
                  <li>Talstrike</li>
                  <li>SwiftPoint</li>
                  <li>Vitality Org</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base text-black font-medium">
                  Social links
                </h3>
                <ul className="flex flex-col mt-[2%] font-normal leading-normal text-sm">
                  <li>Linkedin</li>
                  <li>Behance</li>
                  <li>Twitter</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base text-black font-medium">Contact</h3>
                <ul className="flex flex-col mt-[2%] font-normal leading-normal text-sm">
                  <li>diamondnathaniel2@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
