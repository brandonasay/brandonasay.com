import type { Metadata } from "next";
import Link from "next/link";
import CategoryHierarchy from "@/components/leland/newCategory/CategoryHierarchy";
import Justification from "@/components/leland/newCategory/Justification";
import Risks from "@/components/leland/newCategory/Risks";
import Ignition from "@/components/leland/newCategory/Ignition";
import Sources from "@/components/leland/newCategory/Sources";

export const metadata: Metadata = {
  title: "Leland's New Category: Encore Career - Brandon Asay",
  description:
    "A response to Leland's GM, Marketplace case question: grow existing categories or launch a new one? The recommendation, the data behind it, and the risks.",
};

export default function NewCategoryPage() {
  return (
    <main className="min-h-screen print:bg-white print:text-black">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="mb-16">
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
            Leland&apos;s New Category: Encore Career
          </h1>
          <p className="text-[#e8e8e3]/70 text-base leading-relaxed max-w-xl mb-4">
            With finite resources, there is a tradeoff between prioritizing
            growth in existing categories and prioritizing category expansion.
          </p>
        </div>

        {/* The Recommendation */}
        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-4">
            The Recommendation: Encore Career
          </h2>
          <p className="text-[#e8e8e3]/70 leading-relaxed mb-4">
            Coaching for retiring and semi-retiring senior professionals building
            their next chapter (landing a board seat, an advisory role, a
            consulting practice, or a second act) rather than winding down.
          </p>
          <p className="text-[#e8e8e3]/70 leading-relaxed">
            It clears Leland&apos;s bar on every count: the decisions are
            high-stakes (a board seat, a fractional executive role, a second
            career), the process is genuinely competitive (board searches,
            interim placements, landing the first clients), success has a clear,
            bookable definition (the seat, the role, the signed client), and the
            customer pull is arriving on its own timeline, driven by
            demographics, not marketing.
          </p>
        </section>

        {/* Subcategories */}
        <section className="mb-16">
          <CategoryHierarchy />
        </section>

        {/* Why This Wins */}
        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-6">
            Why This Wins
          </h2>
          <Justification />
        </section>

        {/* Risks and Headwinds */}
        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-6">
            Risks and Headwinds
          </h2>
          <Risks />
        </section>

        {/* Ignition */}
        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-6">
            Ignition
          </h2>
          <p className="text-[#e8e8e3]/70 leading-relaxed mb-6">
            A few ways to solve the cold start problem: getting both sides of
            the marketplace, coaches and users, populated and engaged before
            the category has any of its own momentum.
          </p>
          <Ignition />
        </section>

        {/* Sources */}
        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-6">
            Sources
          </h2>
          <Sources />
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#e8e8e3]/10">
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
