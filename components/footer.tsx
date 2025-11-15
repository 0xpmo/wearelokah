import { Mail, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-16 px-8"
      style={{ backgroundColor: "rgb(244 244 236)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            {/* Logo image - uncomment when ready to use */}
            {/* <img
              src="/logo-text-black.png"
              alt="LOKAH"
              className="h-16 w-auto mb-8"
            /> */}
            <h2
              className="text-3xl font-light tracking-widest mb-8"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              LOKAH
            </h2>
          </div>
          <div className="space-y-3">
            <Link
              href="/"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Home
            </Link>
            <Link
              href="/offerings"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Offerings
            </Link>
            <Link
              href="/courses"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Courses
            </Link>
            <Link
              href="/retreat"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Retreats
            </Link>
            <Link
              href="/shop"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="block hover:opacity-80 transition-opacity font-light text-lg"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div
          className="mt-12 pt-8 text-center border-t-2 space-y-4"
          style={{ borderTopColor: "rgba(120, 89, 59, 0.3)" }}
        >
          <div className="flex justify-center items-center gap-6">
            <a
              href="mailto:wearelokah@gmail.com"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-light text-sm"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Mail className="h-4 w-4" />
              <span>wearelokah@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/wearelokah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-light text-sm"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Instagram className="h-4 w-4" />
              <span>@wearelokah</span>
            </a>
          </div>
          <p
            className="font-light text-sm tracking-wide"
            style={{
              color: "rgb(120 89 59)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            © 2025 LOKAH
          </p>
        </div>
      </div>
    </footer>
  );
}
