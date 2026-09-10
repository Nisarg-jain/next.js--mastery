export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export const dynamicParams = false;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-bold">Rendering Demo - Product {id}</h1>
      <p className="text-gray-500">
        Rendered at: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}