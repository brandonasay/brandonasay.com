import { risks } from "./content";

export default function Risks() {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{
        backgroundColor: "rgba(216, 207, 111, 0.08)",
        border: "1px solid rgba(216, 207, 111, 0.35)",
      }}
    >
      <div className="space-y-6">
        {risks.map((r) => (
          <div key={r.title}>
            <h3 className="text-[#e8e8e3] font-semibold mb-1.5">{r.title}</h3>
            <p className="text-[#e8e8e3]/75 text-sm leading-relaxed">
              {r.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
