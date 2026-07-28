"use client";

import { useRef } from "react";
import { justification } from "./content";
import LelandCard from "@/components/leland/LelandCard";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac", "#a1c5ce"];

export default function Justification() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory scroll-pl-1"
      >
        {justification.map((j, i) => (
          <LelandCard
            key={j.label}
            color={COLORS[i % COLORS.length]}
            className="shrink-0 w-[85%] sm:w-80 snap-start flex flex-col"
          >
            <h3 className="text-[#222725] font-semibold mb-2">{j.label}</h3>
            <p className="text-[#222725]/70 text-sm leading-relaxed flex-1">
              {j.stat}
            </p>
            {j.sourceUrl && (
              <div className="mt-4 pt-3 border-t border-[#222725]/10 text-xs text-[#222725]/60">
                <a
                  href={j.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {j.sourceLabel}
                </a>
                {j.additionalSources?.map((s) => (
                  <span key={s.url}>
                    {", "}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {s.label}
                    </a>
                  </span>
                ))}
              </div>
            )}
          </LelandCard>
        ))}
      </div>

      {/* Right-edge fade hint, matching the Hobbies carousel elsewhere on the site */}
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#222725] to-transparent pointer-events-none" />

      <div className="flex gap-2 mt-4">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="w-9 h-9 rounded-full border border-[#e8e8e3]/20 text-[#e8e8e3]/70 hover:bg-[#e8e8e3]/10 hover:text-[#e8e8e3] transition-colors flex items-center justify-center"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next"
          className="w-9 h-9 rounded-full border border-[#e8e8e3]/20 text-[#e8e8e3]/70 hover:bg-[#e8e8e3]/10 hover:text-[#e8e8e3] transition-colors flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
}
