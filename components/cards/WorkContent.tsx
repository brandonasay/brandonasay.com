import { work, education } from "@/components/resume/data";
import TimelineEntry from "@/components/resume/TimelineEntry";

export default function WorkContent() {
  return (
    <div className="py-8">
      <div className="space-y-2">
        {work.map((entry, i) => (
          <TimelineEntry
            key={entry.company}
            entry={entry}
            isLast={i === work.length - 1}
          />
        ))}
      </div>

      <div className="mt-12">
        <p className="text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mb-5">
          Education
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-xl border border-white/10 p-5 bg-white/[0.02]"
            >
              <p className="text-white font-semibold">{edu.school}</p>
              <p className="text-[#8aaf9f] text-sm mt-1">{edu.degree}</p>
              <p className="text-zinc-500 text-sm">{edu.focus}</p>
              <p className="text-zinc-600 text-xs mt-1">{edu.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
