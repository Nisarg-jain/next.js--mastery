"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [name] = useState("Batman");

  return (
    <div className="border border-emerald-500 p-4 rounded my-2">
      <h1 className="font-bold text-emerald-600">Client Component 1 ({name})</h1>
      <ClientComponentTwo />
      {children}
    </div>
  );
};