import type { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{ productid: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productid } = await params;
  return {
    title: `Product ${productid} Details`,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productid } = await params;

  return (
    <div className="space-y-4">
      <Link href="/products" className="text-sm font-semibold text-blue-600 hover:underline">
        ← Back to Products List
      </Link>

      <h1 className="text-3xl font-bold text-gray-900">
        Details about Product {productid}
      </h1>
      <p className="text-gray-700">
        Showing information for product ID: <span className="font-mono font-bold text-blue-600">{productid}</span>
      </p>
    </div>
  );
}