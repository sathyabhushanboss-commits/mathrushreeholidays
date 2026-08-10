import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Train,
  Plane,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-marigold-soft to-amber-400 bg-clip-text text-transparent">
                Mathrushree
              </span>
              <span className="text-2xl font-bold text-white"> Holidays</span>
            </Link>
            
            <p className="leading-8 text-white/80 text-sm">
              <strong className="text-white">Mathrushree Holidays</strong> is a trusted tours and travels company
              in Bengaluru with <strong className="text-white">21+ years of experience</strong>. We specialize in
              South India tour packages, luxury cab rentals, train ticket booking, flight
              ticket booking, vehicle insurance, RTO services, money transfer services,
              and professional driver services. We are committed to providing safe,
              affordable, and memorable travel experiences for families, tourists,
              pilgrims, and corporate clients.
            </p>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1Bjd4mEDPU/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://www.instagram.com/mathrushreeholidays?igsh=MWthNXR1M3phbG11MA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.youtube.com/@mathrushreeholidays3995"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-red-500 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-marigold-soft mt-2"></span>
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/" className="hover:text-marigold-soft transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-marigold-soft transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-marigold-soft transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-marigold-soft transition-colors duration-300">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-marigold-soft transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-marigold-soft transition-colors duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-marigold-soft mt-2"></span>
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Car size={16} className="text-marigold-soft flex-shrink-0" />
                Luxury Cab Rentals
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Train size={16} className="text-marigold-soft flex-shrink-0" />
                Train Ticket Booking
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <Plane size={16} className="text-marigold-soft flex-shrink-0" />
                Flight Ticket Booking
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <ShieldCheck size={16} className="text-marigold-soft flex-shrink-0" />
                Vehicle Insurance
              </li>
              <li className="hover:text-white transition-colors duration-300">RTO Services</li>
              <li className="hover:text-white transition-colors duration-300">Money Transfer</li>
              <li className="hover:text-white transition-colors duration-300">Professional Drivers</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-marigold-soft mt-2"></span>
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                <MapPin className="mt-1 h-5 w-5 text-marigold-soft flex-shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                <Phone className="mt-1 h-5 w-5 text-marigold-soft flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="block hover:text-marigold-soft transition-colors duration-300"
                  >
                    {site.phoneDisplay}
                  </a>
                  <a
                    href="tel:+919901431975"
                    className="block hover:text-marigold-soft transition-colors duration-300"
                  >
                    +91 99014 31975
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                <Mail className="mt-1 h-5 w-5 text-marigold-soft flex-shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-marigold-soft transition-colors duration-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                <Clock className="mt-1 h-5 w-5 text-marigold-soft flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Mathrushree Holidays. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-300">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}