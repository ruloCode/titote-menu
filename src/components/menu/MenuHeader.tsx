'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { SearchBar } from './SearchBar';

interface MenuHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function MenuHeader({ searchQuery, onSearchChange }: MenuHeaderProps) {
  const { t } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-[60px] transition-all duration-300 ${
        isScrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-[100px]">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/images/titote-logo.png"
            alt="Titoté"
            width={120}
            height={92}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Search Area */}
        <div className="flex items-center gap-3">
          {/* Search Bar (expandable on mobile) */}
          {isSearchOpen ? (
            <div className="glass-header absolute inset-x-0 top-0 z-50 flex h-[60px] items-center px-4">
              <SearchBar
                value={searchQuery}
                onChange={onSearchChange}
                placeholder={t.menu.search.placeholder}
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-menu-text-secondary hover:bg-titote-verde/10 hover:text-titote-verde ml-3 rounded-full p-2 transition-colors"
                aria-label={t.a11y.closeSearch}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <>
              {/* Desktop Search - only show full bar when scrolled */}
              {isScrolled && (
                <div className="hidden w-72 md:block">
                  <SearchBar
                    value={searchQuery}
                    onChange={onSearchChange}
                    placeholder={t.menu.search.placeholder}
                  />
                </div>
              )}

              {/* Search Icon - show on mobile always, on desktop only when not scrolled */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`rounded-full p-2.5 transition-all ${
                  isScrolled
                    ? 'text-menu-text-secondary hover:bg-titote-verde/10 hover:text-titote-verde md:hidden'
                    : 'text-titote-brown hover:bg-titote-verde/10 hover:text-titote-verde'
                }`}
                aria-label={t.a11y.search}
              >
                <svg
                  className="h-5 w-5"
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
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
