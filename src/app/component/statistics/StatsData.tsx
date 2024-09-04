import React from 'react';
import DotIcon from '../../../../public/customIcon/DotIcon';

const StatsData = () => {
  return (
    <div className="md:mt-[3%] mt-[7%]">
      <div className=" grid grid-cols-2	truncate gap-4 mt-4 md:flex  md:flex-wrap md:items-center md:gap-4   md:max-w-[70%]">
        <div className="flex items-center gap-2">
          <DotIcon />
          <h3 className="text-white text-sm md:text-base">Visual Design</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#AC94F1" />
          <h3 className="text-white text-sm md:text-base">
            Interactive Design
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#FFF0CA" />
          <h3 className="text-white text-sm md:text-base ">Motion Design</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#F9CF64" />
          <h3 className="text-white text-sm md:text-base">User research</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#F38FBF" />
          <h3 className="text-white text-sm md:text-base">Prototyping</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsData;
