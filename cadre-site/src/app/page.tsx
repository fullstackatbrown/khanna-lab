'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Aditya() {
  return (
    <div className="my-2 flex w-full flex-col items-center justify-center gap-x-8 md6:my-10 md6:flex-row md6:gap-x-20 md6:gap-y-6">
      <div className="flex justify-center">
        <Image
          src="/khanna.jpg"
          alt="Aditya Khanna"
          width={450}
          height={400}
          draggable="false"
          className="h-auto max-w-full rounded-lg object-none object-top"
        />
      </div>
      <div className="hidden h-64 w-1 rounded bg-gray-200 md6:flex" />
      <div className="w-full max-w-lg p-6 md6:w-3/5">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 underline md6:text-4xl">
            Aditya Khanna
          </h1>

          <p className="text-sm text-gray-500 sm:text-lg md6:text-xl">
            Associate Professor of Behavioral and Social Sciences | Center for
            Alcohol & Addiction Studies
          </p>

          <div className="text-base md6:space-y-2">
            <a
              href="mailto:aditya_khanna@brown.edu"
              className="flex items-center gap-2 text-sm text-red-700 hover:text-red-800"
            >
              <span className="text-2xl md6:text-4xl">✉</span>
              <span>aditya_khanna@brown.edu</span>
            </a>

            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-md">📞</span>
              <span>(401) 863-6600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
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
    <main className="flex h-full min-h-screen w-full flex-col">
      <div style={{ minHeight: `${headerHeight}px` }}></div>
      {/* Image section and text overlay */}
      <div className="relative min-h-[55vh] w-full">
        <div className="relative">
          <img
            // src="./brown-campus.png"
            src="./sph5.png"
            // src="https://communications.sph.brown.edu/sites/default/files/2022-08/zoom-bkgd-01.jpg"
            alt="Brown University"
            style={{ height: '80vh', width: '100%', objectFit: 'cover' }}
          />
          {/* <div className="mt-[-16vh] p-4 text-center text-4xl font-bold text-white">
            Welcome to the landing page of the coding intensity report card!
          </div> */}
        </div>
      </div>
      <div className="mx-2 mb-[10vh] mt-[4vh] flex min-h-[10vh] flex-col items-center justify-center p-4 text-2xl font-bold sm:mx-10">
        <Aditya></Aditya>
        <div className="flex w-[70%] justify-center text-center">
          <h1 className="mt-[2vh]"> Our Purpose </h1>
        </div>
        <div className="mt-[3vh] min-h-[10vh] w-full text-xl font-normal">
          <p className="mb-[5vh] text-center">
            Welcome to the MediCOIN (Medicare COding INtensity) Report, a
            project of the Brown University School of Public Health Center for
            Advancing Health Policy Through Research. The objective of this
            website is to better understand variation in measured coding
            intensity across Medicare Advantage contracts. We report several
            validated measures of coding intensity in the Medicare Advantage
            program to better understand variation that could lead to variable
            payments in the program. Our goal is to make this data publicly
            available for researchers and policymakers.
          </p>
        </div>
        <div className="flex w-[100%] justify-center text-center">
          <h1 className="mt-[2vh]"> Instructions & Support </h1>
        </div>
        <div className="mt-[3vh] min-h-[10vh] w-full text-center text-xl font-normal">
          <p>
            Anyone may download the data we calculate at the contract level on
            the downloads page. For detailed methods on how we calculate these
            measures, please see the methods page. Please cite this website if
            you use these data in your own work. This project was supported by a
            grant from Arnold Ventures.
          </p>
        </div>
        <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 p-4 shadow-md">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            Check out our GitHub!
          </h2>
          <p className="mb-4 text-center text-base md:text-lg">
            Explore our code and contribute to the project on GitHub.
          </p>
          <a
            href="https://github.com/khanna-lab/cadre?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-blue-400"
          >
            Visit GitHub
          </a>
        </div>
      </div>
      {/* <div className="mx-24 pb-[10vh] min-h-[10vh] p-4 text-2xl font-bold flex flex-col justify-center items-center bg-gray-200">
        <div className="flex justify-start text-left w-[70%]">
          <h1 className='mt-[2vh]'> Instructions & Support </h1>
        </div>
        <div className="mt-[3vh] min-h-[10vh] w-[70%] text-xl font-normal">
          <h1>
              Anyone may download the data we calculate at the contract level on the downloads page. For detailed methods on how we calculate these measures, please see the methods page.             Please cite this website if you use these data in your own work. This project was supported by a grant from Arnold Ventures.
          </h1>
        </div>
      </div> */}

      {/* Purpose section
      <div className="mx-24 my-[10vh] min-h-[10vh] p-4 text-2xl font-bold">
        <h1> Our purpose </h1>
        <div className="mt-[5vh] min-h-[10vh] w-1/2 text-xl font-normal">
          <h1>
            Welcome to the MediCOIN (Medicare COding INtensity) Report, a project of the Brown University School of Public Health Center for Advancing Health Policy Through Research. The objective of this website is to better understand variation in measured coding intensity across Medicare Advantage contracts. We report several validated measures of coding intensity in the Medicare Advantage program to better understand variation that could lead to variable payments in the program. Our goal is to make this data publicly available for researchers and policymakers.
          </h1>
        </div>
      </div> */}

      {/* Mission statement section
      <div className="my-[5vh] flex min-h-[10vh] w-screen justify-end bg-gray-200 p-4">
        <div className="mx-24 my-[5vh] w-1/2 text-right text-2xl font-bold">
          <h1> Instructions </h1>
          <div className="my-[5vh] min-h-[10vh] text-xl font-normal">
            <h1>
              Anyone may download the data we calculate at the contract level on the downloads page. For detailed methods on how we calculate these measures, please see the methods page
            </h1>
          </div>
        </div>
      </div> */}

      {/* Instructions section
      <div className="mx-24 my-[5vh] min-h-[10vh] p-4  w-1/2 text-2xl font-bold">
        <h1> Support </h1>
        <div className="my-[5vh] min-h-[10vh] text-xl font-normal">
          <h1>
            Please cite this website if you use these data in your own work. This project was supported by a grant from Arnold Ventures.
          </h1>
        </div>
      </div> */}

      {/* Methodology section
      <div className=" mt-[5vh] flex min-h-[10vh] w-screen justify-end bg-gray-200 p-4">
        <div className="mx-24 my-[5vh] w-1/2 text-right text-2xl font-bold">
          <h1> Methodology</h1>
          <div className="my-[5vh] min-h-[10vh] text-xl font-normal">
            <h1>
              We will use five different methods to compare plan level coding
              intensity: 1) Increased coding due to chart reviews, 2) increased
              coding due to 4 health risk assessments, 3) higher than expected
              coding benchmarked against functional status, 4) higher than
              expected coding benchmarked against mortality, and 5) higher than
              expected coding benchmarked against a pharmaceutical-based risk
              score. The first four measures we will calculate in the first two
              activities for this aim. The final measure will be based on
              similar work published by others. For each measure, we will also
              classify plans into categories of high, medium, and low amounts of
              increased coding intensity based on tertile.
            </h1>
          </div>
        </div>
      </div> */}
    </main>
  );
}
