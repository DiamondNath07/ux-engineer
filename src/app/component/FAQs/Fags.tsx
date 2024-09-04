import React from 'react';
import CustomHeader from '../header/CustomHeader';
import Accordion from '../accordion/Accordion';

const Fags = () => {
  return (
    <div className="bg-white pt-[7%] px-[15%] mt-[3%] pb-[5%]">
      <CustomHeader bgCol="black" title="design philosophy" color="#000" />
      <h1 className="text-black md:max-w-[80%] text-2xl md:text-5xl font-semibold leading-normal md:leading-none mt-3 md:mt-10">
        Frequently asked questions
      </h1>
      <div className="flex items-center justify-center ">
        <Accordion />
      </div>
    </div>
  );
};

export default Fags;
