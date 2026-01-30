'use client';

import Image from 'next/image';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-clean.png"
        alt="Casa Migueli - Getsemaní, Cartagena"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay for better text readability - vertical gradient on mobile, lateral on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30 md:bg-gradient-to-r md:from-black/60 md:via-black/40 md:to-transparent" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 pt-24 sm:px-8 md:py-20 md:pt-32 lg:px-[100px]">
        <div className="max-w-2xl">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
