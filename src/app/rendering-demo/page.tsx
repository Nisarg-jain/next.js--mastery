import { Suspense } from "react";
import Reviews from "./reviews";

export default function RenderingDemoPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Streaming Demo Page</h1>
        <p className="text-gray-600">
          This fast shell renders and appears immediately from the server.
        </p>
      </div>

      {/* Streaming boundary */}
      <Suspense
        fallback={
          <div className="p-4 border border-dashed border-gray-400 rounded-lg animate-pulse text-gray-500">
            Loading reviews (streaming in)...
          </div>
        }
      >
        <Reviews />
      </Suspense>
    </div>
  );
}