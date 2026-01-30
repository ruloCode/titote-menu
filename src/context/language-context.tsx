'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Locale, getTranslations, TranslationKeys } from '@/lib/i18n';

const STORAGE_KEY = 'titote-locale';

interface LanguageContextType {
  locale: Locale;
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  // This runs on server, return default
  if (typeof window === 'undefined') {
    return 'es';
  }

  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') {
    return stored;
  }

  // Detect browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('en')) {
    return 'en';
  }

  // Default to Spanish
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize locale on client
  useEffect(() => {
    const initialLocale = getInitialLocale();
    setLocaleState(initialLocale);
    document.documentElement.lang = initialLocale;
    setIsInitialized(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    setLocale(newLocale);
  }, [locale, setLocale]);

  const t = getTranslations(locale);

  // Prevent hydration mismatch by using default locale until initialized
  const contextValue: LanguageContextType = {
    locale: isInitialized ? locale : 'es',
    t: isInitialized ? t : getTranslations('es'),
    setLocale,
    toggleLocale,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
