'use client';

import { useState, useCallback, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { menuData, searchMenu } from '@/lib/menu-data';
import { MenuHeader } from '@/components/menu/MenuHeader';
import { HeroBanner } from '@/components/menu/HeroBanner';
import { CategoryNav } from '@/components/menu/CategoryNav';
import { MenuSection } from '@/components/menu/MenuSection';
import { MenuFooter } from '@/components/menu/MenuFooter';
import { EmptyResults } from '@/components/menu/EmptyResults';

export default function MenuPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || '');

  // Apply search
  const filteredCategories = useMemo(() => {
    return searchMenu(searchQuery, menuData);
  }, [searchQuery]);

  // Handle category visibility change for scroll spy
  const handleCategoryVisibility = useCallback(
    (categoryId: string, isVisible: boolean) => {
      if (isVisible && !searchQuery) {
        setActiveCategory(categoryId);
      }
    },
    [searchQuery]
  );

  // Handle category click from nav
  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  // Handle search change
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Clear search
  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const hasResults = filteredCategories.length > 0;
  const isSearching = searchQuery.trim().length > 0;

  // Count total results
  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="menu-page-bg min-h-screen">
      {/* Header */}
      <MenuHeader searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      {/* Hero Banner */}
      <HeroBanner heroImage="/images/menu/hero-facade.png" />

      {/* Category Navigation */}
      {(!isSearching || hasResults) && (
        <CategoryNav
          categories={isSearching ? filteredCategories : menuData}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
      )}

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 pt-6 sm:px-8 lg:px-[100px]">
        {hasResults ? (
          <>
            {/* Search Results Count */}
            {isSearching && (
              <div className="mb-8">
                <div className="search-results-badge inline-flex items-center gap-2">
                  <svg
                    className="text-titote-verde h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-titote-brown text-sm">
                    <span className="text-titote-verde font-bold">{totalResults}</span>{' '}
                    {totalResults === 1 ? t.menu.results.dish : t.menu.results.dishes}{' '}
                    <span className="text-titote-verde-oscuro font-semibold">
                      &quot;{searchQuery}&quot;
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Menu Sections */}
            {filteredCategories.map(category => (
              <MenuSection
                key={category.id}
                category={category}
                searchQuery={searchQuery}
                onVisibilityChange={handleCategoryVisibility}
              />
            ))}
          </>
        ) : (
          <EmptyResults searchQuery={searchQuery} onClearSearch={handleClearSearch} />
        )}
      </main>

      {/* Footer */}
      <MenuFooter />
    </div>
  );
}
