"use client";

import React, { useState, useEffect } from 'react';
import mockData from './mockdata/mockAnnouncements.json'

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
    { id: 1, name: 'David Meyers', 
    img_url: 'https://vivo.brown.edu/profile-images/aa0/509/833/156/491/3af/5de/2ed/9fe/961/35/dmeyers1_photo_.png', 
    bio: 'David J Meyers, PhD, MPH, is a health services researcher and health economist whose research broadly focuses on how payment and delivery reform affect the outcomes of historically marginalized patient populations. David earned a PhD in Health Services Research with a concentration in Health Economics from the Brown University School of Public Health, and a MPH in Epidemiology and Biostatistics from the Tufts University School of Medicine.' },
    { id: 2, name: 'Hannah James', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.' },
    { id: 3, name: 'Cyrus Kosar', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.' },
    { id: 4, name: 'Kendra Offiaeli', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.' },
    { id: 5, name: 'Amal Trivedi', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Amal Trivedi is a general internist and health services researcher who studies quality of care and health care disparities, with particular emphasis on the impact of patient and provider incentives on quality and equity of care. His research has been published in the New England Journal of Medicine, the Journal of the American Medical Association, and Health Affairs. Dr. Trivedi teaches on health policy issues to medical students and residents and teaches a course on Quality Measurement and Improvement for graduate students.' },
    { id: 6, name: 'Beth Dana', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.' },
    { id: 7, name: 'Daeho Kim', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.' },
    { id: 8, name: 'Hyunkyung Yulia Yun', 
    img_url: 'https://minnesotatraining.com/wp-content/uploads/2019/07/placeholder-portrait.png', 
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Auctor elit sed vulputate mi. Enim facilisis gravida neque convallis. Sit amet facilisis magna etiam tempor orci. Sed egestas egestas fringilla phasellus. Eu feugiat pretium nibh ipsum consequat. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus quis varius quam quisque id diam vel.' },
    { id: 9, name: 'Momotazur Rahman', 
    img_url: 'https://vivo.brown.edu/profile-images/888/30/mrahman_photo_.jpg', 
    bio: 'Dr. Rahman is an economist interested in the organization and economic performance of the U.S. healthcare system. His research focuses on disparities in health care access, utilization and outcomes across different demographic and socio-economic groups; the effects of managed care on the healthcare system; the effects of regulation on healthcare markets. He received his BA from University of Dhaka, Bangladesh, and his MA and PhD in economics from Brown University, Rhode Island, USA. ' },
  ];

  return (
    <div>
      
      <div className="flex min-h-screen flex-col px-10 md:px-[14vw] pt-2 pb-32 ml-3 w-full h-full">
        <div style={{ minHeight: `${headerHeight}px` }}></div>
        <div className="my-5">
          <div className="text-center font-circ-std">
            <h1 className="text-4.5xl-responsive mb-8 mt-6 text-primary font-bold">About Us</h1>
          </div>
          <div className ="paragraphs text-lg">
            <p className="paragraph mb-8 md:pl-[5vw] md:pr-[5vw] lg:px-10 font-mp">
            This website is a product of the  Coding Variation and Spillovers in Medicare Advantage Project
            being conducted at the Brown University Center for Gerontology and Healthcare Research and supported
            by Arnold Ventures LLC.
            The overall objective of this project is to better understand how the Medicare Advantage
            program impacts spending through increasing coding intensity. We used five metrics to chart
            variations in coding intensity across different MA plans to produce a report on which plans are
            engaging in the most intense coding.
            </p>
      
            <p className="paragraph mb-12 md:pl-[5vw] md:pr-[5vw] lg:px-10 font-mp">The Medicare Advantage (MA) program is rapidly growing,
            enrolls over 45% of all Medicare beneficiaries, and accounts for over $240 billion in federal
            spending. In MA, private insurance plans receive risk-adjusted capitation payments which greatly
            change their incentives from the fee-for-service Traditional Medicare (TM) program. Namely, under
            full capitation a plan can potentially benefit by reducing spending on unnecessary and/or expensive
            services, or by increasing the amount of risk-adjusted payments received from the Centers for Medicare
            and Medicaid Services (CMS). Controlling costs related to the expansion of the MA program is vital,
            given that within the next two years, the majority of Medicare beneficiaries will likely be enrolled
            in an MA plan. We explored the potential opportunities and challenges of
            controlling costs through the MA program by comprehensively measuring variation in coding intensity
            across MA plans. This will allow us to measure how much excess spending in the MA program may be due
            to coding differences. </p>
          </div>
          <div className="w-1/2 h-1 bg-primary mx-auto"></div>
          <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-start">
                <img src={member.img_url} alt='' className="w-32 h-32 object-cover rounded-full mb-2 bg-[#F0F0F0]" />
                <div className="mt-2">
                  <h3 className="text-xl text-primary font-semibold font-circ-std mb-4">{member.name}</h3>
                  <p className="text-md">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}