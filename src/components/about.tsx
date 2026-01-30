'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { useInView } from '@/hooks/use-in-view';

export function About() {
  const { t, locale } = useLanguage();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="nosotros" ref={sectionRef} className="bg-titote-cream py-12 md:py-[100px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-[100px]">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image with Ken Burns effect */}
          <div className={`${isInView ? 'animate-reveal-left' : 'opacity-0'}`}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              {/* Actual restaurant image */}
              <div className="animate-ken-burns-subtle relative h-full w-full">
                <Image
                  src="/images/restaurant/interior.png"
                  alt={
                    locale === 'es'
                      ? 'Interior del restaurante Titoté'
                      : 'Titoté restaurant interior'
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Hover overlay */}
              <div className="from-titote-red-dark/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 translate-y-4 transform rounded-full bg-white/90 px-4 py-2 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-titote-red-dark text-sm font-semibold">📍 Getsemaní</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${isInView ? 'animate-reveal-right' : 'opacity-0'}`}
            style={{ animationDelay: '200ms' }}
          >
            {/* Badge */}
            <span className="text-titote-gold mb-6 block text-sm font-semibold tracking-[3px] uppercase">
              {t.about.label}
            </span>

            {/* Decorative line with gradient */}
            <div className="from-titote-gold via-titote-gold-light mb-8 h-[3px] w-20 rounded-full bg-gradient-to-r to-transparent" />

            {/* Title */}
            <h2 className="text-titote-red-dark mb-6 font-serif text-[36px] leading-tight font-bold lg:text-[42px]">
              {t.about.whereCaribbean}
              <br />
              {t.about.meetsOrient} <span className="text-shimmer">{t.about.orient}</span>
            </h2>

            {/* Description */}
            <p className="text-titote-brown/80 mb-10 text-base leading-[1.8] lg:text-[17px]">
              {t.about.description}
            </p>

            {/* Stats with premium styling */}
            <div className="flex items-center gap-8 lg:gap-10">
              {/* Stat 1 */}
              <div className="border-gradient-to-b from-titote-gold/30 border-r to-transparent pr-8 text-center lg:pr-10">
                <p className="text-titote-gold font-serif text-[36px] font-bold drop-shadow-sm lg:text-[44px]">
                  4.4
                </p>
                <p className="text-titote-brown/60 mt-1 flex items-center justify-center gap-1 text-sm">
                  <span className="text-titote-gold">★</span> Google
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-titote-brown/15 border-r pr-8 text-center lg:pr-10">
                <p className="text-titote-gold font-serif text-[36px] font-bold drop-shadow-sm lg:text-[44px]">
                  58
                </p>
                <p className="text-titote-brown/60 mt-1 text-sm">{t.about.reviews}</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <p className="text-titote-gold font-serif text-[36px] font-bold drop-shadow-sm lg:text-[44px]">
                  5+
                </p>
                <p className="text-titote-brown/60 mt-1 text-sm">{t.about.years}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
