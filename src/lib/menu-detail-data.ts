import type { MenuItemDetail } from './menu-data';

/**
 * Detailed product information for popular menu items.
 * These details are merged with the base menu data when displaying product details.
 */
export const menuItemDetails: Record<string, MenuItemDetail> = {
  // === PLATOS FUERTES ===
  'encocado-titote': {
    ingredients: [
      'Mojarra fresca del día',
      'Leche de coco cartagenera',
      'Ajo, cebolla, cilantro',
      'Arroz con coco',
      'Patacones',
    ],
    allergens: ['fish', 'dairy'],
    preparationTime: 25,
    spiceLevel: 1,
    pairing: 'mojito-corozo',
    portionSize: { es: '1 persona', en: '1 serving' },
    chefNote: {
      es: 'Nuestro plato emblema, inspirado en las recetas de las palenqueras de Cartagena. La leche de coco fresca es el secreto de su sabor único.',
      en: 'Our signature dish, inspired by the recipes of Cartagena palenqueras. Fresh coconut milk is the secret to its unique flavor.',
    },
  },
  'pollo-chef': {
    ingredients: [
      'Pechuga de pollo',
      'Salsa de la casa',
      'Arroz con coco',
      'Ensalada fresca',
      'Plátano maduro',
    ],
    allergens: [],
    preparationTime: 20,
    spiceLevel: 0,
    pairing: 'limonada-coco',
    portionSize: { es: '1 persona', en: '1 serving' },
    chefNote: {
      es: 'Una receta especial del chef que combina los sabores tradicionales del Caribe colombiano.',
      en: "A special chef's recipe combining traditional Colombian Caribbean flavors.",
    },
  },
  'costillas-bbq': {
    ingredients: [
      'Costillas de cerdo',
      'Salsa BBQ artesanal',
      'Papas al horno',
      'Ensalada coleslaw',
      'Mazorca asada',
    ],
    allergens: [],
    preparationTime: 35,
    spiceLevel: 1,
    pairing: 'club-colombia',
    portionSize: { es: '1 persona generosa', en: '1 generous serving' },
    chefNote: {
      es: 'Marinadas por 24 horas en nuestra salsa secreta antes de cocinar a fuego lento.',
      en: 'Marinated for 24 hours in our secret sauce before slow cooking.',
    },
  },
  'lomo-res': {
    ingredients: [
      'Lomo de res premium',
      'Chimichurri artesanal',
      'Papas criollas',
      'Vegetales grillados',
    ],
    allergens: [],
    preparationTime: 30,
    spiceLevel: 0,
    pairing: 'vino-vascos-malbec',
    portionSize: { es: '300g', en: '10.5 oz' },
    chefNote: {
      es: 'Corte premium servido al punto deseado, acompañado de nuestro chimichurri de la casa.',
      en: 'Premium cut served to your preferred doneness, accompanied by our house chimichurri.',
    },
  },

  // === CEVICHES ===
  'ceviche-cartagenero': {
    ingredients: [
      'Camarones frescos',
      'Pulpo',
      'Calamar',
      'Limón criollo',
      'Ají dulce',
      'Cebolla morada',
      'Cilantro',
    ],
    allergens: ['shellfish'],
    preparationTime: 15,
    spiceLevel: 2,
    pairing: 'pasion-caribe',
    portionSize: { es: '1 persona', en: '1 serving' },
    chefNote: {
      es: 'Receta tradicional de los pescadores de La Boquilla, con el toque picante del ají cartagenero.',
      en: 'Traditional recipe from La Boquilla fishermen, with the spicy touch of Cartagena ají.',
    },
  },

  // === ARROCES ===
  'arroz-frito-caribe': {
    ingredients: [
      'Arroz jazmín',
      'Camarones',
      'Langostinos',
      'Calamar',
      'Vegetales salteados',
      'Salsa de soya',
      'Jengibre',
    ],
    allergens: ['shellfish', 'soy'],
    preparationTime: 20,
    spiceLevel: 1,
    pairing: 'mojito-maracuya',
    portionSize: { es: '2 personas', en: '2 servings' },
    chefNote: {
      es: 'Fusión caribeña-asiática con mariscos frescos del día.',
      en: 'Caribbean-Asian fusion with fresh daily seafood.',
    },
  },

  // === ENTRADAS ===
  'deditos-yuca': {
    ingredients: ['Yuca fresca', 'Sal marina', 'Aceite de girasol', 'Suero costeño'],
    allergens: ['dairy'],
    preparationTime: 12,
    spiceLevel: 0,
    portionSize: { es: '6 unidades', en: '6 pieces' },
    chefNote: {
      es: 'Yuca seleccionada de los cultivos del Sinú, frita hasta la perfección.',
      en: 'Selected yuca from Sinú farms, fried to perfection.',
    },
  },
  'alitas-bbq': {
    ingredients: ['Alitas de pollo', 'Salsa BBQ Titoté', 'Ajonjolí', 'Cebollín'],
    allergens: ['sesame'],
    preparationTime: 18,
    spiceLevel: 1,
    pairing: 'club-colombia',
    portionSize: { es: '6 o 12 unidades', en: '6 or 12 pieces' },
    chefNote: {
      es: 'Bañadas en nuestra salsa BBQ ahumada especial con un toque de panela.',
      en: 'Coated in our special smoked BBQ sauce with a touch of panela.',
    },
  },

  // === CÓCTELES ===
  'mojito-corozo': {
    ingredients: [
      'Ron blanco premium',
      'Jarabe de corozo',
      'Hierbabuena fresca',
      'Lima',
      'Agua con gas',
    ],
    allergens: [],
    preparationTime: 5,
    spiceLevel: 0,
    portionSize: { es: '350ml', en: '12 oz' },
    chefNote: {
      es: 'Nuestra versión caribeña del clásico mojito, con el dulzor natural del corozo.',
      en: 'Our Caribbean twist on the classic mojito, with the natural sweetness of corozo.',
    },
  },
  'sex-titote': {
    ingredients: [
      'Vodka premium',
      'Licor de durazno',
      'Jugo de naranja',
      'Jugo de arándano',
      'Granadina',
    ],
    allergens: [],
    preparationTime: 5,
    spiceLevel: 0,
    portionSize: { es: '300ml', en: '10 oz' },
    chefNote: {
      es: 'El cóctel signature de la casa, refrescante y tropical.',
      en: 'The house signature cocktail, refreshing and tropical.',
    },
  },

  // === SUSHI ===
  'sushi-platano-maduro': {
    ingredients: [
      'Arroz de sushi',
      'Plátano maduro caramelizado',
      'Queso crema',
      'Camarón tempura',
      'Salsa de tamarindo',
    ],
    allergens: ['shellfish', 'dairy', 'gluten'],
    preparationTime: 15,
    spiceLevel: 0,
    portionSize: { es: '8 piezas', en: '8 pieces' },
    chefNote: {
      es: 'Fusión única que combina el sushi japonés con el sabor dulce del plátano caribeño.',
      en: 'Unique fusion combining Japanese sushi with the sweet flavor of Caribbean plantain.',
    },
  },

  // === POSTRES ===
  'tres-leches': {
    ingredients: [
      'Bizcocho esponjoso',
      'Leche condensada',
      'Leche evaporada',
      'Crema de leche',
      'Canela',
    ],
    allergens: ['dairy', 'gluten', 'eggs'],
    preparationTime: 5,
    spiceLevel: 0,
    portionSize: { es: '1 porción', en: '1 slice' },
    chefNote: {
      es: 'Receta de la abuela del chef, suave y húmedo como debe ser.',
      en: "Chef's grandmother's recipe, soft and moist as it should be.",
    },
  },
};

/**
 * Allergen display information with icons and translations
 */
export const allergenInfo: Record<string, { icon: string; es: string; en: string }> = {
  fish: { icon: '🐟', es: 'Pescado', en: 'Fish' },
  dairy: { icon: '🥛', es: 'Lácteos', en: 'Dairy' },
  shellfish: { icon: '🦐', es: 'Mariscos', en: 'Shellfish' },
  gluten: { icon: '🌾', es: 'Gluten', en: 'Gluten' },
  eggs: { icon: '🥚', es: 'Huevos', en: 'Eggs' },
  nuts: { icon: '🥜', es: 'Frutos secos', en: 'Nuts' },
  soy: { icon: '🫘', es: 'Soya', en: 'Soy' },
  sesame: { icon: '🌿', es: 'Sésamo', en: 'Sesame' },
};

/**
 * Get the detail data for a menu item, if available
 */
export function getMenuItemDetail(itemId: string): MenuItemDetail | undefined {
  return menuItemDetails[itemId];
}

/**
 * Get allergen display info
 */
export function getAllergenDisplay(
  allergenKey: string
): { icon: string; es: string; en: string } | undefined {
  return allergenInfo[allergenKey];
}
