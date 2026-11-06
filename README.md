# Mello Landing Page (React + Vite)

A modern, responsive React conversion of the Mello coffee & matcha landing page.

## Tech Stack
- **React 18**
- **Vite**
- **Tailwind CSS**
- **Google Fonts (Fredoka)**

## Project Structure
```
mellow-landing-page/
├── index.html                   # HTML entry point with fonts & Tailwind
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite configuration
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main page layout
│   ├── index.css                # Custom theme, font & marquee animations
│   └── components/
│       ├── AnnouncementBar.jsx  # Top Brooklyn & hours banner
│       ├── MainHeader.jsx       # Brand logo & navigation links
│       ├── HeroSection.jsx      # Headline, cold matcha showcase & doodles
│       ├── Ticker.jsx           # Animated marquee ticker
│       ├── CupOfHappySection.jsx# Featured favorites (Strawberry matcha, etc.)
│       ├── FullMenuSection.jsx  # Structured complete menu
│       ├── MoodMatcherSection.jsx # Interactive 4-quadrant mood wheel & recommendations
│       ├── CoffeeOClockSection.jsx# Digital clock with 4 interactive time tabs
│       ├── WhatMattersSection.jsx # Story & sawtooth receipt graphic
│       ├── TakeASeatSection.jsx # Interactive cafe seating map with pins
│       ├── ReviewsSection.jsx   # Testimonials carousel with prev/next navigation
│       ├── GallerySection.jsx   # Bento grid gallery & Brooklyn location
│       └── Footer.jsx           # Slanted divider, social & contact links
```

## Running the Application
1. **Start Development Server**:
   ```bash
   npm run dev
   ```
2. **Build for Production**:
   ```bash
   npm run build
   ```
3. **Preview Production Build**:
   ```bash
   npm run preview
   ```

