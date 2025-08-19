"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavigationBar() {
  // State for toggling mobile menu open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Ecosystem", href: "#" },
    { name: "Community", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 transition-all duration-300 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Navbar main row layout */}
        <div className="flex items-center justify-between py-6">
          {/* Logo plus brand name (gradient text) */}
          <div className="flex items-center gap-2 select-none">
            {/* Logo PNG from public folder */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            {/* Brand name (gradient-styled text) */}
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Etherion Tools
            </span>
          </div>

          {/* Spacer between logo and nav links */}
          <div className="flex-grow"></div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-[15px] text-gray-900 dark:text-gray-100 hover:text-blue-400 transition-colors font-inter"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop theme toggle */}
          <div className="hidden md:flex items-center justify-center px-8">
            <ModeToggle />
          </div>

          {/* Desktop right action button */}
          <div className="hidden md:flex items-center">
            <Button className="h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105">
              Explore Tools
            </Button>
          </div>

          {/* Mobile menu & theme toggle (only visible on small screens) */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer/menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl px-6 py-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-[15px] text-gray-900 dark:text-gray-100 hover:text-blue-400 transition-colors font-inter"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button className="w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105">
                Explore Tools
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
