'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

// Map Pin Icon
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

export function HeroContent() {
  const { t } = useLanguage();

  return (
    <div className="text-center lg:text-left">
      {/* Location badge */}
      <div className="animate-reveal-bottom stagger-premium-1">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 md:mb-8">
          <MapPinIcon className="text-titote-gold h-4 w-4" />
          <span className="text-sm font-medium text-white">Getsemaní, Cartagena</span>
        </div>
      </div>

      {/* Main heading with premium animation */}
      <div className="animate-reveal-bottom stagger-premium-2">
        <h1 className="mb-4 font-serif text-[40px] leading-[1.1] font-bold text-white drop-shadow-lg sm:text-[56px] md:mb-6 lg:text-[72px]">
          {t.hero.title}
          <br />
          con{' '}
          <span className="text-titote-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            {t.hero.titleHighlight}
          </span>
        </h1>
      </div>

      {/* Subtitle with blur reveal */}
      <p className="animate-reveal-bottom stagger-premium-3 mx-auto mb-6 max-w-[440px] text-[16px] leading-[1.7] text-white/90 drop-shadow-md md:mb-10 md:text-[18px] md:leading-[1.8] lg:mx-0">
        {t.hero.subtitle}
      </p>

      {/* CTAs with premium hover */}
      <div className="animate-reveal-bottom stagger-premium-4 mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row md:mb-10 md:gap-4 lg:justify-start">
        <Link
          href="/menu"
          className="group relative w-full overflow-hidden rounded-[28px] bg-[#a51508] px-7 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-500 hover:scale-[1.03] hover:bg-[#8a1107] hover:shadow-xl sm:w-auto md:px-9 md:py-4"
        >
          <span className="relative z-10">{t.hero.ctaSecondary}</span>
        </Link>
        <a
          href="#reservar"
          className="w-full rounded-[28px] border-2 border-white px-7 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:bg-white hover:text-[#a51508] hover:shadow-lg sm:w-auto md:px-9 md:py-4"
        >
          {t.nav.reserve}
        </a>
      </div>

      {/* Est. badge with glow */}
      <div className="animate-reveal-bottom stagger-premium-5 flex items-center justify-center gap-3 lg:justify-start">
        <div className="bg-titote-gold/60 h-[2px] w-12 rounded-full" />
        <span className="text-titote-gold text-[11px] font-semibold tracking-[3px] uppercase">
          Est. 2019
        </span>
        <div className="bg-titote-gold/60 h-[2px] w-12 rounded-full" />
      </div>
    </div>
  );
}
