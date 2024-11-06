import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-start bg-[#f5f3ee] p-8 text-lg sm:flex-col md:flex-row">
      <div className="w-full justify-start md:w-1/2">
        <div>
          <h2 className="mb-6 font-circ-std text-3xl font-bold text-gray-800">
            The Center for Addiction & Disease Risk Exacerbation (CADRE)
          </h2>
          <div className="mb-6">
            <p className="text-lg">Brown University School of Public Health</p>
            <p>Box G-S121-5</p>
            <p>121 South Main Street</p>
            <div className="mt-1 flex items-center space-x-2">
              <span
                role="img"
                aria-label="wheelchair"
                className="text-gray-500"
              >
                ♿
              </span>
              <p>Providence, RI 02912</p>
            </div>
          </div>

          <div className="mb-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="phone" className="text-gray-500">
                📞
              </span>
              <p>401-863-5173</p>
            </div>

            {/* Email and Twitter grouped with consistent spacing */}
            <div className="flex flex-col space-y-2">
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
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
        <Image
          src="/brownCadreLogo.png"
          alt="Brown Cadre Logo"
          width={500}
          height={500}
          draggable="false"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Footer;
