import LelandCard from "@/components/leland/LelandCard";
import { subcategories } from "./content";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac", "#a1c5ce", "#d8cf6f"];
const LINE = "rgba(232,232,227,0.2)";

export default function CategoryHierarchy() {
  return (
    <div>
      {/* Top node */}
      <div className="flex flex-col items-center">
        <div
          className="rounded-2xl px-8 py-4"
          style={{ backgroundColor: "#e8e8e3", border: `1px solid ${LINE}` }}
        >
          <h3 className="text-[#222725] font-bold text-lg text-center">
            Encore Career
          </h3>
        </div>
        <div className="w-px h-8" style={{ backgroundColor: LINE }} />
      </div>

      {/* Bus line + children */}
      <div className="relative">
        <div className="h-px w-full" style={{ backgroundColor: LINE }} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 pt-0">
          {subcategories.map((s, i) => (
            <div key={s.name} className="flex flex-col items-center">
              <div className="w-px h-6" style={{ backgroundColor: LINE }} />
              <LelandCard
                color={COLORS[i]}
                className="w-full flex items-center justify-center text-center !p-3 min-h-[4.5rem]"
              >
                <h4 className="text-[#222725] font-semibold text-xs sm:text-sm leading-snug">
                  {s.name}
                </h4>
              </LelandCard>
            </div>
          ))}
        </div>
      </div>

      {/* Compact detail reference — full descriptions preserved for anyone reading closely */}
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-10 pt-8 border-t" style={{ borderColor: LINE }}>
        {subcategories.map((s) => (
          <div key={s.name}>
            <dt className="text-[#e8e8e3] text-sm font-semibold">{s.name}</dt>
            <dd className="text-[#e8e8e3]/60 text-sm leading-relaxed">
              {s.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
