import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { 
  Bus, Car, Truck, Users, Wifi, Wind, Coffee, Music, Camera, Sun, Shield, 
  MapPin, Phone, ArrowRight, MessageCircle, CheckCircle, Compass, Star, 
  Zap, Globe, Sparkles, Heart, Clock, ThumbsUp, Mountain, Award, Mail, Cloud, Eye, Moon 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fleet - Our Vehicles | Mathrushree Holidays",
  description:
    "Explore our fleet of 15 premium AC and Non-AC deluxe vehicles for local and outstation travel. Tempo Travellers, SUVs, Sedans, Luxury Buses and more.",
  keywords: "vehicle fleet Bangalore, Tempo Traveller rental, AC bus hire, luxury car rental, outstation vehicles",
  alternates: { canonical: "/fleet" },
  openGraph: {
    title: "Fleet of Vehicles for Rent | Mathrushree Holidays",
    description: "Choose from 15 premium vehicles including Tempo Travellers, SUVs, Luxury Buses for your trips.",
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

// EXACTLY 15 VEHICLES WITH YOUR IMAGES
const fleetData = [
  { 
    id: "1", 
    title: "Tempo Traveller - 9 Seater", 
    description: "Perfect for family trips and small group tours. AC with comfortable seating and ample luggage space. Professional driver included.",
    image: "/vehicle/TempoTraveller-9Seater.png",
    features: ["AC", "Music System", "Expert Driver"]
  },
  { 
    id: "2", 
    title: "Tempo Traveller - 12 Seater", 
    description: "Ideal for medium-sized groups. Spacious with comfortable seating and luggage storage. Great for corporate outings and local travel.",
    image: "/vehicle/TempoTraveller-12Seater.png",
    features: ["AC", "Spacious", "Luggage Space"]
  },
  { 
    id: "3", 
    title: "Tempo Traveller - 15 Seater", 
    description: "Perfect for corporate offsites and large family gatherings with premium comfort, music system, and ample legroom.",
    image: "/vehicle/TempoTraveller-15Seater.png",
    features: ["Premium Comfort", "Music", "Legroom"]
  },
  { 
    id: "4", 
    title: "Tempo Traveller - 17 Seater", 
    description: "Maximum capacity for large groups with premium comfort and entertainment. Ideal for weddings and large tour groups.",
    image: "/vehicle/TempoTraveller-17Seater.png",
    features: ["Max Capacity", "Entertainment", "AC"]
  },
  { 
    id: "5", 
    title: "Toyota Innova Crysta - 7 Seater", 
    description: "Luxury SUV for premium travel experience. AC with all modern amenities, GPS tracking, and plush leather interiors.",
    image: "/vehicle/ToyotaInnovaCrysta-7Seater.png",
    features: ["Luxury", "GPS", "Leather Interiors"]
  },
  { 
    id: "6", 
    title: "Toyota Innova - 8 Seater", 
    description: "Reliable and comfortable for outstation trips and airport transfers. Smooth ride quality with excellent AC cooling.",
    image: "/vehicle/ToyotaInnova-8Seater.png",
    features: ["Reliable", "Smooth Ride", "AC"]
  },
  { 
    id: "7", 
    title: "SUV - 6 Seater", 
    description: "Perfect for small families and adventure trips to hilly terrains. High ground clearance and powerful engine for all roads.",
    image: "/vehicle/SUV-6Seater.png",
    features: ["High Clearance", "Powerful Engine", "Adventure"]
  },
  { 
    id: "8", 
    title: "Sedan - 4 Seater", 
    description: "Elegant and comfortable for executive travel and couples. Smooth, silent ride with premium upholstery and climate control.",
    image: "/vehicle/Sedan-4Seater.png",
    features: ["Elegant", "Silent Ride", "Climate Control"]
  },
  { 
    id: "9", 
    title: "Luxury Bus - 20 Seater", 
    description: "Premium coach with recliner seats, entertainment system, and AC. Perfect for corporate groups and destination weddings.",
    image: "/vehicle/LuxuryBus-20Seater.png",
    features: ["Recliners", "Entertainment", "AC"]
  },
  { 
    id: "10", 
    title: "Luxury Bus - 25 Seater", 
    description: "Spacious coach perfect for school trips, corporate events, and large family outings. AC with music and entertainment.",
    image: "/vehicle/LuxuryBus-25Seater.png",
    features: ["Spacious", "Music System", "AC"]
  },
  { 
    id: "11", 
    title: "Luxury Bus - 32 Seater", 
    description: "Large capacity coach with AC, music system, and comfortable seats. Ideal for large tour groups and corporate travel.",
    image: "/vehicle/LuxuryBus-32Seater.png",
    features: ["Large Capacity", "Comfortable Seats", "AC"]
  },
  { 
    id: "12", 
    title: "Mini Bus - 18 Seater", 
    description: "Compact and maneuverable for city tours and short trips. AC vehicle with professional driver and comfortable seating.",
    image: "/vehicle/MiniBus-18Seater.png",
    features: ["Compact", "Maneuverable", "Expert Driver"]
  },
  { 
    id: "13", 
    title: "Force Urbania - 12 Seater", 
    description: "Modern, spacious, and luxurious van with premium interiors and great ride comfort. Perfect for executive corporate travel.",
    image: "/vehicle/ForceUrbania-12Seater.png",
    features: ["Modern", "Luxurious", "Premium Interiors"]
  },
  { 
    id: "14", 
    title: "Force Traveller - 15 Seater", 
    description: "Robust and reliable vehicle for group tours in all terrains. High ground clearance with AC and comfortable interiors.",
    image: "/vehicle/ForceTraveller-15Seater.png",
    features: ["Robust", "High Clearance", "AC"]
  },
  { 
    id: "15", 
    title: "Scorpio - 7 Seater", 
    description: "Premium SUV with powerful engine, ideal for family road trips. AC with modern entertainment features and comfortable seating.",
    image: "/vehicle/Scorpio-7Seater.png",
    features: ["Premium SUV", "Powerful", "Entertainment"]
  },
];

// ============ COMPONENTS ============
function RevealStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export default function Fleet() {
  return (
    <>
      {/* ===== HERO SECTION (EXACT COPY OF PACKAGES ANIMATIONS) ===== */}
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
              Our Premium Fleet
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl animate-slide-up">
              Vehicles for Every Journey
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl animate-fade-in-delay">
              From luxury SUVs to spacious buses — we have 15 premium vehicles for your trip.
              All well-maintained with professional drivers and insurance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/91${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 font-semibold text-teal-deep transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href="#fleet-list"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-teal-deep animate-slide-right"
              >
                View Fleet <ArrowRight className="h-5 w-5 animate-slide-right" />
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

      {/* ===== FLEET LIST SECTION (ALTERNATING LAYOUT) ===== */}
      <section id="fleet-list" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 bg-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal blur-3xl animate-float-medium" />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal">
              <Bus className="h-5 w-5 animate-bounce-hover" />
              <span className="font-mono text-xs uppercase tracking-widest text-road animate-pulse-glow">15 Vehicles</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-medium text-teal sm:text-4xl animate-slide-up">
              Explore Our Fleet
            </h2>
            <p className="mt-3 max-w-2xl text-ink/70 animate-fade-in-delay">
              Choose from our wide range of AC and Non-AC vehicles for local sightseeing, 
              outstation trips, group tours, and corporate events.
            </p>
          </Reveal>

          <RevealStagger className="mt-10 flex flex-col gap-16 lg:gap-24">
            {fleetData.map((vehicle, index) => {
              // Alternating layout: Even index = Image Right, Odd index = Image Left
              const isImageRight = index % 2 === 0;

              return (
                <Reveal key={vehicle.id} delay={index * 0.04}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* IMAGE SIDE */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className="relative h-64 lg:h-80 w-full rounded-2xl shadow-xl overflow-hidden bg-gray-100 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.title}
                          fill
                          className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Decorative Border Glow */}
                        <div className="absolute inset-0 border-4 border-teal-500/0 group-hover:border-teal-500/30 rounded-2xl transition-all duration-500" />
                      </div>
                    </div>

                    {/* DESCRIPTION SIDE */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                      <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        Vehicle {vehicle.id}
                      </span>
                      <h3 className="text-2xl font-bold text-teal-deep mb-3 group-hover:text-teal transition-colors">
                        {vehicle.title}
                      </h3>
                      <p className="text-ink/70 leading-relaxed mb-6">
                        {vehicle.description}
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                        {vehicle.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1 bg-white text-teal-700 text-xs font-medium px-3 py-1 rounded-full border border-teal-100 shadow-sm">
                            <CheckCircle className="h-3 w-3" /> {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                          `Hi, I'm interested in booking the ${vehicle.title}. Please share availability and rates.`
                        )}`}
                        className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-teal-deep hover:scale-105 animate-bounce-hover"
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire Now
                      </a>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* ===== CONTACT / CTA SECTION (EXACT COPY OF PACKAGES) ===== */}
      <section className="border-t border-line/70 bg-gradient-to-br from-teal-deep to-teal px-5 py-16 sm:px-8 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-spin-slow" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl animate-slide-up">
              Ready to Hit the Road?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-teal-light/90 animate-fade-in-delay">
              Contact us to book any vehicle for your trip. We offer competitive rates 
              and flexible packages for all vehicle types. Quick response guaranteed.
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

      {/* ===== GLOBAL STYLES WITH ANIMATIONS (EXACT COPY) ===== */}
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