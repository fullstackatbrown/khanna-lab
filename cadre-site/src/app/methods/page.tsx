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
  function matchImageWidth() {
    const nav = document.querySelector('.nav-bar') as HTMLElement;
    const imgSection = document.querySelector('.image-section') as HTMLElement;
    if (nav && imgSection) {
      imgSection.style.maxWidth = `${nav.offsetWidth}px`;
    }
  }

  useEffect(() => {
    matchImageWidth();
    window.addEventListener('resize', matchImageWidth);
    return () => {
      window.removeEventListener('resize', matchImageWidth);
    };
  }, []);
  useEffect(() => {
    const bar = document.querySelector('.progress-bar') as HTMLElement ;
    if (bar) {
      bar.style.width = '0%';
      bar.style.transition = 'width 0ms';
      // Force reflow
      void bar.offsetWidth;
      // Animate fill
      bar.style.transition = 'width 5000ms linear';
      bar.style.width = '100%';
    }
  }, []);

  return (
    <div className="flex h-auto min-h-screen w-full flex-col py-40 responsive">
      {/* Swiper with mockData */}
      <div className="flex w-full flex-col items-center justify-center">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            const progressBar = document.querySelector(
              '.progress-bar',
            ) as HTMLElement;
            if (progressBar) {
              progressBar.style.width = '0%';
              progressBar.style.transition = 'width 0ms';
              // Force reflow
              void progressBar.offsetWidth;
              // Animate fill
              progressBar.style.transition = 'width 5000ms linear';
              progressBar.style.width = '100%';
            }
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="swiper-container w-full flex-col items-center justify-center"
        >
          {Object.values(mockDataTyped).map((resource, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide flex w-full flex-col items-center justify-center text-center !p-0"
            >
              <div className="flex flex-col items-center justify-center md:flex-row md:items-center pt-10">
                <div className="relative w-full flex items-center justify-center" style={{ height: 'calc(65vh - 20px)' }}>
                <img
                  src={resource.image_reference}
                  alt={resource.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-10 top-10 flex flex-col items-start justify-start bg-white bg-opacity-20 p-4 text-gray">
                    <h3 className="responsive mb-2 font-circ-std text-2xl text-red-500">
                    {resource.title}
                    </h3>
                    <p className="mt-2 font-circ-std text-lg">
                  {resource.description}
                  </p>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
           
        </Swiper>
        <div className="relative h-1 w-full bg-gray-300">
          <div
            className="progress-bar absolute left-0 top-0 h-full bg-red-500 transition-all duration-[5000ms]"
          ></div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="relative w-full bg-gray-800 bg-opacity-40 py-10">
        <div className="flex justify-center space-x-20 overflow-auto">
          {Object.values(mockDataTyped).map((resource, index) => (
            <a
              key={index}
              href={resource.pdfUrl}
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', `/methods/${resource.title}`);
                const event = new CustomEvent('resourceChange', { detail: resource });
                window.dispatchEvent(event);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-2 font-circ-std text-xl font-bold ${
                index === activeIndex
                  ? 'text-white'
                  : 'text-[#d3e0ea] hover:text-white'
              }`}
            >
              {resource.title}
            </a>
          ))}
        </div>
      {/* Resource Details Page */}
      <div className="resource-details hidden">
        <h1 className="text-3xl font-bold">{mockDataTyped[activeIndex]?.title}</h1>
        <p className="mt-4 text-lg">{mockDataTyped[activeIndex]?.description}</p>
        <img
          src={mockDataTyped[activeIndex]?.image_reference}
          alt={mockDataTyped[activeIndex]?.title}
          className="mt-4 w-full object-cover"
        />
      </div>
      </div>

      {/* Full-width Image Section */}
      <div className="relative mt-12 h-[60vh] w-full overflow-hidden">
        <img
          src="https://sph.brown.edu/sites/default/files/styles/ultrawide_med/public/2023-08/20230814-SPH-SPH%2010th%20Anniversary%20street%20banners%20evening-17.jpg?h=e836be3d&itok=BqJHp0Vd"
          alt="Banner Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
