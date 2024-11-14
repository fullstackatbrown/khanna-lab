'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
// import 'styles.css';

export default function NavHeader() {
  const position = useRef(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      position.current = window.scrollY;

      const handleScroll = () => {
        const moving = window.scrollY;

        if (moving <= 75) {
          setVisible(true); // Always show header at the top of the page
        } else if (position.current > moving) {
          setVisible(true); // Scrolling up, show the header
        } else {
          setVisible(false); // Scrolling down, hide the header
        }

        position.current = moving;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const headerClass = visible ? 'nav-header' : 'nav-header nav-header-hidden';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <div
      id="header"
      className={`fixed z-[100] flex min-h-[16] w-full flex-row items-center justify-between bg-white pl-2 pr-4  ${headerClass}`}
      style={{ borderBottom: '3px solid rgb(255,255,255)' }}
    >
      <Link
        className="fade-in-out-basic min-w-[185px] pl-1 text-[rgb(250,250,250)] hover:text-primary-gold md:pl-5"
        href="https://sph.brown.edu/"
        target="_blank"
      >
        <Image
          src="/brownHealthLogo.png"
          alt="Brown School of Public Health Logo"
          width={250}
          height={110}
          className="cursor-pointer p-4"
          draggable="false"
        />
      </Link>
      <div className="hidden pr-6 md:flex md:flex-col">
        <div className="mt-6 text-center text-3xl text-black">
          <div className="flex justify-end pr-3 text-center font-bold text-black sm:text-base md:text-4xl">
            Khanna Lab
          </div>
        </div>
        <div className="my-4 flex flex-col items-center justify-end gap-2 px-0 font-circ-std text-lg md:flex-row">
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

      {/* Hamburger / Close Button */}
      <button
        onClick={toggleMenu}
        className="pr-2 text-black focus:outline-none md:hidden md:pr-4"
      >
        <svg
          className={`h-9 w-9 transition-transform duration-300 ${
            menuOpen ? 'rotate-90 transform' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`absolute right-0 top-[100%] w-full origin-top transform overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? 'max-h-screen scale-y-100 opacity-100'
            : 'max-h-0 scale-y-0 opacity-0'
        }`}
      >
        <div className="flex flex-col font-circ-std">
          <a
            href="methods"
            className="w-full border-t-2 border-gray-100 py-4 text-center text-black hover:bg-gray-100 hover:text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Methods
          </a>
          <a
            href="download"
            className="w-full border-t-2 border-gray-100 py-4 text-center text-black hover:bg-gray-100 hover:text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </a>
          <a
            href="view"
            className="w-full border-t-2 border-gray-100 py-4 text-center text-black hover:bg-gray-100 hover:text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            View Data & Findings
          </a>
        </div>
      </div>
    </div>
  );
}
