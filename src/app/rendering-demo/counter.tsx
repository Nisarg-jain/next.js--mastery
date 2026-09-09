"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter: Client Component executed!");

  return (
    <div className="p-4 border rounded-md max-w-xs space-y-2">
      <p className="font-semibold">Client Counter: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
}