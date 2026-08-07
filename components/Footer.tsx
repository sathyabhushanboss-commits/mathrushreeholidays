import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-teal text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              South India, mapped by people who've actually driven it. Planning
              South India holidays out of Bengaluru since {site.founded}.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-marigold-soft">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-paper/80">
              <li><Link href="/packages" className="hover:text-marigold-soft">Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-marigold-soft">Fleet</Link></li>
              <li><Link href="/about" className="hover:text-marigold-soft">About us</Link></li>
              <li><Link href="/contact" className="hover:text-marigold-soft">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-marigold-soft">
              Reach us
            </p>
            <ul className="mt-3 space-y-3 text-sm text-paper/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-marigold-soft" />
                <span>
                  {site.address.line1}, {site.address.line2},{" "}
                  {site.address.city}, {site.address.state} {site.address.pin}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-marigold-soft" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-marigold-soft">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-marigold-soft" />
                <a href={`mailto:${site.email}`} className="hover:text-marigold-soft">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-marigold-soft">
              Hours
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-paper/80">
              <Clock size={16} className="shrink-0 text-marigold-soft" />
              {site.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed, Developed and Maintained by Sathya Enterprises</p>
        </div>
      </div>
    </footer>
  );
}