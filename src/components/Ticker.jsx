import React from 'react';

export default function Ticker({ text, className = '' }) {
  const defaultText =
    "problems ♥ Big smiles ♥ Good coffee ♥ No coffee snobbery ♥ Cold matcha ♥ Oat milk, no drama ♥ Fresh bakes ♥ Pastries before problems ♥ Big smiles ♥ Good coffee ♥ No coffee snobbery ♥ Cold matcha ♥ Oat milk, no drama ♥ Fresh bakes ♥ Pastries before problems ♥";

  const content = text || defaultText;

  return (
    <div
      className={`w-full overflow-x-hidden bg-[#8CC63F] text-brand-dark py-3 whitespace-nowrap select-none ${className}`}
      data-purpose="ticker-runner"
    >
      <div className="animate-marquee font-bold text-sm tracking-wider uppercase inline-block">
        <span className="mr-6">{content}</span>
        <span className="mr-6">{content}</span>
      </div>
    </div>
  );
}

