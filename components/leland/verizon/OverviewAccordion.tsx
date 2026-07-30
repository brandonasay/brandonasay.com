"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import LelandCard from "@/components/leland/LelandCard";

const COLORS = ["#a1c5ce", "#d8cf6f", "#becf8c", "#abc4ac"];

function EmailPreview() {
  return (
    <div className="bg-[#e8e8e3] rounded-xl p-5 text-[#222725] text-sm leading-relaxed">
      <p className="mb-4">Hi [firstname],</p>
      <p className="mb-4">
        As part of your Verizon transition benefits, you now have access to a
        free 1:1 session with a vetted career coach through Leland. Resume
        help, interview prep, exploring a new path; whatever you need right
        now, there&apos;s a coach on Leland for it.
      </p>
      <p className="mb-5">
        Let Leland cover lunch too: use the link below to book your coaching
        session and you&apos;ll receive a DoorDash gift card.
      </p>
      <Link
        href="/leland/verizon/portal"
        className="inline-block mb-5 text-center text-sm font-medium rounded-lg px-5 py-2.5 bg-[#222725] text-[#e8e8e3] hover:bg-[#222725]/85 transition-colors"
      >
        Find your coach →
      </Link>
      <p className="mb-4">
        This benefit is available to you now for no cost. Questions? Just
        reply to this email.
      </p>
      <p className="text-[#222725]/60">— The Verizon People Team</p>
    </div>
  );
}

type Element = {
  title: string;
  body?: string[];
  content?: ReactNode;
  cta?: { label: string; href: string };
};

const elements: Element[] = [
  {
    title: "Initial Email Comms",
    content: <EmailPreview />,
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
      "The real goal of this deal isn't the sponsored sessions themselves, it's converting engaged employees into paying Leland+ members once that sponsorship runs out, turning a one-time enterprise contract into an ongoing, monetizable relationship instead of a pass-through CSR line item.",
      "After the first session, follow-up outreach is built around what actually happened in it. Each session generates a short summary of the employee's goals and the coach's recommendations, and that summary drives a personalized follow-up, not a generic \"upgrade to Leland+\" email, but a message that references their specific path (the board seat they're chasing, the business they want to start, the program they're applying to) and proposes Leland+ as the way to keep working on exactly that.",
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
                {el.content ? (
                  el.content
                ) : (
                  <>
                    {el.body?.map((p) => (
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
                  </>
                )}
              </div>
            )}
          </LelandCard>
        );
      })}
    </div>
  );
}
