import React from 'react';

const Footer = () => {
  return (
    <div className="w-500 bg-primary-taupe p-8 font-mp text-2xl text-whitee">
      <h1>The Center for Addiction & Disease Risk Exacerbation (CADRE)</h1>
      <div className="flex flex-col items-start justify-start gap-1 p-0 mt-1 mb-3">
        <div className="flex items-center text-sm">
          {/** https://heroicons.dev/ */}
          {/* <svg
            className="inline-block w-4"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            ></path>
          </svg> */}
          Brown  University School of Public Health
          <br/>
          Box G-S121-5
          <br/>
          121 South Main Street
          <br/>
          ♿Providence, RI 02912
        </div>
        {/* <div className="flex flex-row justify-between p-0 text-sm"> */}
        <div className="flex items-center text-sm">
        {/* <div>Find us here → <a href="https://cghcr.sph.brown.edu/">cahpr.sph.brown.edu</a></div> */}
        {/* <div className="w-1/2 p-0 text-right">Link 2 → </div> */}

          📞 401-863-5173 
          <br/>
          ✉ CADRE@BROWN.EDU
          <br/>         
        </div>
        <div className="flex items-center text-sm">
          <a href="https://cghcr.sph.brown.edu/">
              𝕏/Twitter
          </a>
        </div>
            
        {/* <div className="my-1 flex w-1/2 flex-row justify-between p-0 text-sm">
          <p>Link 3 → </p>
          <div className="w-1/2 p-0 text-right">Link 4 → </div>
        </div> */}
            </div>
      <div className="w-500 bg-primary-taupe p-8 font-sans text-2xl text-primary-red">
      </div>
      </div>
  );
};

export default Footer;
