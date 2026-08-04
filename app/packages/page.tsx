import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, Mountain, Waves, Bus, Users, Briefcase, Calendar, Phone, MapPin, ArrowRight, Star, Clock, Shield, Mail, Sparkles, Compass, Heart, Globe, Award, Zap, Sun, Moon, Cloud, Eye, ThumbsUp, Coffee, Camera, Music } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Weekend Treks, Pilgrimage Tours & Vehicle Services | Mathrushree Holidays",
  description: "Explore weekend adventure treks at Dudhsagar, Kudremukha, Gokarna & more. Monthly Amavasya & Pournami pilgrimage tours. Airport pickup, corporate bookings & AC/Non-AC vehicle rentals from Bengaluru.",
  keywords: "weekend treks Bangalore, Dudhsagar Falls trek, Kudremukha trek, Gokarna beach trek, pilgrimage tours, Amavasya pilgrimage, Pournami pilgrimage, Tirupati Sarva Darshana, vehicle rental Bangalore, corporate team building, adventure trips",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Adventure Treks, Pilgrimages & Vehicle Services | Mathrushree Holidays",
    description: "Weekend treks, monthly pilgrimages, vehicle rentals & corporate events from Bengaluru.",
    type: "website",
  },
};

// ============ DATA ============
const site = {
  whatsapp: "9480399555",
  phone: "094803 99555",
  phoneDisplay: "094803 99555",
  email: "info@mathrushreeholidays.com",
};

const adventureTreks = [
  { name: "Dudhsagar Falls Trek", image: "/dudhsagar.png", difficulty: "Moderate", duration: "2 Days" },
  { name: "Gangadikal Trek", image: "/gangdikal.png", difficulty: "Moderate", duration: "2 Days" },
  { name: "Bandaje Falls Trek", image: "/bandage.png", difficulty: "Moderate", duration: "2 Days" },
  { name: "Kyathanamakki Trek", image: "/kyathanamakki.png", difficulty: "Easy-Moderate", duration: "2 Days" },
  { name: "Kudremukha Peak Trek", image: "/kudremukha.png", difficulty: "Moderate", duration: "2 Days" },
  { name: "Netravathi Peak Trek", image: "/netravathi.png", difficulty: "Moderate-Difficult", duration: "2 Days" },
  { name: "Gokarna Beach Trek", image: "/gokarna.png", difficulty: "Easy", duration: "2 Days" },
  { name: "Kumara Parvata Trek", image: "/kumaraparvata.png", difficulty: "Difficult", duration: "2 Days" },
  { name: "Scuba Diving", image: "/scubadiving.png", difficulty: "Easy", duration: "1 Day" },
];

const pilgrimageTours = [
  {
    title: "Amavasya Pilgrimage",
    description: "Every month on New Moon day",
    destinations: [
      "Sigandur Chowdeshwari",
      "Kollur Mookambika Temple",
      "Melmaruvathur Om Sakthi Temple",
      "Male Mahadeshwara Betta"
    ],
    image: "/Everymonth(Amavasya)SigandurChowdeshwariAndKollurMookambika.png",
    slug: "amavasya"
  },
  {
    title: "Pournami Pilgrimage",
    description: "Every month on Full Moon day",
    destinations: ["Tiruvannamalai (Giri Pradakshina)"],
    image: "/Everymonth(Pournami)Tiruvannamalai.png",
    slug: "pournami"
  },
  {
    title: "Tirupati Sarva Darshana",
    description: "Standing package with priority darshan",
    destinations: ["Tirupati Balaji Temple"],
    image: "/tirupatisarvdarshana.png",
    slug: "tirupati"
  }
];

const services = [
  {
    icon: <Bus className="h-6 w-6" />,
    title: "Airport Pickup & Drop",
    description: "Hassle-free transfers from any airport or railway station to your destination.",
    image: "/airportpickup.png"
  },
  {
    icon: <Bus className="h-6 w-6" />,
    title: "Local & Outstation Vehicles",
    description: "AC and Non-AC deluxe vehicles available for local sightseeing and outstation travel.",
    image: "/acandnotac.png"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Friends & Family Tour",
    description: "Customized group tours for families and friend circles with flexible itineraries.",
    image: "/friendsandfamilytour.png"
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Corporate Booking",
    description: "Professional corporate team building, offsite events, and group retreats.",
    image: "/corporatebooking.png"
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Events Booking",
    description: "Special event planning and coordination for groups, celebrations, and functions.",
    image: "/eventsbooking.png"
  }
];

