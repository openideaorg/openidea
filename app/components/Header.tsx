'use client';

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);


  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMobile = () => setMobileOpen(!mobileOpen);


  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-transparent">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/eco.png" alt="Open Idea Logo" width={36} height={36} />
        <span className="text-xl font-bold gradient-text ml-2">Open Idea</span>
      </Link>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 hidden md:block"
        >
          {mounted && theme === "dark" ? (
            <i className="fas fa-sun" />
          ) : (
            <i className="fas fa-moon" />
          )}
        </button>

        <button
          onClick={toggleMobile}
          aria-label="Menu"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
        >
          <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"} />
        </button>
      </div>

      <nav
        className={`${mobileOpen ? "block" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent p-4 md:p-0`}
      >
        <Link href="/openresources" className="hover:text-green-400 transition block md:inline">
          Resources
        </Link>
        <Link href="/projects" className="hover:text-green-400 transition block md:inline">
          Projects
        </Link>
        <Link href="/community" className="hover:text-green-400 transition block md:inline">
          Community
        </Link>
        <Link href="/whitepaper" className="hover:text-green-400 transition block md:inline">
          Whitepaper
        </Link>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden mt-2 md:mt-0"
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
