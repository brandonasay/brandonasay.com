import { ignition } from "./content";

export default function Ignition() {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{
        backgroundColor: "rgba(161, 197, 206, 0.08)",
        border: "1px solid rgba(161, 197, 206, 0.35)",
      }}
    >
      <div className="space-y-6">
        {ignition.map((idea) => (
          <div key={idea.title}>
            <h3 className="text-[#e8e8e3] font-semibold mb-1.5">
              {idea.title}
            </h3>
            <p className="text-[#e8e8e3]/75 text-sm leading-relaxed">
              {idea.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
