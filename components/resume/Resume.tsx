import { experience, education } from "./data";
import TimelineEntry from "./TimelineEntry";

export default function Resume() {
  return (
    <section id="resume" className="bg-[#0e1a14] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#8aaf9f] text-sm font-mono tracking-widest uppercase mb-2">
          Career
        </h2>
        <h3 className="text-3xl font-bold text-white mb-12">Experience</h3>

        <div className="space-y-2">
          {experience.map((entry, i) => (
            <TimelineEntry
              key={entry.company}
              entry={entry}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="rounded-xl border border-white/10 p-6 bg-white/[0.02]"
              >
                <p className="text-white font-semibold">{edu.school}</p>
                <p className="text-[#8aaf9f] text-sm mt-1">{edu.degree}</p>
                <p className="text-zinc-500 text-sm mt-0.5">{edu.focus}</p>
                <p className="text-zinc-600 text-xs mt-2">{edu.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
