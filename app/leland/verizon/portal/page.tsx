import type { Metadata } from "next";
import Survey from "@/components/leland/verizon/Survey";

export const metadata: Metadata = {
  title: "Your Next Chapter | Leland",
  description: "A few quick questions to find the right place to start.",
};

export default function PortalPage() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 w-full">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-3xl md:text-4xl font-bold tracking-tight text-[#e8e8e3]">
            verizon<span className="text-[#ee0000]">✓</span>
          </span>
          <span className="text-[#e8e8e3]/25 text-2xl font-light">+</span>
          <span className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8e8e3]">
            Leland
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#e8e8e3] tracking-tight mb-4">
          Let&apos;s find your next chapter.
        </h1>
        <p className="text-[#e8e8e3]/70 text-base leading-relaxed max-w-xl mb-12">
          A few quick questions to point you to the right place to start,
          whether that&apos;s school, a business, a board seat, or something
          else entirely.
        </p>

        <Survey />
      </div>
    </main>
  );
}
