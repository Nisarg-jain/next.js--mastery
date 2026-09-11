import { fetchServerData } from "./server-utils";
import InteractiveCounter from "./interactive-counter";

export default function RenderingDemoPage() {
  const secretData = fetchServerData();

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Server-Only Code Guardrail Demo
        </h1>
        <p className="text-gray-600">
          This data was fetched strictly on the server:
        </p>
        <p className="mt-2 font-mono text-sm bg-gray-100 p-2 rounded border inline-block text-green-700">
          {secretData}
        </p>
      </div>

      <InteractiveCounter initialCount={0} />
    </div>
  );
}