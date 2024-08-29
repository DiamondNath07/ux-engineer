import React from 'react';
import Button from '../button';

const Hero = () => {
  return (
    <div className="bg-white w-full px-[15%] flex justify-between items-center pt-[4%]">
      <div className="max-w-[640px]">
        <h4 className="text-[#525560] typing-text max-w-[305px]">
          Diamond Nathaniel 💥 Product Designer
        </h4>
        <p className="text-[#525560] text-4xl font-medium mt-2">
          Living in New Castle, designing features for Quickteller mobile
          payments using Open Banking systems.
        </p>
        <p className="text-[#525560] mt-2">
          Helping business and brands to craft expensive and engaging solutions
          for their solutions for their software needs.
        </p>
        <div className="mt-2">
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
