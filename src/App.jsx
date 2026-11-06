import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AnnouncementBar from './components/AnnouncementBar';
import MainHeader from './components/MainHeader';
import HeroSection from './components/HeroSection';
import Ticker from './components/Ticker';
import CupOfHappySection from './components/CupOfHappySection';
import FullMenuSection from './components/FullMenuSection';
import MoodMatcherSection from './components/MoodMatcherSection';
import CoffeeOClockSection from './components/CoffeeOClockSection';
import WhatMattersSection from './components/WhatMattersSection';
import TakeASeatSection from './components/TakeASeatSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with smooth, responsive settings
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Refresh ScrollTrigger to ensure all trigger bounds are perfectly aligned
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#E6EADE] min-h-screen flex flex-col justify-between overflow-x-hidden text-[#273822]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header / Navigation */}
      <MainHeader />

      {/* Hero Section with GSAP Entrance & Behind-Text Floating Shapes */}
      <HeroSection />

      {/* Hero Marquee Ticker */}
      <Ticker />

      {/* Cup of Happy Featured Highlights */}
      <CupOfHappySection />

      {/* Complete Mello Menu */}
      <FullMenuSection />

      {/* Interactive Mood Matcher */}
      <MoodMatcherSection />

      {/* Coffee O'Clock Time Schedules */}
      <CoffeeOClockSection />

      {/* What Matters / Receipt Story Section */}
      <WhatMattersSection />

      {/* Take a Seat Interactive Seating Map */}
      <TakeASeatSection />

      {/* Customer Testimonials & Reviews Carousel */}
      <ReviewsSection />

      {/* Take a Peek Gallery & Brooklyn Location Bento */}
      <GallerySection />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
