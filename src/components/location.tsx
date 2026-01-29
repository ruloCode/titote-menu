'use client';

import { useLanguage } from '@/context/language-context';
import { useInView } from '@/hooks/use-in-view';

// Icons
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function Location() {
  const { locale } = useLanguage();
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="ubicacion" ref={sectionRef} className="bg-titote-cream py-[100px]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-[100px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            {/* Badge */}
            <span className="text-titote-gold mb-6 block text-sm font-semibold tracking-[3px] uppercase">
              {locale === 'es' ? 'ENCUÉNTRANOS' : 'FIND US'}
            </span>

            {/* Title */}
            <h2 className="text-titote-red-dark mb-10 font-serif text-[36px] leading-tight font-bold lg:text-[42px]">
              {locale === 'es' ? 'Visítanos en Getsemaní' : 'Visit us in Getsemaní'}
            </h2>

            {/* Info rows */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-titote-gold/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                  <MapPinIcon className="text-titote-gold h-5 w-5" />
                </div>
                <div>
                  <p className="text-titote-red-dark mb-1 font-medium">
                    {locale === 'es' ? 'Dirección' : 'Address'}
                  </p>
                  <p className="text-titote-brown/80">
                    Cl. 29 #10b - 66, Getsemaní, Cartagena de Indias, Bolívar
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-titote-gold/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                  <PhoneIcon className="text-titote-gold h-5 w-5" />
                </div>
                <div>
                  <p className="text-titote-red-dark mb-1 font-medium">
                    {locale === 'es' ? 'Teléfonos' : 'Phones'}
                  </p>
                  <a
                    href="tel:+573238091748"
                    className="text-titote-brown/80 hover:text-titote-gold block transition-colors"
                  >
                    +57 323 809 1748
                  </a>
                  <a
                    href="tel:+573187868917"
                    className="text-titote-brown/80 hover:text-titote-gold block transition-colors"
                  >
                    +57 318 786 8917
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-titote-gold/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                  <ClockIcon className="text-titote-gold h-5 w-5" />
                </div>
                <div>
                  <p className="text-titote-red-dark mb-1 font-medium">
                    {locale === 'es' ? 'Horario' : 'Hours'}
                  </p>
                  <p className="text-titote-brown/80">
                    {locale === 'es'
                      ? 'Mar - Dom: 12:00 PM - 11:00 PM'
                      : 'Tue - Sun: 12:00 PM - 11:00 PM'}
                  </p>
                  <p className="text-titote-brown/60 mt-1 text-sm">
                    {locale === 'es' ? 'Lunes cerrado' : 'Monday closed'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div
            className={`transition-all delay-200 duration-700 ${
              isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="from-titote-red-dark/20 to-titote-red/20 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1543!2d-75.5456!3d10.4219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f9e5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sCl.%2029%20%2310b-66%2C%20Cartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Titoté Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
