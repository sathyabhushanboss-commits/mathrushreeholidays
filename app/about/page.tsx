import type { Metadata } from "next";
import Image from "next/image";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { RouteLine } from "@/components/RouteLine";
import ScrollingFleet from "@/components/ScrollingFleet"; 
import { site } from "@/lib/site";
import { 
  MessageCircle, MapPin, Phone, Users, Shield, Star, 
  Sparkles, Compass, Globe, Zap, Sun, Moon, Coffee, Award, Mail, Cloud, Eye
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Mathrushree Holidays",
  description: "Mathrushree Holidays is a trusted travel agency in Hosakerehalli, Bangalore with 21 years of experience. We offer custom tour packages and luxury vehicle rentals.",
  keywords: "Mathrushree Holidays, Bangalore travel agency, Hosakerehalli, vehicle rental, tour packages, holiday itineraries, Tempo Traveller rental, luxury car hire, group travel Bangalore",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us - Mathrushree Holidays",
    description: "Trusted travel agency in Bangalore since 2005. Custom tour packages & premium vehicle rentals.",
    type: "website",
  },
};

// ============ DATA ============
const principles = [
  {
    title: "We drive the routes ourselves",
    body: "Before a stay or a trek goes into an itinerary, someone from our team has been there — checked the road condition, eaten at the stop, met the homestay owner.",
  },
  {
    title: "One point of contact, start to finish",
    body: "The person who quotes your trip is the person you call if a bus is late or a room needs changing. No handoffs, no call centre.",
  },
  {
    title: "Pace over packing",
    body: "We'd rather cut a stop than rush one. Itineraries leave room for the detour, the second cup of coffee, the nap in the car.",
  },
];

// ============================================================
// UPDATED FLEET ARRAY (Pointing to your public/vehicle folder)
// ============================================================
const fleet = [
  { src: "/vehicle/TempoTraveller-9Seater.png", label: "9 Seater Tempo" },
  { src: "/vehicle/TempoTraveller-12Seater.png", label: "12 Seater Tempo" },
  { src: "/vehicle/TempoTraveller-15Seater.png", label: "15 Seater Tempo" },
  { src: "/vehicle/TempoTraveller-17Seater.png", label: "17 Seater Tempo" },
  { src: "/vehicle/ToyotaInnovaCrysta-7Seater.png", label: "Innova Crysta" },
  { src: "/vehicle/ToyotaInnova-8Seater.png", label: "Innova" },
  { src: "/vehicle/SUV-6Seater.png", label: "SUV" },
  { src: "/vehicle/Sedan-4Seater.png", label: "Sedan" },
  { src: "/vehicle/LuxuryBus-20Seater.png", label: "20 Seater Bus" },
  { src: "/vehicle/LuxuryBus-25Seater.png", label: "25 Seater Bus" },
  { src: "/vehicle/LuxuryBus-32Seater.png", label: "32 Seater Bus" },
  { src: "/vehicle/MiniBus-18Seater.png", label: "18 Seater Mini Bus" },
  { src: "/vehicle/ForceUrbania-12Seater.png", label: "Force Urbania" },
  { src: "/vehicle/ForceTraveller-15Seater.png", label: "Force Traveller" },
  { src: "/vehicle/Scorpio-7Seater.png", label: "Scorpio" },
];

// Reviews from your Google Business Profile
const reviews = [
  {
    name: "DARSHAN M R",
    date: "8 months ago",
    text: "Good service all good vehicles neat and clean and professional drivers",
    rating: 5
  },
  {
    name: "Sandhya P",
    date: "a year ago",
    text: "Amazing Driving Quality 100% Recommended For Everyone 1day are 15 days Trip i am Recommend to all Totally Responsibility is Superb and Vehicle also very cleaned and Comfortable. Thank you Krishna Sir",
    rating: 5
  },
  {
    name: "Sachin Kotian",
    date: "a year ago",
    text: "Very professional service by Mathrushree Holidays, we had booked Tempo traveller. It was clean and our driver was very polite and helpful.",
    rating: 5
  },
  {
    name: "saras saras",
    date: "a year ago",
    text: "Very good travel experience, thank u Rajendra for good obliging and co-ordination.",
    rating: 5
  },
  {
    name: "Nikhitha Nikhitha",
    date: "3 years ago",
    text: "Went back in December to book a holiday for my parents, as a Christmas gift.. the girl took down all our details and said she will get back to us with a package holiday for them in a couple of days. I am still waiting on a response.",
    rating: 4
  },
  {
    name: "TR somashekar Shekara",
    date: "8 months ago",
    text: "Professional drivers highly recommend travel agency thank you mathrushree holidays and team",
    rating: 5
  },
  {
    name: "chandru Shekar",
    date: "3 years ago",
    text: "Super service I am very happy good condition vehicle safe driving thank you mathrushree travels and team",
    rating: 5
  },
  {
    name: "Muruli S",
    date: "8 months ago",
    text: "Good service. Thank you mathrushree holiday s",
    rating: 5
  },
  {
    name: "Marimuthu Venugopal",
    date: "2 years ago",
    text: "Smooth and safe driving skill. Places are well known need not required any guidance or google map. Very nice person.",
    rating: 5
  },
  {
    name: "Mahesh Mahi",
    date: "a year ago",
    text: "V.V good Safe driving conditions vehicle. Thank you mathrushree team 🙏",
    rating: 5
  },
  {
    name: "B.Tejas Kumar",
    date: "3 years ago",
    text: "Good travels good vehicle sound system lightings every thing is good I enjoyed the trip Thankyou Driver Krishna sir and mathrushree tours and travels.",
    rating: 5
  },
  {
    name: "Nagaraja Rao A S",
    date: "4 years ago",
    text: "Good vehicle and prompt service, all the best for the travels. Continue to give good service.",
    rating: 5
  },
  {
    name: "Karthik K",
    date: "3 years ago",
    text: "Good Tempo Traveler condition and experience driver very good service overall. Would definitely recommend to all.",
    rating: 5
  },
  {
    name: "Raja Urs",
    date: "2 years ago",
    text: "Very nice Driver good service. Thanks mathrushree Travel s",
    rating: 5
  },
  {
    name: "Rahul R",
    date: "a year ago",
    text: "Very Good Travels and especially Rajendra was very good person.",
    rating: 5
  },
  {
    name: "Kanthi Mathi",
    date: "2 years ago",
    text: "Vehicle condition was good, excellent driver & driving. Rate was reasonable. Overall good",
    rating: 5
  },
  {
    name: "Anand Anand",
    date: "3 years ago",
    text: "Good service and driving Thank you so much Mathrushree travels and Team",
    rating: 5
  }
];

