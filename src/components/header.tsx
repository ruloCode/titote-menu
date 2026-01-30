'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '#nosotros', label: t.nav.about },
    { href: '#ubicacion', label: t.nav.location },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-[#f5f1e6]/95 shadow-lg shadow-black/5 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      {/* Subtle gradient overlay when transparent for better text readability */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-[100px]">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group flex items-center gap-3">
            <Image
              src="/images/titote-logo.png"
              alt="Titoté Local Food & Fusion"
              width={160}
              height={123}
              className="h-16 w-auto transition-all duration-500 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#5c4033] hover:text-[#a51508]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#a51508]' : 'bg-[#c9a227]'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="hidden items-center gap-6 md:flex">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                isScrolled ? 'text-[#5c4033]' : 'text-white/80'
              }`}
              aria-label="Toggle language"
            >
              <span
                className={`transition-all duration-300 ${
                  locale === 'es'
                    ? isScrolled
                      ? 'font-semibold text-[#a51508]'
                      : 'font-semibold text-white'
                    : isScrolled
                      ? 'text-[#5c4033]/50'
                      : 'text-white/50'
                }`}
              >
                ES
              </span>
              <span className={isScrolled ? 'text-[#5c4033]/30' : 'text-white/30'}>|</span>
              <span
                className={`transition-all duration-300 ${
                  locale === 'en'
                    ? isScrolled
                      ? 'font-semibold text-[#a51508]'
                      : 'font-semibold text-white'
                    : isScrolled
                      ? 'text-[#5c4033]/50'
                      : 'text-white/50'
                }`}
              >
                EN
              </span>
            </button>

            {/* CTA Button */}
            <a
              href="#reservar"
              className={`rounded-full px-7 py-2.5 text-sm font-semibold transition-all duration-500 hover:scale-[1.02] ${
                isScrolled
                  ? 'bg-[#a51508] text-white shadow-lg hover:bg-[#8a1107] hover:shadow-xl'
                  : 'border-2 border-white/80 text-white backdrop-blur-sm hover:bg-white hover:text-[#a51508]'
              }`}
            >
              {t.nav.reserve}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`rounded-xl p-2 transition-all duration-300 md:hidden ${
              isScrolled ? 'text-[#5c4033] hover:bg-[#5c4033]/10' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#1a1a1a]/90 p-4 shadow-2xl backdrop-blur-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-3 border-white/10" />
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-white/60">
                  {locale === 'es' ? 'Idioma' : 'Language'}
                </span>
                <button
                  onClick={toggleLocale}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  <span>{locale === 'es' ? 'ES' : 'EN'}</span>
                </button>
              </div>
              <a
                href="#reservar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 rounded-2xl bg-[#a51508] px-6 py-3 text-center font-semibold text-white shadow-lg transition-all hover:bg-[#8a1107]"
              >
                {t.nav.reserve}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
