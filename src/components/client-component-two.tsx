"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name] = useState("Superman");

  return (
    <div className="border border-amber-400 p-3 rounded my-2">
      <h2 className="font-semibold text-amber-600">Client Component 2 ({name})</h2>
    </div>
  );
};