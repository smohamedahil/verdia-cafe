import React, { useState } from 'react';

const clockSchedules = [
  {
    time: '07:03',
    subhead: '01 morning glow',
    title: 'First sip',
    copy: 'Doors open. Espresso machine sings.\nThe day suddenly looks possible.',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        viewBox="0 0 60 50"
      >
        <path d="M6 38 L15 14 L30 28 L45 10 L54 38 Z" />
        <circle cx="30" cy="22" fill="currentColor" r="1.5" />
      </svg>
    ),
    tabIcon: (
      <svg
        className="w-5 h-5 stroke-current fill-none shrink-0 ml-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 20"
      >
        <path d="M2 17 L6 5 L12 11 L18 3 L22 17 Z" />
      </svg>
    ),
  },
  {
    time: '10:12',
    subhead: '02 mid-morning surge',
    title: 'Power up',
    copy: 'Peak focus. Steam rising.\nThe deadline meets its match.',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        viewBox="0 0 60 50"
      >
        <polygon points="30 4 37 19 54 21 42 32 45 48 30 40 15 48 18 32 6 21 23 19 30 4" />
      </svg>
    ),
    tabIcon: (
      <svg
        className="w-5 h-5 stroke-current fill-none shrink-0 ml-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    time: '14:47',
    subhead: '03 afternoon chill',
    title: "Iced o'clock",
    copy: 'Ice clinking. Afternoon slump cured\nwith cold foam and matcha.',
    icon: (
      <svg
        className="w-12 h-12 stroke-current fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        viewBox="0 0 60 50"
      >
        <path d="M30 44 C12 30 4 22 8 12 C12 4 24 5 30 14 C36 5 48 4 52 12 C56 22 48 30 30 44 Z" />
      </svg>
    ),
    tabIcon: (
      <svg
        className="w-5 h-5 stroke-current fill-none shrink-0 ml-2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    time: '17:31',
    subhead: '04 evening wind-down',
    title: 'One more?',
    copy: 'Sun setting. One final decaf pour\nor sweet pastry treat before dusk.',
    icon: (
      <div className="border-2 border-[#82C826] rounded-xl px-3 py-1.5 inline-block text-xl font-bold tracking-tight text-[#82C826]">
        +1
      </div>
    ),
    tabIcon: (
      <div className="border-2 border-current rounded-md px-1 py-0.5 text-[11px] font-bold shrink-0 ml-2 leading-none">
        +1
      </div>
    ),
  },
];

export default function CoffeeOClockSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = clockSchedules[activeTab];

  return (
    <section className="w-full bg-[#E6EADE] py-20 px-4 sm:px-6 md:px-12" data-purpose="coffee-oclock-section" id="coffee-oclock">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#82C826] inline-block" />
              <span className="text-xs sm:text-sm font-semibold text-[#273822] tracking-wide">
                Coffee o'clock
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C3614] leading-[1.08]">
              The right cup,
              <br />
              right on time
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#4A5844] font-medium max-w-xs md:text-right leading-relaxed mb-1">
            Start bright, slow down,
            <br className="hidden sm:inline" />
            or treat yourself whenever.
          </p>
        </div>

        {/* Interactive Clock Card Container */}
        <div className="w-full bg-[#1C3614] rounded-3xl overflow-hidden shadow-2xl relative border border-[#1C3614]">
          {/* Card Interior Display Area */}
          <div className="pt-8 sm:pt-10 px-6 sm:px-12 pb-10 sm:pb-14">
            {/* Top organic subhead */}
            <div className="flex items-center gap-2 text-[#D8E2CE]/80 text-xs sm:text-sm font-medium mb-4 select-none">
              <span className="inline-block transform rotate-12">
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.39-.97C8.93 20.66 10.42 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                </svg>
              </span>
              <span className="tracking-wide">{current.subhead}</span>
            </div>

            {/* Main Content Grid (Huge Clock + Story Detail) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Huge Digital Clock Numbers */}
              <div className="lg:col-span-7 flex items-baseline">
                <div className="text-7xl sm:text-8xl md:text-[130px] font-bold text-[#82C826] tracking-tighter leading-none select-none transition-all duration-300">
                  {current.time}
                </div>
              </div>

              {/* Right-side Detail Story */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                {/* Doodle Icon Container */}
                <div className="text-[#82C826] mb-4 transition-all duration-300">
                  {current.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D8E2CE] font-normal leading-relaxed max-w-md whitespace-pre-line">
                  {current.copy}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#273822] bg-[#E6EADE]/90 text-brand-dark divide-x divide-y sm:divide-y-0 divide-[#1C3614]/15">
            {clockSchedules.map((item, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`clock-tab-btn flex items-center justify-between p-4 sm:p-5 transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#82C826] text-[#1C3614] font-semibold'
                      : 'bg-[#E6EADE] hover:bg-[#dfe4d6] text-[#1C3614]'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-medium opacity-80 leading-none mb-1">{item.time}</div>
                    <div className="text-sm sm:text-base font-bold">{item.title}</div>
                  </div>
                  {item.tabIcon}
                </button>
              );
            })}
          </div>
        </div>

        {/* Below Card: Curved doodle arrow pointing to CTA button */}
        <div className="flex items-center justify-end mt-6 sm:mt-8 gap-4 pr-2">
          {/* Curved Hand-Drawn Arrow */}
          <div className="text-[#1C3614] transform rotate-3" data-purpose="bottom-doodle-arrow">
            <svg
              className="w-14 sm:w-16 h-10 stroke-current fill-none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.2"
              viewBox="0 0 70 45"
            >
              <path d="M8 8 C 12 34, 40 38, 54 36" />
              <path d="M42 27 L54 36 L43 42" />
            </svg>
          </div>
          {/* Explore the menu CTA */}
          <a
            className="bg-[#82C826] hover:bg-[#74B137] text-[#1C3614] font-bold px-7 sm:px-8 py-3.5 rounded-full text-base sm:text-lg shadow-sm hover:opacity-95 transition-all text-center"
            href="#menu"
          >
            Explore the menu
          </a>
        </div>
      </div>
    </section>
  );
}

