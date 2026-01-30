export interface MenuItemVariant {
  label: string;
  price: number;
}

export interface MenuItemDetail {
  ingredients: string[];
  allergens: string[];
  preparationTime: number;
  spiceLevel?: 0 | 1 | 2 | 3;
  pairing?: string;
  portionSize?: { es: string; en: string };
  chefNote?: { es: string; en: string };
}

export interface MenuItem {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description?: {
    es: string;
    en: string;
  };
  price?: number;
  variants?: MenuItemVariant[];
  image?: string;
  popular?: boolean;
  new?: boolean;
  vegetarian?: boolean;
  detail?: MenuItemDetail;
}

export interface MenuCategory {
  id: string;
  name: {
    es: string;
    en: string;
  };
  icon: string;
  accentColor: string;
  image?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'entradas',
    name: { es: 'Entradas', en: 'Starters' },
    icon: '🥗',
    accentColor: '#E85D3B',
    image: '/images/menu/entradas.png',
    items: [
      {
        id: 'deditos-yuca',
        name: { es: 'Deditos de Yuca', en: 'Yuca Fingers' },
        description: {
          es: 'Deliciosos deditos de yuca frita crujiente',
          en: 'Delicious crispy fried yuca fingers',
        },
        price: 12000,
        popular: true,
        image: '/images/menu/items/deditos-yuca.png',
      },
      {
        id: 'boli-piedras',
        name: { es: 'Boli de las Piedras', en: 'Piedras Boli' },
        description: {
          es: 'Tradicional boli cartagenero',
          en: 'Traditional Cartagena boli',
        },
        price: 10000,
        image: '/images/menu/items/boli-piedras.png',
      },
      {
        id: 'ensaladilla',
        name: { es: 'Ensaladilla', en: 'House Salad' },
        description: {
          es: 'Ensalada fresca de la casa',
          en: 'Fresh house salad',
        },
        price: 14000,
        image: '/images/menu/items/ensaladilla.png',
      },
      {
        id: 'aros-bbq',
        name: { es: 'Aros BBQ', en: 'BBQ Rings' },
        description: {
          es: 'Aros de cebolla con salsa BBQ',
          en: 'Onion rings with BBQ sauce',
        },
        price: 15000,
        image: '/images/menu/items/aros-bbq.png',
      },
      {
        id: 'alitas-bbq',
        name: { es: 'Alitas BBQ', en: 'BBQ Wings' },
        description: {
          es: 'Alitas de pollo en salsa BBQ',
          en: 'Chicken wings in BBQ sauce',
        },
        variants: [
          { label: 'x6', price: 28000 },
          { label: 'x12', price: 48000 },
        ],
        popular: true,
        image: '/images/menu/items/alitas-bbq.png',
      },
      {
        id: 'deslactosado-res',
        name: { es: 'Deslactosado de Res', en: 'Flank Steak' },
        description: {
          es: 'Deliciosa preparación de res',
          en: 'Delicious beef preparation',
        },
        price: 32000,
        image: '/images/menu/items/deslactosado-res.png',
      },
      {
        id: 'brocheta-langostinos',
        name: { es: 'Brocheta de Langostinos', en: 'Prawn Skewers' },
        description: {
          es: 'Langostinos a la parrilla',
          en: 'Grilled prawns',
        },
        price: 38000,
        image: '/images/menu/items/brocheta-langostinos.png',
      },
      {
        id: 'canutillos-platano',
        name: {
          es: 'Canutillos de Plátano con Cóctel de Camarones',
          en: 'Plantain Fingers with Shrimp Cocktail',
        },
        description: {
          es: 'Tradicional entrada costeña',
          en: 'Traditional coastal starter',
        },
        price: 32000,
        image: '/images/menu/items/canutillos-platano.png',
      },
      {
        id: 'anticucho-pollo',
        name: { es: 'Anticucho de Pollo', en: 'Chicken Anticucho' },
        description: {
          es: 'Brochetas de pollo marinado',
          en: 'Marinated chicken skewers',
        },
        price: 18000,
        image: '/images/menu/items/anticucho-pollo.png',
      },
      {
        id: 'chicharron-pescado',
        name: { es: 'Chicharrón de Pescado a la Cerveza', en: 'Beer Fish Sticks' },
        description: {
          es: 'Pescado frito crocante',
          en: 'Crispy fried fish',
        },
        price: 26000,
        image: '/images/menu/items/chicharron-pescado.png',
      },
    ],
  },
  {
    id: 'fuertes',
    name: { es: 'Platos Fuertes', en: 'Main Courses' },
    icon: '🍽️',
    accentColor: '#D4553A',
    image: '/images/menu/platos-fuertes.png',
    items: [
      {
        id: 'pollo-chef',
        name: { es: 'Pollo del Chef', en: "Chef's Chicken" },
        description: {
          es: 'Pollo preparado al estilo del chef con guarnición',
          en: 'Chef-style chicken with side dishes',
        },
        price: 48000,
        popular: true,
        image: '/images/menu/items/pollo-chef.png',
      },
      {
        id: 'encocado-titote',
        name: { es: 'Encocado Titoté', en: 'Titoté Coconut Fish' },
        description: {
          es: 'Pescado en salsa de coco al estilo cartagenero',
          en: 'Fish in Cartagena-style coconut sauce',
        },
        price: 54000,
        popular: true,
        image: '/images/menu/items/encocado-titote.png',
      },
      {
        id: 'filete-mar-caribe',
        name: { es: 'Filete Mar Caribe', en: 'Caribbean Sea Fillet' },
        description: {
          es: 'Filete de pescado con sabores del Caribe',
          en: 'Fish fillet with Caribbean flavors',
        },
        price: 48000,
        image: '/images/menu/items/filete-mar-caribe.png',
      },
      {
        id: 'posta-titote',
        name: { es: 'Posta Titoté', en: 'Titoté Posta' },
        description: {
          es: 'Tradicional posta cartagenera',
          en: 'Traditional Cartagena posta',
        },
        price: 38000,
        image: '/images/menu/items/posta-titote.png',
      },
      {
        id: 'ensalada-titote',
        name: { es: 'Ensalada Titoté de la Casa', en: 'House Titoté Salad' },
        description: {
          es: 'Ensalada fresca con ingredientes locales',
          en: 'Fresh salad with local ingredients',
        },
        price: 48000,
        vegetarian: true,
        image: '/images/menu/items/ensalada-titote.png',
      },
      {
        id: 'ensalada-cesar',
        name: { es: 'Ensalada César de la Casa', en: 'House Caesar Salad' },
        description: {
          es: 'Clásica ensalada césar',
          en: 'Classic Caesar salad',
        },
        price: 42000,
        image: '/images/menu/items/ensalada-cesar.png',
      },
      {
        id: 'lomo-res',
        name: { es: 'Lomo de Res', en: 'Beef Tenderloin' },
        description: {
          es: 'Lomo de res a la parrilla',
          en: 'Grilled beef tenderloin',
        },
        price: 55000,
        image: '/images/menu/items/lomo-res.png',
      },
      {
        id: 'costillas-bbq',
        name: { es: 'Costillas BBQ', en: 'BBQ Ribs' },
        description: {
          es: 'Costillas en salsa BBQ',
          en: 'Ribs in BBQ sauce',
        },
        price: 55000,
        popular: true,
        image: '/images/menu/items/costillas-bbq.png',
      },
      {
        id: 'mojarra',
        name: { es: 'Mojarra', en: 'Mojarra' },
        description: {
          es: 'Mojarra frita tradicional',
          en: 'Traditional fried mojarra',
        },
        price: 35000,
        image: '/images/menu/items/mojarra.png',
      },
      {
        id: 'pesca-marinera',
        name: { es: 'Pesca Marinera', en: 'Seafood Catch' },
        description: {
          es: 'Pescado con mariscos',
          en: 'Fish with seafood',
        },
        price: 55000,
        image: '/images/menu/items/pesca-marinera.png',
      },
    ],
  },
  {
    id: 'arroces',
    name: { es: 'Arroces', en: 'Rice Dishes' },
    icon: '🍚',
    accentColor: '#F59E0B',
    image: '/images/menu/arroces.png',
    items: [
      {
        id: 'arroz-frito-caribe',
        name: { es: 'Arroz Frito Caribe', en: 'Caribbean Fried Rice' },
        description: {
          es: 'Arroz frito con sabores caribeños y mariscos',
          en: 'Fried rice with Caribbean flavors and seafood',
        },
        price: 55000,
        popular: true,
        image: '/images/menu/items/arroz-frito-caribe.png',
      },
      {
        id: 'arroz-titote-wok',
        name: { es: 'Arroz Titoté al Wok', en: 'Wok Titoté Rice' },
        description: {
          es: 'Arroz salteado al wok estilo Titoté',
          en: 'Titoté-style wok rice',
        },
        price: 48000,
        image: '/images/menu/items/arroz-titote-wok.png',
      },
      {
        id: 'arroz-chino-vegetales',
        name: { es: 'Arroz Chino Vegetales', en: 'Five Spice Rice' },
        description: {
          es: 'Arroz chino con vegetales frescos',
          en: 'Chinese rice with fresh vegetables',
        },
        price: 48000,
        vegetarian: true,
        image: '/images/menu/items/arroz-chino-vegetales.png',
      },
    ],
  },
  {
    id: 'ceviches',
    name: { es: 'Ceviches Caribes', en: 'Caribbean Ceviches' },
    icon: '🦐',
    accentColor: '#0891B2',
    image: '/images/menu/ceviches.png',
    items: [
      {
        id: 'ceviche-cartagenero',
        name: { es: 'Ceviche Cartagenero', en: 'Cartagena Ceviche' },
        description: {
          es: 'Ceviche tradicional de Cartagena',
          en: 'Traditional Cartagena ceviche',
        },
        price: 28000,
        popular: true,
        image: '/images/menu/items/ceviche-cartagenero.png',
      },
      {
        id: 'ceviche-pescado-casa',
        name: { es: 'Ceviche de Pescado de la Casa', en: 'House Fish Ceviche' },
        description: {
          es: 'Ceviche fresco de pescado',
          en: 'Fresh fish ceviche',
        },
        price: 28000,
        image: '/images/menu/items/ceviche-pescado-casa.png',
      },
      {
        id: 'ceviche-mixto',
        name: { es: 'Ceviche Mixto', en: 'Mixed Ceviche' },
        description: {
          es: 'Combinación de mariscos y pescado',
          en: 'Seafood and fish combination',
        },
        price: 36000,
        image: '/images/menu/items/ceviche-mixto.png',
      },
      {
        id: 'ceviche-gotenami',
        name: { es: 'Ceviche Gotenami', en: 'Gotenami Ceviche' },
        description: {
          es: 'Ceviche estilo fusión',
          en: 'Fusion-style ceviche',
        },
        price: 48000,
        new: true,
        image: '/images/menu/items/ceviche-gotenami.png',
      },
    ],
  },
  {
    id: 'sushi',
    name: { es: 'Sushi Fusión', en: 'Fusion Sushi' },
    icon: '🍣',
    accentColor: '#8B5CF6',
    image: '/images/menu/sushi.png',
    items: [
      {
        id: 'sushi-tempura',
        name: { es: 'Sushi Tempura', en: 'Tempura Sushi' },
        description: {
          es: 'Roll tempura (8 piezas)',
          en: 'Tempura roll (8 pieces)',
        },
        price: 28000,
        image: '/images/menu/items/sushi-tempura.png',
      },
      {
        id: 'sushi-platano-maduro',
        name: { es: 'Sushi de Plátano Maduro', en: 'Ripe Banana Sushi' },
        description: {
          es: 'Roll con plátano maduro (8 piezas)',
          en: 'Roll with ripe plantain (8 pieces)',
        },
        price: 24000,
        popular: true,
        image: '/images/menu/items/sushi-platano-maduro.png',
      },
      {
        id: 'sushi-posta-cartagenera',
        name: { es: 'Sushi de Posta Cartagenera', en: 'Cartagena Posta Sushi' },
        description: {
          es: 'Roll con posta tradicional (8 piezas)',
          en: 'Roll with traditional posta (8 pieces)',
        },
        price: 32000,
        new: true,
        image: '/images/menu/items/sushi-posta-cartagenera.png',
      },
      {
        id: 'sushi-volcanes',
        name: { es: 'Sushi Volcanes', en: 'Volcano Sushi' },
        description: {
          es: 'Volcanes de sushi (8 piezas)',
          en: 'Sushi volcanos (8 pieces)',
        },
        price: 28000,
        image: '/images/menu/items/sushi-volcanes.png',
      },
    ],
  },
  {
    id: 'cocteles',
    name: { es: 'Cócteles de la Casa', en: 'House Cocktails' },
    icon: '🍹',
    accentColor: '#EC4899',
    image: '/images/menu/cocteles.png',
    items: [
      {
        id: 'pasion-caribe',
        name: { es: 'Pasión Caribe', en: 'Caribbean Passion' },
        description: {
          es: 'Cóctel tropical con maracuyá',
          en: 'Tropical cocktail with passion fruit',
        },
        price: 29000,
        image: '/images/menu/items/pasion-caribe.png',
      },
      {
        id: 'sex-titote',
        name: { es: 'Sex Titoté de la Casa', en: 'House Sex Titoté' },
        description: {
          es: 'Cóctel signature de la casa',
          en: 'House signature cocktail',
        },
        price: 28000,
        popular: true,
        image: '/images/menu/items/sex-titote.png',
      },
      {
        id: 'mojito-corozo',
        name: { es: 'Mojito Corozo', en: 'Corozo Mojito' },
        description: {
          es: 'Mojito con frutas de corozo',
          en: 'Mojito with corozo fruits',
        },
        price: 30000,
        popular: true,
        image: '/images/menu/items/mojito-corozo.png',
      },
      {
        id: 'mojito-maracuya',
        name: { es: 'Mojito de Maracuyá', en: 'Passion Fruit Mojito' },
        description: {
          es: 'Mojito con maracuyá fresca',
          en: 'Mojito with fresh passion fruit',
        },
        price: 28000,
        image: '/images/menu/items/mojito-maracuya.png',
      },
      {
        id: 'appletini-mule',
        name: { es: 'Appletini Mule', en: 'Appletini Mule' },
        description: {
          es: 'Fusión de appletini y moscow mule',
          en: 'Appletini and moscow mule fusion',
        },
        price: 35000,
        new: true,
        image: '/images/menu/items/appletini-mule.png',
      },
      {
        id: 'daikiri-tropical',
        name: { es: 'Daikiri Tropical Coconut', en: 'Tropical Coconut Daiquiri' },
        description: {
          es: 'Daiquiri con coco tropical',
          en: 'Daiquiri with tropical coconut',
        },
        price: 35000,
        image: '/images/menu/items/daikiri-tropical.png',
      },
    ],
  },
  {
    id: 'famosos',
    name: { es: 'Famosos', en: 'Famous Drinks' },
    icon: '🥃',
    accentColor: '#A855F7',
    image: '/images/menu/famosos.png',
    items: [
      {
        id: 'gin-tonic',
        name: { es: 'Gin Tonic Tradicional', en: 'Traditional Gin Tonic' },
        description: {
          es: 'Gin tonic clásico con limón, pepino y especias',
          en: 'Classic gin tonic with lemon, cucumber and spices',
        },
        price: 29000,
        popular: true,
        image: '/images/menu/items/gin-tonic.png',
      },
      {
        id: 'caipirinha',
        name: { es: 'Caipirinha', en: 'Caipirinha' },
        description: {
          es: 'Clásica brasileña',
          en: 'Brazilian classic',
        },
        price: 28000,
        image: '/images/menu/items/caipirinha.png',
      },
      {
        id: 'mojito-tradicional',
        name: { es: 'Mojito Tradicional', en: 'Traditional Mojito' },
        description: {
          es: 'Mojito cubano clásico',
          en: 'Classic Cuban mojito',
        },
        price: 25000,
        image: '/images/menu/items/mojito-tradicional.png',
      },
      {
        id: 'margarita',
        name: { es: 'Margarita', en: 'Margarita' },
        description: {
          es: 'Clásica mexicana',
          en: 'Mexican classic',
        },
        price: 28000,
        image: '/images/menu/items/margarita.png',
      },
      {
        id: 'pina-colada',
        name: { es: 'Piña Colada', en: 'Piña Colada' },
        description: {
          es: 'Tropical con coco',
          en: 'Tropical with coconut',
        },
        price: 28000,
        image: '/images/menu/items/pina-colada.png',
      },
      {
        id: 'fruit-punch',
        name: { es: 'Fruit Punch', en: 'Fruit Punch' },
        description: {
          es: 'Ponche de frutas',
          en: 'Fruit punch',
        },
        price: 15000,
        image: '/images/menu/items/fruit-punch.png',
      },
      {
        id: 'virgin-cocktail',
        name: { es: 'Alcohol Virgin', en: 'Virgin Cocktail' },
        description: {
          es: 'Sin alcohol',
          en: 'Alcohol-free',
        },
        price: 12000,
        image: '/images/menu/items/virgin-cocktail.png',
      },
    ],
  },
  {
    id: 'infantil',
    name: { es: 'Menú Infantil', en: "Kids' Menu" },
    icon: '👶',
    accentColor: '#F472B6',
    image: '/images/menu/infantil.png',
    items: [
      {
        id: 'croquetas-junior',
        name: { es: 'Croquetas Junior', en: 'Junior Croquettes' },
        description: {
          es: 'Croquetas para niños',
          en: 'Croquettes for kids',
        },
        price: 15000,
        image: '/images/menu/items/croquetas-junior.png',
      },
    ],
  },
  {
    id: 'vegetariano',
    name: { es: 'Vegetariano', en: 'Vegetarian' },
    icon: '🥬',
    accentColor: '#22C55E',
    image: '/images/menu/vegetariano.png',
    items: [
      {
        id: 'arroz-vegetales',
        name: { es: 'Arroz con Vegetales', en: 'Rice with Veggies' },
        description: {
          es: 'Arroz salteado con vegetales frescos',
          en: 'Rice sautéed with fresh vegetables',
        },
        price: 30000,
        vegetarian: true,
        image: '/images/menu/items/arroz-vegetales.png',
      },
      {
        id: 'pollo-vegano',
        name: { es: 'Pollo Vegano', en: 'Vegan Chicken' },
        description: {
          es: 'Opción vegana tipo pollo',
          en: 'Vegan chicken-style option',
        },
        price: 48000,
        vegetarian: true,
        popular: true,
        image: '/images/menu/items/pollo-vegano.png',
      },
      {
        id: 'ensalada-mexicana',
        name: { es: 'Ensalada Mexicana', en: 'Mexican Salad' },
        description: {
          es: 'Ensalada fresca estilo mexicano',
          en: 'Fresh Mexican-style salad',
        },
        price: 35000,
        vegetarian: true,
        image: '/images/menu/items/ensalada-mexicana.png',
      },
      {
        id: 'envuelto-vegetariano',
        name: { es: 'Envuelto Cartagenero Vegetariano', en: 'Vegetarian Caribbean Wrap' },
        description: {
          es: 'Envuelto tradicional en versión vegetariana',
          en: 'Traditional wrap in vegetarian version',
        },
        price: 35000,
        vegetarian: true,
        image: '/images/menu/items/envuelto-vegetariano.png',
      },
    ],
  },
  {
    id: 'postres',
    name: { es: 'Postres', en: 'Desserts' },
    icon: '🍰',
    accentColor: '#F97316',
    image: '/images/menu/postres.png',
    items: [
      {
        id: 'tres-leches',
        name: { es: 'Tres Leches', en: 'Three Milks' },
        description: {
          es: 'Pastel clásico de tres leches',
          en: 'Classic three-milk cake',
        },
        price: 15000,
        popular: true,
        image: '/images/menu/items/tres-leches.png',
      },
      {
        id: 'helado-cartagenero',
        name: { es: 'Porción de Helado Cartagenero', en: 'Cartagena Ice Cream' },
        description: {
          es: 'Helado cartagenero, festival tirulipa',
          en: 'Cartagena ice cream, tirulipa festival',
        },
        price: 18000,
        image: '/images/menu/items/helado-cartagenero.png',
      },
    ],
  },
  {
    id: 'bebidas',
    name: { es: 'Bebidas sin Licor', en: 'Non-Alcoholic Drinks' },
    icon: '🥤',
    accentColor: '#06B6D4',
    image: '/images/menu/bebidas.png',
    items: [
      {
        id: 'agua',
        name: { es: 'Agua', en: 'Water' },
        price: 5000,
        image: '/images/menu/items/agua.png',
      },
      {
        id: 'agua-gas',
        name: { es: 'Agua con Gas', en: 'Sparkling Water' },
        price: 7000,
        image: '/images/menu/items/agua-gas.png',
      },
      {
        id: 'jugos-naturales',
        name: { es: 'Jugos Naturales', en: 'Natural Juices' },
        description: {
          es: 'Jugos de frutas frescas',
          en: 'Fresh fruit juices',
        },
        price: 10000,
        image: '/images/menu/items/jugos-naturales.png',
      },
      {
        id: 'limonada',
        name: { es: 'Limonada', en: 'Lemonade' },
        price: 8000,
        image: '/images/menu/items/limonada.png',
      },
      {
        id: 'limonada-coco',
        name: { es: 'Limonada de Coco', en: 'Coconut Lemonade' },
        description: {
          es: 'Limonada con coco fresco',
          en: 'Lemonade with fresh coconut',
        },
        price: 12000,
        popular: true,
        image: '/images/menu/items/limonada-coco.png',
      },
    ],
  },
  {
    id: 'vinos',
    name: { es: 'Vinos', en: 'Wines' },
    icon: '🍷',
    accentColor: '#991B1B',
    image: '/images/menu/vinos.png',
    items: [
      {
        id: 'vino-casa-blanco',
        name: { es: 'Vino de la Casa Blanco', en: 'House White Wine' },
        price: 17000,
        image: '/images/menu/items/vino-casa-blanco.png',
      },
      {
        id: 'vino-fuente-tinto',
        name: { es: 'Vino de la Fuente Tinto Merlot', en: 'Fuente Red Merlot' },
        price: 17000,
        image: '/images/menu/items/vino-fuente-tinto.png',
      },
      {
        id: 'vino-vascos-malbec',
        name: { es: 'Vino Los Vascos Tinto Malbec', en: 'Los Vascos Malbec' },
        description: {
          es: 'Botella',
          en: 'Bottle',
        },
        price: 116000,
        image: '/images/menu/items/vino-vascos-malbec.png',
      },
      {
        id: 'vino-walker',
        name: { es: 'Vista The Walker Treviso Cotes Malbec', en: 'Walker Treviso Malbec' },
        price: 106000,
        image: '/images/menu/items/vino-walker.png',
      },
      {
        id: 'rose',
        name: { es: 'Rosé', en: 'Rosé' },
        price: 106000,
        image: '/images/menu/items/rose.png',
      },
    ],
  },
  {
    id: 'cervezas',
    name: { es: 'Cervezas', en: 'Beers' },
    icon: '🍺',
    accentColor: '#CA8A04',
    image: '/images/menu/cervezas.png',
    items: [
      {
        id: 'aguila',
        name: { es: 'Águila', en: 'Águila' },
        price: 9000,
        image: '/images/menu/items/aguila.png',
      },
      {
        id: 'aguila-light',
        name: { es: 'Águila Light', en: 'Águila Light' },
        price: 9000,
        image: '/images/menu/items/aguila-light.png',
      },
      {
        id: 'club-colombia',
        name: { es: 'Club Colombia', en: 'Club Colombia' },
        price: 11000,
        popular: true,
        image: '/images/menu/items/club-colombia.png',
      },
      {
        id: 'poker',
        name: { es: 'Poker', en: 'Poker' },
        price: 8000,
        image: '/images/menu/items/poker.png',
      },
      {
        id: 'costena',
        name: { es: 'Costeña', en: 'Costeña' },
        price: 8000,
        image: '/images/menu/items/costena.png',
      },
      {
        id: 'artesanales',
        name: { es: 'Artesanales', en: 'Craft Beers' },
        description: {
          es: 'Cervezas artesanales locales',
          en: 'Local craft beers',
        },
        price: 12000,
        image: '/images/menu/items/artesanales.png',
      },
      {
        id: 'heineken',
        name: { es: 'Heineken', en: 'Heineken' },
        price: 15000,
        image: '/images/menu/items/heineken.png',
      },
      {
        id: 'corona',
        name: { es: 'Corona', en: 'Corona' },
        price: 14000,
        image: '/images/menu/items/corona.png',
      },
      {
        id: 'budweiser',
        name: { es: 'Budweiser', en: 'Budweiser' },
        price: 14000,
        image: '/images/menu/items/budweiser.png',
      },
    ],
  },
  {
    id: 'licores',
    name: { es: 'Licores', en: 'Spirits' },
    icon: '🥃',
    accentColor: '#78350F',
    image: '/images/menu/licores.png',
    items: [
      {
        id: 'johnnie-walker',
        name: { es: 'Johnnie Walker', en: 'Johnnie Walker' },
        variants: [
          { label: 'Trago', price: 12000 },
          { label: 'Botella', price: 140000 },
        ],
        image: '/images/menu/items/johnnie-walker.png',
      },
      {
        id: 'ron-medellin',
        name: { es: 'Ron Medellín', en: 'Ron Medellín' },
        price: 75000,
        description: {
          es: 'Botella',
          en: 'Bottle',
        },
        image: '/images/menu/items/ron-medellin.png',
      },
      {
        id: 'buchanans',
        name: { es: 'Whisky Buchanans', en: 'Buchanans Whisky' },
        price: 295000,
        description: {
          es: 'Botella Premium',
          en: 'Premium Bottle',
        },
        popular: true,
        image: '/images/menu/items/buchanans.png',
      },
      {
        id: 'jose-cuervo',
        name: { es: 'Jose Cuervo', en: 'Jose Cuervo' },
        variants: [
          { label: 'Trago', price: 10000 },
          { label: 'Botella', price: 105000 },
        ],
        image: '/images/menu/items/jose-cuervo.png',
      },
      {
        id: 'gin-tanqueray',
        name: { es: 'Gin Tanqueray', en: 'Tanqueray Gin' },
        variants: [
          { label: 'Trago', price: 10000 },
          { label: 'Botella', price: 95000 },
        ],
        image: '/images/menu/items/gin-tanqueray.png',
      },
      {
        id: 'gin-hendricks',
        name: { es: 'Gin Hendricks', en: 'Hendricks Gin' },
        price: 22000,
        description: {
          es: 'Por trago',
          en: 'Per drink',
        },
        image: '/images/menu/items/gin-hendricks.png',
      },
      {
        id: 'ron-zacapa',
        name: { es: 'Ron Zacapa', en: 'Ron Zacapa' },
        price: 200000,
        description: {
          es: 'Botella Premium',
          en: 'Premium Bottle',
        },
        image: '/images/menu/items/ron-zacapa.png',
      },
      {
        id: 'ron-havana',
        name: { es: 'Ron Havana', en: 'Havana Rum' },
        price: 200000,
        description: {
          es: 'Botella',
          en: 'Bottle',
        },
        image: '/images/menu/items/ron-havana.png',
      },
      {
        id: 'ron-hechicera',
        name: { es: 'Ron La Hechicera', en: 'La Hechicera Rum' },
        price: 200000,
        description: {
          es: 'Botella Premium Colombiana',
          en: 'Premium Colombian Bottle',
        },
        popular: true,
        image: '/images/menu/items/ron-hechicera.png',
      },
    ],
  },
];

