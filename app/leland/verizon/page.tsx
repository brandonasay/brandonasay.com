import type { Metadata } from "next";
import Link from "next/link";
import Survey from "@/components/leland/verizon/Survey";

export const metadata: Metadata = {
  title: "Verizon Deal Execution - Brandon Asay",
  description:
    "A prototype routing flow for transitioning Verizon employees to the right Leland coaching category.",
};

export default function VerizonPage() {
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
        <p className="text-[#e8e8e3]/70 text-base leading-relaxed max-w-xl mb-16">
          A prototype for the second case question: how do you execute a deal
          that sends thousands of transitioning employees to Leland, each
          needing something different.
        </p>

        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-4">
            The Deal
          </h2>
          <p className="text-[#e8e8e3]/70 leading-relaxed">
            When a company like Verizon offers Leland coaching as part of a
            severance or transition package, signing the deal is the easy part.
            The hard part is execution: thousands of employees hit the same
            landing page on day one, and each of them needs something
            completely different, a new degree, a new business, a new role, a
            board seat, or something else entirely. Sending all of them to a
            single category list doesn&apos;t work at that volume.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-6">
            The Prototype
          </h2>
          <p className="text-[#e8e8e3]/70 leading-relaxed mb-8">
            This is the actual routing flow a transitioning employee would see,
            a short branching survey that gets to the right starting point in
            at most three questions.
          </p>
          <Survey />
        </section>

        <section className="mb-16">
          <h2 className="text-[#e8e8e3] text-2xl font-bold tracking-tight mb-4">
            Why a Branching Tree
          </h2>
          <p className="text-[#e8e8e3]/70 leading-relaxed">
            A single list of categories doesn&apos;t scale. The more paths Leland
            supports, the longer that list gets, and it stops feeling like a
            survey and starts feeling like a directory. A branching tree solves
            this by asking a few short questions, each with no more than four
            options, along dimensions that are independent of each other.
            That&apos;s enough to route to seven distinct categories in at most
            three taps, with no question ever feeling like a form.
          </p>
        </section>

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
