import React from 'react';

const CustomHeader = ({ bgCol, title, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={` w-[72px] h-[2px] bg-${bgCol}`}></div>
      <h1
        className="uppercase"
        style={{
          color: color,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default CustomHeader;
