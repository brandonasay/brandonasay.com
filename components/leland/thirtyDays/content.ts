export type Pillar = {
  id: string;
  name: string;
  startDay: number;
  endDay: number;
  color: string;
  question: string;
  actions: string[];
  proof: string;
  connects?: string;
};

export const pillars: Pillar[] = [
  {
    id: "learn-the-business",
    name: "Learn the Business",
    startDay: 0,
    endDay: 30,
    color: "#a1c5ce",
    question:
      "Do I actually understand where Leland makes money and where it's under-monetized, or am I operating on assumptions?",
    actions: [
      "Get fluent in the core dashboards (GMV, take rate, category-level conversion, LTV/CAC, coach acceptance and retention).",
      "Pull category-by-category performance to pressure-test the Encore Career thesis and check for other under-monetized pockets.",
      "Run 1:1s with every function lead touching the marketplace to learn what's already been tried and why.",
      "Audit the current enterprise/outplacement pipeline: what's signed, what's stalled, who owns it.",
    ],
    proof:
      "A data-backed point of view on which categories are genuinely under-monetized, validating or revising the Encore Career thesis with real numbers instead of a pitch.",
    connects:
      "This is where Question 1's recommendation either survives contact with real data or gets revised. I'd rather find the hole in week 1 than defend it blindly in week 4.",
  },
  {
    id: "deep-user-discovery",
    name: "Deep User Discovery",
    startDay: 0,
    endDay: 18,
    color: "#d8cf6f",
    question:
      "Do I understand both sides of this marketplace from lived experience, or just the dashboard version of them?",
    actions: [
      "Book and complete real sessions as a customer across 2–3 categories.",
      "Shadow live coaching sessions from the supply side and sit with coach ops.",
      "Interview a deliberate mix: churned customers, successful customers, top coaches, and coaches who got rejected in vetting.",
      "Spend time in Leland's existing community/Slack to catch unprompted, organic signal.",
    ],
    proof:
      "A written synthesis of what's actually building or breaking trust on each side, plus a short list of existing coaches worth recruiting into the Encore Career pilot.",
  },
  {
    id: "build-the-room",
    name: "Build the Room",
    startDay: 0,
    endDay: 30,
    color: "#becf8c",
    question:
      "Will the people whose buy-in I need in week 4 actually trust me by then?",
    actions: [
      "Early, recurring 1:1s with the Head of GMs and CEO.",
      "Real time with coach ops, marketing, and CS, crediting what's already working rather than assuming it's broken.",
      "Share a point of view early and visibly instead of going quiet for a month.",
      "Ship one or two small, low-risk wins early to earn credibility before asking for anything bigger.",
    ],
    proof:
      "Working relationships strong enough that nobody is surprised by the Day 30 roadmap, because they've been part of shaping it.",
  },
  {
    id: "set-the-scoreboard",
    name: "Set the Scoreboard",
    startDay: 10,
    endDay: 28,
    color: "#abc4ac",
    question:
      "What will I actually be held accountable to, and does the org agree on it?",
    actions: [
      "Define baseline KPIs per category and channel.",
      "Fix or build the dashboard so it's trusted and used by the team, not just by me.",
      "Set explicit targets tied to the two live bets, Encore Career validation and the enterprise pilot, so progress is measurable, not anecdotal.",
      "Socialize the scoreboard with the Head of GMs/CEO before it's presented, not during.",
    ],
    proof:
      "A live, shared dashboard the team actually uses, with explicit next-quarter targets tied directly to the resourcing ask.",
  },
  {
    id: "ship-something-real",
    name: "Ship Something Real",
    startDay: 15,
    endDay: 30,
    color: "#a1c5ce",
    question: "Can I turn strategy into revenue inside a month, not just a deck?",
    actions: [
      "Stand up the offer, portal, and two-email sequence designed for the enterprise pilot.",
      "Confirm enough 1:1 coach capacity across the right specialties to handle expected booking volume.",
      "Launch the sequence and monitor the funnel in real time.",
      "Report results back to the enterprise partner mid-campaign to set up the next deal.",
    ],
    proof:
      "An actually-executed pilot with real bookings and revenue booked against it, not a projection, plus a documented, repeatable playbook.",
    connects: "This is Question 2's plan, run for real, not reinvented.",
  },
];
