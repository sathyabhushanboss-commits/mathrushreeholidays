"use client";

import { motion } from "framer-motion";

/**
 * The site's signature element: a hand-drawn dashed route line, like the
 * flight/road path printed on a travel itinerary or postcard, that draws
 * itself in on load. Reused (in varying paths) across pages so the "we
 * plot the route for you" idea stays consistent.
 */
export function RouteLine({
  path,
  viewBox = "0 0 800 120",
  className = "",
  strokeWidth = 2.5,
  color = "var(--color-marigold)",
  duration = 1.6,
  delay = 0.2,
  dots = [],
}: {
  path: string;
  viewBox?: string;
  className?: string;
  strokeWidth?: number;
  color?: string;
  duration?: number;
  delay?: number;
  dots?: { cx: number; cy: number }[];
}) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="route-dash"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={5}
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + duration * ((i + 1) / (dots.length + 1)),
          }}
        />
      ))}
    </svg>
  );
}
