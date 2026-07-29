import type { Metadata } from "next";
import Link from "next/link";
import Timeline from "@/components/leland/thirtyDays/Timeline";

export const metadata: Metadata = {
  title: "First 30 Days as GM, Marketplace - Brandon Asay",
  description:
    "Five parallel tracks across the first 30 days as GM, Marketplace at Leland, not a sequential 30-60-90 plan.",
};

export default function ThirtyDaysPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/leland"
          className="text-[#e8e8e3]/50 text-sm hover:text-[#e8e8e3]/80 hover:underline"
        >
          ← Back to case response
        </Link>
        <p className="text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mt-6 mb-3">
          Leland: GM, Marketplace Case Response
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e8e8e3] tracking-tight mb-4">
          First 30 Days as GM, Marketplace
        </h1>
        <p className="text-[#e8e8e3]/70 text-base leading-relaxed max-w-xl mb-12">
          Five tracks running in parallel across the first 30 days, each for
          a different span, not a sequential 30-60-90 plan. Tap any track
          for the question it answers, the key actions, and the proof by
          Day 30.
        </p>

        <Timeline />

        <footer className="pt-12 mt-8 border-t border-[#e8e8e3]/10">
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
