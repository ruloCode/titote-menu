'use client';

import { useLanguage } from '@/context/language-context';

interface EmptyResultsProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export function EmptyResults({ searchQuery, onClearSearch }: EmptyResultsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-4 py-12 text-center">
      {/* Animated Icon */}
      <div className="empty-state-icon bg-menu-bg-elevated mb-6 flex h-24 w-24 items-center justify-center rounded-full">
        <svg
          className="text-menu-text-muted h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Message */}
      <h3 className="text-menu-text-primary mb-2 text-xl font-semibold">
        {t.menu.search.noResults}
      </h3>
      <p className="text-titote-brown mb-6 max-w-sm">
        {t.menu.search.noResultsFor}{' '}
        <span className="text-titote-verde font-medium">&quot;{searchQuery}&quot;</span>
      </p>

      {/* Suggestions */}
      <div className="mb-8">
        <p className="text-menu-text-muted mb-3 text-sm">{t.menu.search.trySuggestions}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Ceviche', 'Arroz', 'Mojito', 'Sushi', 'BBQ'].map(suggestion => (
            <button
              key={suggestion}
              onClick={() => {
                const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (input) {
                  input.value = suggestion;
                  input.dispatchEvent(new Event('input', { bubbles: true }));
                }
              }}
              className="bg-menu-bg-elevated text-titote-brown hover:bg-titote-verde rounded-full px-4 py-1.5 text-sm transition-colors hover:text-white"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Button */}
      <button
        onClick={onClearSearch}
        className="bg-titote-verde inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
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
        {t.menu.search.clearSearch}
      </button>
    </div>
  );
}
