// src/app/products/[productid]/reviews/[reviewId]/error.tsx
'use client';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded-lg space-y-4">
      <div>
        <h2 className="text-lg font-bold text-red-700">Something went wrong!</h2>
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      </div>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}