'use client';

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

interface Testimonial {
  id: string;
  text: { es: string; en: string };
  author: string;
  location: string;
  rating: number;
  initial: string;
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
  },
];

export function Testimonials() {
  const { locale } = useLanguage();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="bg-white py-[100px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-[100px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-titote-gold mb-4 block text-sm font-semibold tracking-[3px] uppercase">
            {locale === 'es' ? 'RESEÑAS' : 'REVIEWS'}
          </span>
          <h2 className="text-titote-red-dark font-serif text-[42px] font-bold sm:text-[48px]">
            {locale === 'es' ? 'Lo que dicen nuestros clientes' : 'What our customers say'}
          </h2>
        </div>

        {/* Testimonials Grid with Glassmorphism */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass-testimonial rounded-2xl p-8 ${
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

              {/* Author with premium avatar */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="avatar-premium from-titote-red to-titote-red-dark flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white shadow-md">
                  {testimonial.initial}
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
