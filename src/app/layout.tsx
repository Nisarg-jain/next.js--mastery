import './globals.css';
import Navigation from '@/components/navigation'; 

export const metadata = {
  title: 'DevSpace',
  description: 'Next.js 15 Learning Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between font-sans">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-extrabold text-lg tracking-tight text-gray-900">
              DevSpace
            </span>
            <Navigation />
          </div>
        </header>

        <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-8">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-white mt-auto py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DevSpace. All rights reserved.
        </footer>
      </body>
    </html>
  );
}