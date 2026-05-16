import { education } from "@/components/resume/data";

export default function EducationContent() {
  return (
    <div className="pt-3 space-y-4">
      {education.map((edu) => (
        <div
          key={edu.school}
          className="rounded-xl border border-[#222725]/20 p-6 bg-[#222725]/8"
        >
          <p className="text-[#222725] font-bold text-lg">{edu.school}</p>
          <p className="text-[#222725]/70 text-sm mt-1">{edu.degree}</p>
          <p className="text-[#222725]/60 text-sm">{edu.focus}</p>
          <p className="text-[#222725]/45 text-xs mt-2">{edu.dates}</p>
        </div>
      ))}
    </div>
  );
}
