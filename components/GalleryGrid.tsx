"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export type GalleryPhoto = {
  id: string;
  place: string;
  caption: string;
  gradient: string; // tailwind-safe inline gradient
};

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryPhoto | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p)}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
            style={{ background: p.gradient }}
          >
            <span className="absolute inset-0 bg-teal-deep/0 transition-colors group-hover:bg-teal-deep/25" />
            <span className="absolute bottom-0 left-0 right-0 translate-y-2 bg-gradient-to-t from-teal-deep/80 to-transparent p-3 font-mono text-[11px] uppercase tracking-wide text-paper opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {p.place}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-teal-deep/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-paper/20"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[4/3]" style={{ background: active.gradient }} />
              <div className="flex items-start justify-between gap-4 bg-paper p-5">
                <div>
                  <p className="font-display text-lg font-medium text-teal">{active.place}</p>
                  <p className="mt-1 text-sm text-ink/70">{active.caption}</p>
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="shrink-0 rounded-full p-1.5 text-ink/60 hover:bg-mist/50 hover:text-teal"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
