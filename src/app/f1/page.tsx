// src/app/f1/page.tsx
import Link from 'next/link';

export default function F1() {
  return (
    <div className="space-y-4 p-6 bg-white border border-gray-200 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900">Folder 1 (F1)</h1>
      <p className="text-gray-600">
        This is the main feed/page for Folder 1.
      </p>
      <div>
        <Link
          href="/f1/f2"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
        >
          Navigate to F2 →
        </Link>
      </div>
    </div>
  );
}