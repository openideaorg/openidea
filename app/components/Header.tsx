"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/eco.png" alt="Open Idea Logo" width={36} height={36} />
        <span className="text-xl font-bold gradient-text ml-2">Open Idea</span>

      </Link>
      <nav className="space-x-6 text-sm font-medium">
        <Link href="/about" className="hover:text-green-600">About</Link>
        <Link href="/projects" className="hover:text-green-600">Projects</Link>
        <Link href="/contribute" className="hover:text-green-600">Contribute</Link>
      </nav>
    </header>
  );
}
