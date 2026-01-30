import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getMenuItemById } from '@/lib/menu-data';
import { ProductDetail } from '@/components/menu/ProductDetail';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const itemData = getMenuItemById(id);

  if (!itemData) {
    return {
      title: 'Producto no encontrado | Titoté',
    };
  }

  const { item } = itemData;

  return {
    title: `${item.name.es} | Titoté Restaurant`,
    description: item.description?.es || `${item.name.es} - ${item.name.en}`,
    openGraph: {
      title: `${item.name.es} | Titoté Restaurant`,
      description:
        item.description?.es ||
        `Descubre ${item.name.es} en Titoté Restaurant, sabores del Caribe colombiano.`,
      images: item.image ? [{ url: item.image }] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const itemData = getMenuItemById(id);

  if (!itemData) {
    notFound();
  }

  return <ProductDetail itemId={id} isModal={false} />;
}
