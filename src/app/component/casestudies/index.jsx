import React from 'react';
import CaseStudyCard from '../../component/casestudies/CaseStudyCard';

const SelectSection = () => {
  return (
    <div className="flex flex-col items-center px-[5%] md:px-[10%] mt-[3%]">
      <h1 className="text-base md:text-2xl text-[#525560] font-semibold">
        Choose a case study to explore
      </h1>
      <p className="text-center text-base md:font-medium text-[#525560] leading-tight md:leading-normal md:max-w-[70%]">
        The case studies are showcased using Flipsnack, offering a visually
        engaging and interactive way to present in-depth narratives. This method
        enhances storytelling by allowing users to navigate through case studies
        in a structured, page-flipping format, making the experience more
        immersive and easy to follow.
      </p>
      <div>
        <CaseStudyCard />
      </div>
    </div>
  );
};

export default SelectSection;
