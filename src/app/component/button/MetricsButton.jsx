import Image from 'next/image';
import React from 'react';

const MetricsButton = ({ src, count, description }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <img
        src={src}
        width={100}
        height={100}
        alt="data"
        className="rounded-full w-[42px] h-[42px]"
      />
      <h3>{count}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MetricsButton;
