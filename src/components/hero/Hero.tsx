'use client';

import dynamic from 'next/dynamic';
import { HeroContent } from './HeroContent';

// Dynamic import for Remotion Player to reduce initial bundle size
const HeroRemotionPlayer = dynamic(
  () => import('./HeroRemotionPlayer').then(mod => ({ default: mod.HeroRemotionPlayer })),
  {
    ssr: false,
    loading: () => (
      <div className="bg-titote-cream/50 h-[400px] w-[320px] animate-pulse rounded-full md:h-[540px] md:w-[500px]" />
    ),
  }
);

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-titote-cream relative flex min-h-[750px] items-center overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-titote-gold/5 absolute top-0 left-0 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl" />
        <div className="bg-titote-red/5 absolute right-0 bottom-0 h-[300px] w-[300px] translate-x-1/4 translate-y-1/4 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 pt-32 sm:px-8 lg:px-[100px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Text content */}
          <HeroContent />

          {/* Right column - Remotion animated plates */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[400px] w-[320px] md:h-[540px] md:w-[500px]">
              <HeroRemotionPlayer className="absolute inset-0 h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
