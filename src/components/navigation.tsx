'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Products', href: '/products' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm font-semibold">
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== '/' && pathname.startsWith(link.href));

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`transition-colors ${
              isActive
                ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}