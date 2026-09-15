export default function SystemBadge() {
  const nodeEnv = process.env.NODE_ENV;
  const isServer = typeof window === "undefined";
  const timestamp = new Date().toISOString();

  return (
    <aside className="fixed bottom-4 right-4 z-50 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 p-3 shadow-lg backdrop-blur-sm text-xs font-mono">
      <div className="flex items-center gap-2 mb-1 font-semibold text-gray-800 dark:text-gray-200">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        Runtime Diagnostics
      </div>
      <div className="space-y-0.5 text-gray-600 dark:text-gray-400">
        <p>Environment: <span className="font-semibold text-blue-600 dark:text-blue-400">{nodeEnv}</span></p>
        <p>Execution: <span className="font-semibold">{isServer ? "Server Context" : "Client Hydrated"}</span></p>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">Snapshot: {timestamp}</p>
      </div>
    </aside>
  );
}