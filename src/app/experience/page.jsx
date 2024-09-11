import React from 'react';
import Statistics from '../component/statistics/Statistics';
import WorkExperience from '../component/works/WorkExperience';
import Fags from '../component/FAQs/Fags';
import Footer from '../component/footer/Footer';
import Navbar from '../component/navbar';

const Experience = () => {
  return (
    <div className="">
      <Navbar />
      <div className="-mt-[8%]">
        <WorkExperience />
      </div>
      <Fags />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Experience;
