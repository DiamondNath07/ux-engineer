'use client';
import { useState } from 'react';
interface DotIconProp {
  initialColour?: string;
  hoverColour?: string;
  onClick?: () => void;
}

const DotIcon: React.FC<DotIconProp> = ({
  initialColour = '#BEF3C0',
  hoverColour = '#BEF3C0',
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
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.624512" width="16" height="16" rx="4" fill={colour} />
      </svg>
    </div>
  );
};

export default DotIcon;
