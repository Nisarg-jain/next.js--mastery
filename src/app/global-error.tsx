// src/app/global-error.tsx
'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-xl p-6 text-center space-y-4 shadow-xl">
          <div className="text-4xl">🚨</div>
          <h2 className="text-2xl font-bold text-red-400">Global Application Crash</h2>
          <p className="text-sm text-slate-300">
            Caught by <code className="bg-slate-750 px-1 py-0.5 rounded text-amber-300">global-error.tsx</code>. The root layout failed to render.
          </p>
          <div className="p-3 bg-slate-900 rounded border border-slate-700 text-xs text-red-300 font-mono text-left break-words">
            {error.message || 'An unexpected global error occurred.'}
          </div>
          <button
            onClick={() => reset()}
            className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
          >
            Refresh Entire App
          </button>
        </div>
      </body>
    </html>
  );
}