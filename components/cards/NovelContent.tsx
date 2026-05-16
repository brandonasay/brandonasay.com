export default function NovelContent() {
  return (
    <div className="pt-3 space-y-5">
      <div className="rounded-xl border border-[#8aaf9f]/30 bg-[#8aaf9f]/5 p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-white font-bold text-lg">The Watchmaker</h4>
            <p className="text-[#8aaf9f] text-sm mt-0.5">Author & Publisher</p>
            <p className="text-zinc-500 text-sm">Jul 2017 – Present</p>
          </div>
          <a
            href="https://watchmakerfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-[#8aaf9f] hover:underline font-medium"
          >
            watchmakerfoundation.org ↗
          </a>
        </div>
        <ul className="space-y-2">
          {[
            "Authored and published The Watchmaker — a story about extraordinary creators and the forces that hold them back.",
            "All proceeds from the book fund the Watchmaker Foundation, a nonprofit removing financial barriers for exceptional creators.",
            "Founded the Watchmaker Foundation to make the mission permanent — ensuring the book's impact outlasts any single sale.",
          ].map((b, i) => (
            <li key={i} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
              <span className="text-[#8aaf9f] shrink-0 mt-0.5">→</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 opacity-60">
        <h4 className="text-zinc-400 font-semibold">Next Project</h4>
        <p className="text-zinc-600 text-sm mt-1 italic">Placeholder — add your next writing project here.</p>
      </div>
    </div>
  );
}
