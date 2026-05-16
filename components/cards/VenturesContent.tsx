const homebakedBullets = [
  "Built the best-in-class platform for home bakers to start and grow a micro-bakery.",
  "Customers browse like a digital farmers market, buy homemade goods, and earn rewards.",
];

export default function VenturesContent() {
  return (
    <div className="pt-3 space-y-5">
      <div className="rounded-xl border border-[#8aaf9f]/30 bg-[#8aaf9f]/5 p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-white font-bold text-lg">Homebakedapp.com</h4>
            <p className="text-[#8aaf9f] text-sm mt-0.5">Co-Founder, CEO</p>
            <p className="text-zinc-500 text-sm">Apr 2025 – Present</p>
          </div>
          <a
            href="https://homebakedapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-[#8aaf9f] hover:underline font-medium"
          >
            homebakedapp.com ↗
          </a>
        </div>
        <ul className="space-y-2">
          {homebakedBullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
              <span className="text-[#8aaf9f] shrink-0 mt-0.5">→</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-[#8aaf9f]/30 bg-[#8aaf9f]/5 p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h4 className="text-white font-bold text-lg">Watchmaker Foundation</h4>
            <p className="text-[#8aaf9f] text-sm mt-0.5">Founder</p>
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
            "Nonprofit removing financial barriers for exceptional creators.",
            "All proceeds from The Watchmaker and Power fund the foundation.",
          ].map((b, i) => (
            <li key={i} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
              <span className="text-[#8aaf9f] shrink-0 mt-0.5">→</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
