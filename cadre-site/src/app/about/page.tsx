'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import mockData from './mockdata/mockAnnouncements.json';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

type ResourceData = {
  date_posted: string;
  proj_name: string;
  description: string;
  event_time_date: string;
  image_reference: string[];
};

type DataType = {
  [key: string]: ResourceData;
};

//mock data set up
const mockDataTyped = mockData as DataType;

export default function About() {
  const [headerHeight, setHeaderHeight] = useState(0);

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
    <div className="px-60 py-40">
      <h2 className="text-4xl font-semibold pt-5 border-gray-300">Projects</h2>
      <ul className="list-none">
        {Object.keys(mockDataTyped).map((key) => {
          const resource = mockDataTyped[key];
          return (
            <li
              key={key}
              className="flex items-start space-x-5 border-b border-gray-300 py-10"
            >
              {/* Swiper Stuff 
              NOT QUITE FIXED: Last mockdata key for some reason only displays one image */}
              <div className="h-48 w-60">
                <Swiper
                  spaceBetween={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="h-48 w-60"
                >
                  {resource.image_reference.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex} className="h-full w-full">
                      <img
                        src={image}
                        alt={`Image ${imgIndex}`}
                        className="h-full w-full rounded object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Centered text content */}
              <div className="flex flex-col justify-center px-10">
                <h3 className="text-lg font-bold">{resource.proj_name}</h3>
                <p className="text-sm text-gray-600">{resource.date_posted}</p>
                <p className="mt-2">{resource.description}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {resource.event_time_date}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
