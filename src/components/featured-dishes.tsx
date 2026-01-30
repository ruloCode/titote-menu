'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { useInView } from '@/hooks/use-in-view';

// Arrow Right Icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

interface Dish {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  price: number;
  borderColor: string;
  image: string;
}

const featuredDishes: Dish[] = [
  {
    id: 'encocado-titote',
    name: { es: 'Encocado Titoté', en: 'Titoté Encocado' },
    description: {
      es: 'Pescado en salsa de coco al estilo cartagenero, nuestra especialidad de la casa',
      en: 'Fish in coconut sauce Cartagena style, our house specialty',
    },
    price: 54000,
    borderColor: 'border-titote-gold',
    image: '/images/dishes/seafood-fusion.png',
  },
  {
    id: 'posta-titote',
    name: { es: 'Posta Titoté', en: 'Titoté Posta' },
    description: {
      es: 'Tradicional posta cartagenera preparada con nuestra receta especial',
      en: 'Traditional Cartagena posta prepared with our special recipe',
    },
    price: 38000,
    borderColor: 'border-titote-terracotta',
    image: '/images/dishes/rolls-patacon.png',
  },
  {
    id: 'arroz-titote-wok',
    name: { es: 'Arroz Titoté al Wok', en: 'Wok Titoté Rice' },
    description: {
      es: 'Arroz salteado al wok estilo Titoté con nuestra fusión caribeña-oriental',
      en: 'Wok-fried rice Titoté style with our Caribbean-Oriental fusion',
    },
    price: 48000,
    borderColor: 'border-titote-red',
    image: '/images/dishes/arroz-thai.png',
  },
];

export function FeaturedDishes() {
  const { locale } = useLanguage();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="platos" ref={sectionRef} className="hidden bg-white py-12 md:block md:py-[100px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-[100px]">
        {/* Header */}
        <div className="mb-8 text-center md:mb-16">
          <span className="text-titote-gold mb-4 block text-sm font-semibold tracking-[3px] uppercase">
            {locale === 'es' ? 'NUESTRA CARTA' : 'OUR MENU'}
          </span>
          <h2 className="text-titote-red-dark font-serif text-[42px] font-bold sm:text-[48px]">
            {locale === 'es' ? 'Platos Destacados' : 'Featured Dishes'}
          </h2>
          <p className="text-titote-brown/80 mx-auto mt-4 max-w-[550px] text-base leading-relaxed">
            {locale === 'es'
              ? 'Descubre nuestra selección de platos más populares, donde la tradición cartagenera se encuentra con la innovación asiática'
              : 'Discover our selection of most popular dishes, where Cartagena tradition meets Asian innovation'}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`card-premium group border-titote-red-dark/5 rounded-2xl border bg-white p-6 shadow-lg lg:p-8 ${
                isInView ? 'animate-reveal-bottom' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Circular image with zoom effect */}
              <div className="mb-6 flex justify-center">
                <div
                  className={`relative h-[200px] w-[200px] rounded-full lg:h-[220px] lg:w-[220px] ${dish.borderColor} overflow-hidden border-4 shadow-xl transition-all duration-500 group-hover:border-[5px] group-hover:shadow-2xl`}
                >
                  <div className="card-image relative h-full w-full transition-transform duration-700">
                    <Image
                      src={dish.image}
                      alt={dish.name.es}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="from-titote-red-dark/40 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-titote-red-dark group-hover:text-titote-red mb-3 font-serif text-[24px] font-semibold transition-colors duration-300 lg:text-[26px]">
                  {dish.name[locale]}
                </h3>
                <p className="text-titote-brown/70 min-h-[48px] text-sm leading-relaxed lg:text-base">
                  {dish.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 rounded-[28px] border-2 border-[#a51508] bg-transparent px-10 py-4 font-semibold text-[#a51508] transition-all duration-300 hover:bg-[#a51508] hover:text-white"
          >
            {locale === 'es' ? 'Ver Menú Completo' : 'View Full Menu'}
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
