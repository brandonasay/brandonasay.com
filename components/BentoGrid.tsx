"use client";

import WorkContent from "./cards/WorkContent";
import EducationContent from "./cards/EducationContent";
import NovelContent from "./cards/NovelContent";
import VenturesContent from "./cards/VenturesContent";
import ProjectsContent from "./cards/ProjectsContent";
import HobbiesContent from "./cards/HobbiesContent";

function Tile({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/8 bg-white/[0.025] flex flex-col ${className}`}
    >
      <div className="px-6 pt-5 pb-2 shrink-0 border-b border-white/6">
        <h2 className="text-white font-semibold text-base tracking-tight">
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
        {/* Work — spans 2 rows on the left */}
        <Tile
          label="Work Experience"
          className="md:col-start-1 md:row-start-1 md:row-span-2"
        >
          <WorkContent />
        </Tile>

        {/* Education — top center */}
        <Tile label="Education" className="md:col-start-2 md:row-start-1">
          <EducationContent />
        </Tile>

        {/* Novel Writing — top right */}
        <Tile label="Novel Writing" className="md:col-start-3 md:row-start-1">
          <NovelContent />
        </Tile>

        {/* Ventures — center+right, row 2 */}
        <Tile
          label="Ventures"
          className="md:col-start-2 md:col-span-2 md:row-start-2"
        >
          <VenturesContent />
        </Tile>

        {/* Claude Code — left+center, row 3 */}
        <Tile
          label="Claude Code Projects"
          className="md:col-start-1 md:col-span-2 md:row-start-3"
        >
          <ProjectsContent />
        </Tile>

        {/* Hobbies — bottom right */}
        <Tile
          label="Hobbies & Interests"
          className="md:col-start-3 md:row-start-3"
        >
          <HobbiesContent />
        </Tile>
      </div>
    </div>
  );
}
