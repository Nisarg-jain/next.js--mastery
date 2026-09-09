import Counter from "./counter";

export default function RenderingDemoPage() {
  console.log("Rendering Demo: Server Component executed!");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Rendering Demo</h1>
        <p className="text-gray-600">This is a Server Component by default.</p>
      </div>

      <Counter />
    </div>
  );
}