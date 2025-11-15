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
          className="transition-colors p-2 rounded-full hover:bg-white/20 backdrop-blur-sm"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="absolute top-16 right-8 backdrop-blur-sm rounded-lg shadow-xl p-6 min-w-64 border flex flex-col"
          style={{
            backgroundColor: "rgb(120 89 59)",
            borderColor: "rgba(120, 89, 59, 0.3)",
          }}
        >
          <div className="space-y-4 flex-1">
            <Link
              href="/"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/offerings"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Offerings
            </Link>
            <Link
              href="/courses"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/retreat"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Retreats
            </Link>
            <Link
              href="/shop"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
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
        </div>
      )}
    </nav>
  );
}
