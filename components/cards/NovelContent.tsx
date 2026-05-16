"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const books = [
  { title: "The Watchmaker", src: "/watchmaker-cover.png", width: 400, height: 600 },
  { title: "Power",          src: "/power-cover.png",      width: 400, height: 600 },
];

export default function NovelContent() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };
  const prev = () => go((idx - 1 + books.length) % books.length);
  const next = () => go((idx + 1) % books.length);

  const book = books[idx];

  return (
    <div className="pt-3 flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center gap-3">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous book"
          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#222725]/20 hover:bg-[#222725]/35 text-[#222725] text-2xl font-bold transition-colors"
        >
          ‹
        </button>

        {/* Book slide */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={book.src}
              custom={dir}
              initial={{ x: dir * 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir * -60, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <Image
                src={book.src}
                alt={`${book.title} book cover`}
                width={book.width}
                height={book.height}
                className="rounded-lg shadow-lg w-full max-w-[220px] h-auto"
              />
              <p className="text-[#222725] font-bold text-base italic mt-4 text-center">
                {book.title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next book"
          className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#222725]/20 hover:bg-[#222725]/35 text-[#222725] text-2xl font-bold transition-colors"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-4">
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to book ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === idx ? "bg-[#222725]" : "bg-[#222725]/30 hover:bg-[#222725]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
