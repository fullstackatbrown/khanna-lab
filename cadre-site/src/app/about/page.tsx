'use client';

import React, { useState, useEffect } from 'react';
import mockData from './mockdata/mockAnnouncements.json';

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
  //helper array to simulate multiple team members
  const teamMembers = [
    {
      id: 1,
      name: 'David Meyers',
      img_url:
        'https://vivo.brown.edu/profile-images/aa0/509/833/156/491/3af/5de/2ed/9fe/961/35/dmeyers1_photo_.png',
      bio: 'David J Meyers, PhD, MPH, is a health services researcher and health economist whose research broadly focuses on how payment and delivery reform affect the outcomes of historically marginalized patient populations. David earned a PhD in Health Services Research with a concentration in Health Economics from the Brown University School of Public Health, and a MPH in Epidemiology and Biostatistics from the Tufts University School of Medicine.',
    },
    {
      id: 2,
      name: 'Hannah James',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.',
    },
    {
      id: 3,
      name: 'Cyrus Kosar',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.',
    },
    {
      id: 4,
      name: 'Kendra Offiaeli',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.',
    },
    {
      id: 5,
      name: 'Amal Trivedi',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Amal Trivedi is a general internist and health services researcher who studies quality of care and health care disparities, with particular emphasis on the impact of patient and provider incentives on quality and equity of care. His research has been published in the New England Journal of Medicine, the Journal of the American Medical Association, and Health Affairs. Dr. Trivedi teaches on health policy issues to medical students and residents and teaches a course on Quality Measurement and Improvement for graduate students.',
    },
    {
      id: 6,
      name: 'Beth Dana',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.',
    },
    {
      id: 7,
      name: 'Daeho Kim',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.',
    },
    {
      id: 8,
      name: 'Hyunkyung Yulia Yun',
      img_url:
        'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.',
    },
    {
      id: 9,
      name: 'Momotazur Rahman',
      img_url:
        'https://vivo.brown.edu/profile-images/888/30/mrahman_photo_.jpg',
      bio: 'Dr. Rahman is an economist interested in the organization and economic performance of the U.S. healthcare system. His research focuses on disparities in health care access, utilization and outcomes across different demographic and socio-economic groups; the effects of managed care on the healthcare system; the effects of regulation on healthcare markets. He received his BA from University of Dhaka, Bangladesh, and his MA and PhD in economics from Brown University, Rhode Island, USA. ',
    },
  ];

  return (
    <div className="px-60 py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="list-none space-y-6">
        {Object.keys(mockDataTyped).map((key) => {
          const resource = mockDataTyped[key];
          return (
            <li
              key={key}
              className="flex items-start space-x-5 border-b border-gray-300 py-10"
            >
              {/* Image on the left */}
              {resource.image_reference.length > 0 && (
                <img
                  src={resource.image_reference[0]}
                  alt={`${resource.proj_name} Main Image`}
                  className="h-24 w-24 rounded object-cover"
                />
              )}

              {/* Centered text content */}
              <div className="flex flex-col justify-center">
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
