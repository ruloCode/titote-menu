export type Locale = 'es' | 'en';

export interface TranslationKeys {
  nav: {
    home: string;
    menu: string;
    about: string;
    location: string;
    reserve: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    badge: string;
    title: string;
    titleHighlight: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    feature1: string;
    feature1Desc: string;
    feature2: string;
    feature2Desc: string;
    feature3: string;
    feature3Desc: string;
    label: string;
    whereCaribbean: string;
    meetsOrient: string;
    orient: string;
    reviews: string;
    years: string;
  };
  menu: {
    title: string;
    subtitle: string;
    eyebrow: string;
    categories: {
      entradas: string;
      fuertes: string;
      arroces: string;
      ceviches: string;
      sushi: string;
      vegetariano: string;
      postres: string;
      bebidas: string;
    };
    viewFull: string;
    popular: string;
    new: string;
    filters: {
      title: string;
      popular: string;
      new: string;
      vegetarian: string;
      price: string;
      clearAll: string;
    };
    search: {
      placeholder: string;
      noResults: string;
      noResultsFor: string;
      clearSearch: string;
      trySuggestions: string;
    };
    detail: {
      ingredients: string;
      allergens: string;
      time: string;
      portion: string;
      pairing: string;
      notFound: string;
    };
    results: {
      dish: string;
      dishes: string;
    };
    badges: {
      popular: string;
      vegetarian: string;
      new: string;
    };
  };
  location: {
    title: string;
    subtitle: string;
    address: string;
    city: string;
    hours: string;
    hoursValue: string;
    everyday: string;
    getDirections: string;
  };
  reservation: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    whatsapp: string;
    whatsappBtn: string;
  };
  cta: {
    label: string;
    title: string;
    subtitle: string;
    whatsappButton: string;
    callButton: string;
  };
  footer: {
    slogan: string;
    social: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    tip: string;
    navigation: string;
    hours: string;
    followUs: string;
    tuesdayThursday: string;
    fridaySaturday: string;
    sunday: string;
    monday: string;
    closed: string;
  };
  testimonials: {
    label: string;
    title: string;
    subtitle: string;
    swipeHint: string;
  };
  whatsapp: {
    message: string;
  };
  a11y: {
    clearFilters: string;
    search: string;
    closeSearch: string;
  };
  menuPage: {
    heroTitle: string;
    heroSubtitle: string;
  };
  common: {
    language: string;
  };
}

