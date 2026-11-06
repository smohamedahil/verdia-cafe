import React, { useState, useRef } from 'react';
import gsap from 'gsap';

const reviews = [
  {
    quote:
      'Come for the great coffee,\nstay for the perfect playlist\nand those cinnamon buns\nyou’ll keep thinking about.',
    rating: '4.9',
    author: 'Mia Carter',
  },
  {
    quote:
      'The cold matcha is unreal.\nBest spot in Brooklyn to catch\nthe morning sun and finish\nan entire chapter uninterrupted.',
    rating: '5.0',
    author: 'Lucas Vance',
  },
  {
    quote:
      'No pretension, zero snobbery,\njust incredible warm roasts,\nkind humans, and the coziest nooks\nin the whole neighborhood.',
    rating: '4.9',
    author: 'Chloe Nguyen',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);
  const quoteMarkRef = useRef(null);

  const changeReview = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const outX = direction === 'next' ? -60 : 60;
    const inX = direction === 'next' ? 60 : -60;

    // Pulse quote mark slightly
    if (quoteMarkRef.current) {
      gsap.fromTo(
        quoteMarkRef.current,
        { scale: 0.9, rotate: direction === 'next' ? -8 : 8 },
        { scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2)' }
      );
    }

    // Smoothly slide out old review
    gsap.to(contentRef.current, {
      x: outX,
      opacity: 0,
      filter: 'blur(4px)',
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        // Update review index
        setCurrentIndex((prev) => {
          if (direction === 'next') {
            return prev === reviews.length - 1 ? 0 : prev + 1;
          } else {
            return prev === 0 ? reviews.length - 1 : prev - 1;
          }
        });

        // Smoothly slide in new review
        gsap.fromTo(
          contentRef.current,
          { x: inX, opacity: 0, filter: 'blur(4px)' },
          {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.45,
            ease: 'power3.out',
            onComplete: () => {
              setIsAnimating(false);
            },
          }
        );
      },
    });
  };

  const goToReview = (index) => {
    if (isAnimating || index === currentIndex) return;
    const direction = index > currentIndex ? 'next' : 'prev';
    setIsAnimating(true);

    const outX = direction === 'next' ? -60 : 60;
    const inX = direction === 'next' ? 60 : -60;

    gsap.to(contentRef.current, {
      x: outX,
      opacity: 0,
      filter: 'blur(4px)',
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(
          contentRef.current,
          { x: inX, opacity: 0, filter: 'blur(4px)' },
          {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.45,
            ease: 'power3.out',
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  const review = reviews[currentIndex];

  return (
    <section
      className="w-full py-24 sm:py-28 px-6 bg-[#E6EADE] text-[#1c3614] flex flex-col items-center justify-center text-center relative overflow-hidden"
      data-purpose="testimonial-section"
      id="reviews"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
        {/* Lime Green Quotation Mark Doodle */}
        <div
          ref={quoteMarkRef}
          className="mb-8 flex items-center justify-center text-[#82C341] pointer-events-none select-none will-change-transform"
          data-purpose="quote-mark-icon"
        >
          <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 64 64">
            <path d="M22.5 12 C18 17 15 25 15 35 C17 32 19 31 22 31 C26.5 31 30 34.5 30 39 C30 44 26 48 20.5 48 C14.5 48 10 43 10 35 C10 22 16 13 22.5 12 Z" />
            <path d="M44.5 12 C40 17 37 25 37 35 C39 32 41 31 44 31 C48.5 31 52 34.5 52 39 C52 44 48 48 42.5 48 C36.5 48 32 43 32 35 C32 22 38 13 44.5 12 Z" />
          </svg>
        </div>

        {/* Animated Container for Quote & Reviewer */}
        <div
          ref={contentRef}
          className="w-full flex flex-col items-center justify-center will-change-transform select-none"
        >
          {/* Main Quote Heading */}
          <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1c3614] leading-[1.12] sm:leading-[1.15] max-w-3xl mb-8 whitespace-pre-line min-h-[140px] sm:min-h-[220px] flex items-center justify-center">
            "{review.quote}"
          </blockquote>

          {/* Rating & Reviewer Information */}
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-[#1c3614] mb-10 sm:mb-12">
            <svg className="w-5 h-5 fill-[#82C341] text-[#82C341] shrink-0" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-bold text-[#1c3614]">{review.rating}</span>
            <span className="mx-1 text-[#1c3614]/70">—</span>
            <span className="text-[#1c3614] font-medium">{review.author}</span>
          </div>
        </div>

        {/* Navigation Arrows & Indicators */}
        <div className="flex flex-col items-center gap-5" data-purpose="carousel-controls">
          <div className="flex items-center justify-center gap-4" data-purpose="carousel-arrows">
            <button
              aria-label="Previous review"
              onClick={() => changeReview('prev')}
              disabled={isAnimating}
              className="w-11 h-11 rounded-full border-2 border-[#1c3614] text-[#1c3614] flex items-center justify-center transition-all duration-300 hover:bg-[#1c3614] hover:text-[#E6EADE] hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
              type="button"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <line x1="19" x2="5" y1="12" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button
              aria-label="Next review"
              onClick={() => changeReview('next')}
              disabled={isAnimating}
              className="w-11 h-11 rounded-full border-2 border-[#1c3614] text-[#1c3614] flex items-center justify-center transition-all duration-300 hover:bg-[#1c3614] hover:text-[#E6EADE] hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
              type="button"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <line x1="5" x2="19" y1="12" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => goToReview(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? 'w-6 bg-[#1c3614]'
                    : 'w-2 bg-[#1c3614]/30 hover:bg-[#1c3614]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
