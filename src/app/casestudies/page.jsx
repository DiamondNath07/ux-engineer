import React from 'react';
import Navbar from '../component/navbar';
import Slider from '../component/slider';
import SelectSection from '../component/casestudies';

const page = () => {
  return (
    <div>
      <Navbar borderColor="#fff" />
      <Slider />
      <SelectSection />
    </div>
  );
};

export default page;
