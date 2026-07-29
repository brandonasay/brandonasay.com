"use client";

import { useState } from "react";
import LelandCard from "@/components/leland/LelandCard";
import { steps, categories, ResultKey } from "./content";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac"];

export default function Survey() {
  const [history, setHistory] = useState<string[]>(["pull"]);
  const current = history[history.length - 1];
  const isResult = current.startsWith("result:");

  const choose = (next: string) => setHistory((h) => [...h, next]);
  const back = () => setHistory((h) => h.slice(0, -1));
  const restart = () => setHistory(["pull"]);

  if (isResult) {
    const resultKey = current.split(":")[1] as ResultKey;
    const cat = categories[resultKey];
    return (
      <div>
        <LelandCard color="#e8e8e3" className="mb-6">
          <p className="text-[#222725]/60 text-xs uppercase tracking-widest font-mono mb-2">
            Recommended path
          </p>
          <h3 className="text-[#222725] text-xl font-bold mb-2">{cat.name}</h3>
          <p className="text-[#222725]/70 leading-relaxed">{cat.description}</p>
        </LelandCard>
        <div className="flex gap-4">
          {history.length > 1 && (
            <button
              type="button"
              onClick={back}
              className="text-sm text-[#e8e8e3]/60 hover:text-[#e8e8e3] hover:underline"
            >
              ← Back
            </button>
          )}
          <button
            type="button"
            onClick={restart}
            className="text-sm text-[#e8e8e3]/60 hover:text-[#e8e8e3] hover:underline"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  const step = steps[current];

  return (
    <div>
      <p className="text-[#e8e8e3]/50 text-xs font-mono uppercase tracking-widest mb-3">
        Question {history.length} of up to 3
      </p>
      <h3 className="text-[#e8e8e3] text-xl font-semibold mb-6">{step.prompt}</h3>
      <div
        className={`grid sm:grid-cols-2 gap-3 ${
          step.options.length > 6 ? "md:grid-cols-3" : ""
        }`}
      >
        {step.options.map((opt, i) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => choose(opt.next)}
            className="text-left"
          >
            <LelandCard
              color={COLORS[i % COLORS.length]}
              className="h-full transition-transform hover:-translate-y-0.5"
            >
              <p className="text-[#222725] font-medium">{opt.label}</p>
            </LelandCard>
          </button>
        ))}
      </div>
      {history.length > 1 && (
        <button
          type="button"
          onClick={back}
          className="mt-6 text-sm text-[#e8e8e3]/60 hover:text-[#e8e8e3] hover:underline"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
