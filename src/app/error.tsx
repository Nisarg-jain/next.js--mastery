// src/app/error.tsx
'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function RootErrorBoundary({
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
    <div className="p-8 my-6 bg-purple-50 border border-purple-300 rounded-xl space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🛡️</span>
        <h2 className="text-xl font-bold text-purple-900">
          Root App Error Boundary
        </h2>
      </div>
      <p className="text-sm text-purple-800">
        Caught by <code className="font-mono bg-purple-100 px-1 py-0.5 rounded">src/app/error.tsx</code> (Parent level):
      </p>
      <p className="text-sm font-semibold text-red-600 bg-white p-3 rounded border border-purple-200">
        {error.message}
      </p>

      <button
        onClick={handleRetry}
        className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition"
      >
        Retry Application Frame
      </button>
    </div>
  );
}