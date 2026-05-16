"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "outdoors",
    label: "Outdoors",
    title: "The Pacific Northwest",
    body: "Placeholder — hiking, skiing, kayaking, or whatever gets you outside in the PNW.",
  },
  {
    id: "hobby2",
    label: "Hobby",
    title: "Placeholder",
    body: "Add a hobby or interest here — a sentence or two about what you love doing.",
  },
  {
    id: "hobby3",
    label: "Interest",
    title: "Placeholder",
    body: "Add another interest here.",
  },
  {
    id: "hobby4",
    label: "Interest",
    title: "Placeholder",
    body: "Add another interest here.",
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
      <div className="relative rounded-xl border border-[#222725]/20 overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={slide.id}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="p-6 bg-[#222725]/8"
          >
            <p className="text-[#222725]/55 text-xs font-mono tracking-widest uppercase mb-2">
              {slide.label}
            </p>
            <h4 className="text-[#222725] font-bold text-lg mb-2">{slide.title}</h4>
            <p className="text-[#222725]/65 leading-relaxed text-sm">{slide.body}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#222725]/15 text-[#222725]/60 hover:text-[#222725] hover:bg-[#222725]/25 transition-colors text-lg"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#222725]/15 text-[#222725]/60 hover:text-[#222725] hover:bg-[#222725]/25 transition-colors text-lg"
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
              i === idx ? "bg-[#222725]" : "bg-[#222725]/25 hover:bg-[#222725]/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
