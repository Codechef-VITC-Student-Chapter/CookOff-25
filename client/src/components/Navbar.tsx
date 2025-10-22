import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#1a1a1a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/codechef-vitc-logo.svg"
                alt="CodeChef VITC Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white text-xl font-semibold">
              CodeChef VITC
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/leaderboard" 
              className="relative text-white text-sm font-medium tracking-wider hover:text-gray-300 transition-colors group"
            >
              LEADERBOARD
              <span className="absolute -bottom-4 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <Link 
              href="/contest" 
              className="relative text-white text-sm font-medium tracking-wider hover:text-gray-300 transition-colors group"
            >
              CONTEST
              <span className="absolute -bottom-4 left-0 right-0 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;