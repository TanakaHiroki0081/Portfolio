'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-purple-900/95 backdrop-blur-md border-b border-purple-700/50">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
              Hiroki Tanaka
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:scale-105 transform"
              style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:scale-105 transform"
              style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
            >
              About
            </Link>
            <Link 
              href="/work" 
              className="text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:scale-105 transform"
              style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
            >
              Work
            </Link>
            <Link 
              href="/certifications" 
              className="text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:scale-105 transform"
              style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
            >
              Certifications
            </Link>
            <Link 
              href="/contact" 
              className="text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:scale-105 transform"
              style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-purple-700/50">
              <Link 
                href="/" 
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:bg-white/10 rounded-lg"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:bg-white/10 rounded-lg"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                About
              </Link>
              <Link 
                href="/work" 
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:bg-white/10 rounded-lg"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                Work
              </Link>
              <Link 
                href="/certifications" 
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:bg-white/10 rounded-lg"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                Certifications
              </Link>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-white/90 hover:text-white font-semibold transition-colors duration-200 hover:bg-white/10 rounded-lg"
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
