import { cookies } from "next/headers";
import Counter from "./counter";

export default async function RenderingDemoPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log("Rendering Demo: Dynamic Server Component evaluated!");

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Dynamic Rendering Demo</h1>
        <p className="text-gray-600">Theme cookie: {theme?.value ?? "None"}</p>
        <p className="text-sm text-gray-500">
          Rendered at: {new Date().toLocaleTimeString()}
        </p>
      </div>

      <Counter />
    </div>
  );
}