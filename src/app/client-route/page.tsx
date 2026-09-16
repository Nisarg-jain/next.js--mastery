"use client";

import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const result = clientSideFunction();

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">Client Route</h1>
      <p className="text-gray-700 dark:text-gray-300">Result: {result}</p>
    </div>
  );
}