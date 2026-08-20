import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
        
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">
              DevSpace
            </span>
            <nav className="flex items-center gap-6 text-sm font-semibold text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Persistent Footer */}
        <footer className="border-t border-gray-200 bg-white py-4 text-center text-xs text-gray-500">
          Next.js 15 Learning Sprint
        </footer>
      </body>
    </html>
  );
}