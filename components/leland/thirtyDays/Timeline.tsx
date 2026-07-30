"use client";

import { useState } from "react";
import { pillars } from "./content";

const TOTAL_DAYS = 30;
const AXIS_DAYS = [0, 5, 10, 15, 20, 25, 30];
const TIMELINE_HEIGHT = 700;

function darken(hex: string, amount: number) {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `rgb(${r},${g},${b})`;
}

export default function Timeline() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <p className="text-[#e8e8e3]/50 text-xs font-mono uppercase tracking-widest mb-2 ml-1">
        Day
      </p>
      <div className="flex gap-3 overflow-x-auto pb-4">
        {/* Day axis */}
        <div
          className="relative shrink-0 w-12 sticky left-0 z-10 bg-[#222725]"
          style={{ height: TIMELINE_HEIGHT }}
        >
          {AXIS_DAYS.map((d) => (
            <div
              key={d}
              className="absolute left-0 right-0 flex items-center gap-1"
              style={{ top: `${(d / TOTAL_DAYS) * 100}%` }}
            >
              <span className="text-[#e8e8e3]/40 text-xs font-mono">{d}</span>
              <div className="h-px flex-1 bg-[#e8e8e3]/10" />
            </div>
          ))}
        </div>

        {/* Pillar tracks */}
        <div
          className="flex gap-3 flex-1 min-w-[700px] relative"
          style={{ height: TIMELINE_HEIGHT }}
        >
        {pillars.map((p) => {
          const isExpanded = expanded === p.id;
          const topPct = (p.startDay / TOTAL_DAYS) * 100;
          const heightPct = ((p.endDay - p.startDay) / TOTAL_DAYS) * 100;

          return (
            <div
              key={p.id}
              className={`relative h-full min-w-0 transition-all duration-300 ${
                isExpanded ? "flex-[3]" : "flex-1"
              }`}
            >
              <button
                type="button"
                onClick={() => setExpanded(isExpanded ? null : p.id)}
                className="absolute left-0 right-0 text-left rounded-2xl p-4 transition-shadow"
                style={{
                  top: `${topPct}%`,
                  height: isExpanded ? "auto" : `${heightPct}%`,
                  backgroundColor: p.color,
                  border: `1px solid ${darken(p.color, 30)}`,
                  zIndex: isExpanded ? 20 : 1,
                  boxShadow: isExpanded
                    ? "0 16px 40px rgba(0,0,0,0.4)"
                    : undefined,
                }}
              >
                <h3 className="font-bold text-[#222725] text-sm leading-tight mb-1">
                  {p.name}
                </h3>
                <p className="text-[#222725]/80 text-xs leading-snug">
                  {p.statement}
                </p>

                {isExpanded && (
                  <div className="mt-4 space-y-4 text-xs text-[#222725]/80">
                    <div>
                      <p className="font-semibold text-[#222725] text-[11px] uppercase tracking-wide mb-1.5">
                        Key actions
                      </p>
                      <ul className="list-disc pl-4 space-y-1.5 leading-snug">
                        {p.actions.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[#222725]/50 text-[10px] pt-1">
                      Tap to collapse ↑
                    </p>
                  </div>
                )}
              </button>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
