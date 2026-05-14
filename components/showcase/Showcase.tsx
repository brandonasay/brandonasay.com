"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SnakeGame from "./SnakeGame";
import GenerativeArt from "./GenerativeArt";

const tabs = [
  {
    id: "game",
    label: "Snake",
    description:
      "A classic Snake game built with HTML Canvas and a custom game loop — no game engine.",
    Component: SnakeGame,
  },
  {
    id: "art",
    label: "Particle System",
    description:
      "Mouse-reactive particles connected by proximity lines — pure Canvas API, ~180 particles.",
    Component: GenerativeArt,
  },
];

export default function Showcase() {
  const [active, setActive] = useState("game");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="showcase" className="bg-[#0a1318] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#8aaf9f] text-sm font-mono tracking-widest uppercase mb-2">
          Code
        </h2>
        <h3 className="text-3xl font-bold text-white mb-2">Showcase</h3>
        <p className="text-zinc-500 text-sm mb-10">
          Built alongside Claude — these demos run entirely in the browser.
        </p>

        <div className="flex gap-1 bg-white/5 rounded-lg p-1 mb-4 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                active === tab.id
                  ? "text-[#091a10]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {active === tab.id && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-[#8aaf9f] rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mb-6">{current.description}</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <current.Component />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
