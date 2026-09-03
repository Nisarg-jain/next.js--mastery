// src/app/products/[productid]/reviews/[reviewId]/page.tsx
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productid: string; reviewId: string }>;
}) {
  const { productid, reviewId } = await params;

  // Generate a random number: 1 or 2
  const random = Math.floor(Math.random() * 2);

  if (random === 1) {
    throw new Error('Error loading review details. Please retry.');
  }

  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-gray-900">Review Details</h1>
      <p className="text-gray-700">
        Review <span className="font-mono font-bold text-blue-600">#{reviewId}</span> for Product{' '}
        <span className="font-mono font-bold text-blue-600">#{productid}</span>
      </p>
    </div>
  );
}