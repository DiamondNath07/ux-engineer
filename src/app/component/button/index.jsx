'use client';
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-[#1D2130] hover:bg-[#525560] text-white text-base px-8 py-3 rounded-md cursor-pointer"
    >
      {label}
    </button>
  );
};

export default Button;
