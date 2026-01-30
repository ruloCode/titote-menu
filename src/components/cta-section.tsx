'use client';

import { useLanguage } from '@/context/language-context';

// WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Phone Icon
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

export function CTASection() {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(t.whatsapp.message);

  return (
    <section
      id="reservar"
      className="relative overflow-hidden bg-[#1a0a08] py-12 sm:py-24 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#a51508]/20 via-transparent to-[#c9a227]/10" />

        {/* Top decorative line */}
        <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 h-16 w-16 border-t-2 border-l-2 border-[#c9a227]/30" />
        <div className="absolute right-8 bottom-8 h-16 w-16 border-r-2 border-b-2 border-[#c9a227]/30" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
        {/* Decorative label */}
        <div className="mb-6 inline-flex items-center gap-3 md:mb-8">
          <span className="h-px w-8 bg-[#c9a227]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c9a227] uppercase">
            {t.cta.label}
          </span>
          <span className="h-px w-8 bg-[#c9a227]" />
        </div>

        {/* Title */}
        <h2 className="mb-6 font-serif text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
          {t.cta.title}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#f5f1e6]/80 sm:text-xl md:mb-12">
          {t.cta.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/573238091748?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#c9a227] px-10 py-5 font-semibold text-[#1a0a08] shadow-lg shadow-[#c9a227]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#d4af37] hover:shadow-xl hover:shadow-[#c9a227]/30 sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            {t.cta.whatsappButton}
          </a>

          {/* Call Button */}
          <a
            href="tel:+573238091748"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#f5f1e6]/40 px-10 py-5 font-semibold text-[#f5f1e6] transition-all duration-300 hover:border-[#f5f1e6] hover:bg-[#f5f1e6] hover:text-[#1a0a08] sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" />
            {t.cta.callButton}
          </a>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-10 flex items-center justify-center gap-4 md:mt-16">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a227]/50" />
          <span className="text-2xl text-[#c9a227]/60">✦</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a227]/50" />
        </div>
      </div>
    </section>
  );
}
