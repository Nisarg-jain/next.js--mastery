// src/app/products/error.tsx
'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function ProductsErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="p-8 my-6 bg-amber-50 border border-amber-300 rounded-xl space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">⚠️</span>
        <h2 className="text-xl font-bold text-amber-900">
          Products Section Error
        </h2>
      </div>
      <p className="text-sm text-amber-800">
        Caught by <code className="font-mono bg-amber-100 px-1 py-0.5 rounded">src/app/products/error.tsx</code>:
      </p>
      <p className="text-sm font-semibold text-red-600 bg-white p-3 rounded border border-amber-200">
        {error.message}
      </p>

      <button
        onClick={handleRetry}
        className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-700 transition"
      >
        Retry Entire Products Area
      </button>
    </div>
  );
}