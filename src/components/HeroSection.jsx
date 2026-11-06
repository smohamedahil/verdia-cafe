import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const greenCircleRef = useRef(null);
  const glassRef = useRef(null);
  const crownRef = useRef(null);
  const sunRef = useRef(null);
  const badgeRef = useRef(null);
  const arrowRef = useRef(null);
  const energyRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Text reveals from behind / below with overflow hidden
      tl.from(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        {
          y: 70,
          opacity: 0,
          rotate: 1.5,
          duration: 1.1,
          stagger: 0.15,
          ease: 'power4.out',
        },
        0.1
      );

      // 2. Playful pop-in of the green circle behind the glass and text
      tl.from(
        greenCircleRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 1.2,
          ease: 'back.out(2)',
        },
        0.35
      );

      // 3. Matcha glass rises up smoothly into place
      tl.from(
        glassRef.current,
        {
          y: 130,
          opacity: 0,
          scale: 0.88,
          duration: 1.3,
          ease: 'power3.out',
        },
        0.3
      );

      // 4. CTA buttons scale up & fade in
      tl.from(
        ctaRef.current,
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        0.6
      );

      // 5. Left & right playful doodles pop in with spin
      tl.from(
        crownRef.current,
        {
          scale: 0,
          rotate: -35,
          opacity: 0,
          duration: 0.9,
          ease: 'back.out(2.2)',
        },
        0.5
      );

      tl.from(
        sunRef.current,
        {
          scale: 0,
          rotate: 45,
          opacity: 0,
          duration: 0.9,
          ease: 'back.out(2.2)',
        },
        0.55
      );

      // 6. Left product badge and pointing arrow slide in
      tl.from(
        badgeRef.current,
        {
          x: -40,
          opacity: 0,
          duration: 0.8,
        },
        0.7
      );

      tl.from(
        arrowRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(2)',
        },
        0.85
      );

      // 7. Right energy badge slides in
      tl.from(
        energyRef.current,
        {
          x: 40,
          opacity: 0,
          duration: 0.8,
        },
        0.75
      );

      // Continuous Idle Animations:
      // Subtle float on matcha glass
      gsap.to(glassRef.current, {
        y: -10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.4,
      });

      // Subtle breathing / floating of the green circle behind text
      gsap.to(greenCircleRef.current, {
        y: -12,
        scale: 1.05,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2,
      });

      // Gentle rotating pulse for the sun doodle
      gsap.to(sunRef.current, {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: 'none',
      });

      // Crown doodle slight hover
      gsap.to(crownRef.current, {
        y: -6,
        rotate: 3,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="flex-grow flex flex-col items-center justify-start text-center px-4 relative mt-6 sm:mt-10 overflow-hidden"
      data-purpose="hero-section"
    >
      {/* Decorative Crown Doodle (Left) */}
      <div
        ref={crownRef}
        className="absolute left-8 sm:left-24 top-2 text-[#82C341] hidden md:block pointer-events-none z-10"
        data-purpose="doodle-crown"
      >
        <svg
          fill="none"
          height="80"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          viewBox="0 0 100 90"
          width="90"
        >
          <path d="M10 70 L25 30 L45 55 L65 20 L85 55 L90 70 Z" />
          <ellipse cx="50" cy="50" rx="5" ry="8" />
        </svg>
      </div>

      {/* Decorative Sun Doodle (Right) */}
      <div
        ref={sunRef}
        className="absolute right-8 sm:right-24 top-0 text-[#82C341] hidden md:block pointer-events-none z-10"
        data-purpose="doodle-sun"
      >
        <svg
          fill="none"
          height="90"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          viewBox="0 0 100 100"
          width="90"
        >
          <circle cx="50" cy="50" r="22" />
          <line x1="50" x2="50" y1="10" y2="18" />
          <line x1="50" x2="50" y1="82" y2="90" />
          <line x1="10" x2="18" y1="50" y2="50" />
          <line x1="82" x2="90" y1="50" y2="50" />
          <line x1="22" x2="28" y1="22" y2="28" />
          <line x1="72" x2="78" y1="72" y2="78" />
          <line x1="22" x2="28" y1="78" y2="72" />
          <line x1="72" x2="78" y1="28" y2="22" />
        </svg>
      </div>

      {/* Hero Headline with animated text lines */}
      <div className="max-w-4xl mb-8 z-10">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-dark leading-[1.08]">
          <span className="block overflow-hidden py-1">
            <span ref={headlineLine1Ref} className="block will-change-transform">
              A brighter kind
            </span>
          </span>
          <span className="block overflow-hidden py-1">
            <span ref={headlineLine2Ref} className="block will-change-transform">
              of coffee break
            </span>
          </span>
        </h2>
      </div>

      {/* Action Buttons */}
      <div
        ref={ctaRef}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 z-10"
        data-purpose="hero-cta-buttons"
      >
        {/* Primary Action Button */}
        <a
          className="bg-brand-green text-brand-dark font-semibold px-8 py-3.5 rounded-full text-base sm:text-lg shadow-sm hover:opacity-95 hover:scale-105 transition-all duration-200"
          href="#menu"
        >
          Explore the menu
        </a>
        {/* Secondary Action Button */}
        <a
          className="bg-transparent border-2 border-brand-dark text-brand-dark font-semibold px-8 py-3.5 rounded-full text-base sm:text-lg hover:bg-brand-dark/5 hover:scale-105 transition-all duration-200"
          href="#visit"
        >
          Get directions
        </a>
      </div>

      {/* Product Highlight Section with Glass and Behind-the-Text Green Circle */}
      <div
        className="w-full max-w-6xl relative mt-auto px-4 flex justify-between items-end pb-12"
        data-purpose="product-highlight"
      >
        {/* Cold Matcha Product Badge & Details */}
        <div ref={badgeRef} className="text-left bg-transparent z-10 mb-8 sm:mb-16" data-purpose="product-badge">
          <div className="relative pl-4 border-l-4 border-brand-dark">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">Cold matcha</h3>
            <p className="text-sm sm:text-base text-brand-dark/80 font-medium mt-0.5">Matcha • Plenty of ice</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-lg font-bold text-brand-dark">$6.00</span>
              <span className="bg-[#D8E2CE] text-brand-dark text-xs font-semibold px-2 py-0.5 rounded">16 oz</span>
            </div>
          </div>
          {/* Hand-drawn arrow pointing to product */}
          <div ref={arrowRef} className="absolute -right-24 top-12 text-[#273822] hidden lg:block pointer-events-none">
            <svg
              fill="none"
              height="40"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 100 50"
              width="80"
            >
              <path d="M10 40 Q 50 10, 90 20" />
              <path d="M70 12 L90 20 L78 32" />
            </svg>
          </div>
        </div>

        {/* Cold Matcha Product Image Container */}
        <div
          ref={glassRef}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-80 sm:w-[450px] lg:w-[500px] z-10 pointer-events-none will-change-transform"
          data-purpose="product-image-container"
        >
          {/* The Green Circle Behind the Glass & Text */}
          <div
            ref={greenCircleRef}
            className="absolute -left-8 sm:-left-12 top-14 sm:top-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-[#82C341] -z-10 shadow-md"
            style={{ filter: 'drop-shadow(0 8px 16px rgba(130, 195, 65, 0.4))' }}
          />

          <img
            alt="Cold matcha with ice in a glass"
            className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
            src="/images/cold-matcha.avif"
            onError={(e) => {
              e.currentTarget.src =
                'https://cdn.prod.website-files.com/6a759fc40746a2cab11565c0/6a75afbad8015a210ca48519_Cold%20matcha.avif';
            }}
          />
        </div>

        {/* Green energy sketch badge (Right side of product) */}
        <div ref={energyRef} className="text-right z-10 mb-8 sm:mb-16 hidden sm:block relative" data-purpose="energy-badge">
          <div className="flex flex-col items-center transform rotate-6">
            <svg
              className="mb-1"
              fill="none"
              height="35"
              stroke="#82C341"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              width="35"
            >
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-xs font-bold text-brand-dark tracking-wide uppercase">
              100% pure
              <br />
              green energy
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