// Utility to get max price from menu
export function getMaxPrice(): number {
  let max = 0;
  menuData.forEach(category => {
    category.items.forEach(item => {
      if (item.price && item.price > max) max = item.price;
      if (item.variants) {
        item.variants.forEach(v => {
          if (v.price > max) max = v.price;
        });
      }
    });
  });
  return max;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function searchMenu(query: string, categories: MenuCategory[]): MenuCategory[] {
  if (!query.trim()) return categories;

  const searchTerm = query.toLowerCase().trim();

  return categories
    .map(category => ({
      ...category,
      items: category.items.filter(item => {
        const nameMatch =
          item.name.es.toLowerCase().includes(searchTerm) ||
          item.name.en.toLowerCase().includes(searchTerm);
        const descMatch =
          item.description?.es.toLowerCase().includes(searchTerm) ||
          item.description?.en.toLowerCase().includes(searchTerm);
        return nameMatch || descMatch;
      }),
    }))
    .filter(category => category.items.length > 0);
}

export function getCategoryById(id: string): MenuCategory | undefined {
  return menuData.find(cat => cat.id === id);
}

export function getMenuItemById(
  id: string
): { item: MenuItem; category: MenuCategory } | undefined {
  for (const category of menuData) {
    const item = category.items.find(i => i.id === id);
    if (item) {
      return { item, category };
    }
  }
  return undefined;
}
