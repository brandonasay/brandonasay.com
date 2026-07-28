import LelandCard from "@/components/leland/LelandCard";
import { subcategories } from "./content";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac", "#a1c5ce", "#d8cf6f"];

export default function Subcategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {subcategories.map((s, i) => (
        <LelandCard key={s.name} color={COLORS[i]}>
          <h3 className="text-[#222725] font-semibold mb-1.5">{s.name}</h3>
          <p className="text-[#222725]/70 text-sm leading-relaxed">
            {s.description}
          </p>
        </LelandCard>
      ))}
    </div>
  );
}
