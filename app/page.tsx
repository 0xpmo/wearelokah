"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/flower.jpeg"
          alt="Sacred feminine connection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="space-y-6 max-w-2xl px-8">
            <div className="flex justify-center">
              <img
                src="/logo-text-white.png"
                alt="Cyclical Ceremony"
                className="h-32 md:h-48 w-auto"
              />
            </div>
            <p className="text-lg md:text-xl font-light tracking-widest opacity-90 mt-8 uppercase">
              Sacred Feminine Wisdom
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2
                  className="text-4xl md:text-5xl font-light leading-tight"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  A sacred space for women to deepen their relationship with
                  their bodies
                </h2>
                <p
                  className="text-lg leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Rooted in love, trust, and the ancient wisdom of cyclical
                  living. Through holistic coaching and transformative retreats,
                  we honor the sacred feminine within.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="px-8 py-4 text-base font-light tracking-wide border"
                  style={{
                    backgroundColor: "rgb(120 89 59)",
                    color: "rgb(244 244 236)",
                    borderColor: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Begin Your Journey
                </Button>
              </div>
            </div>

            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/lucy/lucy-leaning-mtns-2.jpeg"
                  alt="Woman in peaceful meditation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <Link href="/services" className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="/moons.jpeg"
                alt="Menstrual cycle coaching"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-amber-950/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-whimsical text-amber-50 text-center font-medium">
                  Menstrual Cycle Coaching
                </h3>
              </div>
            </div>
          </Link>

          <Link href="/retreat" className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src="/retreat/yoga-beach.jpeg"
                alt="Cyclical Yoga Retreat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-amber-950/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-whimsical text-amber-50 text-center font-medium">
                  Cyclical Yoga Retreat
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/lucy-headshot.jpeg"
                  alt="Meet Lucy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2
                className="text-4xl md:text-5xl font-whimsical leading-tight font-medium"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Meet Lucy
              </h2>
              <p
                className="text-lg leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                A devoted yoga student for 12+ years, holistic health coach, and
                menstrual cycle coach creating intentional spaces for healing
                and self-reflection. Lucy believes in honoring ancient
                traditions while creating sustainable shifts in modern life.
              </p>
              <Link
                href="/about"
                className="inline-block hover:opacity-80 transition-opacity font-medium tracking-wide text-lg"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Read Her Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/flowers-blurry.jpeg"
          alt="Blurry flowers representing feminine power"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-8">
          <h2
            className="text-4xl md:text-5xl font-whimsical font-medium"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
          >
            Here to remind you of your power
          </h2>
          <p
            className="text-lg font-light max-w-3xl leading-relaxed"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
          >
            Feminine wisdom is not learned. it is remembered. it is the ancient
            knowing that stirs within each woman, calling her back to her true
            self.
          </p>
          <Button
            asChild
            size="lg"
            className="px-8 py-4 text-base font-light tracking-wide border"
            style={{
              backgroundColor: "rgb(120 89 59)",
              color: "rgb(244 244 236)",
              borderColor: "rgb(120 89 59)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <Link href="/about">Our Mission</Link>
          </Button>
        </div>
      </section>

      <section className="relative h-[25vh] overflow-hidden">
        <img
          src="/clouds1.jpeg"
          alt="Dreamy clouds representing connection and spiritual growth"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 space-y-4">
          <p
            className="text-2xl font-whimsical font-medium"
            style={{ color: "white", fontFamily: "Montserrat, sans-serif" }}
          >
            join the cyclical ceremony
          </p>
          <div className="flex items-center space-x-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-b py-2 focus:outline-none placeholder:opacity-70"
              style={{
                borderColor: "white",
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            />
            <button className="transition-colors" style={{ color: "white" }}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <footer
        className="py-16 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src="/logo-text-black.png"
                alt="Cyclical Ceremony"
                className="h-16 w-auto mb-8"
              />
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
                href="/about"
                className="block hover:opacity-80 transition-opacity font-light text-lg"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block hover:opacity-80 transition-opacity font-light text-lg"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Offerings
              </Link>
              <Link
                href="/retreat"
                className="block hover:opacity-80 transition-opacity font-light text-lg"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Retreat
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
            className="mt-12 pt-8 text-center border-t-2"
            style={{ borderTopColor: "rgba(120, 89, 59, 0.3)" }}
          >
            <p
              className="font-light text-sm tracking-wide"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              © 2025 Cyclical Ceremony. Honoring the sacred feminine within.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
