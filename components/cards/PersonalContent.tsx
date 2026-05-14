"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "pnw",
    label: "Home",
    title: "Pacific Northwest",
    body: "The mountains, old-growth forests, and moody gray skies of the PNW shaped how I see the world. I carry that grounded, unhurried perspective into everything I build.",
    bg: "from-[#0d2a1e] to-[#0a1a14]",
  },
  {
    id: "faith",
    label: "Mission",
    title: "Faith & Service",
    body: "I took two years away from school to serve communities across New England — teaching ESL, refurbishing homes, and building soup kitchens. I believe leadership is first about service.",
    bg: "from-[#12203a] to-[#0a1428]",
  },
  {
    id: "author",
    label: "Author",
    title: "The Watchmaker",
    body: "I wrote and published The Watchmaker. Every dollar of proceeds supports the Watchmaker Foundation, which I founded to remove financial barriers for extraordinary creators.",
    bg: "from-[#2a1a0a] to-[#160e06]",
  },
  {
    id: "family",
    label: "Family",
    title: "Family",
    body: "Add your family story here — a sentence or two about what matters most.",
    bg: "from-[#22183a] to-[#100e1e]",
    placeholder: true,
  },
  {
    id: "outside",
    label: "Life",
    title: "Outside Work",
    body: "Add your hobbies, interests, and what life looks like away from the desk.",
    bg: "from-[#182a18] to-[#0c1a0c]",
    placeholder: true,
  },
];

const variants = {
  enter: (d: number) => ({ x: d * 48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d * -48, opacity: 0 }),
};

export default function PersonalContent() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };
  const prev = () => go((idx - 1 + slides.length) % slides.length);
  const next = () => go((idx + 1) % slides.length);

  const slide = slides[idx];

  return (
    <div className="py-8">
      <div className="relative rounded-xl border border-white/10 overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={slide.id}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row"
          >
            {/* Placeholder image area */}
            <div
              className={`bg-gradient-to-br ${slide.bg} sm:w-2/5 h-44 sm:h-auto flex items-center justify-center shrink-0 relative`}
            >
              {slide.placeholder && (
                <p className="text-white/30 text-xs font-mono absolute bottom-3 left-3">
                  add image here
                </p>
              )}
              <span className="text-white/8 text-7xl font-black select-none">
                {slide.label}
              </span>
            </div>

            {/* Text */}
            <div className="flex-1 p-6 sm:p-8 bg-white/[0.015]">
              <p className="text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mb-2">
                {slide.label}
              </p>
              <h4 className={`font-bold text-xl mb-3 ${slide.placeholder ? "text-zinc-500" : "text-white"}`}>
                {slide.title}
              </h4>
              <p className={`leading-relaxed ${slide.placeholder ? "text-zinc-600 italic" : "text-zinc-400"}`}>
                {slide.body}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors text-lg"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/70 transition-colors text-lg"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === idx ? "bg-[#8aaf9f]" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
