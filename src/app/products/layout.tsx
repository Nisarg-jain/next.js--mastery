// src/app/products/layout.tsx
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 text-blue-800 text-xs px-3 py-1.5 rounded font-medium">
        Products Layout (Parent Wrapper)
      </div>
      {children}
    </section>
  );
}