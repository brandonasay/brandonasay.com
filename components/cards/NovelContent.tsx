import Image from "next/image";

export default function NovelContent() {
  return (
    <div className="pt-3 space-y-5">
      <div className="rounded-xl border border-[#8aaf9f]/30 bg-[#8aaf9f]/5 p-5">
        <h4 className="text-white font-bold text-lg text-center mb-4 italic">The Watchmaker</h4>
        <Image
          src="/watchmaker-cover.png"
          alt="The Watchmaker book cover"
          width={400}
          height={600}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 opacity-60">
        <h4 className="text-zinc-400 font-semibold">Next Project</h4>
        <p className="text-zinc-600 text-sm mt-1 italic">Placeholder — add your next writing project here.</p>
      </div>
    </div>
  );
}
