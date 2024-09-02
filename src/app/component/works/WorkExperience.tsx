import React from 'react';
import CustomHeader from '../header/CustomHeader';
import WorkRecord from './WorkRecord';
import { workRecordData } from '../../constants';

const WorkExperience = () => {
  return (
    <div className="bg-black pt-[7%] px-[15%] mt-[3%]">
      <CustomHeader bgCol="white" title="My Experience" color="#fff" />
      <div className="flex gap-2">
        <div className="w-[70%]">
          <h1 className="text-white max-w-[80%] text-5xl font-semibold leading-none mt-10">
            Recent companies I have worked with
          </h1>
          <p className="text-white max-w-[80%] mt-4 font-normal leading-normal">
            I bring over 8 years of experience as a product designer,
            specializing in creating intuitive user interfaces that address
            complex business challenges.
          </p>
          <div className="border-l-2 border-white mt-[5%] pl-[2%]">
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
        <div className="w-[30%]">
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
