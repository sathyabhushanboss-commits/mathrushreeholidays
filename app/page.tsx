'use client';

import { MessageCircle, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useRef, useState, useEffect } from 'react';

// ============ TYPES ============
interface Testimonial {
  quote: string;
  name: string;
  trip: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface Site {
  whatsapp: string;
  phone: string;
  address: string;
  email: string;
}

// ============ ANIMATION COMPONENTS ============
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`animate-fadeUp ${className}`}>
      {children}
    </div>
  );
}

function RevealStagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}

// ============ DATA ============
const testimonials: Testimonial[] = [
  {
    quote: "The trek to Dudhsagar was magical! Everything was perfectly organized from pickup to drop-off. Highly recommend their adventure packages.",
    name: "Priya Sharma",
    trip: "Dudhsagar Falls Trek, 2025",
    image: "/dudhsagar.png"
  },
  {
    quote: "Our corporate team building at Kudremukha was unforgettable. The guides were professional and the arrangements were flawless.",
    name: "Vikram Reddy",
    trip: "Corporate Team Building, Kudremukha",
    image: "/kudremukha.png"
  },
  {
    quote: "The Gokarna beach trek was exactly what we needed - peaceful, scenic, and well-planned. Will definitely book again!",
    name: "Ananya Patel",
    trip: "Gokarna Beach Trek, 2025",
    image: "/gokarna.png"
  }
];

const features: Feature[] = [
  {
    title: "Airport Pickup & Drop",
    description: "Hassle-free transportation from any airport or railway station to your adventure destination.",
    image: "/airportpickup.png"
  },
  {
    title: "Scuba Diving",
    description: "Explore the underwater world with certified instructors and top-notch equipment.",
    image: "/scubadiving.png"
  },
  {
    title: "Tirupati Sarva Darshana",
    description: "Specialized pilgrimage tours with priority darshan arrangements and comfortable travel.",
    image: "/tirupatisarvdarshana.png"
  },
  {
    title: "Friends & Family Tours",
    description: "Customized group tours for families and friend circles with flexible itineraries.",
    image: "/friendsandfamilytour.png"
  },
  {
    title: "Gangadikal Trek",
    description: "Challenging treks through dense forests and stunning landscapes for adventure enthusiasts.",
    image: "/gangdikal.png"
  },
  {
    title: "Every Month Special Tours",
    description: "Monthly special tours including Amavasya and Pournami pilgrimages to sacred destinations.",
    image: "/Everymonth(Amavasya)SigandurChowdeshwariAndKollurMookambika.png"
  }
];

