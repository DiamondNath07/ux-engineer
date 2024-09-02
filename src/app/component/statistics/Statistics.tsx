'use client';

import React from 'react';
import CustomHeader from '../header/CustomHeader';
import StatsData from './StatsData';

const Statistics = () => {
  return (
    <div className="bg-black pt-[7%] px-[15%] mt-[3%] pb-[5%]">
      <CustomHeader bgCol="white" title="my statistics" color="#fff" />
      <div className="flex gap-2">
        <div className="w-[70%]">
          <h1 className="text-white max-w-[80%] text-5xl font-semibold leading-none mt-10">
            My skill analytics as a Product designer
          </h1>
          <p className="text-white max-w-[80%] mt-4 font-normal leading-normal">
            As a product designer, I craft user-centered solutions that blend
            functionality with aesthetics, ensuring products are both innovative
            and aligned with business goals. My focus is on creating seamless,
            impactful experiences from concept to completion.
          </p>
          <StatsData />
        </div>
        <div className="w-[30%]">
          <img
            src="./images/pieChartImg.png"
            alt="pieChart"
            width="100%"
            height="100%"
            className="rotate-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
