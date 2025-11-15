"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Calendar, Instagram, Heart } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/water-refracted.jpeg"
          alt="Peaceful water reflection representing inner journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-8">
          <div className="space-y-6 max-w-3xl">
            <div
              className="px-4 py-2 text-sm font-light tracking-wide backdrop-blur-sm rounded"
              style={{
                backgroundColor: "rgba(120, 89, 59, 0.8)",
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Let's Connect
            </div>
            <h1
              className="text-5xl md:text-7xl font-light tracking-wide leading-none"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Begin Your
            </h1>
            <h2
              className="text-5xl md:text-7xl font-light tracking-wide leading-none -mt-4"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Sacred Journey
            </h2>
            <p
              className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-2xl mx-auto"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Whether you're ready to dive deep into cyclical coaching, join us
              in Italy, or simply have questions about your path to wellness,
              I'm here to support you with love and guidance.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Ways to Connect
            </h2>
            <p
              className="text-lg leading-relaxed font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Choose the path that feels most aligned for your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm bg-white/80 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <Calendar
                  className="h-12 w-12 mx-auto"
                  style={{ color: "rgb(120 89 59)" }}
                />
                <h3
                  className="text-xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Book a Discovery Call
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Ready to explore 1:1 coaching? Let's connect for a
                  complimentary 30-minute discovery call to see if we're
                  aligned.
                </p>
                <Button
                  className="w-full font-light tracking-wide border"
                  style={{
                    backgroundColor: "rgb(120 89 59)",
                    color: "rgb(244 244 236)",
                    borderColor: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Schedule Discovery Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <Heart
                  className="h-12 w-12 mx-auto"
                  style={{ color: "rgb(120 89 59)" }}
                />
                <h3
                  className="text-xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  LOKAH Retreat Inquiry
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Interested in joining us in Italy? Let's discuss the retreat
                  details and see if this sacred journey calls to you.
                </p>
                <Button
                  variant="outline"
                  className="w-full font-light tracking-wide border"
                  style={{
                    borderColor: "rgb(120 89 59)",
                    color: "rgb(120 89 59)",
                    backgroundColor: "transparent",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Retreat Information
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-6">
                <MessageCircle
                  className="h-12 w-12 mx-auto"
                  style={{ color: "rgb(120 89 59)" }}
                />
                <h3
                  className="text-xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  General Questions
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Have questions about cyclical living, holistic health, or my
                  approach? I'd love to hear from you.
                </p>
                <Button
                  variant="outline"
                  className="w-full font-light tracking-wide border"
                  style={{
                    borderColor: "rgb(120 89 59)",
                    color: "rgb(120 89 59)",
                    backgroundColor: "transparent",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Send a Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
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
                  Send Me a Message
                </h2>
                <p
                  className="text-lg leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  I read every message personally and will respond within 24-48
                  hours. Share what's calling you, and let's explore how I can
                  support your journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail
                    className="h-5 w-5"
                    style={{ color: "rgb(120 89 59)" }}
                  />
                  <span
                    className="font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    lucy@cyclicalceremony.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram
                    className="h-5 w-5"
                    style={{ color: "rgb(120 89 59)" }}
                  />
                  <span
                    className="font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    @cyclicalceremony
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3
                  className="text-xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Follow the Journey
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Connect with me on Instagram for daily inspiration, cyclical
                  wisdom, and behind-the-scenes glimpses of this sacred work.
                </p>
                <Button
                  variant="outline"
                  className="font-light tracking-wide border"
                  style={{
                    borderColor: "rgb(120 89 59)",
                    color: "rgb(120 89 59)",
                    backgroundColor: "transparent",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </Button>
              </div>
            </div>

            <div>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/lucy/lucy-gate.jpeg"
                  alt="Lucy in peaceful setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/90">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="border-stone-300 focus:ring-amber-900/20 bg-white"
                      style={{
                        borderColor: "rgb(120 89 59)",
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="border-stone-300 focus:ring-amber-900/20 bg-white"
                      style={{
                        borderColor: "rgb(120 89 59)",
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-stone-300 focus:ring-amber-900/20 bg-white"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="interest"
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    I'm interested in...
                  </Label>
                  <select
                    className="w-full px-3 py-2 border rounded-md focus:ring-amber-900/20 bg-white"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    <option value="">Please select...</option>
                    <option value="coaching">
                      1:1 Menstrual Cycle Coaching
                    </option>
                    <option value="retreat">LOKAH Yoga Retreat</option>
                    <option value="general">General Questions</option>
                    <option value="collaboration">
                      Collaboration Opportunities
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Share what's calling you... I'd love to hear about your journey and how I might support you."
                    rows={5}
                    className="border-stone-300 focus:ring-amber-900/20 resize-none bg-white"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-4 font-light tracking-wide border"
                  style={{
                    backgroundColor: "rgb(120 89 59)",
                    color: "rgb(244 244 236)",
                    borderColor: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Send Message with Love
                </Button>

                <p
                  className="text-xs text-center font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  By sending this message, you agree to receive email
                  communications from Cyclical Ceremony. You can unsubscribe at
                  any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="/water-ripply.jpeg"
          alt="Peaceful water representing inner journey and transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-6 px-8">
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{
              color: "white",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Ready to Begin?
          </h2>
          <p
            className="text-lg font-light max-w-3xl leading-relaxed"
            style={{
              color: "white",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Your journey to cyclical wisdom and body trust starts with a single
            step. Let's take it together.
          </p>
          <Button
            size="lg"
            className="px-8 py-4 text-base font-light tracking-wide border backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(120, 89, 59, 0.8)",
              color: "white",
              borderColor: "rgba(120, 89, 59, 0.8)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Book Free Discovery Call
          </Button>
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
