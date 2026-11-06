import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Ticker from './Ticker';

gsap.registerPlugin(ScrollTrigger);

const moods = [
  {
    id: 'energized',
    label: 'energized',
    title: 'Need a boost',
    arrow: '↗',
    quadrant: 'top-left',
    drink: {
      name: 'Cold brew',
      category: 'Coffee • Ice',
      desc: 'Bold and refreshingly cold.',
      price: '$4.50',
      size: '8 oz',
      image: '/images/cold-brew.jpg',
      fallback: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    },
  },
  {
    id: 'cozy',
    label: 'cozy',
    title: 'Take it slow',
    arrow: '',
    quadrant: 'top-right',
    drink: {
      name: 'Verdia flat white',
      category: 'Espresso • Silky Milk',
      desc: 'Smooth, balanced, and perfectly warmed.',
      price: '$4.50',
      size: '8 oz',
      image: '/images/flat-white.jpg',
      fallback: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80',
    },
  },
  {
    id: 'refreshed',
    label: 'refreshed',
    title: 'Keep it fresh',
    arrow: '',
    quadrant: 'bottom-left',
    drink: {
      name: 'Cold matcha',
      category: 'Matcha • Ice',
      desc: 'Crisp, vibrantly green, and revitalizing.',
      price: '$6.00',
      size: '16 oz',
      image: '/images/strawberry-matcha.jpg',
      fallback: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80',
    },
  },
  {
    id: 'indulgent',
    label: 'indulgent',
    title: 'Treat myself',
    arrow: '',
    quadrant: 'bottom-right',
    drink: {
      name: 'Strawberry matcha',
      category: 'Berry • Velvety Cream',
      desc: 'Sweet strawberry puree layered over rich iced matcha.',
      price: '$6.50',
      size: '16 oz',
      image: '/images/cherry-on-top.jpg',
      fallback: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80',
    },
  },
];

