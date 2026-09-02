// src/app/products/[productid]/reviews/[reviewId]/page.tsx
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productid: string; reviewId: string }>;
}) {
  const { productid, reviewId } = await params;

  // Simulate an error when reviewId exceeds 1000
  if (parseInt(reviewId) > 1000) {
    throw new Error('Review not found or invalid review ID.');
  }

  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold text-gray-900">Review Details</h1>
      <p className="text-gray-700">
        Review <span className="font-mono font-bold text-blue-600">#{reviewId}</span> for Product{" "}
        <span className="font-mono font-bold text-blue-600">#{productid}</span>
      </p>
    </div>
  );
}