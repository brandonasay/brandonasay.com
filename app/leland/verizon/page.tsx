import type { Metadata } from "next";
import Survey from "@/components/leland/verizon/Survey";

export const metadata: Metadata = {
  title: "Your Next Chapter | Leland",
  description: "A few quick questions to find the right place to start.",
};

export default function VerizonPage() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 w-full">
        <span className="inline-block text-[#8aaf9f] text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-[#8aaf9f]/30">
          For Verizon Employees
        </span>
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
