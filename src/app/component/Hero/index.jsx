'use client';

import React, { useEffect, useState } from 'react';
import Button from '../button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white w-full px-[15%] flex justify-between items-center pt-[4%]">
      <div className="max-w-[640px]">
        <h4 className="text-[#525560] typing-text max-w-[305px]">
          Diamond Nathaniel 💥 Product Designer
        </h4>
        <p
          className={`text-[#525560] text-4xl font-medium mt-2 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Living in Newcastle, designing features for Quickteller mobile
          payments using Open Banking systems.
        </p>
        <p
          className={`text-[#525560] mt-2 transition-opacity duration-1500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Helping business and brands to craft expensive and engaging solutions
          for their solutions for their software needs.
        </p>
        <div
          className={`${
            isVisible ? 'opacity-100' : 'opacity-0'
          } mt-2 transition-opacity duration-2000`}
        >
          <Button label="Get in touch" />
        </div>
      </div>
      <div>
        <img src={'./images/imageStack.png'} alt="hero" width="100%" />
      </div>
    </div>
  );
};

export default Hero;
