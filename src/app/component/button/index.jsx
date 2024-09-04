'use client';
import React from 'react';

const Button = ({
  label,
  onClick,
  width,
  text = 'base',
  px = '8',
  py = '3',
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-[#1D2130] hover:bg-[#525560] text-white  px-${px} py-${py} rounded-md cursor-pointer text-${text}`}
    >
      {label}
    </button>
  );
};

export default Button;
