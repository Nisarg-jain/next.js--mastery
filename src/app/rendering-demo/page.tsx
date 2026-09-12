import ThemeToggle from "./theme-toggle";

export default function RenderingDemoPage() {
  const serverTimestamp = new Date().toLocaleTimeString();

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4 border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Context Providers in App Router</h1>
        <p className="text-gray-500">
          The root layout and this page remain Server Components.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Server render time: {serverTimestamp}
        </p>
      </div>

      <ThemeToggle />
    </div>
  );
}