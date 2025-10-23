import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Navbar (Logo only on mobile, full nav on desktop) */}
      <nav className="bg-[#1a1a1a] border-b border-gray-800 w-full font-cera">
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            
            {/* Logo Section */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <div className="w-10 h-10 relative">
                <Image
                  src="/codechef-vitc-logo.png"
                  alt="CodeChef VITC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white text-xl font-semibold whitespace-nowrap">
                CodeChef VITC
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex items-center space-x-8 flex-shrink-0">
              <Link
                href="/leaderboard"
                className="relative text-white text-sm font-medium tracking-wider hover:text-gray-300 transition-colors group"
              >
                LEADERBOARD
                <span className="hidden sm:block absolute -bottom-4 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>

              <Link
                href="/contest"
                className="relative text-white text-sm font-medium tracking-wider hover:text-gray-300 transition-colors group"
              >
                CONTEST
                <span className="hidden sm:block absolute -bottom-4 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation (Visible only on mobile) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 flex justify-around py-3 font-cera z-50">
        <Link
          href="/leaderboard"
          className="relative text-white text-sm font-medium hover:text-gray-300 transition-colors group"
        >
          LEADERBOARD
          <span className="absolute -top-1 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Link>

        <Link
          href="/contest"
          className="relative text-white text-sm font-medium hover:text-gray-300 transition-colors group"
        >
          CONTEST
          <span className="absolute -top-1 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
