// src/app/complex-dashboard/default.tsx
export default function DefaultComplexDashboardPage() {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900">Complex Dashboard</h1>
      <p className="text-gray-600 text-sm mt-1">
        This is the fallback children slot for unmatched routes.
      </p>
    </div>
  );
}