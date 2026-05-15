import { work } from "@/components/resume/data";
import TimelineEntry from "@/components/resume/TimelineEntry";

export default function WorkContent() {
  return (
    <div className="py-8">
      <div className="space-y-2">
        {work.map((entry, i) => (
          <TimelineEntry
            key={entry.company}
            entry={entry}
            isLast={i === work.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
