"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-4"
        >
          <div className="relative h-20 w-20 shrink-0">
            <Image
              src="/logo/image.png"
              alt="Mathrushree Holidays"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <h1 className="font-display text-3xl font-semibold text-teal">
              Mathrushree
            </h1>

            <p className="font-mono text-xs uppercase tracking-[0.35em] text-road">
              Holidays
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? "text-teal"
                    : "text-ink/70 hover:text-teal"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-marigold"></span>
                )}
              </Link>
            );
          })}

          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep"
          >
            <Phone size={16} />
            Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-teal md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-line/70 bg-paper md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-3 ${
                    pathname === link.href
                      ? "bg-mist text-teal"
                      : "text-ink/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="mt-4">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-white"
              >
                <Phone size={16} />
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}