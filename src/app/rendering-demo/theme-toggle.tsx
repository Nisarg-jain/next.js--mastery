"use client";

import { useTheme } from "../../components/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 border rounded-lg max-w-sm space-y-3 border-gray-300 dark:border-gray-700">
      <p className="text-sm font-medium">
        Current Theme: <span className="font-bold uppercase">{theme}</span>
      </p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}