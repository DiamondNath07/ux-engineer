import React from 'react';
import Navbar from '../component/navbar';
import Slider from '../component/slider';
import SelectSection from '../component/casestudies';
import Fags from '../component/FAQs/Fags';
import Statistics from '../component/statistics/Statistics';
import Footer from '../component/footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar borderColor="#fff" />
      <Slider />
      <SelectSection />
      <Fags />
      <Statistics />
      <Footer />
    </div>
  );
};

export default page;
