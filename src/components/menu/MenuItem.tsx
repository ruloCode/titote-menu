'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { MenuItem as MenuItemType } from '@/lib/menu-data';
import { formatPrice } from '@/lib/menu-data';
import { useLanguage } from '@/context/language-context';

interface MenuItemProps {
  item: MenuItemType;
  searchQuery?: string;
  showImage?: boolean;
  categoryColor?: string;
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="search-highlight font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function MenuItem({
  item,
  searchQuery = '',
  showImage = true,
  categoryColor = '#e5e7eb',
}: MenuItemProps) {
  const { locale } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasImage = item.image && !imageError;
  const displayPrice = item.price || (item.variants && item.variants[0]?.price);

  return (
    <Link
      href={`/menu/${item.id}`}
      className="menu-card-compact cursor-pointer"
      style={{ '--category-color': categoryColor } as React.CSSProperties}
    >
      {/* Image Section - Square 72x72 */}
      {showImage && (
        <div className="menu-card-compact-image">
          {/* Skeleton loader */}
          {!imageLoaded && hasImage && <div className="skeleton-premium absolute inset-0" />}

          {/* Actual image */}
          {hasImage && (
            <Image
              src={item.image!}
              alt={item.name[locale]}
              fill
              sizes="72px"
              className={`object-cover transition-all duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}

          {/* Fallback gradient with icon */}
          {(!hasImage || imageError) && (
            <div className="menu-card-compact-fallback">
              <span className="text-xl">🍽️</span>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="menu-card-compact-content">
        {/* Header: Name + Badges */}
        <div className="menu-card-compact-header">
          <h3 className="menu-card-compact-title">{highlightText(item.name[locale], searchQuery)}</h3>

          {/* Compact Badges */}
          {(item.popular || item.new || item.vegetarian) && (
            <div className="menu-card-compact-badges">
              {item.popular && <span className="badge-compact badge-compact-popular">⭐</span>}
              {item.new && <span className="badge-compact badge-compact-new">✨</span>}
              {item.vegetarian && <span className="badge-compact badge-compact-veggie">🌱</span>}
            </div>
          )}
        </div>

        {/* Secondary language name - Hidden on mobile */}
        {item.name.en !== item.name.es && (
          <p className="menu-card-compact-subtitle">{highlightText(item.name[locale === 'es' ? 'en' : 'es'], searchQuery)}</p>
        )}

        {/* Description - 1 line with ellipsis */}
        {item.description && (
          <p className="menu-card-compact-desc">
            {highlightText(item.description[locale], searchQuery)}
          </p>
        )}

        {/* Price Section */}
        <div className="menu-card-compact-footer">
          {displayPrice ? (
            <span className="price-gradient text-sm font-bold">{formatPrice(displayPrice)}</span>
          ) : item.variants && item.variants.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {item.variants.slice(0, 2).map((variant, idx) => (
                <span key={idx} className="text-titote-brown/70 text-xs">
                  <span className="font-medium">{variant.label}:</span>{' '}
                  <span className="price-gradient font-semibold">{formatPrice(variant.price)}</span>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
