'use client';

import React from 'react';
import CustomHeader from '../header/CustomHeader';
import StatsData from './StatsData';

const Statistics = () => {
  return (
    <div className="bg-black pt-[7%] px-[15%] mt-[3%] pb-[5%]">
      <CustomHeader bgCol="white" title="my statistics" color="#fff" />
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-[100%] md:w-[70%]">
          <h1 className="text-white md:max-w-[80%] leading-normal text-2xl md:text-5xl font-semibold md:leading-none mt-2 md:mt-10">
            My skill analytics as a Product designer
          </h1>
          <p className="text-white text-left mt-2 md:text-left text-sm md:text-base md:max-w-[80%] md:mt-4 font-normal leading-normal">
            As a product designer, I craft user-centered solutions that blend
            functionality with aesthetics, ensuring products are both innovative
            and aligned with business goals. My focus is on creating seamless,
            impactful experiences from concept to completion.
          </p>
          <div className="hidden md:block">
            <StatsData />
          </div>
        </div>
        <div className="w-[90%] flex flex-col mt-4 md:mt-0 self-center md:w-[30%]">
          <img
            src="./images/pieChartImg.png"
            alt="pieChart"
            width="100%"
            height="100%"
            className="rotate-animation"
          />
          <div className="md:hidden">
            <StatsData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
