'use client';

import { LanguageProvider } from '@/context/language-context';
import {
  Header,
  Hero,
  FeaturedDishes,
  About,
  Testimonials,
  Location,
  CTASection,
  WhatsAppButton,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <Testimonials />
        <Location />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
