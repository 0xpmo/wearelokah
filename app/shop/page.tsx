"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";

export default function ShopPage() {
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
    <div className="min-h-screen bg-stone-50">
      {/* Top Navigation Bar with LOKAH and Hamburger */}
      <nav
        className="w-full px-8 py-6 flex items-center justify-between relative"
        style={{ backgroundColor: "rgb(244 244 236)" }}
        ref={menuRef}
      >
        <div className="flex-1"></div>
        <Link
          href="/"
          className="text-4xl md:text-5xl font-light lowercase tracking-wide hover:opacity-80 transition-opacity flex-1 text-center"
          style={{
            color: "rgb(120 89 59)",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          lokah
        </Link>
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors p-2 rounded-full hover:bg-black/10"
            style={{
              color: "rgb(120 89 59)",
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="absolute top-16 right-8 backdrop-blur-sm rounded-lg shadow-xl p-6 min-w-64 border flex flex-col z-50"
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

      <section
        className="py-24 px-8 min-h-screen"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1
              className="text-4xl md:text-5xl font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Shop
            </h1>
          </div>

          {/* Products Grid */}
          <div className="flex flex-wrap gap-8">
            {/* Ebook Product */}
            <div className="space-y-4 w-full sm:w-[calc(50%-1rem)] max-w-sm">
              <Link href="#" className="block group">
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-4">
                  <img
                    src="/lokah/ebook-cover.png"
                    alt="Ebook"
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <p
                  className="font-light text-lg"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Ebook
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

