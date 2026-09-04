// src/app/f1/(.)f2/page.tsx
export default function InterceptedF2() {
  return (
    <div className="p-6 bg-amber-50 border-2 border-amber-400 rounded-lg space-y-2">
      <h1 className="text-2xl font-bold text-amber-800">
        (.) Intercepted F2 Page!
      </h1>
      <p className="text-amber-700 text-sm">
        Next.js intercepted the client navigation to /f1/f2 and showed this preview/modal version instead of the normal full page.
      </p>
    </div>
  );
}