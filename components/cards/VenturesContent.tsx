const ventures = [
  {
    name: "Homebakedapp.com",
    role: "Co-Founder, CEO",
    dates: "Apr 2025 – Present",
    url: "https://homebakedapp.com",
    urlLabel: "homebakedapp.com ↗",
    bullets: [
      "Built the best-in-class platform for home bakers to start and grow a micro-bakery.",
      "Customers browse like a digital farmers market, buy homemade goods, and earn rewards.",
    ],
  },
  {
    name: "Watchmaker Foundation",
    role: "Founder",
    dates: "Jul 2017 – Present",
    url: "https://watchmakerfoundation.org",
    urlLabel: "watchmakerfoundation.org ↗",
    bullets: [
      "Nonprofit removing financial barriers for exceptional creators.",
      "All proceeds from The Watchmaker and Power fund the foundation.",
    ],
  },
];

export default function VenturesContent() {
  return (
    <div className="pt-3 space-y-4">
      {ventures.map((v) => (
        <div key={v.name} className="rounded-xl border border-[#222725]/20 bg-[#222725]/8 p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h4 className="text-[#222725] font-bold text-lg">{v.name}</h4>
              <p className="text-[#222725]/70 text-sm mt-0.5">{v.role}</p>
            </div>
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm text-[#222725]/70 hover:text-[#222725] hover:underline font-medium"
            >
              {v.urlLabel}
            </a>
          </div>
          <ul className="space-y-2">
            {v.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-[#222725]/65 text-sm leading-relaxed">
                <span className="text-[#222725]/50 shrink-0 mt-0.5">→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
