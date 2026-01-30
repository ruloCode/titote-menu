'use client';

import { useCallback, useEffect, useState } from 'react';
import { useLanguage } from '@/context/language-context';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  transparent?: boolean;
}

export function SearchBar({
  value,
  onChange,
  placeholder,
  autoFocus = false,
  transparent = false,
}: SearchBarProps) {
  const { t } = useLanguage();
  const [localValue, setLocalValue] = useState(value);

  // Debounce the search
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 200);
    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  // Sync external value changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleClear = useCallback(() => {
    setLocalValue('');
    onChange('');
  }, [onChange]);

  return (
    <div
      className={`flex items-center gap-3 px-4 py-2.5 transition-all duration-300 ${
        transparent ? 'rounded-full bg-white/90 shadow-lg backdrop-blur-sm' : 'menu-search-bar'
      }`}
    >
      {/* Search Icon */}
      <svg
        className={`h-5 w-5 shrink-0 ${transparent ? 'text-titote-verde' : 'text-titote-brown/60'}`}
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

      {/* Input */}
      <input
        type="text"
        value={localValue}
        onChange={e => setLocalValue(e.target.value)}
        placeholder={placeholder || t.menu.search.placeholder}
        className={`w-full bg-transparent focus:outline-none ${
          transparent
            ? 'text-titote-brown placeholder:text-titote-brown/50'
            : 'text-menu-text-primary placeholder:text-titote-brown/60'
        }`}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        autoFocus={autoFocus}
      />

      {/* Clear Button */}
      {localValue && (
        <button
          onClick={handleClear}
          className={`shrink-0 rounded-full p-1 transition-colors ${
            transparent
              ? 'text-titote-brown/60 hover:bg-titote-verde/10 hover:text-titote-verde'
              : 'text-menu-text-muted hover:bg-menu-bg-elevated hover:text-menu-text-primary'
          }`}
          aria-label={t.a11y.closeSearch}
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
  );
}