// ============================================================
// CLIENT COMPONENT FOR REVIEWS
// ============================================================
function ReviewsSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24 bg-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-medium" />
      </div>
      
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-2 text-teal">
            <Star className="h-5 w-5 animate-pulse-glow" />
            <span className="font-mono text-xs uppercase tracking-widest text-road">Google Reviews</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-medium text-teal sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            Real reviews from real people who have traveled with us over the years.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 9).map((review, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-scale-hover">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-teal/10 p-1.5 text-teal">
                      <Users className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-teal-deep">{review.name}</h3>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`h-3 w-3 ${j < review.rating ? 'fill-marigold text-marigold' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">"{review.text}"</p>
                <p className="mt-3 text-xs text-ink/40">{review.date}</p>
              </div>
            </Reveal>
          ))}
        </RevealStagger>
        
        <Reveal className="mt-8 text-center">
          <a
            href="https://share.google/lepVK1KymhmKIA5ip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-road px-8 py-3.5 font-semibold text-paper transition-all hover:scale-105 hover:shadow-xl animate-pulse-glow"
          >
            <MessageCircle className="h-5 w-5" /> Leave a Review on Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================
// MAIN SERVER COMPONENT
// ============================================================
export default function About() {
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
              Since 2005
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl animate-slide-up">
              A Bengaluru travel desk that still answers its own phone.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl animate-fade-in-delay">
              Mathrushree Holidays started as one family arranging weekend trips for neighbours in Banashankari. Today, we plan trips for families, couples, and offices across Bengaluru.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 font-semibold text-teal-deep transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
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

      {/* ===== ABOUT TEXT SECTION ===== */}
      <section className="overflow-hidden border-b border-line/70 px-5 py-16 sm:px-8 sm:py-24 bg-paper">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-road">Who we are</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-teal sm:text-4xl">
              Trusted by families for over 21 years
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Mathrushree Holidays started as one family arranging weekend
              trips for neighbours in Banashankari who didn&apos;t want to
              deal with unreliable drivers or vague homestay listings. Word
              spread through the same neighbourhood, then the next one, and
              today we plan trips for families, couples and offices across
              Bengaluru — and run a fleet of sedans, SUVs and tempo
              travelers for anyone who just needs a reliable vehicle and
              driver, no package required.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <RouteLine
              className="mt-12 h-16 w-full max-w-md"
              viewBox="0 0 600 60"
              path="M 10 40 C 100 10, 200 55, 300 25 S 500 10, 590 35"
              dots={[{ cx: 10, cy: 40 }, { cx: 300, cy: 25 }, { cx: 590, cy: 35 }]}
              strokeWidth={2}
            />
          </Reveal>
        </div>
      </section>

      {/* ===== PRINCIPLES ===== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-teal sm:text-4xl">
              How we plan a trip
            </h2>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-scale-hover"
              >
                <span className="font-mono text-xs text-road animate-pulse-glow">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-teal group-hover:text-teal-deep transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.body}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ===== SCROLLING FLEET STRIP (Client Component) ===== */}
      <section className="border-t border-line/70 bg-mist/20 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-slow" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-road animate-pulse-glow">The fleet</p>
            <h2 className="mt-2 font-display text-2xl font-medium text-teal sm:text-3xl">
              Vehicle rentals, no package required
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink/70">
              Sedans for airport runs, SUVs for hill roads, tempo travelers
              for the whole extended family — with a driver who knows the
              route.
            </p>
          </Reveal>
        </div>
        
        {/* Scrolling Fleet Component */}
        <ScrollingFleet fleet={fleet} />
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <ReviewsSection />

      {/* ===== CTA SECTION ===== */}
      <section className="border-t border-line/70 bg-gradient-to-br from-teal-deep to-teal px-5 py-16 sm:px-8 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-float-medium" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl animate-slide-up">
              Planning something with a group?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-teal-light/90 animate-fade-in-delay">
              Tell us the headcount and the dates on your mind — we&apos;ll come back with two or three route options to pick from.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-marigold px-8 py-3.5 font-semibold text-teal-deep transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href={`tel:+91${site.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-teal-deep animate-slide-right"
              >
                <Phone className="h-5 w-5" /> Call {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-teal-light/80">
              <MapPin className="h-4 w-4 animate-bounce-hover" />
              <span>Bengaluru, Karnataka</span>
              <Award className="h-4 w-4 ml-2 animate-pulse-glow" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GLOBAL STYLES ===== */}
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
          .bg-paper { background-color: #faf8f4; }
          .bg-mist { background-color: #f4f2ee; }
          .text-ink { color: #2d2a24; }
          .border-line { border-color: #e8e4dc; }
          .bg-road { background-color: #2a6b6b; }
        `
      }} />
    </>
  );
}