import Nav from "@/components/Nav";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="px-6 pt-24 pb-10 text-center">
        <p className="text-[#8aaf9f] text-[10px] font-mono tracking-[0.18em] uppercase mb-3">
          Product Manager · Founder · Builder
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
          Brandon Asay
        </h1>
        <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
          Top 10% PM at Amazon. Co-founder. Published author.
          I build things that matter.
        </p>
      </div>
      <BentoGrid />
    </main>
  );
}
