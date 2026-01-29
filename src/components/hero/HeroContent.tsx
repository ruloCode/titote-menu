'use client';

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
  const { t, locale } = useLanguage();

  return (
    <div className="text-center lg:text-left">
      {/* Location badge */}
      <div className="animate-reveal-bottom stagger-premium-1">
        <div className="bg-titote-red-dark/8 border-titote-red-dark/15 hover:bg-titote-red-dark/12 mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 transition-colors duration-300">
          <MapPinIcon className="text-titote-red-dark h-4 w-4" />
          <span className="text-titote-red-dark text-sm font-medium">Getsemaní, Cartagena</span>
        </div>
      </div>

      {/* Main heading with premium animation */}
      <div className="animate-reveal-bottom stagger-premium-2">
        <h1 className="text-titote-red-dark mb-6 font-serif text-[48px] leading-[1.1] font-bold sm:text-[56px] lg:text-[64px]">
          Sabores Locales
          <br />
          con <span className="text-shimmer">Alma Oriental</span>
        </h1>
      </div>

      {/* Subtitle with blur reveal */}
      <p className="text-titote-brown/85 animate-reveal-bottom stagger-premium-3 mx-auto mb-10 max-w-[440px] text-[17px] leading-[1.8] lg:mx-0">
        {t.hero.subtitle}
      </p>

      {/* CTAs with premium hover */}
      <div className="animate-reveal-bottom stagger-premium-4 mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
        <a
          href="#platos"
          className="group from-titote-red to-titote-red-light shadow-red hover:shadow-red-xl relative w-full overflow-hidden rounded-[28px] bg-gradient-to-r px-9 py-4 text-center font-semibold text-white transition-all duration-500 hover:scale-[1.03] sm:w-auto"
        >
          <span className="relative z-10">{locale === 'es' ? 'Ver Menú' : 'View Menu'}</span>
          <div className="from-titote-red-light to-titote-red absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </a>
        <a
          href="#reservar"
          className="border-titote-red-dark text-titote-red-dark hover:bg-titote-red-dark w-full rounded-[28px] border-2 px-9 py-4 text-center font-semibold transition-all duration-500 hover:scale-[1.02] hover:text-white hover:shadow-lg sm:w-auto"
        >
          {t.nav.reserve}
        </a>
      </div>

      {/* Est. badge with glow */}
      <div className="animate-reveal-bottom stagger-premium-5 flex items-center justify-center gap-3 lg:justify-start">
        <div className="via-titote-gold h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-transparent" />
        <span className="text-titote-terracotta text-[11px] font-semibold tracking-[3px] uppercase">
          Est. 2019
        </span>
        <div className="via-titote-gold h-[2px] w-12 rounded-full bg-gradient-to-r from-transparent to-transparent" />
      </div>
    </div>
  );
}
