import Link from 'next/link';

export default function ProductList() {
  const dynamicProductId = 100;

  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-gray-900">Product List</h1>

      <div className="space-y-3">
        <h2>
          <Link href="/products/1" className="text-lg text-blue-600 hover:underline">
            Product 1
          </Link>
        </h2>

        <h2>
          <Link href="/products/2" className="text-lg text-blue-600 hover:underline">
            Product 2
          </Link>
        </h2>

        <h2>
          <Link href="/products/3" replace className="text-lg text-blue-600 hover:underline">
            Product 3 (with replace prop)
          </Link>
        </h2>

        <h2>
          <Link href={`/products/${dynamicProductId}`} className="text-lg text-blue-600 hover:underline">
            Product {dynamicProductId}
          </Link>
        </h2>
      </div>
    </div>
  );
}