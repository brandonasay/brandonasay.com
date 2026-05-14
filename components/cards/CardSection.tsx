"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkContent from "./WorkContent";
import VenturesContent from "./VenturesContent";
import ProjectsContent from "./ProjectsContent";
import PersonalContent from "./PersonalContent";

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="20" height="13" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="13" x2="12" y2="13" />
    <path d="M2 13h20" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const MountainIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const cards = [
  {
    id: "work",
    Icon: BriefcaseIcon,
    title: "Work",
    tagline: "Top 10% PM at Amazon. Led teams. Shipped products used by millions.",
    Content: WorkContent,
  },
  {
    id: "ventures",
    Icon: CompassIcon,
    title: "Ventures",
    tagline: "Co-founder. Nonprofit creator. Published author.",
    Content: VenturesContent,
  },
  {
    id: "projects",
    Icon: CodeIcon,
    title: "Claude Code Projects",
    tagline: "Using AI as a creative partner to build things faster than ever.",
    Content: ProjectsContent,
  },
  {
    id: "personal",
    Icon: MountainIcon,
    title: "Personal",
    tagline: "PNW native. Faith. Family. The why behind the what.",
    Content: PersonalContent,
  },
];

export default function CardSection() {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (id: string) =>
    setActive((prev) => (prev === id ? null : id));

  const activeCard = cards.find((c) => c.id === active);

  return (
    <section id="about" className="bg-[#0c1510] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#8aaf9f] text-sm font-mono tracking-widest uppercase mb-2">
          About
        </h2>
        <h3 className="text-3xl font-bold text-white mb-10">What I&apos;m about</h3>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {cards.map((card) => {
            const isActive = active === card.id;
            return (
              <button
                key={card.id}
                onClick={() => toggle(card.id)}
                className={`group text-left rounded-xl border p-5 sm:p-6 transition-all duration-200 ${
                  isActive
                    ? "border-[#8aaf9f]/40 bg-[#8aaf9f]/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div
                  className={`mb-3 transition-colors ${
                    isActive
                      ? "text-[#8aaf9f]"
                      : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  <card.Icon />
                </div>
                <h4
                  className={`font-semibold mb-1.5 transition-colors ${
                    isActive ? "text-[#8aaf9f]" : "text-white"
                  }`}
                >
                  {card.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-snug hidden sm:block">
                  {card.tagline}
                </p>
                <p
                  className={`text-xs mt-3 transition-colors ${
                    isActive
                      ? "text-[#8aaf9f]/70"
                      : "text-zinc-600 group-hover:text-zinc-400"
                  }`}
                >
                  {isActive ? "click to close ↑" : "explore →"}
                </p>
              </button>
            );
          })}
        </div>

        {/* Expanded content panel */}
        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              key={active}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="rounded-xl border border-white/10 bg-white/[0.015] px-6">
                <activeCard.Content />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
