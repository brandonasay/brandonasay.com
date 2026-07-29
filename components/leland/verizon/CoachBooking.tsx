"use client";

import { useState } from "react";
import LelandCard from "@/components/leland/LelandCard";
import { categories, ResultKey } from "./content";
import { coaches, Coach } from "./coaches";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac"];
const SLOTS = ["Tomorrow, 10:00 AM", "Tomorrow, 2:30 PM", "Thu, 9:00 AM", "Fri, 1:00 PM"];

function initials(name: string) {
  const parts = name.split(" ").filter((w) => !w.endsWith("."));
  return parts
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function CoachBooking({ resultKey }: { resultKey: ResultKey }) {
  const [coach, setCoach] = useState<Coach | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  const cat = categories[resultKey];
  const list = coaches[resultKey];

  if (coach && slot) {
    return (
      <div>
        <LelandCard color="#e8e8e3">
          <p className="text-[#222725]/60 text-xs uppercase tracking-widest font-mono mb-2">
            You&apos;re booked
          </p>
          <h3 className="text-[#222725] text-xl font-bold mb-2">
            {coach.name}, {slot}
          </h3>
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
        <p className="text-[#e8e8e3]/50 text-xs font-mono uppercase tracking-widest mb-3">
          Pick a time with {coach.name}
        </p>
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
      <div className="grid sm:grid-cols-2 gap-4">
        {list.map((c, i) => (
          <LelandCard key={c.name} color={COLORS[i % COLORS.length]} className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-semibold text-sm"
                style={{ backgroundColor: "rgba(34,39,37,0.15)", color: "#222725" }}
              >
                {initials(c.name)}
              </div>
              <div>
                <p className="text-[#222725] font-semibold leading-tight">{c.name}</p>
                <p className="text-[#222725]/60 text-xs leading-tight">{c.headline}</p>
              </div>
            </div>
            <p className="text-[#222725]/70 text-sm leading-relaxed flex-1 mb-4">
              {c.bio}
            </p>
            <div className="flex items-center justify-between text-xs text-[#222725]/60 mb-4">
              <span>★ {c.rating.toFixed(1)} ({c.sessions} sessions)</span>
              <span>{c.price}</span>
            </div>
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
    </div>
  );
}
