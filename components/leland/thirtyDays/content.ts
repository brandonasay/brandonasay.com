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
    endDay: 15,
    color: "#a1c5ce",
    statement:
      "Gain a formidable understanding of Leland's business model, financials, operations, GTM motions, and more.",
    actions: [
      "Dive deep into all available SQL tables, dashboards, and reports. Become an expert on the data and its structure.",
      "Spend time with each internal stakeholder to the marketplace. What's their perspective. What are they working on. What have they tried, why did it succeed or fail.",
      "Spend time with each function at Leland; how do they work, what are their priorities?",
      "Become fluent in our business model and its finances. Where do we make money, where do we lose money, what categories are most profitable, etc.",
    ],
  },
  {
    id: "deep-user-discovery",
    name: "Deep User Discovery",
    startDay: 2,
    endDay: 30,
    color: "#d8cf6f",
    statement:
      "Become intimately familiar with our users and their needs on both sides of the marketplace: clients and experts.",
    actions: [
      "Book and complete sessions as a client across 3 categories",
      "Interview 15 coaches. Mix of thriving, new, and churned.",
      "Interview 5 power-customers (5+ sessions)",
      "Interview 5 churned customers.",
      "Become a coach and coach a session",
      "Spend time in communities where organic signals are found (Reddit, LinkedIn, etc.)",
    ],
  },
  {
    id: "build-the-room",
    name: "Build the Room",
    startDay: 5,
    endDay: 30,
    color: "#becf8c",
    statement: "Earn trust and establish rapport with those I'll be working with.",
    actions: [
      "Spend time each day with the stakeholders I'll be working with the most. Be curious about their work, how they work, and what they care about. Get to know them personally, not just professionally.",
      "Ask what people need help with. Help them with it, even if it's not directly related to my role at first.",
      "Establish an open line of communication and working relationship with each employee. Going from 1.5M employees to 30 is a luxury.",
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
      "In partnership with Head of GMs and CEO, define baseline KPIs for the marketplace.",
      "Build from scratch or adapt existing dashboards to be robust, trusted, and actionable curations of data.",
    ],
  },
  {
    id: "ship-something-real",
    name: "Ship Something Real",
    startDay: 20,
    endDay: 30,
    color: "#a1c5ce",
    statement: "No better way to learn than by doing",
    actions: [
      "Identify an early observation or idea that has compelling voice of customer or data",
      "Write the PRD",
      "Socialize with stakeholders",
      "Ship it. Experience our development, launch, and test processes end to end.",
      "Measure and report results to the team, celebrate the win.",
    ],
  },
];
