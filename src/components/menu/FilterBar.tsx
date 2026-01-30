'use client';

import { useState, useCallback, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { PriceRangeSlider } from './PriceRangeSlider';

export interface ActiveFilters {
  popular: boolean;
  new: boolean;
  vegetarian: boolean;
  priceRange: [number, number] | null;
}

interface FilterBarProps {
  filters: ActiveFilters;
  onFiltersChange: (filters: ActiveFilters) => void;
  totalResults: number;
  maxPrice?: number;
}

export function FilterBar({
  filters,
  onFiltersChange,
  totalResults,
  maxPrice = 300000,
}: FilterBarProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);

  const hasActiveFilters = useMemo(() => {
    return (
      filters.popular ||
      filters.new ||
      filters.vegetarian ||
      (filters.priceRange !== null &&
        (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice))
    );
  }, [filters, maxPrice]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.popular) count++;
    if (filters.new) count++;
    if (filters.vegetarian) count++;
    if (
      filters.priceRange !== null &&
      (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice)
    ) {
      count++;
    }
    return count;
  }, [filters, maxPrice]);

  const toggleFilter = useCallback(
    (key: 'popular' | 'new' | 'vegetarian') => {
      onFiltersChange({
        ...filters,
        [key]: !filters[key],
      });
    },
    [filters, onFiltersChange]
  );

  const handlePriceRangeChange = useCallback(
    (range: [number, number]) => {
      onFiltersChange({
        ...filters,
        priceRange: range,
      });
    },
    [filters, onFiltersChange]
  );

  const clearAllFilters = useCallback(() => {
    onFiltersChange({
      popular: false,
      new: false,
      vegetarian: false,
      priceRange: null,
    });
    setShowPriceRange(false);
  }, [onFiltersChange]);

  return (
    <div className="filter-bar-container mx-auto max-w-5xl px-4 py-3">
      {/* Filter toggle button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`filter-toggle-btn ${isExpanded ? 'active' : ''} ${hasActiveFilters ? 'has-filters' : ''}`}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>{t.menu.filters.title}</span>
          {activeFilterCount > 0 && <span className="filter-count-badge">{activeFilterCount}</span>}
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Results counter */}
        <div className="results-counter">
          <span className="font-semibold">{totalResults}</span>
          <span className="text-titote-brown/60">
            {totalResults === 1 ? t.menu.results.dish : t.menu.results.dishes}
          </span>
        </div>

        {/* Quick clear button when filters are active */}
        {hasActiveFilters && !isExpanded && (
          <button
            onClick={clearAllFilters}
            className="clear-filters-quick"
            aria-label={t.a11y.clearFilters}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Expandable filter panel */}
      {isExpanded && (
        <div className="filter-panel animate-slide-down">
          {/* Filter chips row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Popular filter */}
            <button
              onClick={() => toggleFilter('popular')}
              className={`filter-chip-new ${filters.popular ? 'active' : ''}`}
            >
              <span className="text-base">⭐</span>
              <span>{t.menu.filters.popular}</span>
            </button>

            {/* New filter */}
            <button
              onClick={() => toggleFilter('new')}
              className={`filter-chip-new ${filters.new ? 'active' : ''}`}
            >
              <span className="text-base">✨</span>
              <span>{t.menu.filters.new}</span>
            </button>

            {/* Vegetarian filter */}
            <button
              onClick={() => toggleFilter('vegetarian')}
              className={`filter-chip-new ${filters.vegetarian ? 'active' : ''}`}
            >
              <span className="text-base">🌱</span>
              <span>{t.menu.filters.vegetarian}</span>
            </button>

            {/* Price range toggle */}
            <button
              onClick={() => setShowPriceRange(!showPriceRange)}
              className={`filter-chip-new ${
                filters.priceRange !== null &&
                (filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice)
                  ? 'active'
                  : ''
              }`}
            >
              <span className="text-base">💰</span>
              <span>{t.menu.filters.price}</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform ${showPriceRange ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Clear filters button */}
            {hasActiveFilters && (
              <button onClick={clearAllFilters} className="clear-filters-btn">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{t.menu.filters.clearAll}</span>
              </button>
            )}
          </div>

          {/* Price range slider */}
          {showPriceRange && (
            <div className="animate-slide-down mt-3">
              <PriceRangeSlider
                min={0}
                max={maxPrice}
                value={filters.priceRange || [0, maxPrice]}
                onChange={handlePriceRangeChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
