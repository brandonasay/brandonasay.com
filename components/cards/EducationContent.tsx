import { education } from "@/components/resume/data";

export default function EducationContent() {
  return (
    <div className="pt-3 space-y-4">
      {education.map((edu) => (
        <div
          key={edu.school}
          className="rounded-xl border border-white/10 p-6 bg-white/[0.02]"
        >
          <p className="text-white font-bold text-lg">{edu.school}</p>
          <p className="text-[#8aaf9f] text-sm mt-1">{edu.degree}</p>
          <p className="text-zinc-400 text-sm">{edu.focus}</p>
          <p className="text-zinc-600 text-xs mt-2">{edu.dates}</p>
        </div>
      ))}

    </div>
  );
}
