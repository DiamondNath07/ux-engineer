'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { imageSlider } from '../../constants';

const Slider = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {imageSlider.map((item, index) => (
          <div key={index}>
            <img src={item} alt={item.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
