import { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Train,
  Plane,
  Wallet,
  ShieldCheck,
  FileText,
  UserRound,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travel & Vehicle Services | Mathrushree Holidays Bengaluru",
  description:
    "Mathrushree Holidays provides luxury cab rentals, train ticket booking, flight ticket booking, money transfer services, vehicle insurance, RTO services, and professional drivers in Bengaluru.",
  keywords: [
    "Mathrushree Holidays",
    "Travel Agency Bengaluru",
    "Cab Rental Bengaluru",
    "Luxury Car Rental",
    "Tempo Traveller Rental",
    "Bus Rental",
    "Train Ticket Booking",
    "Flight Ticket Booking",
    "Money Transfer",
    "Vehicle Insurance",
    "RTO Services",
    "Driver on Hire",
    "Airport Taxi",
    "Corporate Travel",
    "Holiday Packages",
  ],
};

const services = [
  {
    title: "Luxury Cab Rentals",
    description:
      "Premium hatchbacks, sedans, SUVs, Innova, Crysta, Tempo Travellers, luxury cars, minibuses, and buses for airport transfers, weddings, corporate travel, local rentals, and outstation trips.",
    icon: Car,
  },
  {
    title: "Train Ticket Booking",
    description:
      "Book railway tickets across India with Tatkal assistance, cancellations, and complete travel planning.",
    icon: Train,
  },
  {
    title: "Flight Ticket Booking",
    description:
      "Domestic and international flight booking with competitive fares for business and holiday travel.",
    icon: Plane,
  },
  {
    title: "Money Transfer Services",
    description:
      "Fast, secure, and reliable domestic money transfer services with trusted customer support.",
    icon: Wallet,
  },
  {
    title: "Vehicle Insurance",
    description:
      "Insurance solutions for cars, bikes, taxis, buses, trucks, commercial vehicles, and all other vehicle categories.",
    icon: ShieldCheck,
  },
  {
    title: "RTO Services",
    description:
      "RC transfer, new registration, permit renewal, fitness certificate, NOC, driving licence, and all RTO documentation.",
    icon: FileText,
  },
  {
    title: "Professional Drivers",
    description:
      "Verified and experienced drivers for daily travel, outstation trips, weddings, corporate travel, and chauffeur services.",
    icon: UserRound,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-teal py-24 text-white">
        <div className="container mx-auto max-w-6xl px-6">
          <span className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Complete Travel & Vehicle Services
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
            <strong>Mathrushree Holidays</strong> offers premium travel
            solutions including luxury cab rentals, train and flight ticket
            booking, money transfer services, vehicle insurance, RTO services,
            and professional drivers. We are committed to making every journey
            safe, comfortable, and hassle-free.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Professional Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From luxury transportation to ticket booking and documentation
              assistance, we provide complete travel solutions under one roof.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal/10 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                    <Icon size={32} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Services */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Mathrushree Holidays?
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Mathrushree Holidays is a trusted travel agency in Bengaluru,
            providing reliable travel solutions for individuals, families,
            tourists, and corporate clients. Whether you require a luxury car
            for airport transfers, a Tempo Traveller for family trips, or a bus
            for group travel, we provide well-maintained vehicles with
            experienced drivers.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            Beyond transportation, we also offer train ticket booking, domestic
            and international flight booking, vehicle insurance, RTO services,
            money transfer, and professional driver services. Our experienced
            team ensures timely service, transparent pricing, and complete
            customer satisfaction.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            If you're searching for <strong>cab rental in Bengaluru</strong>,
            <strong> airport taxi</strong>,
            <strong> luxury vehicle rental</strong>,
            <strong> train ticket booking</strong>,
            <strong> flight booking</strong>,
            <strong> vehicle insurance</strong>,
            <strong> RTO services</strong>, or
            <strong> professional drivers</strong>,
            Mathrushree Holidays is your trusted partner.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "Premium & Well-Maintained Vehicles",
              "Affordable Pricing",
              "Experienced Drivers",
              "24/7 Customer Support",
              "Safe & Reliable Travel",
              "Complete Travel Assistance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-24 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Book Your Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Contact Mathrushree Holidays for luxury cab rentals, train and
            flight ticket booking, vehicle insurance, RTO services, money
            transfer, and professional driver services.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-teal transition hover:bg-gray-100"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}