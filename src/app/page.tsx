'use client';

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
    <>
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
    </>
  );
}
