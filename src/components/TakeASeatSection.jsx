import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const seatingSpots = [
  {
    counter: '01/04',
    title: 'Catch the sun',
    desc: 'Grab a warm seat, order your favorite, and let the morning take its time.',
    tags: ['#beforenoon', '#sunnyspot'],
    pinClasses: 'bottom-[18%] left-[10%] sm:left-[12%]',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="10" />
        <line x1="24" y1="4" x2="24" y2="8" />
        <line x1="24" y1="40" x2="24" y2="44" />
        <line x1="4" y1="24" x2="8" y2="24" />
        <line x1="40" y1="24" x2="44" y2="24" />
        <line x1="10" y1="10" x2="13" y2="13" />
        <line x1="35" y1="35" x2="38" y2="38" />
        <line x1="10" y1="38" x2="13" y2="35" />
        <line x1="35" y1="13" x2="38" y2="10" />
      </svg>
    ),
  },
  {
    counter: '02/04',
    title: 'Close to the action',
    desc: 'Front row at the tiled espresso bar. Watch shots pull and steam milk roll up close.',
    tags: ['#baristaside', '#barstool'],
    pinClasses: 'bottom-[28%] left-[44%] sm:left-[42%]',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 48 48"
      >
        <path d="M8 16h26v18a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V16z" />
        <path d="M34 22h4a4 4 0 0 1 0 8h-4" />
        <path d="M14 6v4m6-4v4m6-4v4" />
      </svg>
    ),
  },
  {
    counter: '03/04',
    title: 'Hide out here',
    desc: 'Tucked along the warm brick and window nook. Perfect for deep focus and reading.',
    tags: ['#quietcorner', '#deepfocus'],
    pinClasses: 'top-[52%] left-[12%] sm:left-[14%]',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 48 48"
      >
        <path d="M6 38 C14 26 22 26 24 38" />
        <path d="M24 38 C26 26 34 26 42 38" />
        <path d="M24 16v22" />
        <path d="M12 16h24" />
      </svg>
    ),
  },
  {
    counter: '04/04',
    title: 'Bring the whole crew',
    desc: 'Large shared tables under the warm archway. Plenty of room for conversation and pastries.',
    tags: ['#crewlove', '#tableforfour'],
    pinClasses: 'top-[38%] left-[26%] sm:left-[28%]',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 48 48"
      >
        <circle cx="16" cy="18" r="6" />
        <circle cx="32" cy="18" r="6" />
        <path d="M8 38 C8 30 14 28 20 28" />
        <path d="M28 28 C34 28 40 30 40 38" />
      </svg>
    ),
  },
];

export default function TakeASeatSection() {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0);
  const spot = seatingSpots[activeSpotIndex];

  const sectionRef = useRef(null);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(showcaseRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#E6EADE] py-20 px-4 sm:px-8 lg:px-12" data-purpose="take-a-seat-section" id="place">
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-left">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#82C826] inline-block" />
              <span className="text-xs sm:text-sm font-semibold text-[#82C826] tracking-wider uppercase">
                Take a seat
              </span>
            </div>
            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C3614] leading-[1.08]">
              Pull up a chair.
              <br />
              You’re staying
            </h2>
          </div>
          {/* Subhead on the right */}
          <p className="text-base sm:text-lg text-[#273822]/80 font-medium max-w-xs lg:text-right leading-relaxed mb-1">
            Come for something good
            <br className="hidden sm:inline" />
            and stay as long as you like.
          </p>
        </div>

        {/* Main Showcase Card */}
        <div
          ref={showcaseRef}
          className="w-full bg-[#82C341] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border-2 border-[#1C3614]/20"
        >
          {/* Left / Image Viewport with Interactive Pins (8 cols on lg) */}
          <div className="lg:col-span-8 relative min-h-[420px] sm:min-h-[550px] lg:min-h-[620px] overflow-hidden select-none group">
            <img
              alt="Interior of Verdia Café with bar counter and wooden stools"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/images/cafe-interior.jpg"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80';
              }}
            />

            {/* Interactive Hot-Spot Pins */}
            {seatingSpots.map((item, idx) => {
              const isActive = idx === activeSpotIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  title={`${item.counter} ${item.title}`}
                  onClick={() => setActiveSpotIndex(idx)}
                  className={`seat-pin absolute ${item.pinClasses} w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#82C341] text-[#1C3614] ring-4 ring-[#82C341]/50 scale-110'
                      : 'bg-[#F5F6F0] text-[#1C3614] hover:bg-white hover:scale-110'
                  }`}
                >
                  0{idx + 1}
                </button>
              );
            })}
          </div>

          {/* Right Side Info & Spot Selector (4 cols on lg) */}
          <div className="lg:col-span-4 bg-[#82C341] flex flex-col justify-between p-6 sm:p-8 lg:p-8 text-[#1C3614]">
            {/* Content Detail Block */}
            <div>
              {/* Counter tag */}
              <div className="text-xs font-semibold tracking-wider text-[#1C3614]/70 mb-6">
                {spot.counter}
              </div>
              {/* Spot Doodle Icon */}
              <div className="text-[#1C3614] mb-4">
                {spot.icon}
              </div>
              {/* Spot Title */}
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C3614] mb-3 leading-tight">
                {spot.title}
              </h3>
              {/* Spot Description */}
              <p className="text-sm sm:text-base font-normal text-[#1C3614]/90 leading-relaxed mb-4">
                {spot.desc}
              </p>
              {/* Hashtags */}
              <div className="text-xs font-semibold text-[#1C3614]/80 tracking-wide space-x-3 mb-8">
                {spot.tags.map((tag, tIdx) => (
                  <span key={tIdx}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Interactive Seating List */}
            <div className="flex flex-col border-t border-[#1C3614]/20 pt-2 divide-y divide-[#1C3614]/15" data-purpose="seating-list">
              {seatingSpots.map((item, idx) => {
                const isActive = idx === activeSpotIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSpotIndex(idx)}
                    className={`seat-tab-btn flex items-center gap-3 py-3 px-3 transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#1C3614] text-white rounded font-bold'
                        : 'hover:bg-[#1C3614]/10 text-[#1C3614] font-semibold'
                    }`}
                  >
                    <span className="text-xs font-semibold opacity-70">0{idx + 1}</span>
                    <span className="text-base font-bold">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
