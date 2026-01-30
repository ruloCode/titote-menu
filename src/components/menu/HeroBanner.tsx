'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

interface HeroBannerProps {
  heroImage?: string;
}

export function HeroBanner({ heroImage = '/images/menu/hero.png' }: HeroBannerProps) {
  const { t, locale, toggleLocale } = useLanguage();

  return (
    <div className="menu-hero-fade relative -mt-[60px] min-h-[28vh] w-full overflow-hidden sm:min-h-[35vh] lg:min-h-[35vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImage ? (
          <Image
            src={heroImage}
            alt="Titoté Restaurant"
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="bg-titote-verde-oscuro h-full w-full" />
        )}
        {/* Gradient overlay - stronger for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30" />
      </div>

      {/* Content - positioned lower to account for header overlap */}
      <div className="relative z-10 flex h-full min-h-[28vh] flex-col items-center justify-center px-4 pt-[60px] text-center sm:min-h-[35vh] lg:min-h-[35vh]">
        {/* Title */}
        <h1
          className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.5)' }}
        >
          {t.menuPage.heroTitle}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-2 text-base font-medium text-white sm:mt-3 sm:text-lg lg:text-xl"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
        >
          {t.menuPage.heroSubtitle}
        </p>

        {/* Language Toggle - Mobile Only */}
        <button
          onClick={toggleLocale}
          className="mt-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 md:hidden"
          aria-label="Toggle language"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          <span className={locale === 'es' ? 'font-bold' : 'opacity-60'}>ES</span>
          <span className="opacity-40">|</span>
          <span className={locale === 'en' ? 'font-bold' : 'opacity-60'}>EN</span>
        </button>
      </div>
    </div>
  );
}
