"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import LelandCard from "@/components/leland/LelandCard";
import { categories, ResultKey } from "./content";
import { coaches, Coach } from "./coaches";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac"];
const SLOTS = ["Tomorrow, 10:00 AM", "Tomorrow, 2:30 PM", "Thu, 9:00 AM", "Fri, 1:00 PM"];

export default function CoachBooking({ resultKey }: { resultKey: ResultKey }) {
  const [coach, setCoach] = useState<Coach | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cat = categories[resultKey];
  const list = coaches[resultKey];

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  if (coach && slot) {
    return (
      <div>
        <LelandCard color="#e8e8e3">
          <p className="text-[#222725]/60 text-xs uppercase tracking-widest font-mono mb-3">
            You&apos;re booked
          </p>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={coach.photo}
              alt={coach.name}
              width={44}
              height={44}
              className="rounded-full object-cover shrink-0"
            />
            <h3 className="text-[#222725] text-xl font-bold">
              {coach.name}, {slot}
            </h3>
          </div>
          <p className="text-[#222725]/70 leading-relaxed">
            A confirmation would normally land in your inbox. This is a
            prototype, so consider yourself booked.
          </p>
        </LelandCard>
        <button
          type="button"
          onClick={() => setSlot(null)}
          className="mt-4 text-sm text-[#e8e8e3]/60 hover:text-[#e8e8e3] hover:underline"
        >
          ← Book a different time
        </button>
      </div>
    );
  }

  if (coach) {
    return (
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={coach.photo}
            alt={coach.name}
            width={36}
            height={36}
            className="rounded-full object-cover shrink-0"
          />
          <p className="text-[#e8e8e3]/70 text-sm font-medium">
            Pick a time with {coach.name}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {SLOTS.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => setSlot(s)}
              className="text-left"
            >
              <LelandCard color={COLORS[i % COLORS.length]}>
                <p className="text-[#222725] font-medium">{s}</p>
              </LelandCard>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setCoach(null)}
          className="mt-6 text-sm text-[#e8e8e3]/60 hover:text-[#e8e8e3] hover:underline"
        >
          ← Choose a different coach
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="text-[#e8e8e3]/50 text-xs font-mono uppercase tracking-widest mb-1">
        Matched to {cat.name}
      </p>
      <p className="text-[#e8e8e3]/70 text-sm leading-relaxed mb-6">
        {cat.description}
      </p>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory scroll-pl-1"
        >
          {list.map((c, i) => (
            <LelandCard
              key={c.name}
              color={COLORS[i % COLORS.length]}
              className="shrink-0 w-64 sm:w-72 snap-start flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={c.photo}
                  alt={c.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-[#222725] font-semibold leading-tight">{c.name}</p>
                  <p className="text-[#222725]/60 text-xs leading-tight">{c.headline}</p>
                </div>
              </div>
              <p className="text-[#222725]/70 text-sm leading-relaxed flex-1 mb-4">
                {c.bio}
              </p>
              <p className="text-xs text-[#222725]/60 mb-4">
                ★ {c.rating.toFixed(1)} ({c.sessions} sessions)
              </p>
              <button
                type="button"
                onClick={() => setCoach(c)}
                className="w-full text-center text-sm font-medium rounded-lg py-2 bg-[#222725] text-[#e8e8e3] hover:bg-[#222725]/85 transition-colors"
              >
                Book a session
              </button>
            </LelandCard>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#222725] to-transparent pointer-events-none" />
      </div>

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
