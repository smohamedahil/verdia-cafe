import React from 'react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#E6EADE] text-[#1C3614]" data-purpose="site-footer">
      {/* Slanted top cut / angled divider matching reference */}
      <div className="w-full overflow-hidden leading-none bg-[#1b3515]">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 text-[#E6EADE] fill-current"
        >
          <path d="M0,0 L1200,60 L0,60 Z" />
        </svg>
      </div>

      {/* Main Footer Content Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand Logo, Open Hours & Meta Copyright Links */}
          <div className="md:col-span-5 flex flex-col justify-between min-h-[220px]">
            <div>
              {/* Logo matching reference */}
              <div className="mb-3">
                <a href="#root" aria-label="Verdia Café Home">
                  <BrandLogo />
                </a>
              </div>
              {/* Open hours headline */}
              <p className="text-base sm:text-lg font-bold text-[#1C3614] tracking-tight mb-8">
                Open daily 7AM—6PM
              </p>
            </div>

            {/* Legal & credits meta links */}
            <div className="text-xs sm:text-sm font-medium text-[#1C3614]/80 space-y-1.5 pt-4">
              <p className="text-[#1C3614]/70">© 2026 Verdia Café. All rights reserved</p>
              <div className="flex items-center gap-4 text-[#1C3614]/80">
                <a href="#root" className="hover:text-[#1C3614] hover:underline transition-colors">
                  Licenses
                </a>
                <a href="#root" className="hover:text-[#1C3614] hover:underline transition-colors">
                  Style Guide
                </a>
              </div>
              <p className="text-xs text-[#1C3614]/60 pt-0.5">Powered by Verdia</p>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="md:col-span-2 flex flex-col text-left">
            <span className="text-xs font-semibold text-[#1C3614]/70 tracking-wider mb-4">Explore</span>
            <ul className="space-y-2 text-xl sm:text-2xl font-bold tracking-tight text-[#1C3614]">
              <li>
                <a href="#menu" className="hover:text-[#82C826] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#place" className="hover:text-[#82C826] transition-colors">
                  Place
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#82C826] transition-colors">
                  Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Navigation */}
          <div className="md:col-span-2 flex flex-col text-left">
            <span className="text-xs font-semibold text-[#1C3614]/70 tracking-wider mb-4">Follow</span>
            <ul className="space-y-2 text-xl sm:text-2xl font-bold tracking-tight text-[#1C3614]">
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#82C826] transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#82C826] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#82C826] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="md:col-span-3 flex flex-col text-left">
            <span className="text-xs font-semibold text-[#1C3614]/70 tracking-wider mb-4">Contact</span>
            <div className="space-y-3.5 text-base sm:text-lg font-bold text-[#1C3614] tracking-tight">
              {/* Address with Pin Icon */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#1C3614] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span className="whitespace-nowrap">Chennai, Tamil Nadu</span>
              </div>
              {/* Email with Envelope Icon */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#1C3614] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:smohamedahil@gmail.com" className="hover:text-[#82C826] transition-colors break-all">
                  smohamedahil@gmail.com
                </a>
              </div>
              {/* Phone with Telephone Icon */}
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#1C3614] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:8489389737" className="hover:text-[#82C826] transition-colors">
                  8489389737
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
