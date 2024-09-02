'use client';
import { useState } from 'react';
interface ArrowDownProp {
  initialColour?: string;
  hoverColour?: string;
  onClick?: () => void;
}

const ArrowDown: React.FC<ArrowDownProp> = ({
  initialColour = '#121315',
  hoverColour = '#4169E1',
  onClick,
}) => {
  const [colour, setColour] = useState<string>(initialColour);
  return (
    <div
      className="cursor-pointer	"
      onMouseEnter={() => {
        setColour(hoverColour);
      }}
      onMouseLeave={() => {
        setColour(initialColour);
      }}
      onClick={onClick}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_119_1196"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <rect
            x="18"
            width="18"
            height="18"
            transform="rotate(90 18 0)"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_119_1196)">
          <path
            d="M9 10.8565L14.5125 5.34395C14.7 5.15645 14.9219 5.06583 15.1781 5.07208C15.4344 5.07833 15.6562 5.1752 15.8438 5.3627C16.0312 5.5502 16.125 5.77208 16.125 6.02833C16.125 6.28458 16.0312 6.50645 15.8438 6.69395L10.0688 12.4502C9.91875 12.6002 9.75 12.7127 9.5625 12.7877C9.375 12.8627 9.1875 12.9002 9 12.9002C8.8125 12.9002 8.625 12.8627 8.4375 12.7877C8.25 12.7127 8.08125 12.6002 7.93125 12.4502L2.15625 6.6752C1.96875 6.4877 1.87812 6.26895 1.88437 6.01895C1.89062 5.76895 1.9875 5.5502 2.175 5.3627C2.3625 5.1752 2.58438 5.08145 2.84063 5.08145C3.09688 5.08145 3.31875 5.1752 3.50625 5.3627L9 10.8565Z"
            fill={colour}
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowDown;
