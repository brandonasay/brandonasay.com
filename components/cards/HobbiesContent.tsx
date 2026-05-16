"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "outdoors",
    label: "Outdoors",
    title: "The Pacific Northwest",
    body: "Placeholder — hiking, skiing, kayaking, or whatever gets you outside in the PNW.",
    bg: "from-[#0d2a1e] to-[#0a1a14]",
    placeholder: true,
  },
  {
    id: "hobby2",
    label: "Hobby",
    title: "Placeholder",
    body: "Add a hobby or interest here — a sentence or two about what you love doing.",
    bg: "from-[#12203a] to-[#0a1428]",
    placeholder: true,
  },
  {
    id: "hobby3",
    label: "Interest",
    title: "Placeholder",
    body: "Add another interest here.",
    bg: "from-[#2a1a0a] to-[#160e06]",
    placeholder: true,
  },
  {
    id: "hobby4",
    label: "Interest",
    title: "Placeholder",
    body: "Add another interest here.",
    bg: "from-[#22183a] to-[#100e1e]",
    placeholder: true,
  },
];

const variants = {
  enter: (d: number) => ({ x: d * 48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d * -48, opacity: 0 }),
};

export default function HobbiesContent() {
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
    <div className="pt-3">
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
            <div
              className={`bg-gradient-to-br ${slide.bg} sm:w-2/5 h-44 sm:h-auto flex items-center justify-center shrink-0 relative`}
            >
              <p className="text-white/25 text-xs font-mono absolute bottom-3 left-3">
                add image here
              </p>
              <span className="text-white/8 text-7xl font-black select-none">
                {slide.label}
              </span>
            </div>
            <div className="flex-1 p-6 sm:p-8 bg-white/[0.015]">
              <p className="text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mb-2">
                {slide.label}
              </p>
              <h4 className="text-zinc-500 font-bold text-xl mb-3">{slide.title}</h4>
              <p className="text-zinc-600 italic leading-relaxed">{slide.body}</p>
            </div>
          </motion.div>
        </AnimatePresence>

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
