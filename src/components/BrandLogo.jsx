import React from 'react';

export default function BrandLogo({ isLight = false, className = '' }) {
  const textColor1 = isLight ? 'text-white' : 'text-[#1C3614]';

  return (
    <div
      className={`inline-flex items-baseline whitespace-nowrap select-none font-bold tracking-tight transition-transform hover:scale-105 duration-200 cursor-pointer text-3xl sm:text-4xl lg:text-5xl ${className}`}
      data-purpose="brand-logo"
    >
      {/* "Verdia" on a single clean line with absolute leaf accent */}
      <span className={`${textColor1} font-extrabold tracking-tight relative leading-none`}>
        Verd
        <span className="relative inline-block leading-none">
          {/* Leaf as the dot of the i */}
          <svg
            className="absolute -top-3.5 sm:-top-4.5 lg:-top-5 -right-0.5 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#82C341] transform rotate-12 drop-shadow-sm pointer-events-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 3C8.5 3 4 8.5 4 14c0 3.3 2.7 6 6 6 5.5 0 11-4.5 11-13 0-2.2-.8-3.4-4-4zm-2 9c-2.5 1.5-5 2-8 2 0-3 1.5-5.5 4-7 1.5 1.5 3 3.5 4 5z" />
          </svg>
          ı
        </span>
        a
      </span>

      {/* "Café" in Lime Green on the exact same line with underline flourish */}
      <span className="relative text-[#82C341] font-extrabold tracking-tight ml-2 leading-none">
        Café
        <svg
          className="absolute left-0 -bottom-2 sm:-bottom-2.5 w-full h-2 sm:h-2.5 text-[#82C341] pointer-events-none"
          viewBox="0 0 80 12"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M2,2 C25,12 60,10 78,3 C50,6 20,6 2,2 Z" />
        </svg>
      </span>
    </div>
  );
}
