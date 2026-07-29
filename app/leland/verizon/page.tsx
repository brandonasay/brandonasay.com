import type { Metadata } from "next";
import Link from "next/link";
import OverviewAccordion from "@/components/leland/verizon/OverviewAccordion";

export const metadata: Metadata = {
  title: "Executing the Verizon Deal - Brandon Asay",
  description:
    "A prototype for the second case question: how to execute a deal that sends thousands of transitioning employees to Leland, each needing something different.",
};

export default function VerizonOverviewPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
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
          Executing the Verizon Deal
        </h1>
        <p className="text-[#e8e8e3]/70 text-base leading-relaxed max-w-xl mb-12">
          A prototype for the second case question: how do you execute a deal
          that sends thousands of transitioning employees to Leland, each
          needing something different.
        </p>

        <OverviewAccordion />

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
