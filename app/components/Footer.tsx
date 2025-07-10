'use client';

import Image from 'next/image';
import Link from 'next/link';
import ChatBot from './ChatBot';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* 🌟 Glowing Emerald Divider */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>

      <footer className="bg-[#0a0a0a] text-gray-400 pt-12 pb-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* 🔵 Logo + Name */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Image
              src="/eco.png"
              alt="ECOSYZ logo"
              width={40}
              height={40}
              className="rounded-full border border-gray-700 shadow-md"
            />
            <span className="text-xl font-semibold text-white tracking-wide">
              ECOSYZ
            </span>
          </div>

          {/* 🌍 Tagline */}
          <p className="text-center text-sm md:text-base mb-6 md:mb-0 max-w-md">
            Empowering Open, Sustainable Innovation Worldwide
          </p>

          {/* 📱 Social Icons + 📧 Mail */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 gap-4 text-lg">
            <div className="flex space-x-5">
              <Link
                href="https://discord.gg/4weahHXQYY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors duration-300"
                aria-label="Discord"
              >
                <i className="fab fa-discord" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ecosyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </Link>
              <Link
                href="https://x.com/OpenIdeaOrg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                href="https://github.com/openideaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </Link>
              <Link
                href="mailto:info@openidea.world"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </Link>
            </div>
          </div>
        </div>

        {/* 🔚 Bottom Note */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © {currentYear} ECOSYZ. All rights reserved. Built with{' '}
          <span className="text-emerald-400">❤️</span> for global innovation.
        </div>
      </footer>
      <ChatBot />
    </>
  );
}
