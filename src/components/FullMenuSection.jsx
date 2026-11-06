import React from 'react';

const column1Categories = [
  {
    title: 'Espresso bar',
    desc: 'Fresh espresso classics.',
    sizes: ['8 oz', '16 oz'],
    items: [
      { name: 'Espresso', prices: ['$3.00', '$4.00'] },
      { name: 'Americano', prices: ['$3.50', '$4.50'] },
      { name: 'Cappuccino', prices: ['$4.25', '$5.50'] },
      { name: 'Verdia flat white', prices: ['$4.50', '$5.75'] },
      { name: 'Café latte', prices: ['$4.75', '$6.00'] },
    ],
  },
  {
    title: 'Matcha & tea',
    desc: 'Green, bright, and refreshing.',
    sizes: ['8 oz', '16 oz'],
    items: [
      { name: 'Cold matcha', prices: ['$5.25', '$6.00'] },
      { name: 'Strawberry matcha', prices: ['$5.50', '$6.50'] },
      { name: 'Classic matcha latte', prices: ['$5.00', '$6.25'] },
      { name: 'Chai latte', prices: ['$4.75', '$6.00'] },
      { name: 'English breakfast tea', prices: ['$3.50', '$4.50'] },
    ],
  },
  {
    title: 'Blended favorites',
    desc: 'Cold, creamy, and smooth.',
    sizes: ['8 oz', '16 oz'],
    items: [
      { name: 'Matcha blend', prices: ['$5.25', '$6.50'] },
      { name: 'Mocha shake', prices: ['$5.50', '$6.75'] },
      { name: 'Strawberry cream', prices: ['$5.25', '$6.50'] },
      { name: 'Caramel coffee blend', prices: ['$5.50', '$6.75'] },
      { name: 'Banana oat smoothie', prices: ['$5.00', '$6.25'] },
    ],
  },
];

const column2Categories = [
  {
    title: 'Coffee favorites',
    desc: 'Sweet, creamy coffee creations.',
    sizes: ['8 oz', '16 oz'],
    items: [
      { name: 'Classic mocha', prices: ['$5.00', '$6.25'] },
      { name: 'Cherry cloud mocha', prices: ['$5.00', '$6.00'] },
      { name: 'Vanilla latte', prices: ['$5.00', '$6.25'] },
      { name: 'Caramel latte', prices: ['$5.00', '$6.25'] },
      { name: 'Hot chocolate', prices: ['$4.50', '$5.75'] },
    ],
  },
  {
    title: 'Cold drinks',
    desc: 'Cool drinks for brighter days.',
    sizes: ['8 oz', '16 oz'],
    items: [
      { name: 'Cold brew', prices: ['$4.50', '$5.75'] },
      { name: 'Iced latte', prices: ['$4.75', '$6.00'] },
      { name: 'Espresso tonic', prices: ['$5.00', '$6.25'] },
      { name: 'Sparkling citrus', prices: ['$4.00', '$5.25'] },
    ],
  },
  {
    title: 'Bakes & bites',
    desc: 'Freshly baked little treats.',
    sizes: ['x1', 'x4'],
    items: [
      { name: 'Big cinny bun', prices: ['$5.50', '$18.00'] },
      { name: 'Butter croissant', prices: ['$4.00', '$14.00'] },
      { name: 'Chocolate cookie', prices: ['$3.50', '$12.00'] },
      { name: 'Banana bread', prices: ['$4.50', '$16.00'] },
      { name: 'Blueberry muffin', prices: ['$4.25', '$15.00'] },
    ],
  },
];

function MenuCategoryBlock({ category }) {
  return (
    <div>
      <div className="flex items-end justify-between pb-2 border-b border-[#273822]/15 mb-3">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-brand-dark">{category.title}</h3>
          <p className="text-xs text-brand-dark/70 font-medium mt-0.5">{category.desc}</p>
        </div>
        <div className="flex gap-6 text-xs text-brand-dark/60 font-medium text-right pr-1">
          {category.sizes.map((s, idx) => (
            <span key={idx} className="w-10">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-sm text-brand-dark font-medium divide-y divide-[#273822]/5">
        {category.items.map((item, idx) => (
          <div key={idx} className="flex justify-between py-1.5 hover:bg-[#273822]/5 px-1 rounded transition-colors">
            <span>{item.name}</span>
            <div className="flex gap-6 text-right pr-1 text-xs sm:text-sm font-semibold text-brand-dark/90">
              {item.prices.map((p, pIdx) => (
                <span key={pIdx} className="w-10">
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FullMenuSection() {
  return (
    <section className="w-full py-20 px-6 max-w-5xl mx-auto" data-purpose="full-menu-section" id="menu">
      {/* Heart Icon Doodle & Title */}
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <svg
          className="w-16 h-16 mb-4 text-[#82C341] stroke-current fill-none animate-pulse"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          viewBox="0 0 100 100"
        >
          <path d="M50 85 C20 60, 5 45, 15 25 C23 9, 42 12, 50 28 C58 12, 77 9, 85 25 C95 45, 80 60, 50 85 Z" />
        </svg>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-[1.1]">
          The complete
          <br />
          Verdia menu
        </h2>
      </div>

      {/* Two-Column Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {/* Column 1 (Left) */}
        <div className="flex flex-col gap-12">
          {column1Categories.map((cat, i) => (
            <MenuCategoryBlock key={i} category={cat} />
          ))}
        </div>

        {/* Column 2 (Right) */}
        <div className="flex flex-col gap-12">
          {column2Categories.map((cat, i) => (
            <MenuCategoryBlock key={i} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

