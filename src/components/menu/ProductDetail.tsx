'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/language-context';
import { formatPrice, getMenuItemById } from '@/lib/menu-data';
import { getMenuItemDetail, getAllergenDisplay } from '@/lib/menu-detail-data';
import { useSwipeToClose } from '@/hooks/useSwipeToClose';
import { ProductDetailHeader } from './ProductDetailHeader';
import { SpiceLevelIndicator } from './SpiceLevelIndicator';

interface ProductDetailProps {
  itemId: string;
  isModal?: boolean;
}

export function ProductDetail({ itemId, isModal = true }: ProductDetailProps) {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const [isClosing, setIsClosing] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Get item data
  const itemData = getMenuItemById(itemId);
  const detail = getMenuItemDetail(itemId);

  const handleClose = useCallback(() => {
    if (isModal) {
      setIsClosing(true);
      setTimeout(() => {
        router.back();
      }, 250);
    } else {
      router.push('/menu');
    }
  }, [router, isModal]);

  // Swipe to close
  const swipeRef = useSwipeToClose({
    onClose: handleClose,
    enabled: isModal,
    threshold: 80,
  });

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // Focus trap for modal
  useEffect(() => {
    if (!isModal) return;

    // Prevent body scroll
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isModal]);

  if (!itemData) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-titote-brown">{t.menu.detail.notFound}</p>
      </div>
    );
  }

  const { item, category } = itemData;
  const displayPrice = item.price || (item.variants && item.variants[0]?.price);
  const hasImage = item.image && !imageError;

  // Get ingredient icons based on item/category
  const getIngredientIcon = (ingredient: string): string => {
    const lower = ingredient.toLowerCase();
    if (lower.includes('pescado') || lower.includes('mojarra') || lower.includes('filete'))
      return '🐟';
    if (lower.includes('coco')) return '🥥';
    if (lower.includes('arroz')) return '🍚';
    if (lower.includes('camar') || lower.includes('langostino')) return '🦐';
    if (lower.includes('pollo') || lower.includes('alita')) return '🍗';
    if (lower.includes('carne') || lower.includes('res') || lower.includes('costilla')) return '🥩';
    if (lower.includes('vegetales') || lower.includes('ensalada')) return '🥗';
    if (lower.includes('ajo') || lower.includes('cebolla')) return '🧄';
    if (lower.includes('cilantro') || lower.includes('hierba')) return '🌿';
    if (lower.includes('limón') || lower.includes('lima')) return '🍋';
    if (lower.includes('plátano')) return '🍌';
    if (lower.includes('salsa')) return '🫗';
    if (lower.includes('queso') || lower.includes('crema')) return '🧀';
    if (lower.includes('ron') || lower.includes('vodka') || lower.includes('gin')) return '🍸';
    if (lower.includes('huevo')) return '🥚';
    if (lower.includes('leche')) return '🥛';
    return '•';
  };

  // Get pairing item name
  const getPairingName = (pairingId: string): string | null => {
    const pairingData = getMenuItemById(pairingId);
    return pairingData ? pairingData.item.name[locale] : null;
  };

  const content = (
    <>
      <ProductDetailHeader onClose={handleClose} showSwipeHandle={isModal} />

      <div ref={isModal ? swipeRef : undefined} className="product-modal-scroll">
        {/* Hero Image */}
        <div
          className="product-modal-hero"
          style={
            {
              '--category-color': category.accentColor,
            } as React.CSSProperties
          }
        >
          {hasImage && (
            <Image
              src={item.image!}
              alt={item.name[locale]}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className={`object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              priority
            />
          )}

          {(!hasImage || !imageLoaded) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-30">🍽️</span>
            </div>
          )}

          {/* Floating badges */}
          {(item.popular || item.new || item.vegetarian) && (
            <div className="product-modal-badges">
              {item.popular && (
                <span className="product-modal-badge text-amber-600">⭐ {t.menu.badges.popular}</span>
              )}
              {item.vegetarian && (
                <span className="product-modal-badge text-green-600">🌱 {t.menu.badges.vegetarian}</span>
              )}
              {item.new && <span className="product-modal-badge text-titote-verde">✨ {t.menu.badges.new}</span>}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="product-modal-body">
          {/* Title and Price */}
          <div className="product-modal-title-row">
            <h1 className="product-modal-title">{item.name[locale]}</h1>
            {displayPrice && (
              <span className="product-modal-price price-gradient">
                {formatPrice(displayPrice)}
              </span>
            )}
          </div>

          {/* Other language name */}
          {item.name.en !== item.name.es && (
            <p className="product-modal-en-name">{locale === 'es' ? item.name.en : item.name.es}</p>
          )}

          {/* Variants if no single price */}
          {!item.price && item.variants && item.variants.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-3">
              {item.variants.map((variant, idx) => (
                <div
                  key={idx}
                  className="border-titote-gold/10 flex items-center gap-2 rounded-lg border bg-white/70 px-3 py-2"
                >
                  <span className="text-titote-brown text-sm font-medium">{variant.label}:</span>
                  <span className="price-gradient font-bold">{formatPrice(variant.price)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          {item.description && <p className="product-modal-description">{item.description[locale]}</p>}

          {/* Detailed info (if available) */}
          {detail && (
            <>
              {/* Ingredients */}
              {detail.ingredients.length > 0 && (
                <>
                  <div className="product-modal-divider">
                    <span className="product-modal-divider-line" />
                    <span className="product-modal-divider-text">{t.menu.detail.ingredients}</span>
                    <span className="product-modal-divider-line" />
                  </div>

                  <div className="product-modal-ingredients">
                    {detail.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="product-modal-ingredient">
                        <span className="product-modal-ingredient-icon">
                          {getIngredientIcon(ingredient)}
                        </span>
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Info Grid */}
              <div className="product-modal-info-grid">
                {/* Preparation Time */}
                <div className="product-modal-info-item">
                  <span className="product-modal-info-icon">⏱️</span>
                  <div>
                    <span className="product-modal-info-label">{t.menu.detail.time}</span>
                    <span className="product-modal-info-text">{detail.preparationTime} min</span>
                  </div>
                </div>

                {/* Spice Level */}
                {detail.spiceLevel !== undefined && (
                  <div className="product-modal-info-item">
                    <span className="product-modal-info-icon">🌶️</span>
                    <SpiceLevelIndicator level={detail.spiceLevel} showLabel />
                  </div>
                )}

                {/* Portion Size */}
                {detail.portionSize && (
                  <div className="product-modal-info-item">
                    <span className="product-modal-info-icon">📏</span>
                    <div>
                      <span className="product-modal-info-label">{t.menu.detail.portion}</span>
                      <span className="product-modal-info-text">{detail.portionSize[locale]}</span>
                    </div>
                  </div>
                )}

                {/* Pairing */}
                {detail.pairing && (
                  <div className="product-modal-info-item">
                    <span className="product-modal-info-icon">🍹</span>
                    <div>
                      <span className="product-modal-info-label">{t.menu.detail.pairing}</span>
                      <span className="product-modal-info-text">
                        {getPairingName(detail.pairing) || detail.pairing}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Allergens */}
              {detail.allergens.length > 0 && (
                <div className="product-modal-allergens">
                  <span className="product-modal-allergens-icon">⚠️</span>
                  <div className="product-modal-allergens-text">
                    <strong>{t.menu.detail.allergens}:</strong>{' '}
                    {detail.allergens
                      .map(a => {
                        const info = getAllergenDisplay(a);
                        return info ? `${info.icon} ${info[locale]}` : a;
                      })
                      .join(', ')}
                  </div>
                </div>
              )}

              {/* Chef Note */}
              {detail.chefNote && (
                <div className="product-modal-chef-note">
                  <p className="product-modal-chef-note-quote">
                    &ldquo;{detail.chefNote[locale]}&rdquo;
                  </p>
                  <p className="product-modal-chef-note-author">— Chef Titoté</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );

  if (isModal) {
    return (
      <>
        {/* Backdrop */}
        <div className="product-modal-backdrop" onClick={handleClose} aria-hidden="true" />

        {/* Modal */}
        <div
          className="product-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-title"
        >
          <div
            ref={modalContentRef}
            className={`product-modal-content ${isClosing ? 'closing' : ''}`}
            tabIndex={-1}
          >
            {content}
          </div>
        </div>
      </>
    );
  }

  // Non-modal (full page) version
  return (
    <div className="product-detail-page">
      <div className="mx-auto max-w-lg">{content}</div>
    </div>
  );
}
