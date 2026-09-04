// src/app/complex-dashboard/@users/default.tsx
export default function DefaultUsersAnalytics() {
  return (
    <div className="h-44 p-4 bg-blue-50 border border-blue-200 rounded-lg flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-blue-900">User Analytics</h2>
      <p className="text-2xl font-bold text-blue-700">14,250 Active</p>
      <span className="text-xs text-blue-500 font-mono">Slot: @users (default fallback)</span>
    </div>
  );
}