"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Mathrushree Holidays, I'm ${name || "..."}.\n` +
        `Phone: ${phone || "..."}\n` +
        `Interested in: ${destination || "not sure yet"}\n` +
        `${message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm text-ink/75">
          Your name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
            placeholder="Ramesh Kumar"
          />
        </label>
        <label className="grid gap-1.5 text-sm text-ink/75">
          Phone number
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
            placeholder="98xxxxxxxx"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm text-ink/75">
        Destination in mind
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
          placeholder="Coorg, Kerala backwaters, Hampi..."
        />
      </label>

      <label className="grid gap-1.5 text-sm text-ink/75">
        Group size & rough dates
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-teal focus-visible:ring-2 focus-visible:ring-teal/40"
          placeholder="4 adults, 2 kids — sometime around the second week of October"
        />
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-road px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
      >
        <Send size={16} /> Send via WhatsApp
      </button>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-teal"
        >
          Opening WhatsApp with your message — send it across and we&apos;ll reply shortly.
        </motion.p>
      )}
    </form>
  );
}
