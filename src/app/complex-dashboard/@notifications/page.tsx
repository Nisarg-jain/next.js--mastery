// src/app/complex-dashboard/@notifications/page.tsx
import Link from 'next/link';

export default function Notifications() {
  return (
    <div className="h-44 p-4 bg-purple-50 border border-purple-200 rounded-lg flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold text-purple-900">Notifications</h2>
        <p className="text-sm text-purple-700">3 unread system alerts</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-purple-500 font-mono">Slot: @notifications</span>
        <Link
          href="/complex-dashboard/archived"
          className="text-xs font-semibold text-purple-700 underline hover:text-purple-900"
        >
          View Archived →
        </Link>
      </div>
    </div>
  );
}