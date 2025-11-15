"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/green-tree.jpeg"
          alt="Sacred connection with nature"
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
              Meet Lucy
            </h1>
            <p
              className="text-lg md:text-xl font-light tracking-widest opacity-90 mt-8"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
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
                  A devoted student of yoga, holistic health coach, and
                  menstrual cycle guide
                </h2>
                <p
                  className="text-lg leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Dedicated to creating sacred spaces where women can reconnect
                  with their body's innate wisdom through ancient traditions and
                  modern healing practices.
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
                  Work With Lucy
                </Button>
              </div>
            </div>

            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/lucy/lucy-leaning-mtns.jpeg"
                  alt="Lucy in peaceful meditation with mountains"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              A Journey of Devotion
            </h2>
            <p
              className="text-xl leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Lucy's path has been one of continuous learning, deep reverence,
              and unwavering commitment to the sacred teachings of yoga and
              holistic wellness.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="rounded-2xl p-8 space-y-6"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-2xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                The Yoga Journey
              </h3>
              <p
                className="leading-relaxed text-lg font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                For over twelve years, Lucy has been a devoted student of yoga,
                allowing its ancient wisdom to permeate every aspect of her life
                through daily practices and sacred rituals. In 2024, she
                completed her 200-hour Yoga Teacher Training through East+West
                Yoga School in the transformative landscape of Bali, Indonesia.
              </p>
              <p
                className="leading-relaxed text-lg font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                As a teacher, Lucy strives to honor the ancient traditions of
                both yoga and pilates, bringing deep reverence into each class
                she leads. Her teaching weaves together movement and meditation,
                taking students through a journey of self-discovery that opens
                the heart and mind to all that is meant to be.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 space-y-6"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-2xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Holistic Health Wisdom
              </h3>
              <p
                className="leading-relaxed text-lg font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                In 2024, Lucy completed her Holistic Health Coaching
                certification at the Institute of Integrative Nutrition (IIN).
                Through this comprehensive 6-month program, she was able to
                further explore her passion for holistic wellness and health in
                a formal educational environment.
              </p>
              <p
                className="leading-relaxed text-lg font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Lucy uses this knowledge to guide her clients in making
                sustainable shifts in their lives for true transformation and
                awakening. Her approach goes beyond surface-level changes,
                diving deep into the root causes of imbalance and supporting
                lasting, meaningful change.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 space-y-6"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-2xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Cyclical Wisdom
              </h3>
              <p
                className="leading-relaxed text-lg font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Currently, Lucy is completing her certification program to
                become a Menstrual Cycle Coach at the world's first menstrual
                cycle school - Cyclical School. This cutting-edge training is
                deepening her understanding of the profound wisdom held within
                women's cyclical nature.
              </p>
              <p
                className="leading-relaxed text-lg font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                As a menstrual cycle coach, Lucy hopes to create healing spaces
                for women to connect deeply to their womb, trust in the wisdom
                of their bodies, learn about the inner workings of their sacred
                vessel, lean into their feminine energy, and become the
                embodiment of love.
              </p>
            </div>
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
              <h2
                className="text-4xl md:text-5xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Lucy's Philosophy
              </h2>
              <div className="space-y-6">
                <blockquote
                  className="text-xl leading-relaxed italic border-l-4 pl-6"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                    borderLeftColor: "rgb(120 89 59)",
                  }}
                >
                  "I cultivate intentional spaces for healing and
                  self-reflection where my students feel safe and empowered to
                  arrive as they are."
                </blockquote>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Lucy's approach is rooted in creating containers of surrender,
                  curiosity, and unconditional love. She believes in co-creating
                  sacred spaces where her students can slow down and listen to
                  the innate wisdom of their bodies.
                </p>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Though she teaches, Lucy remains forever a student—open to
                  growth, learning, and evolution in every form. With immense
                  gratitude, she shares the sacred teachings of yoga and hopes
                  to continue being a light and love for all those walking this
                  path of life.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/lucy/lucy-mtns-zoomed-out.jpeg"
                  alt="Lucy in a serene natural setting, embodying peaceful presence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Certifications & Training
            </h2>
            <p
              className="text-xl leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Lucy's commitment to learning and growth is reflected in her
              ongoing education and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="rounded-2xl p-6 text-center space-y-4"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                200-Hour YTT
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                East+West Yoga School
              </p>
              <div
                className="px-3 py-1 rounded-full text-sm inline-block font-light"
                style={{
                  backgroundColor: "rgba(120, 89, 59, 0.1)",
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Bali, Indonesia • 2024
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-center space-y-4"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Holistic Health Coach
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Institute of Integrative Nutrition
              </p>
              <div
                className="px-3 py-1 rounded-full text-sm inline-block font-light"
                style={{
                  backgroundColor: "rgba(120, 89, 59, 0.1)",
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                IIN • 2024
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-center space-y-4"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Menstrual Cycle Coach
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Cyclical School
              </p>
              <div
                className="border px-3 py-1 rounded-full text-sm inline-block font-light"
                style={{
                  borderColor: "rgb(120 89 59)",
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                In Progress • 2024
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-center space-y-4"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Yoga Student
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Devoted Practice
              </p>
              <div
                className="px-3 py-1 rounded-full text-sm inline-block font-light"
                style={{
                  backgroundColor: "rgba(120, 89, 59, 0.1)",
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                12+ Years
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-center space-y-4"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Retreat Facilitator
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                LOKAH Cyclical Yoga Retreat
              </p>
              <div
                className="px-3 py-1 rounded-full text-sm inline-block font-light"
                style={{
                  backgroundColor: "rgba(120, 89, 59, 0.1)",
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Italy • 2025
              </div>
            </div>

            <div
              className="rounded-2xl p-6 text-center space-y-4"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Pilates Integration
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Movement & Meditation
              </p>
              <div
                className="px-3 py-1 rounded-full text-sm inline-block font-light"
                style={{
                  backgroundColor: "rgba(120, 89, 59, 0.1)",
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Ongoing Study
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              A Sacred Mission
            </h2>
            <div
              className="space-y-6 text-lg leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <p>
                Lucy's mission extends far beyond teaching yoga or coaching—it's
                about creating a sacred container where women can remember their
                inherent wholeness and reconnect with the profound wisdom that
                lives within their bodies.
              </p>
              <p>
                She believes that when women learn to trust their cyclical
                nature and honor their body's rhythms, they unlock a source of
                power and intuition that can transform not only their own lives
                but ripple out to heal the world around them.
              </p>
              <blockquote
                className="text-xl italic"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                "My deepest intention is to hold space for women to come home to
                themselves, to trust their bodies, and to embody the love they
                truly are."
              </blockquote>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Begin Your Journey with Lucy
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
