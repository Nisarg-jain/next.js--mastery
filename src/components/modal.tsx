// src/components/modal.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useEffect } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-50 inset-0 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="relative bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl overflow-hidden"
      >
        <button
          type="button"
          onClick={onDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}