import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://titotelocalfood.com'),
  title: {
    default: 'Titoté Local Food & Fusion | Restaurante en Cartagena, Colombia',
    template: '%s | Titoté Local Food & Fusion',
  },
  description:
    'Restaurante de cocina local cartagenera con fusión oriental en Getsemaní, Cartagena. Ceviches, arroces caribeños, sushi fusión y más. Reserva tu mesa ahora.',
  keywords: [
    'restaurante Cartagena',
    'comida cartagenera',
    'Getsemaní',
    'ceviche Cartagena',
    'sushi fusión',
    'mariscos Cartagena',
    'arroz caribeño',
    'restaurante romántico Cartagena',
    'donde comer en Cartagena',
    'Titoté',
    'local food fusion',
  ],
  authors: [{ name: 'Titoté Local Food & Fusion' }],
  creator: 'Titoté Local Food & Fusion',
  publisher: 'Titoté Local Food & Fusion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    url: 'https://titotelocalfood.com',
    siteName: 'Titoté Local Food & Fusion',
    title: 'Titoté Local Food & Fusion | Restaurante en Cartagena',
    description:
      'Cocina local cartagenera con fusión oriental. Ceviches, arroces caribeños, sushi fusión y más en el corazón de Getsemaní.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Titoté Local Food & Fusion - Restaurante en Cartagena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titoté Local Food & Fusion | Restaurante en Cartagena',
    description: 'Cocina local cartagenera con fusión oriental en Getsemaní. ⭐ 4.8/5 TripAdvisor',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://titotelocalfood.com',
    languages: {
      'es-CO': 'https://titotelocalfood.com',
      'en-US': 'https://titotelocalfood.com/en',
    },
  },
  category: 'restaurant',
};

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Titoté Local Food & Fusion',
  image: 'https://titotelocalfood.com/og-image.jpg',
  '@id': 'https://titotelocalfood.com',
  url: 'https://titotelocalfood.com',
  telephone: '+573001234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 29, Getsemaní',
    addressLocality: 'Cartagena de Indias',
    addressRegion: 'Bolívar',
    postalCode: '130001',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.4195,
    longitude: -75.5513,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '22:00',
    },
  ],
  servesCuisine: ['Caribbean', 'Colombian', 'Fusion', 'Seafood', 'Sushi'],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '197',
    bestRating: '5',
  },
  sameAs: [
    'https://instagram.com/titotelocalfood',
    'https://facebook.com/titotelocalfood',
    'https://www.tripadvisor.com/Restaurant_Review-g297476-d24949655-Reviews-Titote_Local_Food-Cartagena_Cartagena_District_Bolivar_Department.html',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
