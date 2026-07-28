import { justification } from "./content";

export default function Justification() {
  return (
    <div className="space-y-8">
      {justification.map((j) => (
        <div key={j.label}>
          <h3 className="text-[#e8e8e3] font-semibold mb-2">{j.label}</h3>
          <p className="text-[#e8e8e3]/70 text-sm leading-relaxed">
            {j.stat}
            {j.sourceUrl && (
              <>
                {" "}
                <a
                  href={j.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1c5ce] hover:underline"
                >
                  Source: {j.sourceLabel}
                </a>
              </>
            )}
            {j.additionalSources?.map((s) => (
              <span key={s.url}>
                {", "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a1c5ce] hover:underline"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
