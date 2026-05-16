"use client";

import WorkContent from "./cards/WorkContent";
import EducationContent from "./cards/EducationContent";
import NovelContent from "./cards/NovelContent";
import VenturesContent from "./cards/VenturesContent";
import ProjectsContent from "./cards/ProjectsContent";
import HobbiesContent from "./cards/HobbiesContent";

// 4 muted tones distributed across 6 tiles so no adjacent tiles share a color
const COLORS = {
  work:      "#a1c5ce",
  education: "#d8cf6f",
  novel:     "#becf8c",
  ventures:  "#abc4ac",
  projects:  "#d8cf6f",
  hobbies:   "#a1c5ce",
};

function darken(hex: string, amount: number) {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `rgb(${r},${g},${b})`;
}

function Tile({
  label,
  color,
  children,
  className = "",
}: {
  label: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl flex flex-col ${className}`}
      style={{
        backgroundColor: color,
        border: `1px solid ${darken(color, 30)}`,
      }}
    >
      <div
        className="px-6 pt-5 pb-2 shrink-0"
        style={{ borderBottom: `1px solid ${darken(color, 25)}` }}
      >
        <h2 className="font-semibold text-base tracking-tight text-[#222725]">
          {label}
        </h2>
      </div>
      <div className="flex-1 px-6 pb-6">{children}</div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <div className="px-4 sm:px-6 pb-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Tile label="Work Experience"      color={COLORS.work}      className="md:col-start-1 md:row-start-1 md:row-span-2">
          <WorkContent />
        </Tile>
        <Tile label="Education"            color={COLORS.education} className="md:col-start-2 md:row-start-1">
          <EducationContent />
        </Tile>
        <Tile label="Novel Writing"        color={COLORS.novel}     className="md:col-start-3 md:row-start-1">
          <NovelContent />
        </Tile>
        <Tile label="Ventures"             color={COLORS.ventures}  className="md:col-start-2 md:col-span-2 md:row-start-2">
          <VenturesContent />
        </Tile>
        <Tile label="Claude Code Projects" color={COLORS.projects}  className="md:col-start-1 md:col-span-2 md:row-start-3">
          <ProjectsContent />
        </Tile>
        <Tile label="Hobbies & Interests"  color={COLORS.hobbies}   className="md:col-start-3 md:row-start-3">
          <HobbiesContent />
        </Tile>
      </div>
    </div>
  );
}
