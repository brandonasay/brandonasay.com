"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Experience } from "./data";

export default function TimelineEntry({
  entry,
  isLast,
}: {
  entry: Experience;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-8">
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-white/10" />
      )}
      <div
        className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-colors duration-200 ${
          open
            ? "border-[#8aaf9f] bg-[#8aaf9f]"
            : "border-zinc-600 bg-[#0e1a14]"
        }`}
      />

      <button onClick={() => setOpen(!open)} className="w-full text-left group">
        <div className="flex items-start justify-between gap-4 py-1">
          <div>
            <p className="text-white font-semibold group-hover:text-[#8aaf9f] transition-colors">
              {entry.company}
            </p>
            <p className="text-zinc-400 text-sm mt-0.5">{entry.title}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 pt-0.5">
            <span className="text-zinc-500 text-sm">{entry.dates}</span>
            <span
              className={`text-zinc-500 transition-transform duration-200 inline-block ${
                open ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="mt-3 mb-6 space-y-2 pl-4">
              {entry.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-zinc-400 text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-[#8aaf9f] mt-0.5 shrink-0">→</span>
                  {b}
                </li>
              ))}
              {entry.link && (
                <li>
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8aaf9f] text-sm hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {entry.link} ↗
                  </a>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
