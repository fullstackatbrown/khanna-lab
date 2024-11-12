'use client';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
// import 'styles.css';

export default function NavHeader() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setPosition(window.scrollY);

    const handleScroll = () => {
      let moving = window.scrollY;
      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  const headerClass = visible ? 'nav-header' : 'nav-header nav-header-hidden';

  return (
    <div
      id="header"
      className={`fixed z-[100] flex min-h-[16] w-full flex-row items-center justify-between bg-white pl-3 pr-7  ${headerClass}`}
      style={{ borderBottom: '3px solid rgb(255,255,255)' }}
    >
      <Link
        className="fade-in-out-basic min-w-[185px] text-[rgb(250,250,250)] hover:text-primary-gold"
        href="/"
      >
        <Image
          src="/brownHealthLogo.png"
          alt="Brown School of Public Health Logo"
          width={240}
          height={90}
          className="cursor-pointer p-4"
          draggable="false"
        />
      </Link>
      <div>
        <div className="my-4 text-center text-3xl text-black">
          <div className="text-base sm:text-base md:text-2xl lg:text-3xl">
            MediCOIN (Medicare COding INtensity) Report
          </div>
        </div>
        <div className="my-4 flex flex-col items-center justify-end gap-2 px-0 font-circ-std md6:flex-row md6:gap-16">
          <a
            href="methods"
            className="rounded px-4 py-2 text-black transition duration-300 hover:bg-gray-100 hover:text-gray-700"
          >
            Methods
          </a>
          <a
            href="download"
            className="rounded px-4 py-2 text-black transition duration-300 hover:bg-gray-100 hover:text-gray-700"
          >
            Download
          </a>
          <a
            href="view"
            className="rounded px-4 py-2 text-black transition duration-300 hover:bg-gray-100 hover:text-gray-700"
          >
            View Data & Findings
          </a>
        </div>
      </div>
    </div>
  );
}
