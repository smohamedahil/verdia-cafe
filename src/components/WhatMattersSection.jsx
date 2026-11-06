import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Ticker from './Ticker';

gsap.registerPlugin(ScrollTrigger);

export default function WhatMattersSection() {
  const sectionRef = useRef(null);
  const textColRef = useRef(null);
  const receiptRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      gsap.from(receiptRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
        y: 80,
        rotate: 4,
        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1b3515] text-white pt-20 sm:pt-24 relative overflow-hidden"
      data-purpose="what-matters-section"
      id="what-matters"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content & Buttons */}
          <div ref={textColRef} className="lg:col-span-7 flex flex-col items-start text-left relative">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#82C341] inline-block" />
              <span className="text-xs sm:text-sm font-semibold text-[#82C341] tracking-wider uppercase">
                What matters
              </span>
            </div>

            {/* Headline with lime highlight and floating heart doodles */}
            <div className="relative w-full mb-6">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#E6EADE] leading-[1.08]">
                Things that
                <br />
                make mornings
                <br />
                <span className="text-[#82C826]">feel better.</span>
              </h2>
              {/* Floating twin heart doodle */}
              <div className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 text-[#82C826] pointer-events-none hidden sm:block rotate-12">
                <svg
                  className="w-14 h-14 stroke-current fill-none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 60 50"
                >
                  <path d="M18 35 C6 24 2 17 6 9 C10 3 18 4 22 11 C26 4 34 3 38 9 C42 17 38 24 26 35 Z" />
                  <path d="M38 26 C30 18 27 13 30 7 C33 2 39 3 42 8 C45 3 51 2 54 7 C57 13 54 18 45 26 Z" />
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#D8E2CE]/80 font-normal leading-relaxed max-w-lg mb-8">
              We started Verdia to make specialty coffee feel less serious and a lot more human.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="bg-[#82C826] hover:bg-[#74B137] text-[#1C3614] font-bold px-7 sm:px-8 py-3.5 rounded-full text-base sm:text-lg shadow-md hover:opacity-95 hover:scale-105 transition-all text-center"
                href="#reviews"
              >
                Read reviews
              </a>
              <a
                className="bg-transparent border border-white/70 hover:border-white text-white font-semibold px-7 sm:px-8 py-3.5 rounded-full text-base sm:text-lg hover:bg-white/10 hover:scale-105 transition-all text-center"
                href="#visit"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* Right Column: Mello Receipt Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={receiptRef}
              className="w-full max-w-[340px] sm:max-w-[360px] relative text-[#273822] shadow-2xl transition-transform hover:-translate-y-1 duration-300 drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.45))' }}
            >
              {/* Receipt Card Container with Perforated / Sawtooth Edges */}
              <div
                className="bg-[#F5F6F0] p-6 sm:p-7 relative select-none"
                style={{
                  clipPath:
                    'polygon(0% 12px, 2.5% 0px, 5% 12px, 7.5% 0px, 10% 12px, 12.5% 0px, 15% 12px, 17.5% 0px, 20% 12px, 22.5% 0px, 25% 12px, 27.5% 0px, 30% 12px, 32.5% 0px, 35% 12px, 37.5% 0px, 40% 12px, 42.5% 0px, 45% 12px, 47.5% 0px, 50% 12px, 52.5% 0px, 55% 12px, 57.5% 0px, 60% 12px, 62.5% 0px, 65% 12px, 67.5% 0px, 70% 12px, 72.5% 0px, 75% 12px, 77.5% 0px, 80% 12px, 82.5% 0px, 85% 12px, 87.5% 0px, 90% 12px, 92.5% 0px, 95% 12px, 97.5% 0px, 100% 12px, 100% calc(100% - 12px), 97.5% 100%, 95% calc(100% - 12px), 92.5% 100%, 90% calc(100% - 12px), 87.5% 100%, 85% calc(100% - 12px), 82.5% 100%, 80% calc(100% - 12px), 77.5% 100%, 75% calc(100% - 12px), 72.5% 100%, 70% calc(100% - 12px), 67.5% 100%, 65% calc(100% - 12px), 62.5% 100%, 60% calc(100% - 12px), 57.5% 100%, 55% calc(100% - 12px), 52.5% 100%, 50% calc(100% - 12px), 47.5% 100%, 45% calc(100% - 12px), 42.5% 100%, 40% calc(100% - 12px), 37.5% 100%, 35% calc(100% - 12px), 32.5% 100%, 30% calc(100% - 12px), 27.5% 100%, 25% calc(100% - 12px), 22.5% 100%, 20% calc(100% - 12px), 17.5% 100%, 15% calc(100% - 12px), 12.5% 100%, 10% calc(100% - 12px), 7.5% 100%, 5% calc(100% - 12px), 2.5% 100%, 0% calc(100% - 12px))',
                }}
              >
                {/* Receipt Header */}
                <div className="flex items-start justify-between mb-4 pt-2">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C3614] leading-tight">
                      Verdia Café
                    </h3>
                    <p className="text-xs text-[#4A5844] font-medium tracking-tight mt-0.5">morning mood office</p>
                  </div>
                  {/* Lime spark / lightning doodle */}
                  <div className="text-[#82C341] rotate-12">
                    <svg
                      className="w-8 h-8 stroke-current fill-none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                </div>

                {/* Dashed Divider */}
                <div className="w-full border-b border-dashed border-[#1C3614]/30 my-3.5" />

                {/* Line Items */}
                <div className="space-y-2.5 text-xs sm:text-sm font-medium py-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[#273822]">Kind humans</span>
                    <span className="font-bold text-[#1C3614]">Always</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#273822]">Great beans</span>
                    <span className="font-bold text-[#1C3614]">Daily</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#273822]">Coffee snobbery</span>
                    <span className="font-bold text-[#1C3614]">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#273822]">Warm pastries</span>
                    <span className="font-bold text-[#1C3614]">Yes pls</span>
                  </div>
                </div>

                {/* Dashed Divider */}
                <div className="w-full border-b border-dashed border-[#1C3614]/30 my-3.5" />

                {/* Total */}
                <div className="flex justify-between items-baseline py-1">
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#273822]/80">
                    Total
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1C3614]">One good day</span>
                </div>

                {/* Dashed Divider */}
                <div className="w-full border-b border-dashed border-[#1C3614]/30 my-4" />

                {/* Barcode & Thank You */}
                <div className="flex flex-col items-center justify-center pt-1 pb-2">
                  {/* Stylized Barcode SVG */}
                  <svg className="w-48 sm:w-56 h-10 mb-2" fill="#1C3614" viewBox="0 0 160 32">
                    <rect height="32" width="3" x="0" y="0" />
                    <rect height="32" width="1" x="5" y="0" />
                    <rect height="32" width="4" x="8" y="0" />
                    <rect height="32" width="2" x="15" y="0" />
                    <rect height="32" width="1" x="20" y="0" />
                    <rect height="32" width="5" x="23" y="0" />
                    <rect height="32" width="2" x="31" y="0" />
                    <rect height="32" width="1" x="36" y="0" />
                    <rect height="32" width="3" x="40" y="0" />
                    <rect height="32" width="2" x="46" y="0" />
                    <rect height="32" width="4" x="51" y="0" />
                    <rect height="32" width="1" x="58" y="0" />
                    <rect height="32" width="3" x="62" y="0" />
                    <rect height="32" width="5" x="68" y="0" />
                    <rect height="32" width="2" x="76" y="0" />
                    <rect height="32" width="1" x="81" y="0" />
                    <rect height="32" width="4" x="85" y="0" />
                    <rect height="32" width="2" x="92" y="0" />
                    <rect height="32" width="3" x="97" y="0" />
                    <rect height="32" width="1" x="103" y="0" />
                    <rect height="32" width="5" x="107" y="0" />
                    <rect height="32" width="2" x="115" y="0" />
                    <rect height="32" width="3" x="120" y="0" />
                    <rect height="32" width="1" x="126" y="0" />
                    <rect height="32" width="4" x="130" y="0" />
                    <rect height="32" width="2" x="137" y="0" />
                    <rect height="32" width="5" x="142" y="0" />
                    <rect height="32" width="1" x="150" y="0" />
                    <rect height="32" width="3" x="154" y="0" />
                    <rect height="32" width="1" x="159" y="0" />
                  </svg>
                  <span className="text-[11px] font-bold text-[#4A5844] tracking-widest flex items-center gap-1.5">
                    ♥ Thank you!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Runner */}
      <Ticker />
    </section>
  );
}
