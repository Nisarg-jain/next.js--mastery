async function getReviews() {
  //  4-second delay to simulate a slow database 
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return [
    { id: 1, text: "Excellent product, arrived fast!" },
    { id: 2, text: "Exceeded my expectations, 5 stars." },
  ];
}

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <div className="p-4 border rounded-lg bg-gray-50 space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Customer Reviews</h2>
      <ul className="space-y-2">
        {reviews.map((review) => (
          <li key={review.id} className="text-sm text-gray-700">
            • {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
}