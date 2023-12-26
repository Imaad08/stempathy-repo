"use client"

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
  imageURL: string;
}

interface UpdatedSliderComponentProps {
  images: Image[];
}

const UpdatedSliderComponent: React.FC<UpdatedSliderComponentProps> = ({ images }) => {
  const slider = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handleNext = () => {
    slider.current?.slickNext();
  };

  const handlePrev = () => {
    slider.current?.slickPrev();
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <span
        key={index}
        className={`inline-block h-2 w-2 mx-2 rounded-full ${
          currentSlide === index ? 'bg-primary' : 'bg-slate-800'
        }`}
        onClick={() => slider.current?.slickGoTo(index)}
      ></span>
    ));
  };

  return (
    <div className="relative">
      <Slider {...settings} ref={slider} className="rounded-2xl overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div
              style={{
                height: '400px',
                overflow: 'hidden',
              }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.imageURL})` }}
              ></div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white rounded-full p-2"
        aria-label="Previous Slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white rounded-full p-2"
        aria-label="Next Slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {renderDots()}
      </div>
    </div>
  );
};

export default UpdatedSliderComponent;
