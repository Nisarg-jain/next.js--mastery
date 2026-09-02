export default function Loading() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <p className="text-sm text-gray-400 font-medium">Loading review details...</p>
    </div>
  );
}