"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Postcard = {
  src: string;
  alt: string;
  caption: string;
  rotate: number;
  x: number;
  y: number;
};

interface PostcardStackProps {
  postcards: Postcard[];
}

export default function PostcardStack({ postcards }: PostcardStackProps) {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-sm sm:h-[380px] sm:max-w-md">
      {postcards.map((card, i) => (
        <motion.figure
          key={card.src}
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: card.y, rotate: card.rotate }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, scale: 1.06, zIndex: 10, transition: { duration: 0.25 } }}
          className="absolute left-1/2 top-1/2 w-40 origin-center -translate-x-1/2 -translate-y-1/2 cursor-default rounded-sm bg-paper p-2 pb-6 shadow-lg sm:w-48"
          style={{ marginLeft: card.x, zIndex: i }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist/40">
            <Image src={card.src} alt={card.alt} fill sizes="200px" className="object-cover" />
          </div>
          <figcaption className="mt-2 truncate font-mono text-[10px] text-ink/60">
            {card.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}