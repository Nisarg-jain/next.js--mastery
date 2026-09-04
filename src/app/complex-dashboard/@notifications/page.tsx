// src/app/complex-dashboard/@notifications/page.tsx
export default function Notifications() {
  return (
    <div className="h-44 p-4 bg-purple-50 border border-purple-200 rounded-lg flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-purple-900">Notifications</h2>
      <p className="text-sm text-purple-700">3 unread system alerts</p>
      <span className="text-xs text-purple-500 font-mono">Slot: @notifications</span>
    </div>
  );
}