'use client';

import Image from 'next/image';
import React from 'react';
import { metricsData, projectCards } from '../../constants';
import MetricsButton from '../../component/button/MetricsButton';
import Button from '../button';
import { useRouter } from 'next/navigation';

const CaseStudyCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-[10%] ">
      {projectCards.map((item, index) => (
        <div
          key={item.id}
          className="mt-[5%] pb-8  rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src={item.images}
            alt="images"
            width={422}
            height={317}
            className="  bg-white"
          />
          <div className="px-[3%] mt-[5%]">
            <h2 className="text-xl font-medium">{item.company}</h2>
            <div className="flex items-center justify-between mt-6">
              {item.metricsData.map((metric, index) => (
                <MetricsButton
                  key={index}
                  src={metric.icon}
                  count={metric.count}
                  description={metric.description}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 w-full flex justify-center items-center px-[3%]">
            <button
              onClick={() => {
                const url =
                  index === 0
                    ? 'https://www.figma.com/deck/iL1Ofp5eXm5EunItQS7rRd/Swiftpoint-casestudy?node-id=1-536&node-type=slide&t=6Z9TdF5dmDQdAvJA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
                    : index === 1
                    ? 'https://devapp.talstrike.com'
                    : index === 2
                    ? 'https://mern-real-estate-project.onrender.com/'
                    : '/default-url';
                router.push(url);
              }}
              className="capitalize bg-[#1D2130] hover:bg-[#525560] text-white px-8 py-3 rounded-md cursor-pointer w-full"
            >
              {index === 0 ? 'View Case Study' : 'See project'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyCard;
