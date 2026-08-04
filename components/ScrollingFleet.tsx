"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollingFleetProps {
  fleet: { src: string; label: string }[];
}

export default function ScrollingFleet({ fleet }: ScrollingFleetProps) {
  const fleetTrack = [...fleet, ...fleet]; // doubled for seamless loop

  return (
    <div
      className="group relative mt-8 w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        whileHover={{ transition: { duration: 0 } }}
      >
        {fleetTrack.map((v, i) => (
          <div
            key={`${v.src}-${i}`}
            className="relative h-40 w-56 flex-shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-sm sm:h-48 sm:w-72 transition-all hover:shadow-xl"
          >
            <Image
              src={v.src}
              alt={v.label}
              fill
              sizes="300px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 font-mono text-[11px] text-teal-deep shadow-sm border border-teal-100">
              {v.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}