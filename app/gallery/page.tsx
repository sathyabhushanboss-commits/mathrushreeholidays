import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { 
  Bus, Car, Truck, Users, Wifi, Wind, Coffee, Music, Camera, Sun, Shield, 
  MapPin, Phone, ArrowRight, MessageCircle, CheckCircle, Compass, Star, 
  Zap, Globe, Sparkles, Heart, Clock, ThumbsUp, Mountain, Award, Mail, Cloud, Eye, Moon 
} from "lucide-react";

// ============ SEO METADATA ============
export const metadata: Metadata = {
  title: "Fleet of Premium Vehicles for Rent | Mathrushree Holidays",
  description: "Explore our fleet of 17 premium AC and Non-AC vehicles for rent in Bangalore. Book Tempo Travellers, Urbania, SUVs, Luxury Cars, and Buses.",
  keywords: "vehicle fleet Bangalore, Tempo Traveller rental, Urbania rental, luxury car rental, bus rental, outstation vehicles, Mathrushree Holidays",
  alternates: {
    canonical: "/fleet",
  },
  openGraph: {
    title: "Fleet of Premium Vehicles for Rent | Mathrushree Holidays",
    description: "Choose from 17 premium vehicles including Tempo Travellers, Urbania, SUVs, Luxury Cars, and Buses. Book now for the best rates.",
    type: "website",
    url: "https://mathrushreeholidays.com/fleet",
    siteName: "Mathrushree Holidays",
    images: [
      {
        url: "https://mathrushreeholidays.com/og-fleet.jpg",
        width: 1200,
        height: 630,
        alt: "Mathrushree Holidays Premium Vehicle Fleet",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet of Premium Vehicles for Rent | Mathrushree Holidays",
    description: "Explore our fleet of 17 premium vehicles for rent in Bangalore. Book now!",
    images: ["https://mathrushreeholidays.com/og-fleet.jpg"],
    site: "@mathrushree",
    creator: "@mathrushree",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Travel & Transportation",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.9716;77.5946",
    "ICBM": "12.9716, 77.5946",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "copyright": `Mathrushree Holidays ${new Date().getFullYear()}`,
  },
};

// ============ DATA ============
const site = {
  whatsapp: "9480399555",
  phone: "094803 99555",
  phoneDisplay: "094803 99555",
  email: "info@mathrushreeholidays.com",
  name: "Mathrushree Holidays",
  address: "Bengaluru, Karnataka, India",
  url: "https://mathrushreeholidays.com",
};

// FLEET DATA - All vehicles with buses added at the end
const fleetData = [
  // ===== TEMPO TRAVELLERS (All together) =====
  { 
    id: "1", 
    title: "Tempo Traveller - 9 Seater", 
    description: "Perfect for family trips and small group tours. AC with comfortable seating and ample luggage space. Professional driver included.",
    image: "/vehicle/TempoTraveller-9Seater.png",
    features: ["AC", "Music System", "Expert Driver"],
    bgColor: "from-emerald-50 to-teal-50",
    seoTitle: "Tempo Traveller 9 Seater Rental Bangalore",
    seoDesc: "Book Tempo Traveller 9 seater for family trips and small groups in Bangalore. AC, music system, and professional driver included.",
    category: "Tempo Traveller",
    capacity: "9 Seater",
    vehicleType: "Minibus",
    order: 1
  },
  { 
    id: "2", 
    title: "Tempo Traveller - 12 Seater", 
    description: "Ideal for medium-sized groups. Spacious with comfortable seating and luggage storage. Great for corporate outings and local travel.",
    image: "/vehicle/TempoTraveller-12Seater.png",
    features: ["AC", "Spacious", "Luggage Space"],
    bgColor: "from-blue-50 to-cyan-50",
    seoTitle: "Tempo Traveller 12 Seater Rental Bangalore",
    seoDesc: "Rent 12 seater Tempo Traveller for corporate outings and group tours. Spacious AC vehicle with luggage space.",
    category: "Tempo Traveller",
    capacity: "12 Seater",
    vehicleType: "Minibus",
    order: 2
  },
  { 
    id: "3", 
    title: "Tempo Traveller - 13 Seater", 
    description: "Perfect blend of comfort and capacity. Great for family reunions and group tours with premium interiors and climate control.",
    image: "/vehicle/TempoTraveller-13Seater.png",
    features: ["Premium Comfort", "Music", "Legroom"],
    bgColor: "from-amber-50 to-orange-50",
    seoTitle: "Tempo Traveller 13 Seater Rental Bangalore",
    seoDesc: "Book 13 seater Tempo Traveller for family reunions and group tours. Premium interiors with climate control.",
    category: "Tempo Traveller",
    capacity: "13 Seater",
    vehicleType: "Minibus",
    order: 3
  },
  
  // ===== FORCE URBANIA (All 4 variants) =====
  { 
    id: "4", 
    title: "Force Urbania - 9 Seater", 
    description: "Compact luxury van with premium interiors and great ride comfort. Perfect for executive travel and small group tours.",
    image: "/vehicle/urbania_9seater.png",
    features: ["Modern", "Luxurious", "Premium Interiors"],
    bgColor: "from-cyan-50 to-sky-50",
    seoTitle: "Force Urbania 9 Seater Rental Bangalore",
    seoDesc: "Book Force Urbania 9 seater luxury van for executive travel. Premium comfort with modern amenities.",
    category: "Urbania",
    capacity: "9 Seater",
    vehicleType: "Van",
    order: 4
  },
  { 
    id: "5", 
    title: "Force Urbania - 12 Seater", 
    description: "Spacious luxury van with premium seating and entertainment. Great for corporate travel and group outings.",
    image: "/vehicle/ForceUrbania-12Seater.png",
    features: ["Spacious", "Entertainment", "Premium"],
    bgColor: "from-purple-50 to-violet-50",
    seoTitle: "Force Urbania 12 Seater Rental Bangalore",
    seoDesc: "Book Force Urbania 12 seater luxury van for corporate travel and group outings. Premium comfort with entertainment.",
    category: "Urbania",
    capacity: "12 Seater",
    vehicleType: "Van",
    order: 5
  },
  { 
    id: "6", 
    title: "Force Urbania - 14 Seater", 
    description: "Spacious and modern van with premium seating and entertainment. Perfect for group tours and corporate events.",
    image: "/vehicle/urbania_14seater.png",
    features: ["Spacious", "Entertainment", "Premium"],
    bgColor: "from-cyan-50 to-teal-50",
    seoTitle: "Force Urbania 14 Seater Rental Bangalore",
    seoDesc: "Book Force Urbania 14 seater van for group tours and corporate events. Premium comfort with entertainment system.",
    category: "Urbania",
    capacity: "14 Seater",
    vehicleType: "Van",
    order: 6
  },
  { 
    id: "7", 
    title: "Force Urbania - 16 Seater", 
    description: "Maximum capacity luxury van with premium interiors and entertainment. Ideal for large group tours and special events.",
    image: "/vehicle/urbania_16seater.png",
    features: ["Max Capacity", "Entertainment", "Premium"],
    bgColor: "from-indigo-50 to-purple-50",
    seoTitle: "Force Urbania 16 Seater Rental Bangalore",
    seoDesc: "Book Force Urbania 16 seater luxury van for large group tours and special events. Maximum comfort and entertainment.",
    category: "Urbania",
    capacity: "16 Seater",
    vehicleType: "Van",
    order: 7
  },
  
  // ===== TOYOTA INNOVA =====
  { 
    id: "8", 
    title: "Toyota Innova Crysta - 7 Seater", 
    description: "Luxury SUV for premium travel experience. AC with all modern amenities, GPS tracking, and plush leather interiors.",
    image: "/vehicle/ToyotaInnovaCrysta-7Seater.png",
    features: ["Luxury", "GPS", "Leather Interiors"],
    bgColor: "from-slate-50 to-gray-50",
    seoTitle: "Toyota Innova Crysta 7 Seater Rental Bangalore",
    seoDesc: "Rent Toyota Innova Crysta luxury SUV in Bangalore. Premium 7 seater with leather interiors, GPS, and AC.",
    category: "Innova",
    capacity: "7 Seater",
    vehicleType: "SUV",
    order: 8
  },
  { 
    id: "9", 
    title: "Toyota Innova", 
    description: "Reliable and comfortable for outstation trips and airport transfers. Smooth ride quality with excellent AC cooling.",
    image: "/vehicle/innova toyota.png",
    features: ["Reliable", "Smooth Ride", "AC"],
    bgColor: "from-indigo-50 to-blue-50",
    seoTitle: "Toyota Innova Rental Bangalore",
    seoDesc: "Book Toyota Innova for outstation trips and airport transfers in Bangalore. Reliable AC vehicle with comfortable seating.",
    category: "Innova",
    capacity: "7 Seater",
    vehicleType: "SUV",
    order: 9
  },
  
  // ===== LUXURY CARS (BMW, Benz, Fortuner) =====
  { 
    id: "10", 
    title: "BMW - Premium Sedan", 
    description: "Sporty luxury with powerful engine and elegant design. Ideal for corporate travel and special occasions with chauffeur service.",
    image: "/vehicle/bmw.png",
    features: ["Sporty", "Luxury", "Chauffeur"],
    bgColor: "from-sky-50 to-blue-50",
    seoTitle: "BMW Premium Sedan Rental Bangalore",
    seoDesc: "Book BMW premium sedan for corporate travel and special occasions. Sporty luxury with chauffeur service.",
    category: "Luxury Car",
    capacity: "4 Seater",
    vehicleType: "Luxury Sedan",
    order: 10
  },
  { 
    id: "11", 
    title: "Mercedes Benz - Luxury Sedan", 
    description: "Ultimate luxury experience with world-class comfort, premium sound system, and smooth performance. Perfect for VIP travel.",
    image: "/vehicle/benz.png",
    features: ["Luxury", "Premium Sound", "VIP Comfort"],
    bgColor: "from-zinc-50 to-gray-50",
    seoTitle: "Mercedes Benz Luxury Sedan Rental Bangalore",
    seoDesc: "Rent Mercedes Benz luxury sedan for VIP travel. Premium comfort with world-class features and chauffeur service.",
    category: "Luxury Car",
    capacity: "4 Seater",
    vehicleType: "Luxury Sedan",
    order: 11
  },
  { 
    id: "12", 
    title: "Toyota Fortuner - Premium SUV", 
    description: "Commanding presence with powerful performance. Perfect for off-road adventures and family trips with spacious interiors.",
    image: "/vehicle/fortuner.png",
    features: ["Off-Road", "Spacious", "Powerful"],
    bgColor: "from-amber-50 to-yellow-50",
    seoTitle: "Toyota Fortuner Premium SUV Rental Bangalore",
    seoDesc: "Rent Toyota Fortuner for off-road adventures and family trips. Spacious premium SUV with powerful performance.",
    category: "Luxury Car",
    capacity: "7 Seater",
    vehicleType: "SUV",
    order: 12
  },
  
  // ===== HYBRID HYCROSS =====
  { 
    id: "13", 
    title: "Hybrid Hycross - 7 Seater", 
    description: "Eco-friendly luxury SUV with hybrid technology. Perfect for environmentally conscious travelers with premium comfort and fuel efficiency.",
    image: "/vehicle/hybrid-hycross.png",
    features: ["Hybrid", "Eco-Friendly", "Premium Comfort"],
    bgColor: "from-green-50 to-emerald-50",
    seoTitle: "Hybrid Hycross 7 Seater Rental Bangalore",
    seoDesc: "Book Hybrid Hycross eco-friendly SUV for sustainable travel. Premium 7 seater with fuel efficiency and comfort.",
    category: "Hybrid SUV",
    capacity: "7 Seater",
    vehicleType: "SUV",
    order: 13
  },
  
  // ===== SUV & SEDAN =====
  { 
    id: "14", 
    title: "SUV - 6 Seater", 
    description: "Perfect for small families and adventure trips to hilly terrains. High ground clearance and powerful engine for all roads.",
    image: "/vehicle/SUV-6Seater.png",
    features: ["High Clearance", "Powerful Engine", "Adventure"],
    bgColor: "from-green-50 to-emerald-50",
    seoTitle: "6 Seater SUV Rental Bangalore",
    seoDesc: "Rent 6 seater SUV for adventure trips and family outings. High ground clearance with powerful engine.",
    category: "SUV",
    capacity: "6 Seater",
    vehicleType: "SUV",
    order: 14
  },
  { 
    id: "15", 
    title: "Sedan - 4 Seater", 
    description: "Elegant and comfortable for executive travel and couples. Smooth, silent ride with premium upholstery and climate control.",
    image: "/vehicle/Sedan-4Seater.png",
    features: ["Elegant", "Silent Ride", "Climate Control"],
    bgColor: "from-rose-50 to-pink-50",
    seoTitle: "4 Seater Sedan Rental Bangalore",
    seoDesc: "Book luxury sedan for executive travel and couples. Premium 4 seater with climate control and smooth ride.",
    category: "Sedan",
    capacity: "4 Seater",
    vehicleType: "Sedan",
    order: 15
  },
  { 
    id: "16", 
    title: "Scorpio - 7 Seater", 
    description: "Premium SUV with powerful engine, ideal for family road trips. AC with modern entertainment features and comfortable seating.",
    image: "/vehicle/Scorpio-7Seater.png",
    features: ["Premium SUV", "Powerful", "Entertainment"],
    bgColor: "from-stone-50 to-neutral-50",
    seoTitle: "Scorpio 7 Seater Rental Bangalore",
    seoDesc: "Book Scorpio 7 seater for family road trips. Premium SUV with powerful engine and entertainment features.",
    category: "SUV",
    capacity: "7 Seater",
    vehicleType: "SUV",
    order: 16
  },
  
  // ===== BUSES (All together at the end) =====
  { 
    id: "17", 
    title: "Mini Bus - 18 Seater", 
    description: "Compact and maneuverable for city tours and short trips. AC vehicle with professional driver and comfortable seating.",
    image: "/vehicle/MiniBus-18Seater.png",
    features: ["Compact", "Maneuverable", "Expert Driver"],
    bgColor: "from-violet-50 to-purple-50",
    seoTitle: "18 Seater Mini Bus Rental Bangalore",
    seoDesc: "Rent 18 seater mini bus for city tours and corporate events. Compact AC bus with professional driver.",
    category: "Bus",
    capacity: "18 Seater",
    vehicleType: "Bus",
    order: 17
  },
  { 
    id: "18", 
    title: "Luxury Bus - 20 Seater", 
    description: "Premium coach with recliner seats, entertainment system, and AC. Perfect for corporate groups and destination weddings.",
    image: "/vehicle/LuxuryBus-20Seater.png",
    features: ["Recliners", "Entertainment", "AC"],
    bgColor: "from-rose-50 to-red-50",
    seoTitle: "20 Seater Luxury Bus Rental Bangalore",
    seoDesc: "Book 20 seater luxury bus for corporate groups and weddings. Premium coach with recliner seats and entertainment.",
    category: "Bus",
    capacity: "20 Seater",
    vehicleType: "Bus",
    order: 18
  },
  { 
    id: "19", 
    title: "Luxury Bus - 25 Seater", 
    description: "Spacious coach perfect for school trips, corporate events, and large family outings. AC with music and entertainment.",
    image: "/vehicle/LuxuryBus-25Seater.png",
    features: ["Spacious", "Music System", "AC"],
    bgColor: "from-orange-50 to-amber-50",
    seoTitle: "25 Seater Luxury Bus Rental Bangalore",
    seoDesc: "Rent 25 seater luxury bus for school trips and corporate events. Spacious AC coach with music system.",
    category: "Bus",
    capacity: "25 Seater",
    vehicleType: "Bus",
    order: 19
  },
  { 
    id: "20", 
    title: "Luxury Bus - 32 Seater", 
    description: "Large capacity coach with AC, music system, and comfortable seats. Ideal for large tour groups and corporate travel.",
    image: "/vehicle/LuxuryBus-32Seater.png",
    features: ["Large Capacity", "Comfortable Seats", "AC"],
    bgColor: "from-blue-50 to-indigo-50",
    seoTitle: "32 Seater Luxury Bus Rental Bangalore",
    seoDesc: "Book 32 seater luxury bus for large tour groups. Premium coach with AC, music, and comfortable seating.",
    category: "Bus",
    capacity: "32 Seater",
    vehicleType: "Bus",
    order: 20
  },
];

// ============ COMPONENTS ============
function RevealStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

// Structured Data for Vehicles
function VehicleSchema() {
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Vehicle Fleet for Rent",
    "description": "Premium vehicles available for rent in Bangalore",
    "numberOfItems": fleetData.length,
    "itemListElement": fleetData.map((vehicle, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Vehicle",
        "name": vehicle.title,
        "description": vehicle.description,
        "brand": vehicle.title.split("-")[0]?.trim() || "Mathrushree Holidays",
        "model": vehicle.title.split("-")[1]?.trim() || vehicle.title,
        "vehicleEngine": ["Diesel", "Petrol"][index % 2],
        "numberOfSeats": parseInt(vehicle.capacity) || 4,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "price": "Call for Best Price"
          },
          "seller": {
            "@type": "Organization",
            "name": "Mathrushree Holidays",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            }
          }
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
    />
  );
}

// Organization Schema
function OrganizationSchema() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Mathrushree Holidays",
    "description": "Premium vehicle rental and tour operator in Bangalore offering Tempo Travellers, Urbania, SUVs, Luxury Cars, and Buses for local and outstation travel.",
    "url": site.url,
    "telephone": `+91${site.whatsapp}`,
    "email": site.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "sameAs": [
      "https://www.facebook.com/mathrushreeholidays",
      "https://www.instagram.com/mathrushreeholidays",
      `https://wa.me/91${site.whatsapp}`
    ],
    "makesOffer": fleetData.map(vehicle => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": vehicle.title,
        "description": vehicle.description,
        "serviceType": "Vehicle Rental"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
}

export default function Fleet() {
  return (
    <>
      {/* Structured Data */}
      <VehicleSchema />
      <OrganizationSchema />

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 px-5 py-20 sm:px-8 sm:py-28">
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
              From luxury SUVs to spacious buses — we have 20 premium vehicles for your trip.
              All well-maintained with professional drivers and insurance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/91${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-teal-800 transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href="#fleet-list"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-teal-700 animate-slide-right"
                aria-label="View all vehicles"
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

      {/* ===== FLEET LIST SECTION ===== */}
      <section id="fleet-list" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 bg-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-teal-200 blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-200 blur-3xl animate-float-medium" />
        </div>
        
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-2 text-teal-600">
              <Bus className="h-5 w-5 animate-bounce-hover" />
              <span className="font-mono text-xs uppercase tracking-widest text-teal-700 animate-pulse-glow">20 Premium Vehicles</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold text-teal-800 sm:text-4xl animate-slide-up">
              Explore Our Fleet
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600 animate-fade-in-delay">
              Choose from our wide range of AC and Non-AC vehicles for local sightseeing, 
              outstation trips, group tours, and corporate events.
            </p>
          </Reveal>

          <RevealStagger className="mt-12 flex flex-col gap-16 lg:gap-24">
            {fleetData.map((vehicle, index) => {
              const isImageRight = index % 2 === 0;

              return (
                <Reveal key={vehicle.id} delay={index * 0.04}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* IMAGE SIDE */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className={`relative h-72 lg:h-80 w-full rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br ${vehicle.bgColor} transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                        <Image
                          src={vehicle.image}
                          alt={vehicle.seoTitle || vehicle.title}
                          title={vehicle.seoTitle || vehicle.title}
                          fill
                          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading={index < 3 ? "eager" : "lazy"}
                          quality={85}
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 border-4 border-teal-400/0 group-hover:border-teal-400/40 rounded-2xl transition-all duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* DESCRIPTION SIDE */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                      <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {vehicle.category}
                      </div>
                      <h3 className="text-2xl font-bold text-teal-800 mb-3 group-hover:text-teal-600 transition-colors">
                        {vehicle.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {vehicle.description}
                      </p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                        {vehicle.features.map((feature, i) => (
                          <span key={i} className="inline-flex items-center gap-1 bg-white text-teal-700 text-xs font-medium px-3 py-1.5 rounded-full border border-teal-100 shadow-sm">
                            <CheckCircle className="h-3 w-3 text-teal-500" /> {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`https://wa.me/91${site.whatsapp}?text=${encodeURIComponent(
                          `Hi, I'm interested in booking the ${vehicle.title}. Please share availability and rates.`
                        )}`}
                        className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-teal-700 hover:scale-105 shadow-md hover:shadow-lg"
                        aria-label={`Enquire about ${vehicle.title}`}
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

      {/* ===== CONTACT / CTA SECTION ===== */}
      <section className="border-t border-gray-200 bg-gradient-to-br from-teal-800 to-teal-600 px-5 py-16 sm:px-8 sm:py-20 relative overflow-hidden">
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
            <p className="mx-auto mt-4 max-w-2xl text-teal-100/90 animate-fade-in-delay">
              Contact us to book any vehicle for your trip. We offer competitive rates 
              and flexible packages for all vehicle types. Quick response guaranteed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/91${site.whatsapp}`}
                className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3.5 font-semibold text-teal-800 transition-all hover:scale-105 hover:shadow-xl animate-bounce-hover"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-teal-700 animate-slide-right"
                aria-label={`Call ${site.phoneDisplay}`}
              >
                <Phone className="h-5 w-5" /> Call {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white hover:text-teal-700 animate-slide-left"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" /> Email Us
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-teal-100/80">
              <MapPin className="h-4 w-4 animate-bounce-hover" />
              <span>Bengaluru, Karnataka</span>
              <Award className="h-4 w-4 ml-2 animate-pulse-glow" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GLOBAL STYLES WITH ANIMATIONS ===== */}
      <style dangerouslySetInnerHTML={{
        __html: `
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

          .font-display { font-family: system-ui, -apple-system, sans-serif; }
        `
      }} />
    </>
  );
}