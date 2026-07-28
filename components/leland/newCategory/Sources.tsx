import { sources } from "./content";

export default function Sources() {
  return (
    <ul className="space-y-2">
      {sources.map((url) => (
        <li key={url}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1c5ce] text-sm hover:underline break-all"
          >
            {url}
          </a>
        </li>
      ))}
    </ul>
  );
}
