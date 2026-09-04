// src/app/complex-dashboard/@revenue/page.tsx
export default function RevenueMetrics() {
  return (
    <div className="h-44 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-emerald-900">Revenue Metrics</h2>
      <p className="text-2xl font-bold text-emerald-700">$48,200.00</p>
      <span className="text-xs text-emerald-500 font-mono">Slot: @revenue</span>
    </div>
  );
}