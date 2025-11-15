"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function RetreatPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/retreat/trees-dirt-road.jpeg"
          alt="Breathtaking landscape in Abruzzo mountains"
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
              May 2025 • Abruzzo, Italy
            </div>
            <h1
              className="text-6xl md:text-8xl font-light tracking-wide leading-none"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              LOKAH
            </h1>
            <h2
              className="text-3xl md:text-4xl font-light leading-tight -mt-2"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Cyclical Yoga Retreat
            </h2>
            <p
              className="text-lg md:text-xl font-light leading-relaxed opacity-90 max-w-2xl mx-auto"
              style={{
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              A transformative 7-day journey in the breathtaking Abruzzo
              National Park, where ancient yoga wisdom meets cyclical living in
              Italy's most pristine landscape.
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
              A Sacred Journey Awaits
            </h2>
            <p
              className="text-lg leading-relaxed font-light max-w-3xl mx-auto"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              LOKAH is more than a retreat—it's a pilgrimage to your authentic
              self, guided by the rhythms of nature and the wisdom of your
              cyclical body.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: "rgba(120, 89, 59, 0.1)" }}
              >
                <span
                  className="text-2xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  7
                </span>
              </div>
              <h3
                className="text-xl font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Days
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Immersive experience in Italy's pristine wilderness
              </p>
            </div>
            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: "rgba(120, 89, 59, 0.1)" }}
              >
                <span
                  className="text-2xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  🏔️
                </span>
              </div>
              <h3
                className="text-xl font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Abruzzo National Park
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Ancient mountains, pristine forests, and sacred landscapes
              </p>
            </div>
            <div className="text-center space-y-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: "rgba(120, 89, 59, 0.1)" }}
              >
                <span
                  className="text-2xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  12
                </span>
              </div>
              <h3
                className="text-xl font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Intimate Group
              </h3>
              <p
                className="font-light"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Limited to 12 women for deep connection and transformation
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3
                className="text-3xl md:text-4xl font-light leading-tight"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                What Makes LOKAH Special
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className="w-2 h-2 rounded-full mt-3"
                    style={{ backgroundColor: "rgb(120 89 59)" }}
                  ></div>
                  <div>
                    <h4
                      className="text-lg font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Daily Grounding Yoga
                    </h4>
                    <p
                      className="font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Morning practices that align you with your cyclical nature
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-2 h-2 rounded-full mt-3"
                    style={{ backgroundColor: "rgb(120 89 59)" }}
                  ></div>
                  <div>
                    <h4
                      className="text-lg font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Farm-to-Table Italian Cuisine
                    </h4>
                    <p
                      className="font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Nourishing meals crafted from local, seasonal ingredients
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-2 h-2 rounded-full mt-3"
                    style={{ backgroundColor: "rgb(120 89 59)" }}
                  ></div>
                  <div>
                    <h4
                      className="text-lg font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Ceramics & Creative Expression
                    </h4>
                    <p
                      className="font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Hands-on workshops to connect with your creative essence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div
                    className="w-2 h-2 rounded-full mt-3"
                    style={{ backgroundColor: "rgb(120 89 59)" }}
                  ></div>
                  <div>
                    <h4
                      className="text-lg font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Cyclical Wisdom Teachings
                    </h4>
                    <p
                      className="font-light"
                      style={{
                        color: "rgb(120 89 59)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Deep dives into menstrual cycle awareness and body wisdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src="/retreat/yoga-beach.jpeg"
                  alt="Women practicing yoga in serene mountain setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-amber-900">
              Your Daily Rhythm
            </h2>
            <p className="text-lg text-amber-800 font-light">
              Each day flows with intention, honoring both structure and
              spontaneity.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-amber-900">
                    Morning
                  </h3>
                  <Badge className="bg-amber-900/10 text-amber-900 border-0 px-4 py-2">
                    6:30 - 10:00
                  </Badge>
                </div>
                <div className="space-y-3 text-amber-800 font-light">
                  <p>• Sunrise meditation and intention setting</p>
                  <p>• Grounding yoga practice (75 minutes)</p>
                  <p>• Nourishing breakfast with local ingredients</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-amber-900">Midday</h3>
                  <Badge className="bg-amber-900/10 text-amber-900 border-0 px-4 py-2">
                    10:00 - 14:00
                  </Badge>
                </div>
                <div className="space-y-3 text-amber-800 font-light">
                  <p>• Cyclical wisdom workshops and teachings</p>
                  <p>• Creative expression through ceramics</p>
                  <p>• Nature walks and forest bathing</p>
                  <p>• Farm-fresh lunch in the garden</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-amber-900">
                    Afternoon & Evening
                  </h3>
                  <Badge className="bg-amber-900/10 text-amber-900 border-0 px-4 py-2">
                    14:00 - 21:00
                  </Badge>
                </div>
                <div className="space-y-3 text-amber-800 font-light">
                  <p>• Rest and integration time</p>
                  <p>• Optional hiking in the national park</p>
                  <p>• Restorative yoga and breathwork</p>
                  <p>• Communal dinner and sharing circles</p>
                  <p>• Evening reflection and journaling</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Meet Your Guides
            </h2>
            <p
              className="text-lg font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Two devoted practitioners united in their mission to honor the
              sacred feminine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/retreat/lucy-farm.jpeg"
                  alt="Lucy, holistic health and menstrual cycle coach"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3
                  className="text-3xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Lucy
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  A devoted student of yoga for over twelve years, Lucy
                  completed her 200 YTT in Bali and is currently training as a
                  Menstrual Cycle Coach at Cyclical School. Her teaching weaves
                  together movement, meditation, and cyclical wisdom, creating
                  sacred containers for healing and self-reflection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="px-3 py-1 text-sm font-light rounded"
                    style={{
                      backgroundColor: "rgba(120, 89, 59, 0.1)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    200 YTT Certified
                  </div>
                  <div
                    className="px-3 py-1 text-sm font-light rounded"
                    style={{
                      backgroundColor: "rgba(120, 89, 59, 0.1)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Holistic Health Coach
                  </div>
                  <div
                    className="px-3 py-1 text-sm font-light rounded"
                    style={{
                      backgroundColor: "rgba(120, 89, 59, 0.1)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Cyclical School Student
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/retreat/hannah.jpeg"
                  alt="Hannah, yoga teacher and retreat co-host"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3
                  className="text-3xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Hannah
                </h3>
                <p
                  className="leading-relaxed font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Hannah brings years of experience in yoga instruction and
                  retreat facilitation. Her deep connection to Italian culture
                  and the Abruzzo region, combined with her expertise in
                  ceramics and creative arts, creates the perfect complement to
                  Lucy's cyclical wisdom teachings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="px-3 py-1 text-sm font-light rounded"
                    style={{
                      backgroundColor: "rgba(120, 89, 59, 0.1)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Yoga Instructor
                  </div>
                  <div
                    className="px-3 py-1 text-sm font-light rounded"
                    style={{
                      backgroundColor: "rgba(120, 89, 59, 0.1)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Ceramics Artist
                  </div>
                  <div
                    className="px-3 py-1 text-sm font-light rounded"
                    style={{
                      backgroundColor: "rgba(120, 89, 59, 0.1)",
                      color: "rgb(120 89 59)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Retreat Facilitator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/retreat/spiral.jpeg"
          alt="Sacred spiral in nature representing cyclical wisdom"
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
            Abruzzo National Park
          </h2>
          <p
            className="text-lg font-light max-w-3xl leading-relaxed"
            style={{
              color: "white",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Nestled in the heart of Italy's Apennine Mountains, Abruzzo National
            Park offers some of Europe's most pristine wilderness. Ancient beech
            forests, crystal-clear mountain streams, and dramatic peaks create
            the perfect sanctuary for inner exploration and cyclical connection.
          </p>
        </div>
      </section>

      <section
        className="py-24 px-8"
        style={{ backgroundColor: "rgb(244 244 236)" }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2
              className="text-4xl md:text-5xl font-light leading-tight"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Join the LOKAH Journey
            </h2>
            <p
              className="text-lg font-light"
              style={{
                color: "rgb(120 89 59)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Limited to 12 women for an intimate, transformative experience.
            </p>
          </div>

          <Card className="border-0 shadow-xl max-w-lg mx-auto bg-white/90">
            <CardContent className="p-8 space-y-8">
              <div className="space-y-2">
                <div
                  className="text-4xl font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  €2,200
                </div>
                <div
                  className="font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  7-Day All-Inclusive Retreat
                </div>
              </div>

              <Separator className="bg-stone-200" />

              <div
                className="space-y-4 text-sm font-light text-left"
                style={{
                  color: "rgb(120 89 59)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <div className="flex justify-between">
                  <span>✓ 7 nights accommodation</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ All meals (farm-to-table)</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Daily yoga classes</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Ceramics workshops</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Cyclical wisdom teachings</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Nature excursions</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ All materials & supplies</span>
                </div>
              </div>

              <Separator className="bg-stone-200" />

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full py-4 text-lg font-light tracking-wide border"
                  style={{
                    backgroundColor: "rgb(120 89 59)",
                    color: "rgb(244 244 236)",
                    borderColor: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Reserve Your Space
                </Button>
                <p
                  className="text-xs font-light"
                  style={{
                    color: "rgb(120 89 59)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  €500 deposit to secure your spot • Payment plans available
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
