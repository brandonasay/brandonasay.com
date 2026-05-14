import { ventures } from "@/components/resume/data";

export default function VenturesContent() {
  return (
    <div className="py-8 space-y-5">
      {ventures.map((v) => (
        <div
          key={v.company}
          className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h4 className="text-white font-bold text-lg">{v.company}</h4>
              <p className="text-[#8aaf9f] text-sm mt-0.5">{v.title}</p>
              <p className="text-zinc-500 text-sm">{v.dates}</p>
            </div>
            {v.link && (
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm text-[#8aaf9f] hover:underline font-medium"
              >
                {v.link.replace("https://", "")} ↗
              </a>
            )}
          </div>
          <ul className="space-y-2">
            {v.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-2 text-zinc-400 text-sm leading-relaxed"
              >
                <span className="text-[#8aaf9f] shrink-0 mt-0.5">→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
