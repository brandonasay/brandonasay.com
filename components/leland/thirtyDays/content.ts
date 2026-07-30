export type Pillar = {
  id: string;
  name: string;
  startDay: number;
  endDay: number;
  color: string;
  statement: string;
  actions: string[];
};

export const pillars: Pillar[] = [
  {
    id: "learn-the-business",
    name: "Learn the Business",
    startDay: 0,
    endDay: 30,
    color: "#a1c5ce",
    statement:
      "Gain a formidable understanding of Leland's business model, financials, operations, GTM motions, and more.",
    actions: [
      "Get fluent in the core dashboards (GMV, take rate, category-level conversion, LTV/CAC, coach acceptance and retention).",
      "Pull category-by-category performance to pressure-test the Encore Career thesis and check for other under-monetized pockets.",
      "Run 1:1s with every function lead touching the marketplace to learn what's already been tried and why.",
      "Audit the current enterprise/outplacement pipeline: what's signed, what's stalled, who owns it.",
    ],
  },
  {
    id: "deep-user-discovery",
    name: "Deep User Discovery",
    startDay: 0,
    endDay: 30,
    color: "#d8cf6f",
    statement:
      "Build a firsthand understanding of both sides of the marketplace by experiencing it as a customer and shadowing it as supply.",
    actions: [
      "Book and complete real sessions as a customer across 2–3 categories.",
      "Shadow live coaching sessions from the supply side and sit with coach ops.",
      "Interview a deliberate mix: churned customers, successful customers, top coaches, and coaches who got rejected in vetting.",
      "Spend time in Leland's existing community/Slack to catch unprompted, organic signal.",
    ],
  },
  {
    id: "build-the-room",
    name: "Build the Room",
    startDay: 5,
    endDay: 30,
    color: "#becf8c",
    statement:
      "Earn the trust of the people whose buy-in this plan depends on, before I need to ask for it.",
    actions: [
      "Early, recurring 1:1s with the Head of GMs and CEO.",
      "Real time with coach ops, marketing, and CS, crediting what's already working rather than assuming it's broken.",
      "Share a point of view early and visibly instead of going quiet for a month.",
      "Ship one or two small, low-risk wins early to earn credibility before asking for anything bigger.",
    ],
  },
  {
    id: "set-the-scoreboard",
    name: "Set the Scoreboard",
    startDay: 15,
    endDay: 30,
    color: "#abc4ac",
    statement:
      "Establish a shared, trusted scoreboard the org agrees to be held accountable to.",
    actions: [
      "Define baseline KPIs per category and channel.",
      "Fix or build the dashboard so it's trusted and used by the team, not just by me.",
      "Set explicit targets tied to the two live bets, Encore Career validation and the enterprise pilot, so progress is measurable, not anecdotal.",
      "Socialize the scoreboard with the Head of GMs/CEO before it's presented, not during.",
    ],
  },
  {
    id: "ship-something-real",
    name: "Ship Something Real",
    startDay: 20,
    endDay: 30,
    color: "#a1c5ce",
    statement:
      "Turn strategy into an actually-executed pilot with real bookings and revenue, not just a deck.",
    actions: [
      "Stand up the offer, portal, and two-email sequence designed for the enterprise pilot.",
      "Confirm enough 1:1 coach capacity across the right specialties to handle expected booking volume.",
      "Launch the sequence and monitor the funnel in real time.",
      "Report results back to the enterprise partner mid-campaign to set up the next deal.",
    ],
  },
];
