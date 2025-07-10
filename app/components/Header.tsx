"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/eco.png" alt="Open Idea Logo" width={36} height={36} />
        <span className="text-xl font-bold gradient-text ml-2">Open Idea</span>

      </Link>
      <nav className="space-x-6 text-sm font-medium flex items-center gap-4">
        <Link href="/about" className="hover:text-green-600">About</Link>
        <Link href="/projects" className="hover:text-green-600">Projects</Link>
        <Link href="/contribute" className="hover:text-green-600">Contribute</Link>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {mounted && theme === "dark" ? (
            <i className="fas fa-sun" />
          ) : (
            <i className="fas fa-moon" />
          )}
        </button>
      </nav>
    </header>
  );
}
