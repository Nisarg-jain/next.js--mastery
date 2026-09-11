import InteractiveCounter from "./interactive-counter";

export default function RenderingDemoPage() {
  const serverGeneratedTimestamp = new Date().toLocaleTimeString();

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Server and Client Composition
        </h1>
        <p className="text-gray-600">
          This shell is rendered entirely on the server.
        </p>
        <p className="text-sm text-gray-500">
          Server build timestamp: {serverGeneratedTimestamp}
        </p>
      </div>

      {/* Composed Client Component receiving server props */}
      <InteractiveCounter initialCount={5} />
    </div>
  );
}