'use client';
import { useState } from 'react';
interface ArrowRightProp {
  initialColour?: string;
  hoverColour?: string;
  onClick?: () => void;
}

const ArrowRight: React.FC<ArrowRightProp> = ({
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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3716_20030"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3716_20030)">
          <path
            d="M12.9463 12.0005L8.87301 7.9275C8.73468 7.789 8.66385 7.61492 8.66051 7.40525C8.65735 7.19575 8.72818 7.0185 8.87301 6.8735C9.01801 6.72867 9.19368 6.65625 9.40001 6.65625C9.60634 6.65625 9.78201 6.72867 9.92701 6.8735L14.4213 11.3678C14.5148 11.4614 14.5808 11.5602 14.6193 11.664C14.6578 11.7678 14.677 11.88 14.677 12.0005C14.677 12.121 14.6578 12.2332 14.6193 12.337C14.5808 12.4408 14.5148 12.5396 14.4213 12.6333L9.92701 17.1275C9.78851 17.2658 9.61443 17.3367 9.40476 17.34C9.19526 17.3432 9.01801 17.2723 8.87301 17.1275C8.72818 16.9825 8.65576 16.8068 8.65576 16.6005C8.65576 16.3942 8.72818 16.2185 8.87301 16.0735L12.9463 12.0005Z"
            fill={colour}
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowRight;
