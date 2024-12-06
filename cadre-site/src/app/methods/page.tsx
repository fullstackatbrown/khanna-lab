"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation } from 'swiper/modules';

type ResourceData = {
  date_posted: string;
  title: string;
  pdfUrl: string;
  description: string;
  event_time_date: string;
  image_reference: string;
};
type MockDataType = {
  [key: string]: ResourceData;
};

import mockData from './mockDataResourcesDocumentation.json';
const mockDataTyped = mockData as MockDataType;

export default function Methods() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.getElementById('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <div className="flex flex-col h-auto min-h-screen w-full px-6 pt-2">
      {/* Dynamic spacer based on header height */}
      <div style={{ minHeight: `${headerHeight}px` }}></div>

      {/* Full-width Image Section */}
      <div className="relative w-full h-[60vh] overflow-hidden mt-12"> {/* Added mt-12 for spacing */}
        <img
          src="https://sph.brown.edu/sites/default/files/styles/ultrawide_med/public/2023-08/20230814-SPH-SPH%2010th%20Anniversary%20street%20banners%20evening-17.jpg?h=e836be3d&itok=BqJHp0Vd"
          alt="Banner Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Additional spacing to move Resources section further down */}
      <div className="mt-20"></div> {/* Added mt-20 for larger spacing */}

      <h1 className="mb-8 text-center font-circ-std text-5xl-responsive font-bold text-primary">
        Resources
      </h1>

      {/* Swiper with mockData */}
      <div className="flex flex-col items-center justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, Navigation]}
          className="flex flex-col items-center justify-center w-4/5 max-w-2xl h-[70vh]"
        >
          {Object.values(mockDataTyped).map((resource, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center text-center w-full">
              <div className="w-full h-[300px] mb-6 overflow-hidden rounded-lg">
                <img
                  src={resource.image_reference}
                  alt={resource.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-circ-std mb-2">{resource.title}</h3>
              <p className="mt-4 font-circ-std text-lg">{resource.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Nav Bar */}
      <div className="relative w-full bg-gray-800 bg-opacity-40 py-10 px-20">
        <div className="flex justify-center space-x-20 overflow-auto">
          {Object.values(mockDataTyped).map((resource, index) => (
            <a
              key={index}
              href={resource.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl font-circ-std font-bold mb-2 ${
                index === activeIndex ? "text-white" : "text-[#d3e0ea] hover:text-white"
              }`}
            >
              {resource.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
