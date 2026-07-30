import type { Metadata } from "next";
import Link from "next/link";
import LelandCard from "@/components/leland/LelandCard";

export const metadata: Metadata = {
  title: "Brandon Asay - Leland Case",
  description:
    "Three parts of a single case interview response for the Head of Marketplace / GM, Marketplace role at Leland.",
};

const parts = [
  {
    title: "New Category Strategy",
    href: "/leland/new-category",
    color: "#a1c5ce",
    live: true,
  },
  {
    title: "Verizon Deal Execution",
    href: "/leland/verizon",
    color: "#d8cf6f",
    live: true,
  },
  {
    title: "First 30 Days",
    href: "/leland/thirty-days",
    color: "#becf8c",
    live: true,
  },
];

export default function LelandPage() {
  return (
    <main className="min-h-screen print:bg-white print:text-black">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mb-3">
          Leland: GM, Marketplace Case Response
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e8e8e3] tracking-tight mb-4">
          Brandon Asay - Leland Case
        </h1>
        <p className="text-[#e8e8e3]/70 text-base leading-relaxed max-w-xl mb-12">
          Time to build 🔥
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {parts.map((p) =>
            p.live && p.href ? (
              <Link key={p.title} href={p.href} className="block">
                <LelandCard
                  color={p.color}
                  className="h-full flex items-center justify-center text-center transition-transform hover:-translate-y-0.5"
                >
                  <h2 className="text-[#222725] font-semibold">{p.title}</h2>
                </LelandCard>
              </Link>
            ) : (
              <div key={p.title} aria-disabled="true">
                <LelandCard color={p.color} className="h-full opacity-50">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-[#222725] font-semibold">{p.title}</h2>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#222725]/10 text-[#222725]/50">
                      soon
                    </span>
                  </div>
                </LelandCard>
              </div>
            )
          )}
        </div>

        <footer className="pt-16">
          <Link
            href="/"
            className="text-[#e8e8e3]/50 text-sm hover:text-[#e8e8e3]/80 hover:underline"
          >
            ← Back to brandonasay.com
          </Link>
        </footer>
      </div>
    </main>
  );
}
