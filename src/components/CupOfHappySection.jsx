import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CupOfHappySection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll trigger - once: true prevents re-triggering & stuck states
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });

      // Cards stagger scroll trigger with clearProps so elements never get stuck
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-6xl mx-auto px-4 py-16" data-purpose="cup-of-happy-section">
      <div ref={headerRef} className="flex flex-col items-start mb-12 will-change-transform">
        <span className="text-xs sm:text-sm font-bold text-[#82C341] tracking-wider uppercase mb-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#82C341] inline-block" />
          Coffee this way
        </span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark leading-tight">
            Choose your
            <br />
            cup of happy
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/80 font-medium max-w-xs">
            Hot, iced, bold, or sweet — there's a happy cup waiting.
          </p>
        </div>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 will-change-transform">
        {/* Large Featured Card: Strawberry Matcha */}
        <div className="lg:col-span-7 bg-[#273822] rounded-3xl relative overflow-hidden text-white shadow-xl min-h-[500px] sm:min-h-[600px] group transition-transform duration-300 hover:scale-[1.01]">
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-brand-green text-brand-dark font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              Favorite
            </span>
          </div>
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <img
              alt="Strawberry matcha"
              className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              src="/images/strawberry-matcha.jpg"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80';
              }}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-28 pb-6 sm:pb-8 px-6 sm:px-8 rounded-b-3xl">
            <div className="text-sm font-medium mb-1 text-[#D8E2CE]">Matcha • Strawberry</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">Strawberry matcha</h3>
            <p className="text-sm sm:text-base text-gray-200 mb-4">Fresh, creamy, and layered over ice.</p>
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-bold text-white">$6.50</span>
              <span className="bg-[#D8E2CE] text-brand-dark text-xs font-semibold px-2 py-0.5 rounded">16 oz</span>
            </div>
          </div>
        </div>

        {/* Right Column with 3 Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Cherry Cloud Mocha Card */}
          <div className="bg-[#273822] rounded-3xl relative overflow-hidden text-white shadow-xl flex flex-col justify-end min-h-[280px] sm:min-h-[300px] border border-black/10 group transition-transform duration-300 hover:scale-[1.01]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                alt="Cherry cloud mocha"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src="/images/cherry-mocha.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80';
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-16 pb-6 sm:pb-8 px-6 sm:px-8 rounded-b-3xl">
              <div className="text-xs text-[#D8E2CE] font-medium mb-1">Cocoa • Dark cherry</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">Cherry cloud mocha</h3>
              <p className="text-xs sm:text-sm text-gray-200 mb-4">Rich mocha with silky cherry cream.</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">$6.00</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded">
                  16 oz
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Two Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-grow">
            {/* Verdia Flat White Card */}
            <div className="bg-[#82C341] border border-[#273822] rounded-3xl p-6 text-brand-dark shadow-md flex flex-col justify-between min-h-[240px] transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                {/* Cute Smiling Coffee Cup Doodle */}
                <svg
                  className="w-12 h-10 text-brand-dark stroke-current fill-none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 54 44"
                >
                  <ellipse cx="24" cy="20" rx="16" ry="9" />
                  <path d="M8 20 C8 32, 40 32, 40 20" />
                  <path d="M40 16 C46 16, 48 24, 38 27" />
                  <ellipse cx="24" cy="35" rx="22" ry="6" />
                  {/* Smiling Face inside Cup */}
                  <circle cx="19" cy="24" fill="currentColor" r="1.2" />
                  <circle cx="29" cy="24" fill="currentColor" r="1.2" />
                  <path d="M22 26 Q24 28 26 26" />
                </svg>
                <span className="text-[11px] font-bold tracking-tight text-brand-dark leading-tight text-right">
                  Your 8am
                  <br />
                  personality
                </span>
              </div>
              <div>
                <div className="text-xs font-medium text-brand-dark/80 mb-1">Espresso • Milk</div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">Verdia flat white</h3>
                <p className="text-xs text-brand-dark/80 mb-4 font-medium">Smooth and perfectly silky.</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-brand-dark">$4.50</span>
                  <span className="bg-white/40 text-brand-dark text-xs font-semibold px-2 py-0.5 rounded">8 oz</span>
                </div>
              </div>
            </div>

            {/* Big Cinny Bun Card */}
            <div className="bg-[#273822] rounded-3xl p-6 text-white shadow-md flex flex-col justify-between min-h-[240px] transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                {/* Hand-Drawn Cinnamon Roll Swirl Doodle */}
                <svg
                  className="w-12 h-10 text-white stroke-current fill-none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 50 40"
                >
                  <ellipse cx="25" cy="18" rx="14" ry="10" />
                  <path d="M25 10 C18 10, 15 15, 17 21 C19 25, 31 25, 33 20 C34 16, 27 14, 23 16 C20 18, 22 21, 25 21" />
                  <path d="M11 18 C11 28, 39 28, 39 18" />
                </svg>
                <span className="text-[11px] font-bold tracking-tight text-gray-200 leading-tight text-right">
                  Sticky fingers
                  <br />
                  guaranteed
                </span>
              </div>
              <div>
                <div className="text-xs font-medium text-[#D8E2CE] mb-1">Cinnamon • Vanilla</div>
                <h3 className="text-xl font-bold text-white mb-1">Big cinny bun</h3>
                <p className="text-xs text-gray-300 mb-4">Sticky and freshly baked.</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">$5.50</span>
                  <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded">x1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
