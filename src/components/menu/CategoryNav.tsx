'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/context/language-context';
import type { MenuCategory } from '@/lib/menu-data';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

export function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  const { locale } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  const updateShadows = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftShadow(scrollLeft > 10);
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  const scrollByAmount = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 250;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateShadows, { passive: true });
    updateShadows();

    return () => container.removeEventListener('scroll', updateShadows);
  }, [updateShadows]);

  // Scroll active category into view
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const activeButton = container.querySelector(`[data-category="${activeCategory}"]`);
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
        activeButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeCategory]);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryClick(categoryId);

    // Scroll to section
    const section = document.getElementById(`category-${categoryId}`);
    if (section) {
      const headerOffset = 140; // Account for sticky header + category nav + filter bar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="glass-category-nav sticky top-[60px] z-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-[100px]">
        {/* Left arrow button - desktop only */}
        {showLeftShadow && (
          <button
            onClick={() => scrollByAmount('left')}
            className="bg-titote-cream/95 text-titote-verde-oscuro hover:bg-titote-verde hover:text-white absolute top-1/2 left-0 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-all lg:flex"
            aria-label="Scroll left"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right arrow button - desktop only */}
        {showRightShadow && (
          <button
            onClick={() => scrollByAmount('right')}
            className="bg-titote-cream/95 text-titote-verde-oscuro hover:bg-titote-verde hover:text-white absolute top-1/2 right-0 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-all lg:flex"
            aria-label="Scroll right"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Left shadow - mobile only */}
        {showLeftShadow && (
          <div className="from-titote-cream pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r to-transparent lg:hidden" />
        )}

        {/* Right shadow - mobile only */}
        {showRightShadow && (
          <div className="from-titote-cream pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l to-transparent lg:hidden" />
        )}

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="hide-scrollbar flex gap-3 overflow-x-auto py-3 lg:px-6"
        >
          {categories.map(category => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                data-category={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`category-pill shrink-0 ${isActive ? 'active' : ''}`}
                style={
                  {
                    '--accent-color': category.accentColor,
                  } as React.CSSProperties
                }
              >
                <span className="category-pill-icon">{category.icon}</span>
                <span className="category-pill-name">{category.name[locale]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