// ============ COMPONENTS ============
function RevealStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export default function Packages() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-deep via-teal to-teal-light px-5 py-20 sm:px-8 sm:py-28">
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 animate-float-slow opacity-20">
            <Compass className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float-medium opacity-20">
            <Globe className="h-20 w-20 text-white" />
          </div>
          <div className="absolute top-1/2 left-1/4 animate-float-fast opacity-10">
            <Star className="h-12 w-12 text-white" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-pulse-slow opacity-15">
            <Zap className="h-14 w-14 text-white" />
          </div>
          <div className="absolute top-20 right-20 animate-spin-slow opacity-10">
            <Sun className="h-24 w-24 text-white" />
          </div>
          <div className="absolute bottom-20 left-20 animate-spin-slow opacity-10">
            <Moon className="h-20 w-20 text-white" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow opacity-5">
            <div className="h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative mx-auto max-w-5xl text-center text-white">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm animate-pulse-glow">
              <Sparkles className="h-4 w-4 animate-sparkle" />
              Explore with Mathrushree Holidays
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl animate-slide-up">
              Adventure Treks, Pilgrimages &amp; Vehicle Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl animate-fade-in-delay">
              Weekend treks, monthly pilgrimages, vehicle rentals &amp; corporate events — all from Bengaluru.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/91${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 font-semibold text-teal-deep transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-teal-deep animate-slide-right"
              >
                View Services <ArrowRight className="h-5 w-5 animate-slide-right" />
              </a>
            </div>
          </Reveal>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="h-12 w-6 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="h-2 w-1.5 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== ADVENTURE TREKS SECTION ===== */}
      <section id="adventure" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 bg-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-medium" />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal">
              <Mountain className="h-5 w-5 animate-bounce-hover" />
              <span className="font-mono text-xs uppercase tracking-widest text-road animate-pulse-glow">Every Weekend (Seasonal)</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-medium text-teal sm:text-4xl animate-slide-up">
              Adventure Treks &amp; Trips
            </h2>
            <p className="mt-3 max-w-2xl text-ink/70 animate-fade-in-delay">
              Group departures every weekend through the trekking season. Transport, guide, 
              and stay arrangements included. Contact us for the next available date.
            </p>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adventureTreks.map((trek, i) => (
              <Reveal key={trek.name} delay={i * 0.03}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-scale-hover">
                  <div className="relative w-full bg-gray-100" style={{ paddingBottom: '66.67%' /* 3:2 aspect ratio */ }}>
                    <Image
                      src={trek.image}
                      alt={`${trek.name} - Mathrushree Holidays`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105 animate-zoom-hover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm animate-fade-in">
                        {trek.difficulty}
                      </span>
                      <span className="rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm animate-fade-in">
                        {trek.duration}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Heart className="h-5 w-5 text-white animate-pulse-glow" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-teal-deep group-hover:text-teal transition-colors">
                      {trek.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2">
                      <a
                        href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                          `Hi, I'm interested in the ${trek.name}. Please share details.`
                        )}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-teal-deep hover:scale-105 animate-bounce-hover"
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire Now
                      </a>
                      <Eye className="h-4 w-4 text-ink/30 animate-pulse-glow" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </RevealStagger>

          <Reveal className="mt-8 text-center">
            <a
              href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                "Hi, I'd like details on the next weekend trek departure."
              )}`}
              className="inline-flex items-center gap-2 rounded-full bg-road px-8 py-3.5 font-semibold text-paper transition-all hover:scale-105 hover:shadow-xl animate-pulse-glow"
            >
              <MessageCircle className="h-5 w-5 animate-slide-right" /> Ask about next departure
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== PILGRIMAGE TOURS SECTION ===== */}
      <section id="pilgrimage" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 h-96 w-96 rounded-full bg-teal blur-3xl animate-spin-slow" />
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold blur-3xl animate-float-slow" />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal">
              <Clock className="h-5 w-5 animate-spin-slow" />
              <span className="font-mono text-xs uppercase tracking-widest text-road animate-pulse-glow">Monthly Departures</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-medium text-teal sm:text-4xl animate-slide-up">
              Pilgrimage Tours
            </h2>
            <p className="mt-3 max-w-2xl text-ink/70 animate-fade-in-delay">
              Fixed monthly group departures timed to the lunar calendar. 
              Spiritual journeys with comfortable travel arrangements.
            </p>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pilgrimageTours.map((pilgrimage, i) => (
              <Reveal key={pilgrimage.slug} delay={i * 0.06}>
                <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-scale-hover">
                  <div className="relative w-full bg-gray-100" style={{ paddingBottom: '66.67%' /* 3:2 aspect ratio */ }}>
                    <Image
                      src={pilgrimage.image}
                      alt={`${pilgrimage.title} - Mathrushree Holidays`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105 animate-zoom-hover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Sparkles className="h-5 w-5 text-yellow-300 animate-sparkle" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-teal-deep group-hover:text-teal transition-colors">
                      {pilgrimage.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink/60">{pilgrimage.description}</p>
                    <ul className="mt-3 space-y-1.5">
                      {pilgrimage.destinations.map((dest) => (
                        <li key={dest} className="flex items-start gap-2 text-sm text-ink/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-road animate-pulse-glow" />
                          {dest}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                          `Hi, I'm interested in the ${pilgrimage.title} pilgrimage. Please share the next date.`
                        )}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-teal-deep hover:scale-105 animate-bounce-hover"
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire Now
                      </a>
                      <ThumbsUp className="h-4 w-4 text-ink/30 animate-pulse-glow" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="scroll-mt-24 border-t border-line/70 bg-mist/20 px-5 py-16 sm:px-8 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-gold blur-3xl animate-float-medium" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-slow" />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal">
              <Shield className="h-5 w-5 animate-pulse-glow" />
              <span className="font-mono text-xs uppercase tracking-widest text-road animate-pulse-glow">Additional Services</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-medium text-teal sm:text-4xl animate-slide-up">
              Vehicles, Events &amp; More
            </h2>
            <p className="mt-3 max-w-2xl text-ink/70 animate-fade-in-delay">
              From airport transfers to corporate events — we&apos;ve got you covered.
            </p>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-scale-hover">
                  <div className="relative w-full bg-gray-50 rounded-xl overflow-hidden" style={{ paddingBottom: '66.67%' /* 3:2 aspect ratio */ }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} - Mathrushree Holidays`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105 animate-zoom-hover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Camera className="h-5 w-5 text-white animate-pulse-glow" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-teal">
                    <div className="animate-bounce-hover">{service.icon}</div>
                    <h3 className="font-display text-lg font-semibold text-teal-deep group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-ink/70">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                        `Hi, I'm interested in your ${service.title} service. Please share details.`
                      )}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-teal px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-teal-deep hover:scale-105 animate-bounce-hover"
                    >
                      <MessageCircle className="h-4 w-4" /> Enquire Now
                    </a>
                    <Coffee className="h-4 w-4 text-ink/30 animate-pulse-glow" />
                  </div>
                </div>
              </Reveal>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ===== CONTACT / CTA SECTION ===== */}
      <section className="border-t border-line/70 bg-gradient-to-br from-teal-deep to-teal px-5 py-16 sm:px-8 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-spin-slow" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl animate-slide-up">
              Plan Your Next Adventure Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-teal-light/90 animate-fade-in-delay">
              Contact us for more details, group bookings, or custom itineraries. 
              We&apos;re here to make your journey unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/91${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-marigold px-8 py-3.5 font-semibold text-teal-deep transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-teal-deep animate-slide-right"
              >
                <Phone className="h-5 w-5" /> Call {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-teal-deep animate-slide-left"
              >
                <Mail className="h-5 w-5" /> Email Us
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-teal-light/80">
              <MapPin className="h-4 w-4 animate-bounce-hover" />
              <span>Bengaluru, Karnataka</span>
              <Award className="h-4 w-4 ml-2 animate-pulse-glow" />
            </div>
            <div className="mt-4 flex justify-center gap-4 text-teal-light/60">
              <Music className="h-4 w-4 animate-pulse-glow" />
              <Cloud className="h-4 w-4 animate-float-slow" />
              <Eye className="h-4 w-4 animate-pulse-glow" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GLOBAL STYLES WITH ANIMATIONS ===== */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Base animations */
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }

          @keyframes fadeInDelay {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in-delay { animation: fadeInDelay 1s ease-out forwards; animation-delay: 0.3s; }

          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-right { animation: slideRight 0.5s ease-out forwards; }

          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-left { animation: slideLeft 0.5s ease-out forwards; }

          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }

          @keyframes floatMedium {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          .animate-float-medium { animation: floatMedium 4s ease-in-out infinite; }

          @keyframes floatFast {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float-fast { animation: floatFast 2s ease-in-out infinite; }

          @keyframes pulseGlow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          .animate-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }

          @keyframes pulseSlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
          .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }

          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spinSlow 20s linear infinite; }

          @keyframes bounceSlow {
            0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
            50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
          }
          .animate-bounce-slow { animation: bounceSlow 2s infinite; }

          @keyframes bounceHover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-hover { animation: bounceHover 2s ease-in-out infinite; }

          @keyframes scaleHover {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .animate-scale-hover { transition: transform 0.3s ease; }
          .animate-scale-hover:hover { transform: scale(1.03); }

          @keyframes zoomHover {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-zoom-hover { transition: transform 0.5s ease; }
          .animate-zoom-hover:hover { transform: scale(1.08); }

          @keyframes sparkle {
            0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.5; transform: scale(1.3) rotate(180deg); }
          }
          .animate-sparkle { animation: sparkle 1.5s ease-in-out infinite; }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }

          /* Custom colors */
          .bg-teal-deep { background-color: #0d6b6b; }
          .text-teal-deep { color: #0d6b6b; }
          .bg-teal-light { background-color: #a8d5d5; }
          .text-teal-light { color: #a8d5d5; }
          .bg-marigold { background-color: #e8a838; }
          .hover\\:bg-marigold-dark:hover { background-color: #d4952e; }
          .bg-paper { background-color: #faf8f4; }
          .text-ink { color: #2d2a24; }
          .border-line { border-color: #e8e4dc; }
          .bg-road { background-color: #2a6b6b; }
          .bg-gold { background-color: #e8a838; }
        `
      }} />
    </>
  );
}