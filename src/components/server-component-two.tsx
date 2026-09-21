import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");

  return (
    <div className="border border-indigo-400 p-3 rounded my-2">
      <h2 className="font-semibold text-indigo-600">Server Component 2</h2>
    </div>
  );
};