export const translations: Record<Locale, TranslationKeys> = {
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
      title: 'Sabores Locales',
      titleHighlight: 'Alma Oriental',
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
      label: 'NUESTRA HISTORIA',
      whereCaribbean: 'Donde el Caribe',
      meetsOrient: 'se encuentra con',
      orient: 'Oriente',
      reviews: 'Reseñas',
      years: 'Años',
    },
    // Menu
    menu: {
      title: 'Nuestra Carta',
      subtitle: 'Sabores del Caribe con alma de fusión',
      eyebrow: 'Sabores del Caribe',
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
      filters: {
        title: 'Filtros',
        popular: 'Popular',
        new: 'Nuevo',
        vegetarian: 'Veggie',
        price: 'Precio',
        clearAll: 'Limpiar todo',
      },
      search: {
        placeholder: 'Buscar platos...',
        noResults: 'No encontramos resultados',
        noResultsFor: 'No hay platos que coincidan con',
        clearSearch: 'Limpiar búsqueda',
        trySuggestions: 'Prueba buscando:',
      },
      detail: {
        ingredients: 'Ingredientes',
        allergens: 'Alérgenos',
        time: 'Tiempo',
        portion: 'Porción',
        pairing: 'Maridaje',
        notFound: 'Producto no encontrado',
      },
      results: {
        dish: 'plato',
        dishes: 'platos',
      },
      badges: {
        popular: 'Popular',
        vegetarian: 'Vegetariano',
        new: 'Nuevo',
      },
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
    // CTA Section
    cta: {
      label: 'Reservaciones',
      title: '¿Listo para una experiencia única?',
      subtitle: 'Reserva tu mesa ahora y descubre la fusión perfecta entre el Caribe y Oriente',
      whatsappButton: 'Reservar por WhatsApp',
      callButton: 'Llamar Ahora',
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
      navigation: 'NAVEGACIÓN',
      hours: 'HORARIOS',
      followUs: 'SÍGUENOS',
      tuesdayThursday: 'Martes - Jueves',
      fridaySaturday: 'Viernes - Sábado',
      sunday: 'Domingo',
      monday: 'Lunes',
      closed: 'Cerrado',
    },
    // Testimonials
    testimonials: {
      label: 'RESEÑAS',
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Experiencias auténticas de quienes nos han visitado',
      swipeHint: '← Desliza para ver más →',
    },
    // WhatsApp
    whatsapp: {
      message: '¡Hola! Me gustaría hacer una reserva en Titoté.',
    },
    // Accessibility
    a11y: {
      clearFilters: 'Limpiar filtros',
      search: 'Buscar',
      closeSearch: 'Cerrar búsqueda',
    },
    // Menu Page
    menuPage: {
      heroTitle: 'Nuestro Menú',
      heroSubtitle: 'Sabores del Caribe Colombiano',
    },
    // Common
    common: {
      language: 'Idioma',
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
      title: 'Local Flavors',
      titleHighlight: 'Oriental Soul',
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
      label: 'OUR STORY',
      whereCaribbean: 'Where the Caribbean',
      meetsOrient: 'meets the',
      orient: 'Orient',
      reviews: 'Reviews',
      years: 'Years',
    },
    // Menu
    menu: {
      title: 'Our Menu',
      subtitle: 'Caribbean flavors with fusion soul',
      eyebrow: 'Caribbean Flavors',
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
      filters: {
        title: 'Filters',
        popular: 'Popular',
        new: 'New',
        vegetarian: 'Veggie',
        price: 'Price',
        clearAll: 'Clear all',
      },
      search: {
        placeholder: 'Search dishes...',
        noResults: 'No results found',
        noResultsFor: 'No dishes match',
        clearSearch: 'Clear search',
        trySuggestions: 'Try searching for:',
      },
      detail: {
        ingredients: 'Ingredients',
        allergens: 'Allergens',
        time: 'Time',
        portion: 'Portion',
        pairing: 'Pairing',
        notFound: 'Product not found',
      },
      results: {
        dish: 'dish',
        dishes: 'dishes',
      },
      badges: {
        popular: 'Popular',
        vegetarian: 'Vegetarian',
        new: 'New',
      },
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
    // CTA Section
    cta: {
      label: 'Reservations',
      title: 'Ready for a unique experience?',
      subtitle: 'Book your table now and discover the perfect fusion between the Caribbean and the Orient',
      whatsappButton: 'Book via WhatsApp',
      callButton: 'Call Now',
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
      navigation: 'NAVIGATION',
      hours: 'HOURS',
      followUs: 'FOLLOW US',
      tuesdayThursday: 'Tuesday - Thursday',
      fridaySaturday: 'Friday - Saturday',
      sunday: 'Sunday',
      monday: 'Monday',
      closed: 'Closed',
    },
    // Testimonials
    testimonials: {
      label: 'REVIEWS',
      title: 'What our customers say',
      subtitle: 'Authentic experiences from those who have visited us',
      swipeHint: '← Swipe to see more →',
    },
    // WhatsApp
    whatsapp: {
      message: 'Hello! I would like to make a reservation at Titoté.',
    },
    // Accessibility
    a11y: {
      clearFilters: 'Clear filters',
      search: 'Search',
      closeSearch: 'Close search',
    },
    // Menu Page
    menuPage: {
      heroTitle: 'Our Menu',
      heroSubtitle: 'Flavors of the Colombian Caribbean',
    },
    // Common
    common: {
      language: 'Language',
    },
  },
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
