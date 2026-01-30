'use client';

import { use } from 'react';
import { ProductDetail } from '@/components/menu/ProductDetail';

interface ModalPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductModalPage({ params }: ModalPageProps) {
  const { id } = use(params);
  return <ProductDetail itemId={id} isModal={true} />;
}
