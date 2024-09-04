import React from 'react';
import CustomHeader from '../header/CustomHeader';
import WorkRecord from './WorkRecord';
import { workRecordData } from '../../constants';

const WorkExperience = () => {
  return (
    <div className="bg-black pt-[7%] md:px-[15%] px-[10%] mt-[10%] md:mt-[3%] pb-[5%]">
      <CustomHeader bgCol="white" title="My Experience" color="#fff" />
      <div className="flex gap-2">
        <div className="md:w-[70%] w-[100%] ">
          <h1 className="text-white md:max-w-[80%] text-2xl md:text-5xl font-semibold leading-normal md:leading-none mt-3 md:mt-10">
            Recent companies I have worked with
          </h1>
          <p className="text-white text-sm md:text-base text-justify md:text-left md:max-w-[80%] mt-2 md:mt-4 font-normal leading-normal">
            I bring over 8 years of experience as a product designer,
            specializing in creating intuitive user interfaces that address
            complex business challenges.
          </p>
          <div className="border-l-2 border-white mt-[10%] md:mt-[5%] pl-[2%]">
            {workRecordData.map((item) => (
              <div key={item.id}>
                <WorkRecord
                  logo={item.logo}
                  name={item.name}
                  position={item.position}
                  role1={item.role1}
                  role2={item.role2}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] hidden md:block">
          <img
            src="./images/flowImg.gif"
            alt="gifImg"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
