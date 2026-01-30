'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { menuData, formatPrice } from '@/lib/menu-data';
import { SectionHeader } from './ui/section-header';
import { PopularBadge, Badge } from './ui/badge';
import { useInView } from '@/hooks/use-in-view';
import {
  CevicheIllustration,
  ArrozCocoIllustration,
  SushiRollIllustration,
  PataconIllustration,
  PostreTropicalIllustration,
  BebidaTropicalIllustration,
  EntradaIllustration,
  PlatoFuerteIllustration,
} from './ui/food-illustrations';

// Map category IDs to illustrations
const categoryIllustrationMap: Record<
  string,
  React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' | 'xl' }>
> = {
  entradas: EntradaIllustration,
  fuertes: PlatoFuerteIllustration,
  arroces: ArrozCocoIllustration,
  ceviches: CevicheIllustration,
  sushi: SushiRollIllustration,
  vegetariano: PataconIllustration,
  postres: PostreTropicalIllustration,
  bebidas: BebidaTropicalIllustration,
};

// Category icons as SVG for tabs
function CategoryIcon({ categoryId, isActive }: { categoryId: string; isActive: boolean }) {
  const iconClass = `w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-titote-red'}`;

  const icons: Record<string, React.ReactNode> = {
    entradas: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12"
        />
      </svg>
    ),
    fuertes: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
      </svg>
    ),
    arroces: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="12" cy="14" rx="9" ry="5" />
        <path strokeLinecap="round" d="M3 14v2c0 2.761 4.03 5 9 5s9-2.239 9-5v-2" />
        <path strokeLinecap="round" d="M8 12c0-1.5.5-5 4-5s4 3.5 4 5" />
        <circle cx="10" cy="13" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
    ceviches: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="12" cy="16" rx="9" ry="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16c0-2 3-8 9-8s9 6 9 8" />
        <path strokeLinecap="round" d="M8 13c1-1 2-1.5 4-1.5s3 .5 4 1.5" />
        <circle cx="9" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="15" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    sushi: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="12" cy="12" rx="8" ry="5" />
        <ellipse cx="12" cy="12" rx="4" ry="2.5" fill="currentColor" opacity="0.3" />
        <path strokeLinecap="round" d="M4 12c0 2.761 3.582 5 8 5s8-2.239 8-5" />
        <path strokeLinecap="round" d="M20 8l2 12M4 8l-2 12" />
      </svg>
    ),
    vegetariano: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c-1 4-4 6-7 7 2 1 4 4 4 8h6c0-4 2-7 4-8-3-1-6-3-7-7z"
        />
        <path strokeLinecap="round" d="M12 10v8" />
        <path strokeLinecap="round" d="M10 14c1 0 2 .5 2 1.5" />
      </svg>
    ),
    postres: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-2 0-6 .5-6 4v1c0 1 .5 4 6 4s6-3 6-4v-1c0-3.5-4-4-6-4z"
        />
        <path strokeLinecap="round" d="M6 13c0 2 2.686 4 6 4s6-2 6-4" />
        <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.5" />
        <path strokeLinecap="round" d="M12 4c0-1 1-2 2-2" />
      </svg>
    ),
    bebidas: (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6l-1 18H10L9 3z" />
        <path strokeLinecap="round" d="M9 3c0 0 0 2 3 2s3-2 3-2" />
        <ellipse cx="12" cy="8" rx="2.5" ry="1" fill="currentColor" opacity="0.3" />
        <path strokeLinecap="round" d="M15 3l2-1m-2 1l1 2" />
        <circle cx="16" cy="5" r="2" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  };

  return icons[categoryId] || icons.entradas;
}

