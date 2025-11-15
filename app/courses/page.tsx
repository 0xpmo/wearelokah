"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/flower.jpeg"
          alt="Courses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="space-y-6 max-w-2xl px-8">
            <h1
              className="text-4xl md:text-6xl font-light leading-tight"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Courses
            </h1>
            <p
              className="text-lg md:text-xl font-light tracking-widest opacity-90 mt-8"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              A NEW WORLD WITHIN
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Coming Soon
            </h2>
            <p
              className="text-lg leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Our courses are being developed with care and intention. Check back soon for transformative learning experiences.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

