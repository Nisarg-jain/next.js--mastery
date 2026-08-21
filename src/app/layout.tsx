// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between font-sans">
        {/* Sticky Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-extrabold text-lg tracking-tight text-gray-900">
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

        {/* Dynamic Page Content */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8">
          {children}
        </main>

        {/* Modern Multi-Column Footer */}
        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="font-semibold text-gray-800">DevSpace</span>
              <span className="hidden sm:inline">•</span>
              <span>© {new Date().getFullYear()} All rights reserved.</span>
            </div>

            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}