export function Menu() {
  const { t, locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('entradas');
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const activeMenuCategory = menuData.find(cat => cat.id === activeCategory);
  const IllustrationComponent = categoryIllustrationMap[activeCategory] || EntradaIllustration;

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-10 md:py-24"
    >
      {/* Background decoration */}
      <div className="from-titote-cream/60 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-to-bl to-transparent" />
      <div className="from-titote-gold/5 pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/2 rounded-full bg-gradient-to-tr to-transparent" />

      {/* Decorative lines */}
      <div className="via-titote-gold/20 absolute top-40 left-10 h-px w-32 bg-gradient-to-r from-transparent to-transparent" />
      <div className="via-titote-gold/20 absolute right-10 bottom-60 h-px w-48 bg-gradient-to-r from-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-8 transition-all duration-700 md:mb-16 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <SectionHeader
            eyebrow={t.menu.eyebrow}
            title={
              locale === 'es' ? (
                <>
                  Nuestros Platos <span className="text-gradient-gold-premium">Populares</span>
                </>
              ) : (
                <>
                  Our <span className="text-gradient-gold-premium">Popular</span> Dishes
                </>
              )
            }
            subtitle={t.menu.subtitle}
          />
        </div>

        {/* Category Tabs - Premium SVG icons - Hidden on mobile */}
        <div
          className={`mb-8 hidden flex-wrap justify-center gap-3 transition-all delay-100 duration-700 md:mb-14 md:flex ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {menuData.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-titote-red shadow-titote-red/25 scale-105 text-white shadow-xl'
                  : 'text-titote-brown border-titote-red/10 hover:bg-titote-red-light border bg-white hover:scale-102 hover:text-white hover:shadow-lg'
              }`}
            >
              <CategoryIcon categoryId={category.id} isActive={activeCategory === category.id} />
              <span className="hidden sm:inline">{category.name[locale]}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid - Premium Cards with SVG illustrations */}
        {activeMenuCategory && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {activeMenuCategory.items.map((item, index) => (
              <div
                key={item.id}
                className={`group to-titote-cream/30 border-titote-red/5 card-lift relative rounded-3xl border bg-gradient-to-br from-white p-6 shadow-sm transition-all duration-500 hover:shadow-2xl ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isInView ? `${(index + 2) * 100}ms` : '0ms',
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="from-titote-gold/5 absolute inset-0 rounded-3xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* SVG Illustration */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    {/* Background glow */}
                    <div className="from-titote-red/10 to-titote-gold/10 absolute inset-0 scale-75 rounded-full bg-gradient-to-br blur-xl transition-transform duration-500 group-hover:scale-100" />

                    {/* Illustration */}
                    <div className="relative transform transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                      <IllustrationComponent size="lg" className="drop-shadow-lg" />
                    </div>

                    {/* Badges */}
                    {item.popular && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <PopularBadge text={t.menu.popular} />
                      </div>
                    )}
                    {item.new && (
                      <div className="absolute -top-3 -left-3 z-10">
                        <Badge variant="red" size="sm">
                          {t.menu.new}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Add button - appears on hover */}
                  <button className="from-titote-gold to-titote-gold-light shadow-titote-gold/30 absolute -bottom-2 left-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-4 scale-75 items-center justify-center rounded-full bg-gradient-to-br text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-110 hover:shadow-xl">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-titote-red-dark group-hover:text-titote-red mb-2 text-lg font-bold transition-colors">
                    {item.name[locale]}
                  </h3>
                  <p className="text-titote-brown/60 mb-5 line-clamp-2 text-sm leading-relaxed">
                    {item.description?.[locale] || ''}
                  </p>

                  {/* Price - Display typography */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-display-xs text-gradient-gold font-bold">
                      {item.price ? formatPrice(item.price) : ''}
                    </span>
                    {item.vegetarian && (
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100"
                        title={t.menu.badges.vegetarian}
                      >
                        <svg
                          className="h-4 w-4 text-green-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 3c-1 4-4 6-7 7 2 1 4 4 4 8h6c0-4 2-7 4-8-3-1-6-3-7-7z" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Menu CTA */}
        <div
          className={`mt-10 text-center transition-all delay-500 duration-700 md:mt-16 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <Link
            href="/menu"
            className="group border-titote-gold/50 text-titote-gold hover:bg-titote-gold hover:border-titote-gold inline-flex items-center gap-3 rounded-full border-2 bg-white/50 px-10 py-5 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-xl"
          >
            {t.menu.viewFull}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
