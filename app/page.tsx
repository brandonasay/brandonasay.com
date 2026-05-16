import Nav from "@/components/Nav";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="px-6 pt-24 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#e4edf1] tracking-tight mb-4">
          Brandon Asay
        </h1>
        <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
          I just really love to learn and create.
        </p>
      </div>
      <BentoGrid />
    </main>
  );
}
