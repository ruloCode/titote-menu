'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { MenuCategory } from '@/lib/menu-data';
import { MenuItem } from './MenuItem';
import { useLanguage } from '@/context/language-context';

// Category image mapping
const categoryImages: Record<string, string> = {
  entradas: '/images/categories/entradas.png',
  fuertes: '/images/categories/platos-fuertes.png',
  arroces: '/images/categories/arroces.png',
  ceviches: '/images/categories/ceviches.png',
  sushi: '/images/categories/sushi.png',
  cocteles: '/images/categories/cocteles.png',
  famosos: '/images/categories/famosos.png',
  infantil: '/images/categories/infantil.png',
  vegetariano: '/images/categories/vegetariano.png',
  postres: '/images/categories/postres.png',
  bebidas: '/images/categories/bebidas.png',
  vinos: '/images/categories/vinos.png',
  cervezas: '/images/categories/cervezas.png',
  licores: '/images/categories/licores.png',
};

interface MenuSectionProps {
  category: MenuCategory;
  searchQuery?: string;
  onVisibilityChange?: (categoryId: string, isVisible: boolean) => void;
}

export function MenuSection({ category, searchQuery = '', onVisibilityChange }: MenuSectionProps) {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !onVisibilityChange) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onVisibilityChange(category.id, true);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [category.id, onVisibilityChange]);

  // Animation on scroll into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const categoryImage = categoryImages[category.id];

  return (
    <section
      ref={sectionRef}
      id={`category-${category.id}`}
      className="menu-section scroll-mt-48 pt-10 pb-16"
    >
      {/* Category Banner Image */}
      {categoryImage && (
        <div className="relative mb-8 h-32 overflow-hidden rounded-xl lg:h-40">
          <Image
            src={categoryImage}
            alt={category.name[locale]}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
          {/* Category name overlay */}
          <div className="absolute inset-0 flex flex-col items-end justify-center px-6 text-right">
            <h2
              className="font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
            >
              {category.name[locale]}
            </h2>
            <p
              className="mt-1 text-sm font-medium text-white/90 sm:text-base"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
            >
              {category.items.length} {category.items.length === 1 ? t.menu.results.dish : t.menu.results.dishes}
            </p>
          </div>
        </div>
      )}

      {/* Category Header with decorations - fallback when no image */}
      {!categoryImage && (
        <div className="mb-8">
          {/* Decorative gold line */}
          <div className="section-deco-line mb-4" />

          <div className="flex items-center gap-4">
            {/* Icon in gradient container */}
            <div className="icon-container-gradient">
              <span className="text-2xl">{category.icon}</span>
            </div>
            <div>
              <h2 className="text-titote-verde-oscuro font-serif text-2xl font-bold md:text-[26px]">
                {category.name[locale]}
              </h2>
              <p className="text-titote-gold mt-0.5 text-sm">
                {category.items.length} {category.items.length === 1 ? t.menu.results.dish : t.menu.results.dishes}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Items Grid - Compact 2-column layout */}
      <div className="menu-grid-compact">
        {category.items.map((item, index) => (
          <div
            key={item.id}
            className="animate-reveal-bottom opacity-0"
            style={{ animationDelay: `${index * 0.03}s`, animationFillMode: 'forwards' }}
          >
            <MenuItem
              item={item}
              searchQuery={searchQuery}
              showImage
              categoryColor={category.accentColor}
            />
          </div>
        ))}
      </div>

      {/* Section bottom divider */}
      <div className="section-divider mt-16" />
    </section>
  );
}
