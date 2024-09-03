import React from 'react';
import DotIcon from '../../../../public/customIcon/DotIcon';

const StatsData = () => {
  return (
    <div className="mt-[3%]">
      <div className="flex  flex-wrap items-center gap-4  max-w-[70%]">
        <div className="flex items-center gap-2">
          <DotIcon />
          <h3 className="text-white">Visual Design</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#AC94F1" />
          <h3 className="text-white">Interactive Design</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#FFF0CA" />
          <h3 className="text-white">Motion Design</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#F9CF64" />
          <h3 className="text-white">User research</h3>
        </div>
        <div className="flex items-center gap-2">
          <DotIcon initialColour="#F38FBF" />
          <h3 className="text-white">Prototyping</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsData;
