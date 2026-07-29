"use client";

import { useState } from "react";
import Link from "next/link";
import LelandCard from "@/components/leland/LelandCard";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac"];

const elements = [
  {
    title: "Email Comms",
    body: [
      "A two-email sequence launches the benefit. The first goes out under Verizon's own severance and transition communications, introducing Leland coaching as part of the package and linking straight to the portal. The second is a short reminder five to seven days later for anyone who hasn't opened the portal yet.",
      "Two emails, not five: this is a population going through a layoff, and a heavier drip risks reading as tone-deaf rather than helpful.",
    ],
  },
  {
    title: "Custom Portal",
    body: [
      "The portal is co-branded, not a generic Leland signup page. Employees are far more likely to trust and act on something that visibly comes from Verizon, not a cold outreach from a company they've never heard of.",
      "It's built to feel like an extension of the severance package itself: the same simple flow, the same reassuring tone, no sales pitch.",
    ],
    cta: {
      label: "Open the Verizon + Leland Transition Portal →",
      href: "/leland/verizon/portal",
    },
  },
  {
    title: "Questionnaire → Curated Coaches",
    body: [
      "A single list of categories doesn't scale to a population this varied. The portal instead asks a few short branching questions, each with no more than four options, along dimensions that are independent of each other, routing to dozens of distinct outcomes in at most three taps.",
      "Each outcome ends on a curated set of coaches matched to that specific path, not a generic directory, with booking available on the spot.",
    ],
  },
  {
    title: "Leland+ Conversion",
    body: [
      "Verizon's sponsorship covers a fixed number of free sessions per employee, not an unlimited benefit.",
      "The real goal of this deal isn't the sponsored sessions themselves, it's converting engaged employees into paying Leland+ members once that sponsorship runs out, turning a one-time enterprise contract into an ongoing, monetizable relationship instead of a pass-through CSR line item.",
    ],
  },
];

export default function OverviewAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {elements.map((el, i) => {
        const isOpen = open === i;
        return (
          <LelandCard key={el.title} color={COLORS[i % COLORS.length]}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left"
            >
              <h2 className="text-[#222725] font-bold text-lg">{el.title}</h2>
              <span
                className={`text-[#222725]/60 text-xl transition-transform shrink-0 ml-4 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                ⌄
              </span>
            </button>

            {isOpen && (
              <div className="mt-4 space-y-3">
                {el.body.map((p) => (
                  <p
                    key={p}
                    className="text-[#222725]/80 text-sm leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
                {el.cta && (
                  <Link
                    href={el.cta.href}
                    className="inline-block mt-2 text-center text-sm font-medium rounded-lg px-5 py-2.5 bg-[#222725] text-[#e8e8e3] hover:bg-[#222725]/85 transition-colors"
                  >
                    {el.cta.label}
                  </Link>
                )}
              </div>
            )}
          </LelandCard>
        );
      })}
    </div>
  );
}
