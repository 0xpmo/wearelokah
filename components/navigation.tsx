"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-8" ref={menuRef}>
      <div className="flex justify-end">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-amber-200 transition-colors p-2 rounded-full hover:bg-white/10"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-16 right-8 backdrop-blur-sm rounded-lg shadow-xl p-6 space-y-4 min-w-48 border"
          style={{
            backgroundColor: "rgb(120 89 59)",
            borderColor: "rgba(120, 89, 59, 0.3)",
          }}
        >
          <Link
            href="/"
            className="block hover:opacity-80 transition-opacity font-light text-lg"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:opacity-80 transition-opacity font-light text-lg"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block hover:opacity-80 transition-opacity font-light text-lg"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Offerings
          </Link>
          <Link
            href="/retreat"
            className="block hover:opacity-80 transition-opacity font-light text-lg"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Retreat
          </Link>
          <Link
            href="/contact"
            className="block hover:opacity-80 transition-opacity font-light text-lg"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
