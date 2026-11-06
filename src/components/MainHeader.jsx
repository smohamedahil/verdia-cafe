import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BrandLogo from './BrandLogo';

export default function MainHeader() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full pt-6 pb-2 px-4 flex flex-col items-center relative z-20"
      data-purpose="site-header"
    >
      {/* Brand Logo matching reference */}
      <div className="mb-4">
        <a href="#root" aria-label="Verdia Café Home">
          <BrandLogo />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-base sm:text-lg font-medium text-brand-dark" data-purpose="main-navigation">
        <a className="hover:opacity-80 transition-opacity hover:text-[#82C341]" href="#menu">
          Menu
        </a>
        <a className="hover:opacity-80 transition-opacity hover:text-[#82C341]" href="#place">
          Place
        </a>
        <a className="hover:opacity-80 transition-opacity hover:text-[#82C341]" href="#visit">
          Visit
        </a>
      </nav>
    </header>
  );
}
