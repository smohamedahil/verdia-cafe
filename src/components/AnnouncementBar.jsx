import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnnouncementBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(barRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="bg-top-bar text-brand-dark text-xs sm:text-sm font-medium py-2 px-4 text-center tracking-wide relative z-30"
      data-purpose="announcement-bar"
    >
      <span>28 Roastery Lane, Brooklyn</span>
      <span className="mx-2">•</span>
      <span>Open daily 7AM–6PM</span>
      <span className="mx-2">•</span>
      <span>Coffee, matcha &amp; fresh bakes daily</span>
    </div>
  );
}
