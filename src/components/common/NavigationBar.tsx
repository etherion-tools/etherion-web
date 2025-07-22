"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function NavigationBar() {

  // eslint-disable-next-line 
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Ecosystem", href: "#" },
    { name: "Community", href: "#" },
  ];

  return (
    <nav
      className={`backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 transition-all duration-300 font-inter`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Logo />

          {/* Center spacing */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation */}
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

          {/* Theme toggle centered between nav and button */}
          <div className="hidden md:flex items-center justify-center px-8">
            <ModeToggle />
          </div>

          {/* Right side - buttons */}
          <div className="hidden md:flex items-center">
            <Button className="h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105">
              Explore Tools
            </Button>
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
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
