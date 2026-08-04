import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, Compass, Globe, Zap, Sun, Moon, Award, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Mathrushree Holidays",
  description:
    "Contact Mathrushree Holidays in Banashankari, Bengaluru — call, WhatsApp, or send your trip dates and group size for a same-day quote.",
  alternates: { canonical: "/contact" },
};

const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.state} ${site.address.pin}`;

export default function Contact() {
  return (
    <>
      {/* ===== HERO SECTION (MATCHES PACKAGES/FLEET/ABOUT) ===== */}
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
              Get in Touch
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl animate-slide-up">
              Let&apos;s plan your route
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl animate-fade-in-delay">
              Fastest reply is over WhatsApp or a direct call during office hours. 
              Or send your trip details below and we&apos;ll get back to you.
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

      {/* ===== CONTACT DETAILS & FORM SECTION ===== */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 bg-paper">
        <div className="mx-auto max-w-6xl">
          <div className="mt-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            
            {/* LEFT SIDE: CONTACT INFO */}
            <Reveal delay={0.1} className="space-y-8">
              <div className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:shadow-md animate-scale-hover">
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <MapPin size={19} className="mt-0.5 shrink-0 text-road animate-bounce-hover" />
                    <div>
                      <p className="text-sm font-semibold text-teal">Office</p>
                      <p className="text-sm text-ink/75">{fullAddress}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone size={19} className="mt-0.5 shrink-0 text-road animate-pulse-glow" />
                    <div>
                      <p className="text-sm font-semibold text-teal">Phone / WhatsApp</p>
                      <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm text-ink/75 hover:text-teal transition-colors">
                        {site.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail size={19} className="mt-0.5 shrink-0 text-road animate-bounce-hover" />
                    <div>
                      <p className="text-sm font-semibold text-teal">Email</p>
                      <a href="mailto:info@mathrushreeholidays.com" className="text-sm text-ink/75 hover:text-teal transition-colors">
                        info@mathrushreeholidays.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock size={19} className="mt-0.5 shrink-0 text-road animate-pulse-glow" />
                    <div>
                      <p className="text-sm font-semibold text-teal">Hours</p>
                      <p className="text-sm text-ink/75">{site.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:shadow-md">
                <iframe
                  title="Mathrushree Holidays location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    fullAddress
                  )}&output=embed`}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </Reveal>

            {/* RIGHT SIDE: CONTACT FORM */}
            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8 animate-scale-hover">
                {/* FIX: Removed recipientEmail prop since it caused a type error */}
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL STYLES (EXACT COPY OF PACKAGES) ===== */}
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