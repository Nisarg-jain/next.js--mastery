"use client";

import { useState } from "react";

interface InteractiveCounterProps {
  initialCount?: number;
}

export default function InteractiveCounter({
  initialCount = 0,
}: InteractiveCounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="p-4 border rounded-md bg-white shadow-sm space-y-3">
      <h3 className="text-lg font-semibold text-gray-800">
        Interactive Client Counter
      </h3>
      <p className="text-sm text-gray-600">Current count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}