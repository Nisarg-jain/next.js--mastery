
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productid: string; reviewId: string }>;
}) {
  const { productid, reviewId } = await params;

  // Simulate a slow network response (2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2000));

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