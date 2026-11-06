import React from 'react';

export default function GallerySection() {
  return (
    <section
      className="w-full bg-[#1b3515] text-[#1b3515] py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden"
      data-purpose="take-a-peek-section"
      id="visit"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header with playful doodle accents */}
        <div className="flex flex-col items-center text-center relative mb-14 select-none">
          {/* Top Badge */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#82C826] tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-[#82C826] inline-block" />
            <span>See you soon</span>
          </div>

          {/* Heading with left 3-dash doodle & right arrow doodle */}
          <div className="relative flex items-center justify-center">
            {/* Left Hatch Doodles */}
            <div className="absolute -left-10 sm:-left-14 top-2 text-[#82C826] hidden sm:block pointer-events-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 30 30"
              >
                <path d="M8 22 C10 17 12 12 12 6" />
                <path d="M16 25 C18 19 20 14 20 9" />
                <path d="M24 27 C26 22 28 17 27 13" />
              </svg>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EAE5CF] leading-[1.08]">
              Take a peek.
              <br />
              Come on over
            </h2>

            {/* Right Curved Downward Arrow Doodle */}
            <div className="absolute -right-12 sm:-right-16 bottom-1 text-[#82C826] hidden sm:block pointer-events-none">
              <svg
                className="w-12 h-10"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.8"
                viewBox="0 0 50 40"
              >
                <path d="M4 14 C18 14 36 20 40 32" />
                <path d="M28 28 L40 32 L38 20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bento Grid Showcase */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Card 1: Left Tall Card (Cherry on top) */}
          <div className="md:col-span-4 bg-[#EAE5CF] rounded-3xl p-4 flex flex-col justify-between shadow-xl transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-inner bg-[#273822]/10">
              <img
                alt="Cherry on top cold drink and croissant"
                className="w-full h-full object-cover rounded-2xl"
                src="/images/cherry-on-top.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80';
                }}
              />
            </div>
            <div className="pt-3.5 pb-1 px-1">
              <span className="text-base font-bold text-[#1b3515] tracking-tight">Cherry on top</span>
            </div>
          </div>

          {/* Card 2 & 3: Middle Column (Cafe moment & Address / Say hello) */}
          <div className="md:col-span-5 flex flex-col gap-5 justify-between">
            {/* Middle Top: Sweet little moment card */}
            <div className="bg-[#EAE5CF] rounded-3xl p-4 flex flex-col justify-between shadow-xl flex-grow transition-transform hover:-translate-y-1 duration-300">
              <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden relative shadow-inner bg-[#273822]/10">
                <img
                  alt="Sweet little moment at cafe counter"
                  className="w-full h-full object-cover rounded-2xl"
                  src="/images/cafe-moment.jpg"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80';
                  }}
                />
              </div>
              <div className="pt-3 pb-0.5 px-1">
                <span className="text-base font-bold text-[#1b3515] tracking-tight">Sweet little moment</span>
              </div>
            </div>

            {/* Middle Bottom: Address block + Say hello button */}
            <div className="grid grid-cols-12 gap-3.5">
              {/* Location card */}
              <div className="col-span-9 bg-[#82C826] rounded-3xl p-5 flex flex-col justify-between shadow-xl text-[#1b3515] min-h-[140px] transition-transform hover:-translate-y-0.5 duration-200">
                <div className="text-xs font-semibold tracking-wide opacity-80">Verdia’s here</div>
                <div className="flex items-end justify-between mt-4">
                  <div className="text-base sm:text-lg font-bold leading-tight">
                    Chennai,
                    <br />
                    Tamil Nadu
                  </div>
                  {/* Map Pin Outline Icon */}
                  <div className="w-10 h-10 text-[#1b3515] flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Say Hello Pill */}
              <a
                className="col-span-3 bg-[#82C826] rounded-3xl p-3 flex flex-col items-center justify-between shadow-xl text-[#1b3515] transition-all hover:bg-[#74B137] hover:-translate-y-0.5"
                href="mailto:smohamedahil@gmail.com"
              >
                {/* Email envelope icon */}
                <svg
                  className="w-5 h-5 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <rect height="14" rx="2" width="18" x="3" y="5" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span className="text-sm font-bold [writing-mode:vertical-rl] rotate-180 mb-2 tracking-wide">
                  Say hello!
                </span>
              </a>
            </div>
          </div>

          {/* Card 4: Right Column (Open daily badge & The Mello trio) */}
          <div className="md:col-span-3 flex flex-col gap-5 justify-between">
            {/* Right Top: Hours card with pushpin icon */}
            <div className="bg-[#EAE5CF] rounded-3xl p-4 flex items-center justify-between shadow-xl transition-transform hover:-translate-y-0.5 duration-200">
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-semibold text-[#1b3515]/75 tracking-tight">See you soon</span>
                <span className="text-sm sm:text-base font-bold text-[#1b3515] leading-snug mt-0.5">
                  Open daily, 7AM–6PM.
                </span>
              </div>
              {/* Pushpin doodle icon */}
              <div className="text-[#1b3515] ml-2 shrink-0">
                <svg
                  className="w-6 h-6 stroke-current fill-none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4 L14 10 L18 13 L13 15 L11 21 L10 15 L6 13 L10 10 L8 4 Z" />
                </svg>
              </div>
            </div>

            {/* Right Bottom: The Mello trio photo card */}
            <div className="bg-[#EAE5CF] rounded-3xl p-4 flex flex-col justify-between shadow-xl flex-grow transition-transform hover:-translate-y-1 duration-300">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-inner bg-[#273822]/10">
                <img
                  alt="The Mello trio matcha espresso cinnamon roll"
                  className="w-full h-full object-cover rounded-2xl"
                  src="/images/mello-trio.jpg"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80';
                  }}
                />
              </div>
              <div className="pt-3.5 pb-1 px-1">
                <span className="text-base font-bold text-[#1b3515] tracking-tight">The Verdia trio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
