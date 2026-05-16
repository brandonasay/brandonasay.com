"use client";

import WorkContent from "./cards/WorkContent";
import EducationContent from "./cards/EducationContent";
import NovelContent from "./cards/NovelContent";
import VenturesContent from "./cards/VenturesContent";
import ProjectsContent from "./cards/ProjectsContent";
import HobbiesContent from "./cards/HobbiesContent";

// Muted jewel-tone palette — each hex applied at low opacity for bg/border tints
const COLORS = {
  work:     "#7fa8d0", // steel blue
  education:"#c4a85a", // warm gold
  novel:    "#c47a8e", // dusty rose
  ventures: "#8aaf9f", // sage teal
  projects: "#9b82cc", // soft violet
  hobbies:  "#d4956a", // terracotta
};

function hex(color: string, alpha: number) {
  // Returns rgba() string for inline style tints
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
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
        border: `1px solid ${hex(color, 0.6)}`,
        backgroundColor: hex(color, 0.18),
      }}
    >
      <div
        className="px-6 pt-5 pb-2 shrink-0"
        style={{ borderBottom: `1px solid ${hex(color, 0.4)}` }}
      >
        <h2
          className="font-semibold text-base tracking-tight"
          style={{ color }}
        >
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
