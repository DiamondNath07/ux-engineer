'use client';

import React, { useEffect, useState } from 'react';
import Button from '../button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white w-full px-[15%] flex  items-center md:pt-[4%] pt-[15%]">
      <div className="max-w-[640px]">
        <h4 className="text-[#525560] typing-text max-w-[305px]">
          Diamond Nathaniel 💥 Product Designer
        </h4>
        <p
          className={`text-[#525560] text-xl mt-3 font-semibold  md:text-left md:text-4xl md:font-medium md:mt-2 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Designed features for mobile payment platforms utilizing Open Banking
          systems.
        </p>
        <p
          className={`text-[#525560]  md:text-left md:text-base  mt-2 transition-opacity duration-1500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Helping business and brands to craft expensive and engaging solutions
          for their solutions for their software needs.
        </p>
        <div
          className={`${
            isVisible ? 'opacity-100' : 'opacity-0'
          } md:mt-2 transition-opacity duration-2000 flex justify-center items-center md:justify-normal md:items-start mt-5`}
        >
          <Button
            label="Get in touch"
            width="70%"
            onClick={() => router.push('mailto:diamondnathaniel2@gmail.com')}
          />
        </div>
      </div>
      <div>
        <img src={'./images/imageStack.png'} alt="hero" width="100%" />
      </div>
    </div>
  );
};

export default Hero;
