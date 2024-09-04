import React from 'react';

const WorkRecord = ({ logo, name, position, role1, role2 }) => {
  return (
    <div className="flex items-start gap-3 md:max-w-[80%] mb-8">
      <div>
        <img src={logo} alt="icon" className="w-[64px] md:w-[42px]" />
      </div>
      <div>
        <h2 className="text-white text-base md:text-2xl font-semibold leading-none">
          {name}
        </h2>
        <h4 className="text-white text-sm md:text-xl font-medium mt-1 md:mt-2  leading-normal">
          {position}
        </h4>
        <ul className="mt-2">
          <li className="text-white text-sm md:text-base leading-normal font-normal">
            {role1}
          </li>
          <li className="text-white  text-sm md:text-base leading-normal font-normal">
            {role2}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkRecord;
