"use client";

import { useState } from "react";

export default function NavSearch() {
  console.log("NavSearch rendered");
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-1 text-sm border rounded-md dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}