// ============ MAIN COMPONENT ============
export default function HomePage() {
  const site: Site = {
    whatsapp: "9480399555",
    phone: "094803 99555",
    address: "43, Muneshwara Temple St, Mookambika Nagar, Banashankari 3rd Stage, Hosakerehalli, Bhind, Bengaluru, Karnataka 560085",
    email: "info@mathrushreeholidays.com"
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        video.play().catch(() => {
          console.log('Autoplay prevented');
        });
      });
    }
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
    };
  }, []);

  return (
    <>
      {/* ===== HERO SECTION WITH FULL VIDEO BACKGROUND ===== */}
      <section className="relative w-full overflow-hidden bg-teal-deep">
        {/* Video Container with correct aspect ratio */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 */ }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            src="/download.mp4"
          />
          {/* Loading placeholder */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-b from-teal-deep to-teal-50 animate-pulse" />
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="h-12 w-6 rounded-full border-2 border-white/60 flex items-start justify-center p-1 animate-bounce">
            <div className="h-2 w-1.5 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== RED & GOLD LUXURY VEHICLES PARAGRAPH ===== */}
      <section className="px-5 py-10 sm:py-14 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <div className="inline-block mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-yellow-200 font-medium leading-relaxed max-w-4xl mx-auto">
                <span className="text-yellow-300 font-bold">All kinds of luxury vehicles</span> 
                <span className="text-white"> available — from premium sedans and SUVs to spacious tempo travelers and luxury buses. </span>
                <span className="text-yellow-300 font-bold">24/7 service</span>
                <span className="text-white"> ensures you get reliable transportation and support whenever you need it, day or night.</span>
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-12 h-1 bg-yellow-400/60 rounded-full"></div>
                <div className="w-12 h-1 bg-yellow-400/30 rounded-full"></div>
                <div className="w-12 h-1 bg-yellow-400/10 rounded-full"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 bg-paper">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-teal/70">Why Choose Us</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-teal-deep">
              Unforgettable Experiences
            </h2>
          </Reveal>

          <RevealStagger className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group rounded-2xl border border-line bg-white p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-50" style={{ paddingBottom: '75%' }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl font-semibold text-teal-deep">
                  {feature.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-ink/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-teal/70">Postcards back to us</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-teal-deep">
              What travellers write in
            </h2>
          </Reveal>

          <RevealStagger className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <blockquote 
                key={index} 
                className="group h-full rounded-2xl border border-line bg-paper p-4 sm:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative w-full overflow-hidden rounded-lg mb-3 sm:mb-4 bg-gray-50" style={{ paddingBottom: '75%' }}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.trip}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="font-display text-base sm:text-lg italic leading-relaxed text-ink/85">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-3 sm:mt-5 border-t border-line pt-3 sm:pt-4">
                  <p className="text-sm font-semibold text-teal-deep">{testimonial.name}</p>
                  <p className="font-mono text-xs text-ink/50">{testimonial.trip}</p>
                </footer>
              </blockquote>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 bg-gradient-to-b from-paper to-white">
        <Reveal className="mx-auto max-w-4xl rounded-2xl sm:rounded-3xl bg-teal-deep px-6 sm:px-8 md:px-16 py-10 sm:py-14 text-center text-white shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium">
            Tell us your dates, we&apos;ll plot the route.
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-teal-light/80 text-sm sm:text-base">
            Share your group size and rough dates over WhatsApp or a call —
            we&apos;ll send back a plan the same day.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`https://wa.me/91${site.whatsapp}`}
              className="group flex items-center justify-center gap-2 rounded-full bg-marigold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-teal-deep hover:bg-marigold-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={17} className="group-hover:rotate-12 transition-transform" /> 
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-teal-deep transition-all duration-300"
            >
              Contact page 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ===== FOOTER WITH ADDRESS & PHONE ===== */}
      <footer className="bg-teal-deep text-white/90">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-12 sm:px-8">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Company Info */}
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white">Mathrushree Holidays</h3>
              <p className="mt-2 text-xs sm:text-sm text-teal-light/70">
                Your trusted partner for adventure treks, pilgrimages, and custom tours across India.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-base sm:text-lg font-semibold text-white">Contact Us</h4>
              <div className="mt-3 space-y-2 sm:space-y-3">
                <a 
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-teal-light/80 hover:text-white transition-colors group"
                >
                  <Phone size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="break-all">{site.phone}</span>
                </a>
                <a 
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-teal-light/80 hover:text-white transition-colors group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="break-all">{site.email}</span>
                </a>
                <a 
                  href={`https://wa.me/91${site.whatsapp}`}
                  className="flex items-center gap-3 text-xs sm:text-sm text-teal-light/80 hover:text-white transition-colors group"
                >
                  <MessageCircle size={16} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-display text-base sm:text-lg font-semibold text-white">Visit Us</h4>
              <div className="mt-3 flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-teal-light" />
                <p className="text-xs sm:text-sm text-teal-light/80 leading-relaxed">
                  {site.address}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-teal-light/60">
              &copy; {new Date().getFullYear()} Mathrushree Holidays. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING CONTACT BUTTONS ===== */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/91${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} className="sm:w-6 sm:h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs sm:text-sm font-medium">
            WhatsApp
          </span>
        </a>

        {/* Phone Call */}
        <a
          href={`tel:${site.phone.replace(/\s/g, '')}`}
          className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Call us"
        >
          <Phone size={20} className="sm:w-6 sm:h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs sm:text-sm font-medium">
            Call Now
          </span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Email us"
        >
          <Mail size={20} className="sm:w-6 sm:h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs sm:text-sm font-medium">
            Email
          </span>
        </a>
      </div>

      {/* ===== GLOBAL STYLES ===== */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* ===== ANIMATIONS ===== */
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeUp {
            animation: fadeUp 0.8s ease-out forwards;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
          
          .animate-bounce {
            animation: bounce 1.5s infinite;
          }

          /* ===== CUSTOM COLOR OVERRIDES ===== */
          .bg-teal-deep {
            background-color: #0d6b6b;
          }
          .text-teal-deep {
            color: #0d6b6b;
          }
          .hover\\:bg-teal-deep:hover {
            background-color: #0a5252;
          }
          .text-teal-light {
            color: #a8d5d5;
          }
          .bg-marigold {
            background-color: #e8a838;
          }
          .hover\\:bg-marigold-dark:hover {
            background-color: #d4952e;
          }
          .bg-paper {
            background-color: #faf8f4;
          }
          .text-ink {
            color: #2d2a24;
          }
          .border-line {
            border-color: #e8e4dc;
          }
        `
      }} />
    </>
  );
}