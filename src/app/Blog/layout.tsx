export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Blog-Specific Sidebar */}
      <aside className="w-full md:w-64 p-4 bg-gray-100 rounded-lg border border-gray-200">
        <h2 className="font-bold text-gray-800 text-lg mb-3">Blog Navigation</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="text-gray-500 font-medium">📌 Category: Next.js</span>
          </li>
          <li>
            <span className="text-gray-500 font-medium">🔥 Trending: App Router</span>
          </li>
        </ul>
      </aside>

      {/* The Specific Blog Page Content */}
      <div className="flex-1 bg-white p-4 rounded-lg">
        {children}
      </div>
    </div>
  );
}