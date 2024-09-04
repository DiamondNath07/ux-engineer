'use client';

import { cardContent } from '../../../app/constants';
import React from 'react';
import Button from '../button';

const CardStacks = () => {
  return (
    <div className="bg-white w-full px-[15%] pt-[7%]">
      <div className="flex flex-col gap-8 ">
        {cardContent.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === 0
                ? 'bg-[#F7F8FF] shadow-md'
                : index === 1
                ? 'bg-[#E0F4FD] shadow-md m'
                : index === 2
                ? 'bg-[#ECF0FC] shadow-md'
                : 'bg-[#F3FAFD] shadow-md'
            } px-[5%] py-[5%] rounded-3xl sticky top-10  `}
          >
            <h1 className="text-4xl font-medium">{item.companyName}</h1>
            <div className="flex justify-between items-center">
              <div className="max-w-[596px]">
                <h2 className="text-2xl leading-normal mt-2 ">
                  {item.project}
                </h2>
                <p className="text-base leading-normal mt-2 text-justify max-w-[95%]">
                  {item.description}
                </p>
                <div className="mt-4">
                  <Button
                    label="View case study"
                    onClick={() => console.log('clicked now')}
                  />
                </div>
              </div>
              <div>
                <img src={item.image} alt="images" width="100%" height="100%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStacks;
