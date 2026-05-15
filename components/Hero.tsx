"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroCanvas from "./HeroCanvas";
import WorkContent from "./cards/WorkContent";
import EducationContent from "./cards/EducationContent";
import NovelContent from "./cards/NovelContent";
import VenturesContent from "./cards/VenturesContent";
import ProjectsContent from "./cards/ProjectsContent";
import HobbiesContent from "./cards/HobbiesContent";

const BriefcaseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="20" height="13" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </svg>
);
const GraduationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
  </svg>
);
const PenIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const CompassIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);
const CodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const ActivityIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const cards = [
  { id: "work",      Icon: BriefcaseIcon,   title: "Work Experience",      tagline: "Top 10% PM at Amazon. Led teams. Shipped products.",   Content: WorkContent },
  { id: "education", Icon: GraduationIcon,  title: "Education",            tagline: "Kellogg MBA. BYU. Mission in Boston.",                 Content: EducationContent },
  { id: "novel",     Icon: PenIcon,         title: "Novel Writing",        tagline: "Published author. Founder of the Watchmaker Foundation.", Content: NovelContent },
  { id: "ventures",  Icon: CompassIcon,     title: "Ventures",             tagline: "Co-founder of Homebakedapp. Building for home bakers.", Content: VenturesContent },
  { id: "projects",  Icon: CodeIcon,        title: "Claude Code Projects", tagline: "Using AI as a creative partner to build faster.",      Content: ProjectsContent },
  { id: "hobbies",   Icon: ActivityIcon,    title: "Hobbies & Interests",  tagline: "PNW native. Faith. Family. The why behind the what.",  Content: HobbiesContent },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0  },
};

export default function Hero() {
  const [active, setActive] = useState<string | null>(null);
  const toggle = (id: string) => setActive((prev) => (prev === id ? null : id));
  const activeCard = cards.find((c) => c.id === active);

  return (
    <section className="min-h-screen flex flex-col">
      {/* Fixed PNW landscape — stays in viewport as content scrolls over it */}
      <HeroCanvas />

      {/* Name + tagline */}
      <motion.div
        className="relative z-10 text-center px-6 pt-24"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mb-3"
        >
          Product Manager · Founder · Builder
        </motion.p>
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4"
        >
          Brandon Asay
        </motion.h1>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="text-[#8a9e96] text-base max-w-lg mx-auto leading-relaxed"
        >
          Top 10% PM at Amazon managing a multi-billion-dollar portfolio.
          Founder. Nonprofit creator. I build things that matter.
        </motion.p>
      </motion.div>

      {/* Cards — pushed to the bottom of the initial viewport */}
      <div className="mt-auto relative z-10 px-4 sm:px-6 pb-6 pt-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cards.map((card) => {
              const isActive = active === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => toggle(card.id)}
                  className={`group text-left rounded-xl border p-4 sm:p-5 transition-all duration-200 backdrop-blur-sm ${
                    isActive
                      ? "border-[#8aaf9f]/40 bg-[#8aaf9f]/10"
                      : "border-white/15 bg-black/45 hover:bg-black/60 hover:border-white/25"
                  }`}
                >
                  <div className={`mb-2 transition-colors ${isActive ? "text-[#8aaf9f]" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                    <card.Icon />
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 transition-colors ${isActive ? "text-[#8aaf9f]" : "text-white"}`}>
                    {card.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-snug hidden sm:block">
                    {card.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Expanded content panel — appears below cards, scrollable */}
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
                <div className="mt-3 rounded-xl border border-white/10 bg-black/65 backdrop-blur-md px-6">
                  <activeCard.Content />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
