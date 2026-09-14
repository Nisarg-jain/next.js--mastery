import { fetchServerData } from "./server-utils";
import InteractiveCounter from "./interactive-counter";
import ImageSlider from "./image-slider";
import ThemeToggle from "./theme-toggle";

export default function RenderingDemoPage() {
  const secretData = fetchServerData();
  const serverTimestamp = new Date().toLocaleTimeString();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section (Server Rendered) */}
      <header className="border-b pb-4 border-gray-300 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Next.js 15 Rendering Patterns Showcase
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Root Layout and Page shell rendered on the Server at:{" "}
          <span className="font-mono text-blue-600 dark:text-blue-400">
            {serverTimestamp}
          </span>
        </p>
      </header>

      {/* Grid Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Concept 1: Server-Only Guardrails */}
        <div className="p-5 border rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 space-y-3">
          <h2 className="text-lg font-semibold">1. Server-Only Code Guardrail</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Fetched strictly on the server; protected from client bundle leakage.
          </p>
          <div className="p-2 font-mono text-xs bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded">
            {secretData}
          </div>
        </div>

        {/* Concept 2: Global Context Provider */}
        <div className="p-5 border rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 space-y-3">
          <h2 className="text-lg font-semibold">2. App-Wide Context Provider</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Client context state without de-optimizing the parent Server Component.
          </p>
          <ThemeToggle />
        </div>

        {/* Concept 3: Client Composition Boundary */}
        <div className="p-5 border rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 space-y-3">
          <h2 className="text-lg font-semibold">3. Leaf-Node Interactivity</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Isolated client boundary handling reactive state hooks.
          </p>
          <InteractiveCounter initialCount={0} />
        </div>

        {/* Concept 4: Third-Party Package Wrapper */}
        <div className="p-5 border rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border-gray-200 dark:border-gray-700 space-y-3">
          <h2 className="text-lg font-semibold">4. Third-Party Client Wrapper</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            External carousel wrapped in a client boundary to eliminate hydration mismatch.
          </p>
          <ImageSlider />
        </div>
      </section>
    </main>
  );
}