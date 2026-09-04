// src/app/complex-dashboard/@login/page.tsx
export default function LoginSlot() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center space-y-4">
      <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
        🔒
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900">Access Restricted</h2>
        <p className="text-sm text-gray-600 mt-1">
          Please log in to view your dashboard metrics and analytics.
        </p>
      </div>
      <button
        type="button"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
      >
        Log In to Continue
      </button>
      <span className="block text-xs text-gray-400 font-mono">Slot: @login</span>
    </div>
  );
}