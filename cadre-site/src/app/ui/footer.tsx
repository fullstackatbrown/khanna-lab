import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#f5f3ee] p-8 text-base">
      {/* Main container for responsive layout */}
      <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-4">
        {/* Header - spans all 4 columns on large screens */}
        <div className="lg:col-span-12">
          <h2 className="text-left text-3xl font-bold text-gray-800">
            The Center for Addiction & Disease Risk Exacerbation (CADRE)
          </h2>
        </div>

        {/* Address Column */}
        <div className="lg:col-span-3">
          <p>Brown University School of Public Health</p>
          <p>Box G-S121-5</p>
          <p>121 South Main Street</p>
          <p>Providence, RI 02912</p>
        </div>

        {/* Contact Information (Phone and Email) Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="phone" className="text-red-600">
              📞
            </span>
            <a href="tel:401-863-5173" className="font-medium text-red-600">
              401-863-5173
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span
              role="img"
              aria-label="email"
              className="text-2xl font-bold text-red-600"
            >
              ✉
            </span>
            <a
              href="mailto:CADRE@BROWN.EDU"
              className="font-medium text-red-600"
            >
              CADRE@BROWN.EDU
            </a>
          </div>
        </div>

        {/* Twitter Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-2">
            <span
              role="img"
              aria-label="twitter"
              className="text-xl font-bold text-red-600"
            >
              𝕏
            </span>
            <a
              href="https://twitter.com/BrownCadre"
              className="font-medium text-red-600"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Logo Column */}
        <div className="lg:col-span-5">
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/brownCadreLogo.png"
              alt="Brown Cadre Logo"
              width={450}
              height={400}
              draggable="false"
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
