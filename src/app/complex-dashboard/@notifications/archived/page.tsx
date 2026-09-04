// src/app/complex-dashboard/@notifications/archived/page.tsx
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <div className="h-44 p-4 bg-purple-100 border border-purple-300 rounded-lg flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold text-purple-950">Archived Notifications</h2>
        <p className="text-xs text-purple-800 mt-1">Viewing historical alerts</p>
      </div>

      <Link
        href="/complex-dashboard"
        className="text-xs font-semibold text-purple-700 underline hover:text-purple-900"
      >
        ← Back to Default Notifications
      </Link>
    </div>
  );
}