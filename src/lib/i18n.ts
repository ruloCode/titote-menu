export type Locale = 'es' | 'en';

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      about: 'Nosotros',
      location: 'Ubicación',
      reserve: 'Reservar',
    },
    // Hero
    hero: {
      tagline: 'Creamos con pasión e innovación',
      subtitle: 'Una experiencia gastronómica que hace la diferencia',
      cta: 'Reservar Mesa',
      ctaSecondary: 'Ver Menú',
      badge: '⭐ 4.4/5 Google · 58 reseñas',
    },
    // About
    about: {
      title: 'Nuestra Historia',
      subtitle: 'Local Food & Fusion',
      description:
        'Titoté es la inspiración de un grupo de cocineros locales y emprendedores creativos amantes de la buena cocina que proponen nuevas experiencias con la comida típica local cartagenera, apostándole a la fusión con recetas orientales muy familiarizadas con nuestros paladares.',
      feature1: 'Ingredientes Locales',
      feature1Desc: 'Productos frescos del Caribe colombiano',
      feature2: 'Fusión Creativa',
      feature2Desc: 'Lo mejor de Cartagena con toques orientales',
      feature3: 'Ambiente Único',
      feature3Desc: 'En el corazón de Getsemaní',
    },
    // Menu
    menu: {
      title: 'Nuestra Carta',
      subtitle: 'Sabores del Caribe con alma de fusión',
      categories: {
        entradas: 'Entradas',
        fuertes: 'Platos Fuertes',
        arroces: 'Arroces',
        ceviches: 'Ceviches',
        sushi: 'Sushi Fusión',
        vegetariano: 'Vegetariano',
        postres: 'Postres',
        bebidas: 'Bebidas',
      },
      viewFull: 'Ver carta completa',
      popular: 'Popular',
      new: 'Nuevo',
    },
    // Location
    location: {
      title: 'Encuéntranos',
      subtitle: 'En el corazón de Getsemaní',
      address: 'Calle 29, Getsemaní',
      city: 'Cartagena de Indias, Colombia',
      hours: 'Horario',
      hoursValue: '12:00 PM - 10:00 PM',
      everyday: 'Todos los días',
      getDirections: 'Cómo llegar',
    },
    // Reservation
    reservation: {
      title: 'Reserva tu Mesa',
      subtitle: 'Asegura tu experiencia gastronómica',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      date: 'Fecha',
      time: 'Hora',
      guests: 'Personas',
      notes: 'Notas especiales',
      notesPlaceholder: 'Alergias, celebraciones, preferencias...',
      submit: 'Confirmar Reserva',
      whatsapp: '¿Prefieres WhatsApp?',
      whatsappBtn: 'Reservar por WhatsApp',
    },
    // Footer
    footer: {
      slogan: 'Local Food & Fusion',
      social: 'Síguenos',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados',
      tip: 'El 10% de propina es voluntario',
    },
    // WhatsApp
    whatsapp: {
      message: '¡Hola! Me gustaría hacer una reserva en Titoté.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      location: 'Location',
      reserve: 'Reserve',
    },
    // Hero
    hero: {
      tagline: 'We create with passion and innovation',
      subtitle: 'A gastronomic experience that makes the difference',
      cta: 'Book a Table',
      ctaSecondary: 'View Menu',
      badge: '⭐ 4.4/5 Google · 58 reviews',
    },
    // About
    about: {
      title: 'Our Story',
      subtitle: 'Local Food & Fusion',
      description:
        'Titoté is the inspiration of a group of local chefs and creative entrepreneurs who love good food and propose new experiences with typical Cartagena cuisine, fusing it with oriental recipes that are very familiar to our palates.',
      feature1: 'Local Ingredients',
      feature1Desc: 'Fresh products from the Colombian Caribbean',
      feature2: 'Creative Fusion',
      feature2Desc: 'The best of Cartagena with oriental touches',
      feature3: 'Unique Atmosphere',
      feature3Desc: 'In the heart of Getsemaní',
    },
    // Menu
    menu: {
      title: 'Our Menu',
      subtitle: 'Caribbean flavors with fusion soul',
      categories: {
        entradas: 'Starters',
        fuertes: 'Main Courses',
        arroces: 'Rice Dishes',
        ceviches: 'Ceviches',
        sushi: 'Fusion Sushi',
        vegetariano: 'Vegetarian',
        postres: 'Desserts',
        bebidas: 'Drinks',
      },
      viewFull: 'View full menu',
      popular: 'Popular',
      new: 'New',
    },
    // Location
    location: {
      title: 'Find Us',
      subtitle: 'In the heart of Getsemaní',
      address: 'Calle 29, Getsemaní',
      city: 'Cartagena de Indias, Colombia',
      hours: 'Hours',
      hoursValue: '12:00 PM - 10:00 PM',
      everyday: 'Every day',
      getDirections: 'Get Directions',
    },
    // Reservation
    reservation: {
      title: 'Book Your Table',
      subtitle: 'Secure your gastronomic experience',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      notes: 'Special notes',
      notesPlaceholder: 'Allergies, celebrations, preferences...',
      submit: 'Confirm Reservation',
      whatsapp: 'Prefer WhatsApp?',
      whatsappBtn: 'Book via WhatsApp',
    },
    // Footer
    footer: {
      slogan: 'Local Food & Fusion',
      social: 'Follow Us',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved',
      tip: '10% tip is voluntary',
    },
    // WhatsApp
    whatsapp: {
      message: 'Hello! I would like to make a reservation at Titoté.',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
