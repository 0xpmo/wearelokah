"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/moons.jpeg"
          alt="Sacred lunar cycles and feminine wisdom"
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
              Menstrual Cycle Coaching
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
                  Your Sacred Journey
                </h2>
                <p
                  className="text-lg leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Through 6 carefully crafted sessions over 3 months, we'll use
                  Level 1 cycle tracking to guide you into a deeper, more loving
                  relationship with your body. This isn't just about
                  tracking—it's about awakening to your body's innate wisdom.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div
                    className="text-3xl font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    6
                  </div>
                  <div
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Sessions
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div
                    className="text-3xl font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    3
                  </div>
                  <div
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Months
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div
                    className="text-3xl font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    24/7
                  </div>
                  <div
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Text Support
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div
                    className="text-3xl font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    ∞
                  </div>
                  <div
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Transformation
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/lucy/lucy-mtns.jpeg"
                  alt="Lucy in a peaceful mountain setting"
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
              What's Included
            </h2>
            <p
              className="text-xl leading-relaxed font-light max-w-2xl mx-auto"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Everything you need for a complete transformation of your
              relationship with your cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-8 rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight mb-4"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                6 Personal Sessions
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Bi-weekly 60-minute sessions tailored to your unique cycle
                patterns and challenges.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight mb-4"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Cycle Tracking Tools
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Beautiful pen and paper tracking materials to connect with your
                body's wisdom.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight mb-4"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Constant Support
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Direct text access to Lucy for questions, insights, and
                encouragement throughout your journey.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight mb-4"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Cyclical Education
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Deep dive into menstrual cycle wisdom, hormonal patterns, and
                body literacy.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight mb-4"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Sacred Practices
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Rituals and practices to honor each phase of your cycle with
                reverence and love.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl shadow-sm"
              style={{ backgroundColor: "rgb(244 244 236)" }}
            >
              <h3
                className="text-xl font-light leading-tight mb-4"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Personalized Guidance
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Customized recommendations based on your unique cycle patterns
                and life circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Your Journey Unfolds
            </h2>
            <p
              className="text-xl leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              A carefully designed process to guide you into deeper body wisdom.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-light"
                style={{
                  backgroundColor: "rgb(120 89 59)",
                  color: "rgb(244 244 236)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                1
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl font-light leading-tight"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Discovery & Foundation
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  We begin by understanding your current relationship with your
                  cycle, any challenges you're experiencing, and setting
                  intentions for your journey. You'll receive your beautiful
                  tracking materials and learn the fundamentals of Level 1 cycle
                  tracking.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-light"
                style={{
                  backgroundColor: "rgb(120 89 59)",
                  color: "rgb(244 244 236)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                2
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl font-light leading-tight"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Deep Tracking & Awareness
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Through consistent pen and paper tracking, we'll investigate
                  your unique patterns. Each session builds on your
                  observations, helping you decode your body's language and
                  understand your cyclical nature.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-light"
                style={{
                  backgroundColor: "rgb(120 89 59)",
                  color: "rgb(244 244 236)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                3
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl font-light leading-tight"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Integration & Empowerment
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  As patterns emerge, we'll work together to address any cycle
                  challenges with natural, holistic approaches. You'll learn to
                  work with your cycle rather than against it, creating
                  sustainable practices for lifelong wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div
            className="p-12 rounded-3xl shadow-sm text-center space-y-6"
            style={{ backgroundColor: "rgb(244 244 236)" }}
          >
            <div
              className="text-4xl font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              "
            </div>
            <blockquote
              className="text-xl leading-relaxed font-light italic"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Working with Lucy transformed not just my understanding of my
              cycle, but my entire relationship with my body. For the first
              time, I feel truly connected to my feminine wisdom and empowered
              in my own skin. The constant support and gentle guidance made all
              the difference.
            </blockquote>
            <div className="space-y-1">
              <div
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Sarah M.
              </div>
              <div
                className="text-sm font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                3-Month Coaching Client
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
          <div className="space-y-4">
            <h2
              className="text-4xl lg:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Investment in Your Sacred Self
            </h2>
            <p
              className="text-xl leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              This transformative 3-month journey is an investment in your
              lifelong relationship with your body.
            </p>
          </div>

          <div
            className="border-2 rounded-3xl shadow-sm max-w-md mx-auto p-8 space-y-6"
            style={{
              backgroundColor: "rgb(244 244 236)",
              borderColor: "rgba(120, 89, 59, 0.2)",
            }}
          >
            <div className="space-y-2">
              <div
                className="text-4xl font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                $888
              </div>
              <div
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                3-Month Complete Program
              </div>
            </div>
            <div
              className="space-y-2 text-sm font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <div>✓ 6 Personal Sessions (60 min each)</div>
              <div>✓ Cycle Tracking Materials</div>
              <div>✓ 24/7 Text Support</div>
              <div>✓ Personalized Guidance</div>
              <div>✓ Sacred Practices & Rituals</div>
            </div>
            <Button
              className="w-full py-4 text-lg font-light tracking-wide border"
              style={{
                backgroundColor: "rgb(120 89 59)",
                color: "rgb(244 244 236)",
                borderColor: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Book Your Discovery Call
            </Button>
            <p
              className="text-xs font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Payment plans available • 30-day satisfaction guarantee
            </p>
          </div>

          <div className="space-y-4">
            <p
              className="font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Ready to begin your sacred journey? Let's start with a
              complimentary discovery call to ensure this program aligns with
              your needs and intentions.
            </p>
            <Button
              variant="outline"
              className="px-8 py-4 font-light tracking-wide border"
              style={{
                borderColor: "rgb(120 89 59)",
                color: "rgb(120 89 59)",
                backgroundColor: "transparent",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Schedule Free Discovery Call
            </Button>
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
