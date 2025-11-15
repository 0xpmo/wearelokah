"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/water-refracted.jpeg"
          alt="Peaceful water reflection representing inner journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-8">
          <div className="space-y-6 max-w-3xl">
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
      </section> */}

      <section
        className="py-24 px-8 min-h-screen"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-light mb-4"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Contact Us
            </h1>
            <p
              className="text-base md:text-lg font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Any inquiries please drop them below X
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Section */}
            <div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder=""
                    className="border-stone-300 focus:ring-amber-900/20"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      backgroundColor: "rgb(244 244 236)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
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
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    className="border-stone-300 focus:ring-amber-900/20"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      backgroundColor: "rgb(244 244 236)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder=""
                    className="border-stone-300 focus:ring-amber-900/20"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      backgroundColor: "rgb(244 244 236)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="comment"
                    className="text-sm font-light"
                    style={{
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Comment
                  </Label>
                  <Textarea
                    id="comment"
                    placeholder=""
                    rows={5}
                    className="border-stone-300 focus:ring-amber-900/20 resize-none"
                    style={{
                      borderColor: "rgb(120 89 59)",
                      color: "rgb(120 89 59)",
                      backgroundColor: "rgb(244 244 236)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-3 font-light tracking-wide rounded-md"
                  style={{
                    backgroundColor: "rgb(120 89 59)",
                    color: "rgb(244 244 236)",
                    borderColor: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Send
                </Button>
              </form>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-square overflow-hidden rounded-full">
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

      {/* <section className="relative h-[50vh] overflow-hidden">
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
      </section> */}

      <Footer />
    </div>
  );
}
