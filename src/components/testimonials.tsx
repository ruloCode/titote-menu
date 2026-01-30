'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { useInView } from '@/hooks/use-in-view';

// Star Icon
function StarIcon({
  className,
  filled,
  style,
}: {
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={filled ? 0 : 2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

// Quote Icon for mobile
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

interface Testimonial {
  id: string;
  text: { es: string; en: string };
  author: string;
  location: string;
  rating: number;
  initial: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: {
      es: 'Una experiencia gastronómica increíble. La fusión de sabores caribeños con toques asiáticos es simplemente perfecta. El ceviche nikkei es imperdible.',
      en: 'An incredible gastronomic experience. The fusion of Caribbean flavors with Asian touches is simply perfect. The nikkei ceviche is a must.',
    },
    author: 'María González',
    location: 'Bogotá, Colombia',
    rating: 5,
    initial: 'M',
    image: '/images/testimonials/maria.png',
  },
  {
    id: '2',
    text: {
      es: 'El mejor restaurante de fusión en Cartagena. El ambiente es acogedor y la atención excepcional. Los rolls de patacón son adictivos.',
      en: 'The best fusion restaurant in Cartagena. The atmosphere is cozy and the service exceptional. The plantain rolls are addictive.',
    },
    author: 'Carlos Mendoza',
    location: 'Miami, USA',
    rating: 5,
    initial: 'C',
    image: '/images/testimonials/carlos.png',
  },
  {
    id: '3',
    text: {
      es: 'Descubrimos Titoté por TripAdvisor y superó todas nuestras expectativas. La creatividad en cada plato es asombrosa. Volveremos sin duda.',
      en: 'We discovered Titoté on TripAdvisor and it exceeded all our expectations. The creativity in each dish is amazing. We will return without a doubt.',
    },
    author: 'Sophie Laurent',
    location: 'París, Francia',
    rating: 5,
    initial: 'S',
    image: '/images/testimonials/sophie.png',
  },
];

export function Testimonials() {
  const { t, locale } = useLanguage();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    const maxIndex = testimonials.length - 1;
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setActiveIndex(newIndex);
    setTranslateX(0);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    if (translateX > threshold && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    } else if (translateX < -threshold && activeIndex < testimonials.length - 1) {
      goToSlide(activeIndex + 1);
    } else {
      setTranslateX(0);
    }
  };

  // Mouse handlers for desktop drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    if (translateX > threshold && activeIndex > 0) {
      goToSlide(activeIndex - 1);
    } else if (translateX < -threshold && activeIndex < testimonials.length - 1) {
      goToSlide(activeIndex + 1);
    } else {
      setTranslateX(0);
    }
  };

  // Auto-play for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-white via-[#faf8f5] to-white py-12 md:py-[100px]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-[100px]">
        {/* Header */}
        <div className="mb-8 text-center md:mb-16">
          <span className="text-titote-gold mb-4 block text-sm font-semibold tracking-[3px] uppercase">
            {t.testimonials.label}
          </span>
          <h2 className="text-titote-red-dark font-serif text-[32px] leading-tight font-bold sm:text-[42px] md:text-[48px]">
            {t.testimonials.title}
          </h2>
          <p className="text-titote-brown/60 mx-auto mt-3 max-w-md text-sm md:text-base">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="md:hidden">
          <div
            ref={containerRef}
            className="relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Cards Container */}
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(calc(-${activeIndex * 100}% + ${translateX}px))`,
                transition: isDragging
                  ? 'none'
                  : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div
                    className={`testimonial-card-mobile relative rounded-3xl bg-white p-6 shadow-xl ${
                      isInView ? 'animate-reveal-bottom' : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                      boxShadow:
                        '0 20px 60px -15px rgba(165, 21, 8, 0.15), 0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {/* Decorative top accent */}
                    <div className="from-titote-gold via-titote-red to-titote-gold absolute top-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-b-full bg-gradient-to-r" />

                    {/* Quote Icon */}
                    <QuoteIcon className="text-titote-gold/20 absolute top-4 right-4 h-10 w-10" />

                    {/* Author Photo - Large and prominent */}
                    <div className="mb-5 flex justify-center">
                      <div className="relative">
                        <div className="from-titote-gold via-titote-red to-titote-gold absolute -inset-1 rounded-full bg-gradient-to-br opacity-80 blur-sm" />
                        <div className="relative h-20 w-20 overflow-hidden rounded-full border-3 border-white shadow-lg">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="mb-4 text-center">
                      <p className="text-titote-red-dark text-lg font-bold">{testimonial.author}</p>
                      <p className="text-titote-brown/50 text-sm">{testimonial.location}</p>
                    </div>

                    {/* Stars */}
                    <div className="mb-4 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-titote-gold' : 'text-gray-200'
                          }`}
                          filled={i < testimonial.rating}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-titote-brown/80 text-center text-[15px] leading-relaxed italic">
                      &ldquo;{testimonial.text[locale]}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'from-titote-red to-titote-gold w-8 bg-gradient-to-r'
                      : 'bg-titote-brown/20 hover:bg-titote-brown/40 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <p className="text-titote-brown/40 mt-4 text-center text-xs">
              {t.testimonials.swipeHint}
            </p>
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass-testimonial group rounded-2xl p-8 ${
                isInView ? 'animate-reveal-bottom' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote mark with animation */}
              <span className="quote-decoration mb-2 block h-16">&ldquo;</span>

              {/* Stars with hover effect */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`star-animated h-5 w-5 ${
                      i < testimonial.rating ? 'text-titote-gold' : 'text-gray-300'
                    }`}
                    filled={i < testimonial.rating}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-titote-brown/80 mb-6 min-h-[100px] text-[15px] leading-[1.7]">
                {testimonial.text[locale]}
              </p>

              {/* Author with photo */}
              <div className="flex items-center gap-4">
                {/* Photo Avatar */}
                <div className="relative">
                  <div className="avatar-premium relative h-14 w-14 overflow-hidden rounded-full shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="56px"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-titote-red-dark font-semibold">{testimonial.author}</p>
                  <p className="text-titote-brown/60 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
