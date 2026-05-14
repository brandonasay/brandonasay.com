const projects = [
  {
    name: "What's the Best Movie Ever?",
    description:
      "A movie recommendation engine for film lovers who actually have taste.",
    url: "https://whatsthebestmovieever.com",
    status: "live" as const,
  },
  {
    name: "brandonasay.com",
    description:
      "This portfolio site. The PNW landscape is procedurally generated — noise functions, canvas blur, and animated fog, all written with Claude Code.",
    url: null,
    status: "live" as const,
  },
  {
    name: "Coming Soon",
    description: "Something new in the works.",
    url: null,
    status: "soon" as const,
  },
  {
    name: "Coming Soon",
    description: "Something new in the works.",
    url: null,
    status: "soon" as const,
  },
];

export default function ProjectsContent() {
  return (
    <div className="py-8">
      <p className="text-zinc-500 text-sm mb-6">
        Built with Claude Code as a creative and technical partner.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`rounded-xl border p-6 transition-colors ${
              p.status === "live"
                ? "border-[#8aaf9f]/30 bg-[#8aaf9f]/5"
                : "border-white/10 bg-white/[0.02] opacity-50"
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-white font-semibold">{p.name}</h4>
              <span
                className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${
                  p.status === "live"
                    ? "bg-[#8aaf9f]/20 text-[#8aaf9f]"
                    : "bg-white/10 text-zinc-500"
                }`}
              >
                {p.status === "live" ? "live" : "soon"}
              </span>
            </div>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
              {p.description}
            </p>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8aaf9f] hover:underline font-medium"
              >
                Visit site ↗
              </a>
            ) : p.status === "live" ? (
              <span className="text-zinc-600 text-sm">You&apos;re on it</span>
            ) : (
              <span className="text-zinc-600 text-sm">In progress</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
