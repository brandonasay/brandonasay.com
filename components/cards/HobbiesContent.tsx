"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: "breakfast",
    src: "/hobby-breakfast.jpg",
    caption: "Making Saturday breakfast for my kids",
  },
  {
    id: "bierstadt",
    src: "/hobby-bierstadt.jpg",
    caption: "I love art; this is an original from Albert Bierstadt I got to see in DC.",
  },
  {
    id: "hiking",
    src: "/hobby-hiking.jpg",
    caption: "Hiking with my kids",
  },
  {
    id: "frankie",
    src: "/hobby-frankie.jpg",
    caption: "Carb loading with my daughter Frankie",
  },
  {
    id: "leavenworth",
    src: "/hobby-leavenworth.jpg",
    caption: "I love magical places; here is Leavenworth on Christmas Eve.",
  },
  {
    id: "ferry-puzzle",
    src: "/hobby-ferry-puzzle.jpg",
    caption: "Doing the puzzles on the WA State ferries",
  },
  {
    id: "horses",
    src: "/hobby-horses.jpg",
    caption: "Finding horses with my daughter (she wants one, but I'm not there yet)",
  },
  {
    id: "old-friends",
    src: "/hobby-old-friends.jpg",
    caption: "Catching up with old friends. Greg and Paddy, high school friends from London.",
  },
];

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
    <div className="pt-3 flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous"
          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#222725]/20 hover:bg-[#222725]/35 text-[#222725] text-2xl font-bold transition-colors"
        >
          ‹
        </button>

        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={slide.id}
              custom={dir}
              initial={{ x: dir * 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir * -60, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <Image
                src={slide.src}
                alt={slide.caption}
                width={800}
                height={800}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <p className="text-[#222725] font-bold text-base mt-4 text-center">
                {slide.caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#222725]/20 hover:bg-[#222725]/35 text-[#222725] text-2xl font-bold transition-colors"
        >
          ›
        </button>
      </div>

      {slides.length > 1 && (
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === idx ? "bg-[#222725]" : "bg-[#222725]/30 hover:bg-[#222725]/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
