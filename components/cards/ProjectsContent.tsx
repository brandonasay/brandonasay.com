const projects = [
  {
    name: "What's the Best Movie Ever?",
    description: "A movie recommendation engine for film lovers who actually have taste.",
    url: "https://whatsthebestmovieever.com",
    status: "live" as const,
  },
  {
    name: "brandonasay.com",
    description: "This portfolio site. A bento-grid dashboard built end-to-end with Claude Code.",
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
    <div className="pt-3">
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`rounded-xl border p-6 transition-colors ${
              p.status === "live"
                ? "border-[#222725]/25 bg-[#222725]/10"
                : "border-[#222725]/12 bg-[#222725]/5 opacity-50"
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="text-[#222725] font-semibold">{p.name}</h4>
              <span
                className={`shrink-0 text-xs px-2 py-0.5 rounded-full ${
                  p.status === "live"
                    ? "bg-[#222725]/15 text-[#222725]/80"
                    : "bg-[#222725]/10 text-[#222725]/50"
                }`}
              >
                {p.status === "live" ? "live" : "soon"}
              </span>
            </div>
            <p className="text-[#222725]/60 text-sm mb-4 leading-relaxed">{p.description}</p>
            {p.url ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#222725]/70 hover:text-[#222725] hover:underline font-medium"
              >
                Visit site ↗
              </a>
            ) : p.status === "live" ? (
              <span className="text-[#222725]/45 text-sm">You&apos;re on it</span>
            ) : (
              <span className="text-[#222725]/45 text-sm">In progress</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
