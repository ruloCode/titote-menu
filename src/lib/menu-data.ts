export interface MenuItem {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  price: number;
  image?: string;
  popular?: boolean;
  new?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  name: {
    es: string;
    en: string;
  };
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'entradas',
    name: { es: 'Entradas', en: 'Starters' },
    icon: '🥗',
    items: [
      {
        id: 'deshilachado',
        name: { es: 'Deshilachado de Res', en: 'Shredded Beef' },
        description: {
          es: 'Sobrebarriga desmechada sobre patacones de pochocho caribeño, acompañados con hogao de las abuelas y leche de burra',
          en: 'Shredded flank steak on Caribbean plantain patacones, with traditional hogao and house sauce',
        },
        price: 31350,
        popular: true,
      },
      {
        id: 'brocheta-langostinos',
        name: { es: 'Brocheta de Langostinos', en: 'Prawn Skewers' },
        description: {
          es: 'Pincho de langostinos y vegetales bañados en salsa caribeña de maracuyá, acompañado de papa criolla',
          en: 'Prawn and vegetable skewers in Caribbean passion fruit sauce, with native potatoes',
        },
        price: 33000,
      },
      {
        id: 'canastilla-camaron',
        name: {
          es: 'Canastilla Plátano y Cóctel de Camarón',
          en: 'Plantain Basket & Shrimp Cocktail',
        },
        description: {
          es: 'Auténtico cóctel de camarón en canastas de plátano',
          en: 'Authentic shrimp cocktail in plantain baskets',
        },
        price: 33000,
      },
      {
        id: 'anticucho-pollo',
        name: { es: 'Anticucho de Pollo', en: 'Chicken Anticucho' },
        description: {
          es: 'Cubos de pollo marinados en salsa de ají chivato con papa criolla, premix de salsas soja y teriyaki',
          en: 'Marinated chicken cubes in chivato pepper sauce with native potatoes, soy and teriyaki blend',
        },
        price: 27500,
      },
      {
        id: 'bastones-pescado',
        name: { es: 'Bastones de Pescado a la Cerveza', en: 'Beer-Battered Fish Sticks' },
        description: {
          es: 'Pescado de temporada, rebosado con fusión de especias y cerveza de la casa, salsa cóctel ligeramente picante',
          en: 'Seasonal fish, battered with spice blend and house beer, with slightly spicy cocktail sauce',
        },
        price: 30800,
      },
    ],
  },
  {
    id: 'fuertes',
    name: { es: 'Platos Fuertes', en: 'Main Courses' },
    icon: '🍽️',
    items: [
      {
        id: 'pollo-chef',
        name: { es: 'Pollo del Chef', en: "Chef's Chicken" },
        description: {
          es: 'Pechuga de pollo al horno con salsa de tamarindo o corozo de la casa, puré de papa criolla y ensaladilla',
          en: 'Oven-baked chicken breast with house tamarind or corozo sauce, native potato purée and salad',
        },
        price: 44000,
      },
      {
        id: 'encocado-titote',
        name: { es: 'Encocado Titoté', en: 'Titoté Coconut Seafood' },
        description: {
          es: 'Festival de mariscos caribeño en salsa de coco y especias locales, con patacones de pochocho',
          en: 'Caribbean seafood festival in coconut sauce with local spices, served with plantain patacones',
        },
        price: 57200,
        popular: true,
      },
      {
        id: 'filete-mar-caribe',
        name: { es: 'Filete Mar Caribe', en: 'Caribbean Sea Fillet' },
        description: {
          es: 'Filete de róbalo sofrito en aceite de achiote, bañado con mariscos en leche de coco',
          en: 'Sea bass fillet sautéed in achiote oil, topped with seafood in coconut milk',
        },
        price: 57200,
      },
      {
        id: 'posta-titote',
        name: { es: 'Posta Titoté', en: 'Titoté Posta' },
        description: {
          es: 'Posta cartagenera al estilo Titoté en cama de puré de papa criolla con ensalada caribeña',
          en: 'Cartagena-style beef roast Titoté style, on native potato purée with Caribbean salad',
        },
        price: 49500,
        popular: true,
      },
      {
        id: 'lomo-res',
        name: { es: 'Lomo de Res', en: 'Beef Tenderloin' },
        description: {
          es: 'Lomo de res bañado en salsa caribeña de corozo, con puré de arracacha cundiboyacense y ensaladilla',
          en: 'Beef tenderloin in Caribbean corozo sauce, with arracacha purée and salad',
        },
        price: 57200,
      },
      {
        id: 'costillas-bbq',
        name: { es: 'Costillas BBQ', en: 'BBQ Ribs' },
        description: {
          es: 'Costillas de cerdo bañadas en salsa BBQ de tamarindo o corozo, con puré de papa amarilla',
          en: 'Pork ribs in tamarind or corozo BBQ sauce, with yellow potato purée',
        },
        price: 52800,
      },
    ],
  },
  {
    id: 'arroces',
    name: { es: 'Arroces', en: 'Rice Dishes' },
    icon: '🍚',
    items: [
      {
        id: 'arroz-frito-caribe',
        name: { es: 'Arroz Frito Caribe', en: 'Caribbean Fried Rice' },
        description: {
          es: 'Arroz de ají topito salteado al wok con mariscos del mar Caribe, aceite de ajonjolí, cebolla puerro',
          en: 'Topito pepper rice wok-fried with Caribbean seafood, sesame oil, and leeks',
        },
        price: 52800,
        popular: true,
      },
      {
        id: 'arroz-titote-wok',
        name: { es: 'Arroz Titoté al Wok', en: 'Titoté Wok Rice' },
        description: {
          es: 'Auténtico arroz de las abuelas cartageneras salteado con camarón, calamar, mejillones, langostino y pescado',
          en: 'Authentic Cartagena grandmothers rice wok-fried with shrimp, squid, mussels, prawns and fish',
        },
        price: 52800,
      },
      {
        id: 'arroz-cinco-especias',
        name: { es: 'Arroz Cinco Especias', en: 'Five Spice Rice' },
        description: {
          es: 'Arroz blanco de coco, pollo, cerdo, carne de res, vegetales y especias naturales',
          en: 'Coconut white rice with chicken, pork, beef, vegetables and natural spices',
        },
        price: 49500,
      },
    ],
  },
  {
    id: 'ceviches',
    name: { es: 'Ceviches Caribeños', en: 'Caribbean Ceviches' },
    icon: '🦐',
    items: [
      {
        id: 'ceviche-cartagenero',
        name: { es: 'Ceviche Cartagenero', en: 'Cartagena Ceviche' },
        description: {
          es: 'Pescado del día, mango encurtido, cebolla roja, pimentón, aguacate y leche de tigre',
          en: 'Catch of the day, pickled mango, red onion, bell pepper, avocado and tiger milk',
        },
        price: 38500,
        popular: true,
      },
      {
        id: 'ceviche-pescado-casa',
        name: { es: 'Ceviche de Pescado de la Casa', en: 'House Fish Ceviche' },
        description: {
          es: 'Pescado del día sellado, leche de tigre casera, pimentón, cebolla roja y cilantro silvestre',
          en: 'Seared catch of the day, house tiger milk, bell pepper, red onion and wild cilantro',
        },
        price: 38500,
      },
      {
        id: 'ceviche-mixto',
        name: { es: 'Ceviche Mixto', en: 'Mixed Ceviche' },
        description: {
          es: 'Camarón, calamar, mejillones, pescado del día con cebolla roja, leche de tigre y salsa casera Titoté',
          en: 'Shrimp, squid, mussels, catch of the day with red onion, tiger milk and house Titoté sauce',
        },
        price: 51700,
      },
      {
        id: 'ceviche-getsemani',
        name: { es: 'Ceviche Getsemaní', en: 'Getsemaní Ceviche' },
        description: {
          es: 'Camarón, calamar, mejillones, pescado con cilantro, leche de tigre y gotas de salsa Titoté',
          en: 'Shrimp, squid, mussels, fish with cilantro, tiger milk and Titoté sauce drops',
        },
        price: 49500,
        new: true,
      },
    ],
  },
  {
    id: 'sushi',
    name: { es: 'Sushi Fusión', en: 'Fusion Sushi' },
    icon: '🍣',
    items: [
      {
        id: 'sushi-tempura',
        name: { es: 'Sushi Tempura', en: 'Tempura Roll' },
        description: {
          es: 'Rollo crunch apanado con pan cok, relleno de atún maguro, pepino, suero y aguacate de San Jacinto (10 pz)',
          en: 'Crunchy roll breaded with panko, filled with maguro tuna, cucumber, whey and San Jacinto avocado (10 pcs)',
        },
        price: 35200,
      },
      {
        id: 'sushi-platano',
        name: { es: 'Sushi de Plátano Maduro', en: 'Sweet Plantain Roll' },
        description: {
          es: 'Rollo de arroz blanco, rodajas de maduro, pescado frito, aguacate, palmitos y queso crema (10 pz)',
          en: 'White rice roll with sweet plantain, fried fish, avocado, hearts of palm and cream cheese (10 pcs)',
        },
        price: 35200,
        popular: true,
      },
      {
        id: 'sushi-posta',
        name: { es: 'Sushi de Posta Cartagenera', en: 'Cartagena Posta Roll' },
        description: {
          es: 'Rollo de arroz blanco, plátano crujiente, posta casera, aguacate y ensaladilla de la casa (10 pz)',
          en: 'White rice roll with crispy plantain, homemade posta beef, avocado and house salad (10 pcs)',
        },
        price: 33000,
        new: true,
      },
      {
        id: 'sushi-wakame',
        name: { es: 'Sushi Wakame', en: 'Wakame Roll' },
        description: {
          es: 'Rollo de arroz blanco, wakame, queso crema, palmito, aguacate y camarón (10 pz)',
          en: 'White rice roll with wakame, cream cheese, hearts of palm, avocado and shrimp (10 pcs)',
        },
        price: 35200,
      },
    ],
  },
  {
    id: 'vegetariano',
    name: { es: 'Vegetariano', en: 'Vegetarian' },
    icon: '🥬',
    items: [
      {
        id: 'arroz-vegetales',
        name: { es: 'Arroz con Vegetales', en: 'Vegetable Rice' },
        description: {
          es: 'Arroz de coco salteado con vegetales, zuquini, cebolla junca, zanahoria, pimentones, brócoli, quinoa y champiñones',
          en: 'Coconut rice sautéed with vegetables, zucchini, scallions, carrots, peppers, broccoli, quinoa and mushrooms',
        },
        price: 33000,
        vegetarian: true,
      },
      {
        id: 'ensalada-mezclum',
        name: { es: 'Ensalada Mezclum', en: 'Mesclun Salad' },
        description: {
          es: 'Ensaladilla con mezclum orgánico, tomate cherry y vinagreta de maracuyá',
          en: 'Salad with organic mesclun, cherry tomatoes and passion fruit vinaigrette',
        },
        price: 16500,
        vegetarian: true,
      },
      {
        id: 'poke-vegano',
        name: { es: 'Poke Vegano', en: 'Vegan Poke' },
        description: {
          es: 'Deconstrucción de sushi con brócoli o coliflor apanado, wakame, arroz de sushi, edamames y aguacate',
          en: 'Deconstructed sushi with breaded broccoli or cauliflower, wakame, sushi rice, edamame and avocado',
        },
        price: 38500,
        vegetarian: true,
        popular: true,
      },
    ],
  },
  {
    id: 'postres',
    name: { es: 'Postres', en: 'Desserts' },
    icon: '🍰',
    items: [
      {
        id: 'tres-leches',
        name: { es: 'Tres Leches', en: 'Three Milk Cake' },
        description: {
          es: 'Torta esponjosa, bañada en tres tipos de leche de la casa',
          en: 'Sponge cake soaked in three types of house milk',
        },
        price: 15400,
        popular: true,
      },
      {
        id: 'enyucado',
        name: { es: 'Enyucado Cartagenero', en: 'Cartagena Cassava Cake' },
        description: {
          es: 'Enyucado típico caribe, bañado en salsa de corozo',
          en: 'Traditional Caribbean cassava cake with corozo sauce',
        },
        price: 14300,
      },
      {
        id: 'festival-antojos',
        name: { es: 'Festival de Antojos Cartageneros', en: 'Cartagena Sweets Festival' },
        description: {
          es: 'Variedad de dulces típicos cartageneros de la casa',
          en: 'Variety of traditional Cartagena house sweets',
        },
        price: 15400,
      },
    ],
  },
  {
    id: 'bebidas',
    name: { es: 'Bebidas', en: 'Drinks' },
    icon: '🍹',
    items: [
      {
        id: 'fruit-punch',
        name: { es: 'Fruit Punch', en: 'Fruit Punch' },
        description: {
          es: 'Ponche de frutas de temporada (14 oz)',
          en: 'Seasonal fruit punch (14 oz)',
        },
        price: 16000,
      },
      {
        id: 'mojito-virgin',
        name: { es: 'Mojito Virgin', en: 'Virgin Mojito' },
        description: {
          es: 'Cóctel de la casa con agua mineral, hierbabuena y limón (14 oz)',
          en: 'House cocktail with sparkling water, spearmint and lime (14 oz)',
        },
        price: 13000,
      },
      {
        id: 'limonada-coco',
        name: { es: 'Limonada de Coco', en: 'Coconut Lemonade' },
        description: {
          es: 'Limonada de coco de la casa (14 oz)',
          en: 'House coconut lemonade (14 oz)',
        },
        price: 13000,
        popular: true,
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
