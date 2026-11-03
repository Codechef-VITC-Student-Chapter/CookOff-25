"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const menuItems = [
    { label: "LEADERBOARD", href: "/leaderboard" },
    { label: "CONTEST", href: "/contest" },
  ];

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate underline position
  const updateUnderline = (href?: string) => {
    const targetHref = href || pathname;
    const linkEl = containerRef.current?.querySelector(
      `a[href='${targetHref}']`
    ) as HTMLElement;
    if (linkEl && containerRef.current) {
      const rect = linkEl.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - containerRect.left,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", () => updateUnderline());
    return () => window.removeEventListener("resize", () => updateUnderline());
  }, [pathname]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-black border-b border-gray-800 w-full fixed z-60 top-0 font-cera ">
        <div className="w-full flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity shrink-0"
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

          {/* Desktop Links */}
          <div
            className="hidden sm:flex items-center space-x-8 relative h-16"
            ref={containerRef}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white text-sm font-medium tracking-wider hover:text-gray-300 transition-colors"
                onMouseEnter={() => updateUnderline(item.href)}
                onMouseLeave={() => updateUnderline()}
              >
                {item.label}
              </Link>
            ))}

            {/* Sliding Underline */}
            <span
              className="absolute bg-white h-1 transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                bottom: 0, // fixed at bottom of navbar
              }}
            ></span>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 flex justify-around py-3 font-cera z-50">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-white text-sm font-medium hover:text-gray-300 transition-colors ${
              pathname === item.href ? "font-semibold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
