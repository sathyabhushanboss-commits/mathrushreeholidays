"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
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
      <div className="container flex h-32 md:h-32 items-center justify-between">
        {/* Logo - Left side */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center flex-shrink-0"
        >
          {/* Desktop logo - 550% larger */}
          <div className="hidden md:block">
            <Image
              src="/logo/image.png"
              alt={site.name}
              width={990}
              height={330}
              className="h-36 w-auto"
              priority
            />
          </div>
          {/* Mobile logo - 400% larger */}
          <div className="md:hidden">
            <Image
              src="/logo/image.png"
              alt={site.name}
              width={720}
              height={240}
              className="h-16 w-auto"
              priority
            />
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

        {/* Right side logo - Desktop and Mobile */}
        <div className="flex items-center flex-shrink-0">
          {/* Desktop right logo - 600% larger */}
          <div className="hidden md:block">
            <Image
              src="/logo/kar.jpeg"
              alt="Karnataka Tourism"
              width={360}
              height={360}
              className="h-20 w-auto rounded-full"
              priority
            />
          </div>
          {/* Mobile right logo - 400% larger */}
          <div className="md:hidden">
            <Image
              src="/logo/kar.jpeg"
              alt="Karnataka Tourism"
              width={240}
              height={240}
              className="h-16 w-auto rounded-full"
              priority
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-teal md:hidden ml-2"
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
                  className={`block rounded-md px-3 py-3 transition ${
                    pathname === link.href
                      ? "bg-mist text-teal font-semibold"
                      : "text-ink/80 hover:bg-mist hover:text-teal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="mt-4">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 text-white transition hover:bg-teal-deep"
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