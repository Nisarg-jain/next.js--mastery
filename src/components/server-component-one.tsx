import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");

  return (
    <div className="border border-blue-500 p-4 rounded my-2">
      <h1 className="font-bold text-blue-600">Server Component 1</h1>
      <ServerComponentTwo />
    </div>
  );
};