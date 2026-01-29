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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t.nav.home },
    { href: '#platos', label: t.nav.menu },
    { href: '#nosotros', label: t.nav.about },
    { href: '#ubicacion', label: t.nav.location },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-500 ease-out ${
        isScrolled
          ? 'border-titote-red-dark/10 bg-white/95 shadow-lg shadow-black/5 backdrop-blur-lg'
          : 'bg-titote-cream border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-[100px]">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="group flex items-center gap-3">
            <Image
              src="/images/titote-logo.png"
              alt="Titoté Local Food & Fusion"
              width={120}
              height={92}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-titote-red text-sm font-medium transition-all duration-300 ${
                  index === 0 ? 'text-titote-red-dark font-semibold' : 'text-titote-brown'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="text-titote-brown hover:text-titote-red flex items-center gap-1 text-sm font-medium transition-colors"
              aria-label="Toggle language"
            >
              <span
                className={
                  locale === 'es' ? 'text-titote-red-dark font-semibold' : 'text-titote-brown/60'
                }
              >
                ES
              </span>
              <span className="text-titote-brown/30">|</span>
              <span
                className={
                  locale === 'en' ? 'text-titote-red-dark font-semibold' : 'text-titote-brown/60'
                }
              >
                EN
              </span>
            </button>

            {/* CTA Button */}
            <a
              href="#reservar"
              className="from-titote-red to-titote-red-light shadow-red hover:shadow-red-lg rounded-3xl bg-gradient-to-r px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              {t.nav.reserve}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-titote-brown hover:bg-titote-cream rounded-xl p-2 transition-all duration-300 md:hidden"
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
          <div className="border-titote-red/10 mt-2 rounded-2xl border bg-white p-4 shadow-xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-titote-brown hover:text-titote-red hover:bg-titote-cream rounded-xl px-4 py-3 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-titote-cream my-3" />
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-titote-brown/60 text-sm">
                  {locale === 'es' ? 'Idioma' : 'Language'}
                </span>
                <button
                  onClick={toggleLocale}
                  className="bg-titote-cream text-titote-brown hover:bg-titote-red flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white"
                >
                  <span>{locale === 'es' ? 'ES' : 'EN'}</span>
                </button>
              </div>
              <a
                href="#reservar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="from-titote-red to-titote-red-light shadow-red mt-2 rounded-2xl bg-gradient-to-r px-6 py-3 text-center font-semibold text-white"
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
