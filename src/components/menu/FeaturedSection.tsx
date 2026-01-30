'use client';

import { useMemo } from 'react';
import type { MenuCategory, MenuItem as MenuItemType } from '@/lib/menu-data';
import { MenuItem } from './MenuItem';
import { useLanguage } from '@/context/language-context';

interface FeaturedSectionProps {
  categories: MenuCategory[];
  searchQuery?: string;
}

interface FeaturedItem extends MenuItemType {
  categoryName: string;
  categoryIcon: string;
  categoryColor: string;
}

export function FeaturedSection({ categories, searchQuery = '' }: FeaturedSectionProps) {
  const { locale } = useLanguage();

  // Collect all popular items from all categories
  const featuredItems = useMemo(() => {
    const items: FeaturedItem[] = [];

    categories.forEach(category => {
      category.items
        .filter(item => item.popular)
        .forEach(item => {
          items.push({
            ...item,
            categoryName: category.name[locale],
            categoryIcon: category.icon,
            categoryColor: category.accentColor,
          });
        });
    });

    return items;
  }, [categories, locale]);

  if (featuredItems.length === 0) return null;

  return (
    <section className="featured-section mx-4 lg:mx-8">
      {/* Header */}
      <div className="featured-header">
        <div className="featured-icon">
          <span>⭐</span>
        </div>
        <div>
          <h2 className="featured-title">Destacados</h2>
          <p className="featured-subtitle">Los favoritos de nuestros clientes</p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="featured-scroll">
        {featuredItems.map((item, index) => (
          <div
            key={item.id}
            className="featured-item animate-reveal-bottom opacity-0"
            style={
              {
                animationDelay: `${index * 0.08}s`,
                animationFillMode: 'forwards',
                '--category-color': item.categoryColor,
              } as React.CSSProperties
            }
          >
            <MenuItem
              item={item}
              searchQuery={searchQuery}
              showImage
              categoryColor={item.categoryColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