export default function MoodMatcherSection() {
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const currentMood = moods[activeMoodIndex];

  const sectionRef = useRef(null);
  const wheelContainerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wheelContainerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        rotate: -25,
        scale: 0.9,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        x: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        clearProps: 'transform,opacity',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden" data-purpose="mood-matcher-section" id="mood-matcher">
      {/* Top Running Ticker */}
      <Ticker />

      {/* Main Dark Olive / Forest Green Canvas */}
      <div className="w-full bg-[#1c3614] text-white py-20 sm:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Top Header & Doodle Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-16 relative">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#82C341] inline-block" />
                <span className="text-xs sm:text-sm font-semibold text-[#82C341] tracking-wider uppercase">
                  Mood matcher
                </span>
              </div>
              {/* Heading */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                What are you in
                <br />
                the mood for?
              </h2>
            </div>
            {/* Heart doodle with arrow in upper right */}
            <div
              className="hidden md:block text-[#82C341] transform rotate-12 mt-2 mr-6 pointer-events-none"
              data-purpose="heart-arrow-doodle"
            >
              <svg
                fill="none"
                height="80"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.5"
                viewBox="0 0 100 90"
                width="90"
              >
                <path d="M50 78 C25 54 10 40 18 22 C24 9 40 11 50 25 C60 11 76 9 82 22 C90 40 75 54 50 78 Z" />
                <path d="M8 58 L92 20" />
                <path d="M84 14 L92 20 L86 28" />
                <path d="M14 53 L8 58 L12 65" />
              </svg>
            </div>
          </div>

          {/* Interactive Mood Wheel & Recommendation Card Area */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 relative">
            {/* Vertical helper text (left of wheel) */}
            <div className="hidden xl:flex items-center justify-center text-[#D8E2CE]/70 text-xs font-semibold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 select-none py-4">
              Choose your mood. We'll do the rest.
            </div>

            {/* Mood Wheel Circle */}
            <div ref={wheelContainerRef} className="relative flex flex-col items-center select-none">
              {/* The 4-quadrant round selector */}
              <div className="w-80 h-80 sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 border-4 border-[#273822] shadow-2xl relative bg-[#E6EADE]">
                {/* Top-Left Quadrant (Energized) */}
                <button
                  type="button"
                  onClick={() => setActiveMoodIndex(0)}
                  className={`p-5 sm:p-6 flex flex-col justify-end items-end text-right border-r-2 border-b-2 border-[#1c3614]/20 transition-all cursor-pointer ${
                    activeMoodIndex === 0
                      ? 'bg-[#82C341] text-[#273822]'
                      : 'bg-[#E6EADE] text-[#273822] hover:bg-[#dfe4d6]'
                  }`}
                >
                  <span className="text-xs font-medium italic opacity-80 mb-0.5">energized</span>
                  <span className="text-base sm:text-lg font-bold leading-tight flex items-center gap-1">
                    Need a boost <span className="text-sm">↗</span>
                  </span>
                </button>

                {/* Top-Right Quadrant (Cozy) */}
                <button
                  type="button"
                  onClick={() => setActiveMoodIndex(1)}
                  className={`p-5 sm:p-6 flex flex-col justify-end items-start text-left border-b-2 border-[#1c3614]/20 transition-all cursor-pointer ${
                    activeMoodIndex === 1
                      ? 'bg-[#82C341] text-[#273822]'
                      : 'bg-[#E6EADE] text-[#273822] hover:bg-[#dfe4d6]'
                  }`}
                >
                  <span className="text-xs font-medium italic opacity-70 mb-0.5">cozy</span>
                  <span className="text-base sm:text-lg font-bold leading-tight">Take it slow</span>
                </button>

                {/* Bottom-Left Quadrant (Refreshed) */}
                <button
                  type="button"
                  onClick={() => setActiveMoodIndex(2)}
                  className={`p-5 sm:p-6 flex flex-col justify-start items-end text-right border-r-2 border-b-2 border-[#1c3614]/20 transition-all cursor-pointer ${
                    activeMoodIndex === 2
                      ? 'bg-[#82C341] text-[#273822]'
                      : 'bg-[#E6EADE] text-[#273822] hover:bg-[#dfe4d6]'
                  }`}
                >
                  <span className="text-xs font-medium italic opacity-70 mb-0.5">refreshed</span>
                  <span className="text-base sm:text-lg font-bold leading-tight">Keep it fresh</span>
                </button>

                {/* Bottom-Right Quadrant (Indulgent) */}
                <button
                  type="button"
                  onClick={() => setActiveMoodIndex(3)}
                  className={`p-5 sm:p-6 flex flex-col justify-start items-start text-left transition-all cursor-pointer ${
                    activeMoodIndex === 3
                      ? 'bg-[#82C341] text-[#273822]'
                      : 'bg-[#E6EADE] text-[#273822] hover:bg-[#dfe4d6]'
                  }`}
                >
                  <span className="text-xs font-medium italic opacity-70 mb-0.5">indulgent</span>
                  <span className="text-base sm:text-lg font-bold leading-tight">Treat myself</span>
                </button>

                {/* Center Hub Badge with Dark Green Heart */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#1c3614] border-4 border-[#82C341] flex items-center justify-center shadow-lg z-10 pointer-events-none">
                  <svg className="w-6 h-6 text-[#82C341] fill-current animate-pulse" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              {/* Small sparkle accent under wheel */}
              <div className="mt-4 flex items-center gap-2 text-[#82C341] text-xs font-semibold">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 2v4m0 12v4M4 12h4m12 0h4m-4.5-7.5l-2.8 2.8m-9.4 9.4l-2.8 2.8m0-15l2.8 2.8m9.4 9.4l2.8 2.8" />
                </svg>
                <span>Tap to explore your feeling</span>
              </div>
            </div>

            {/* Hand-drawn curved arrow connecting wheel to recommendation card */}
            <div
              className="hidden lg:block text-[#82C341] self-center -mx-4 transform rotate-[-6deg] pointer-events-none"
              data-purpose="pointer-arrow"
            >
              <svg
                fill="none"
                height="60"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 80 60"
                width="75"
              >
                <path d="M10 32 C 30 18, 55 18, 70 35" />
                <path d="M58 36 L70 35 L68 23" />
              </svg>
            </div>

            {/* Recommended Drink Card */}
            <div
              ref={cardRef}
              key={currentMood.id}
              className="bg-[#E6EADE] text-brand-dark rounded-3xl p-5 w-full max-w-[310px] shadow-2xl flex flex-col border border-black/10 relative transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Drink Image container */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-white/40 shadow-inner relative">
                <img
                  alt={currentMood.drink.name}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-300"
                  src={currentMood.drink.image}
                  onError={(e) => {
                    if (currentMood.drink.fallback) {
                      e.currentTarget.src = currentMood.drink.fallback;
                    }
                  }}
                />
              </div>
              {/* Category and Drink Info */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-brand-dark/70 mb-1">{currentMood.drink.category}</span>
                <h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-1.5">
                  {currentMood.drink.name}
                </h3>
                <p className="text-xs text-brand-dark/80 font-medium mb-4 leading-relaxed">
                  {currentMood.drink.desc}
                </p>
                {/* Price & Size Tag */}
                <div className="flex items-center justify-between pt-1 border-t border-[#273822]/10">
                  <span className="text-xl font-bold text-brand-dark">{currentMood.drink.price}</span>
                  <span className="bg-[#82C341] text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                    {currentMood.drink.size}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
