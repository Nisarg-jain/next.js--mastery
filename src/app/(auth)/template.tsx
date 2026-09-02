// src/app/(auth)/template.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
];

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState('');
  const pathname = usePathname();

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
          State Demonstration Input
        </label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here, then switch tabs..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <nav className="flex gap-4 border-b border-gray-100 pb-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
                isActive
                  ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-1'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {children}
    </div>
  );
}