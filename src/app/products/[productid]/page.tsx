// src/app/products/[productId]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  return {
    title: `Product ${productId} Details`,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;

  return (
    <div className="space-y-4">
      <Link href="/products" className="text-sm font-semibold text-blue-600 hover:underline">
        ← Back to Products List
      </Link>

      <h1 className="text-3xl font-bold text-gray-900">
        Details about Product {productId}
      </h1>
      <p className="text-gray-700">
        Showing information for product ID: <span className="font-mono font-bold text-blue-600">{productId}</span>
      </p>
    </div>
  );
}