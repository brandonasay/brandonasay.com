import { ResultKey } from "./content";

export type Coach = {
  name: string;
  headline: string;
  bio: string;
  rating: number;
  sessions: number;
  photo: string;
};

const FIRST_NAMES_F = [
  "Priya", "Elena", "Sarah", "Renata", "Aisha",
  "Nadia", "Laura", "Michelle", "Grace", "Anya",
];
const FIRST_NAMES_M = [
  "Marcus", "David", "James", "Tom", "Chris",
  "Ryan", "Wei", "Devon", "Omar", "Ben",
];
const LAST_NAMES = [
  "Nandan", "Cho", "Lindqvist", "Silva", "Rahman",
  "Bello", "Ferraro", "Osei", "Kim", "Petrova",
];

const WOMEN_NAMES = FIRST_NAMES_F.flatMap((f) => LAST_NAMES.map((l) => `${f} ${l}`));
const MEN_NAMES = FIRST_NAMES_M.flatMap((f) => LAST_NAMES.map((l) => `${f} ${l}`));

const woman = (i: number) => `https://randomuser.me/api/portraits/women/${i}.jpg`;
const man = (i: number) => `https://randomuser.me/api/portraits/men/${i}.jpg`;

// Each category gets a 5-index window (offset..offset+4) into the 100-name
// pools, so all 20 categories draw from 100 unique women's names/photos and
// 100 unique men's names/photos with no overlap.
function buildCategory(offset: number, roles: string[], bios: string[]): Coach[] {
  const list: Coach[] = [];
  for (let i = 0; i < 5; i++) {
    const idx = offset + i;
    list.push({
      name: WOMEN_NAMES[idx],
      headline: roles[i * 2],
      bio: bios[i * 2],
      rating: Math.round((4.6 + ((idx % 4) * 0.1)) * 10) / 10,
      sessions: 45 + ((idx * 13) % 220),
      photo: woman(idx),
    });
    list.push({
      name: MEN_NAMES[idx],
      headline: roles[i * 2 + 1],
      bio: bios[i * 2 + 1],
      rating: Math.round((4.6 + (((idx + 2) % 4) * 0.1)) * 10) / 10,
      sessions: 45 + (((idx + 7) * 11) % 220),
      photo: man(idx),
    });
  }
  return list;
}

export const coaches: Record<ResultKey, Coach[]> = {
  mba: buildCategory(
    0,
    [
      "Former MBA Admissions Reader, Wharton",
      "MBA, Kellogg. Career Coach",
      "Former Admissions Committee Member, Harvard Business School",
      "MBA, Stanford GSB. Application Coach",
      "Former Admissions Director, INSEAD",
      "MBA, Booth. Essay Coach",
      "Former MBA Interviewer, Columbia Business School",
      "MBA, Sloan. Career Changer Coach",
      "Former Admissions Reader, Tuck",
      "MBA, Ross. Application Strategist",
    ],
    [
      "Focuses on turning your work experience into a clear, differentiated candidacy.",
      "Specializes in behavioral interview prep and storytelling.",
      "Helps you choose the right schools and build a realistic target list.",
      "Coaches the \"why MBA, why now\" narrative until it actually lands.",
      "Runs mock interviews modeled on real admissions committee questions.",
      "Helps career-changers connect past experience to future goals convincingly.",
      "Specializes in essay editing that keeps your voice, not theirs.",
      "Coaches reapplicants on what to fix the second time around.",
      "Helps you build a resume that reads clearly to a non-technical reader.",
      "Focuses on waitlist strategy and how to respond if you land there.",
    ]
  ),
  law: buildCategory(
    5,
    [
      "JD, Columbia. Former Admissions Officer",
      "Litigator & LSAT Coach",
      "Former Admissions Reader, Yale Law",
      "JD, NYU. Personal Statement Coach",
      "Former Admissions Committee Member, Stanford Law",
      "JD, Georgetown. LSAT Strategist",
      "Former Admissions Officer, Michigan Law",
      "JD, Berkeley. Application Coach",
      "Former Admissions Reader, Duke Law",
      "JD, UVA. Career Changer Coach",
    ],
    [
      "Coaches LSAT strategy tailored to your specific score gaps.",
      "Specializes in personal statements that don't sound like everyone else's.",
      "Helps you build a target list balanced across reach and safety schools.",
      "Runs mock interviews for schools that require them.",
      "Coaches career-changers on framing non-legal experience convincingly.",
      "Focuses on addenda: how to explain a dip in your record.",
      "Helps you decide between early decision and regular admission strategically.",
      "Specializes in diversity statements that feel authentic, not performative.",
      "Coaches reapplicants on exactly what to change the second time.",
      "Helps you evaluate scholarship offers against overall program fit.",
    ]
  ),
  medicine: buildCategory(
    10,
    [
      "MD. Former Admissions Committee Member",
      "MCAT Coach & Pre-Med Advisor",
      "MD, Former Admissions Reader, Johns Hopkins",
      "MD. Secondary Essay Coach",
      "Former Admissions Committee Member, Stanford Medicine",
      "MD. Interview Prep Coach",
      "Former Admissions Reader, UCSF",
      "MD. Non-Traditional Applicant Coach",
      "Former Admissions Committee Member, Harvard Medical School",
      "MD. MCAT & Application Strategist",
    ],
    [
      "Coaches secondary essays so they don't read like copy-paste answers.",
      "Runs mock interviews modeled on MMI and traditional formats.",
      "Helps non-traditional applicants build a credible narrative.",
      "Specializes in CASPer test prep and situational judgment practice.",
      "Coaches how to talk about clinical experience without sounding rehearsed.",
      "Helps you build a realistic school list based on your MCAT and GPA.",
      "Focuses on the personal statement's opening line, because it matters most.",
      "Coaches reapplicants on what actually needs to change.",
      "Helps you prep for the \"tell me about yourself\" that starts every interview.",
      "Specializes in gap-year strategy for applicants who need to strengthen their file.",
    ]
  ),
  phd: buildCategory(
    15,
    [
      "PhD, Stanford. Research Coach",
      "Former PhD Admissions Committee Member",
      "PhD, MIT. Statement of Purpose Coach",
      "Former Admissions Reader, Berkeley",
      "PhD, Princeton. Research Fit Coach",
      "Former Admissions Committee Member, Yale",
      "PhD, Chicago. Application Strategist",
      "Former Admissions Reader, Columbia",
      "PhD, Michigan. Funding & Fellowship Coach",
      "Former Admissions Committee Member, Cornell",
    ],
    [
      "Helps you narrow a research interest into something a committee can evaluate.",
      "Coaches statement of purpose drafts until the argument is airtight.",
      "Specializes in matching applicants to the right faculty advisors.",
      "Helps you prep for interviews with prospective advisors.",
      "Focuses on funding strategy: fellowships, grants, and assistantships.",
      "Coaches career-changers on framing industry experience as research-relevant.",
      "Helps you write a writing sample that actually gets read in full.",
      "Specializes in choosing between competing offers and funding packages.",
      "Coaches on how to handle a research gap or pivot in your CV.",
      "Helps you build a realistic list of programs based on fit, not just rank.",
    ]
  ),
  masters: buildCategory(
    20,
    [
      "Graduate Admissions Coach",
      "Former Graduate Admissions Reader",
      "Master's Application Strategist",
      "Former Admissions Committee Member, Georgetown",
      "Career-Changer Graduate Coach",
      "Former Admissions Reader, NYU",
      "Statement of Purpose Coach",
      "Former Admissions Committee Member, USC",
      "Graduate Program Fit Coach",
      "Former Admissions Reader, UChicago",
    ],
    [
      "Helps working professionals frame years of experience into a strong narrative.",
      "Coaches statement of purpose drafts for career-focused programs.",
      "Specializes in programs that require a portfolio or work sample.",
      "Helps you choose between part-time and full-time program formats.",
      "Runs mock interviews for competitive cohort-based programs.",
      "Coaches career-changers on addressing gaps in prerequisite coursework.",
      "Focuses on letters of recommendation: who to ask and how.",
      "Helps you evaluate ROI across programs with different price points.",
      "Specializes in international applicants navigating US admissions.",
      "Coaches reapplicants on what to strengthen before trying again.",
    ]
  ),
  startBusiness: buildCategory(
    25,
    [
      "Founder, two exits",
      "Former Startup Accelerator Mentor",
      "Founder & First-Time Entrepreneur Coach",
      "Former Y Combinator Founder",
      "Startup Advisor & Former Operator",
      "Founder, bootstrapped SaaS business",
      "Former Techstars Mentor",
      "Serial Founder & Idea Validation Coach",
      "Founder, consumer products startup",
      "Startup Coach & Former VC Associate",
    ],
    [
      "Helps you validate an idea before writing a single line of code.",
      "Coaches early pricing decisions so you don't leave money on the table.",
      "Specializes in landing your first ten paying customers.",
      "Helps you decide what to build first and what to cut.",
      "Coaches founder-market fit: why you, why this, why now.",
      "Focuses on scrappy customer research before you build anything.",
      "Helps you build a lean one-page plan instead of a 40-page deck.",
      "Coaches solo founders on when (and if) to bring on a co-founder.",
      "Specializes in turning a side project into something fundable.",
      "Helps you figure out if this is a business or just a good weekend project.",
    ]
  ),
  acquireBusiness: buildCategory(
    30,
    [
      "Search Fund Operator",
      "M&A Advisor",
      "Former Private Equity Associate",
      "Search Fund Investor & Coach",
      "Small Business Acquisition Advisor",
      "Former Investment Banking Analyst",
      "Entrepreneurship-Through-Acquisition Coach",
      "Business Broker & Deal Advisor",
      "Former Search Fund CEO",
      "Acquisition Financing Advisor",
    ],
    [
      "Coaches you through sourcing off-market deals directly from owners.",
      "Specializes in running financial diligence without an army of advisors.",
      "Helps you structure seller financing to bridge a funding gap.",
      "Coaches first-time buyers on what red flags actually matter.",
      "Focuses on valuation: how to know if the asking price is fair.",
      "Helps you build a 100-day post-close operating plan.",
      "Specializes in SBA loan strategy for small business acquisitions.",
      "Coaches you through negotiating terms without losing the deal.",
      "Helps you evaluate whether to keep or replace existing management.",
      "Focuses on legal structuring: asset purchase versus stock purchase.",
    ]
  ),
  product: buildCategory(
    35,
    [
      "Former Head of Product, Stripe",
      "Senior PM, ex-Meta",
      "Group PM, ex-Amazon",
      "Director of Product, Series B startup",
      "Principal PM, ex-Google",
      "VP Product, ex-Airbnb",
      "Product Lead, ex-Uber",
      "Founding PM, YC startup",
      "PM Coach & Former Google APM",
      "Product Management Instructor",
    ],
    [
      "Runs mock case interviews with real product sense prompts.",
      "Helps you build a portfolio that shows impact, not just process.",
      "Coaches metrics-driven storytelling for behavioral rounds.",
      "Specializes in leveling: is this role actually the right seniority for you.",
      "Helps engineers and designers reposition themselves as PM candidates.",
      "Focuses on the \"tell me about a product you'd improve\" question.",
      "Coaches negotiation once the offer actually lands.",
      "Helps you translate scrappy 0-to-1 work into a compelling narrative.",
      "Specializes in technical PM interviews at infrastructure-heavy companies.",
      "Coaches you on choosing between competing offers, not just landing one.",
    ]
  ),
  marketing: buildCategory(
    40,
    [
      "CMO Coach, ex-Unilever",
      "Growth Marketing Lead, ex-Airbnb",
      "VP Marketing, ex-HubSpot",
      "Brand Director, ex-Nike",
      "Performance Marketing Lead, ex-Meta",
      "Head of Marketing, Series B startup",
      "Content Marketing Lead, ex-Netflix",
      "Product Marketing Manager, ex-Google",
      "Marketing Consultant & Former CPG Brand Manager",
      "Field Marketing Director, ex-Salesforce",
    ],
    [
      "Helps you build a portfolio that shows results, not just campaigns.",
      "Coaches brand marketers translating experience into growth roles, and back.",
      "Specializes in the analytics side: proving ROI on past campaigns.",
      "Helps you tell a clear story about a campaign that didn't work.",
      "Coaches positioning for the jump from IC to marketing management.",
      "Focuses on personal branding so recruiters find you first.",
      "Helps you prep for marketing case studies used in final rounds.",
      "Specializes in translating agency experience into in-house roles.",
      "Coaches you on negotiating title and scope, not just salary.",
      "Helps you decide between startup speed and enterprise scale.",
    ]
  ),
  engineering: buildCategory(
    45,
    [
      "Staff Engineer, ex-Google",
      "Engineering Manager, ex-Microsoft",
      "Principal Engineer, ex-Amazon",
      "VP Engineering, Series C startup",
      "Senior Software Engineer, ex-Meta",
      "Director of Engineering, ex-Stripe",
      "Tech Lead, ex-Netflix",
      "Founding Engineer, YC startup",
      "Engineering Coach & Former Apple SWE",
      "Distinguished Engineer, ex-IBM",
    ],
    [
      "Runs mock system design interviews at the level you're targeting.",
      "Coaches behavioral rounds so technical wins land as leadership stories.",
      "Helps you decide between staying an IC and moving into management.",
      "Specializes in interview prep for infrastructure and platform roles.",
      "Coaches you on negotiating level and equity, not just base salary.",
      "Helps you build a portfolio README that a hiring manager will actually read.",
      "Focuses on the \"walk me through a system you built\" question.",
      "Coaches career-changers from bootcamp grad to first engineering offer.",
      "Specializes in interview prep for companies with unusual interview loops.",
      "Helps you evaluate competing offers beyond just comp.",
    ]
  ),
  sales: buildCategory(
    50,
    [
      "VP Sales, ex-Salesforce",
      "Enterprise AE Coach",
      "Sales Director, ex-Oracle",
      "Head of Sales, Series B startup",
      "Regional Sales Manager, ex-HubSpot",
      "Strategic AE, ex-LinkedIn",
      "Sales Coach & Former IBM Rep",
      "VP Revenue, ex-Zoom",
      "SDR Manager, ex-Snowflake",
      "Chief Revenue Officer Coach",
    ],
    [
      "Coaches you on building a number-backed story from your best quarter.",
      "Helps you translate SMB sales experience into enterprise-ready positioning.",
      "Specializes in interviewing for quota-carrying roles at larger companies.",
      "Coaches negotiation of OTE, not just base.",
      "Helps you build a 30-60-90 day plan that impresses hiring managers.",
      "Focuses on the pitch: how you'd sell their product back to them.",
      "Coaches SDRs and BDRs on the jump to closing roles.",
      "Specializes in positioning a non-quota background for a sales role.",
      "Helps you evaluate comp plans and territory before you sign.",
      "Coaches you on handling the \"why are you leaving\" question cleanly.",
    ]
  ),
  hr: buildCategory(
    55,
    [
      "Former CHRO, mid-market company",
      "People Ops Lead, ex-Stripe",
      "VP People, ex-Netflix",
      "Talent Director, ex-Google",
      "HR Business Partner Coach",
      "Head of People, Series B startup",
      "Compensation & Benefits Lead, ex-Amazon",
      "Employee Relations Director",
      "Chief People Officer Coach",
      "Recruiting Lead, ex-Meta",
    ],
    [
      "Coaches the jump from HR generalist to strategic business partner.",
      "Specializes in positioning People Ops experience for bigger scope.",
      "Helps you build a case study on a program you actually ran.",
      "Coaches you on the data side: proving impact with real numbers.",
      "Focuses on interview prep for total rewards and comp roles.",
      "Helps recruiters reposition themselves into broader HR leadership.",
      "Coaches you on handling scenario-based HR interview questions.",
      "Specializes in the jump from individual contributor to people manager.",
      "Helps you evaluate a People team's maturity before you join.",
      "Coaches negotiation for HR leadership roles specifically.",
    ]
  ),
  legal: buildCategory(
    60,
    [
      "General Counsel Coach",
      "Employment Attorney",
      "Former Big Law Associate, ex-Skadden",
      "In-House Counsel, ex-Google",
      "Contracts Attorney Coach",
      "Compliance Counsel, ex-JPMorgan",
      "IP Attorney, ex-Apple",
      "Deputy General Counsel, Series B startup",
      "Litigation Associate Coach",
      "Regulatory Counsel, ex-Amazon",
    ],
    [
      "Coaches the move from law firm associate to in-house counsel.",
      "Helps you translate litigation experience into a corporate legal narrative.",
      "Specializes in interview prep for general counsel track roles.",
      "Coaches you on the billable-hours-to-business-partner mindset shift.",
      "Focuses on positioning niche practice experience for broader roles.",
      "Helps you evaluate in-house comp and equity against firm comp.",
      "Coaches you on the \"why leave a firm\" question convincingly.",
      "Specializes in compliance and regulatory interview prep.",
      "Helps you build a portfolio of matters you can actually discuss.",
      "Coaches negotiation for in-house counsel offers.",
    ]
  ),
  dataScience: buildCategory(
    65,
    [
      "Principal Data Scientist, ex-Netflix",
      "Data Science Manager, ex-Uber",
      "Senior ML Engineer, ex-Google",
      "Analytics Director, ex-Meta",
      "Data Science Coach & Former Amazon DS",
      "Head of Data Science, Series B startup",
      "Applied Scientist, ex-Microsoft",
      "Data Science Instructor",
      "Staff Data Scientist, ex-Airbnb",
      "VP Data, ex-Spotify",
    ],
    [
      "Runs mock take-home project reviews with real feedback.",
      "Coaches the stakeholder-facing side: explaining models to non-technical teams.",
      "Helps analysts reposition themselves as data scientists.",
      "Specializes in SQL and stats interview prep.",
      "Coaches you on the \"walk me through a project\" portfolio interview.",
      "Focuses on translating academic research into industry-ready language.",
      "Helps you decide between research-heavy and applied DS roles.",
      "Specializes in interview prep for ML engineering-adjacent roles.",
      "Coaches negotiation once you have a competing offer in hand.",
      "Helps you build a portfolio project that doesn't look like a tutorial.",
    ]
  ),
  it: buildCategory(
    70,
    [
      "IT Director, ex-large healthcare company",
      "IT Program Manager",
      "Infrastructure Lead, ex-Cisco",
      "Systems Engineering Manager",
      "IT Operations Director, ex-IBM",
      "Cloud Infrastructure Lead, ex-Amazon",
      "Help Desk to IT Leadership Coach",
      "Enterprise IT Architect",
      "IT Service Delivery Manager",
      "Former CIO, mid-market company",
    ],
    [
      "Coaches the move from help desk into infrastructure leadership.",
      "Specializes in positioning ops experience for IT management roles.",
      "Helps you build a case for moving from support into architecture.",
      "Coaches you on the scenario-based questions common in IT interviews.",
      "Focuses on cloud migration experience as a differentiator.",
      "Helps you translate certifications into a compelling resume.",
      "Coaches negotiation for IT leadership and director-level roles.",
      "Specializes in the jump from individual contributor to IT manager.",
      "Helps you evaluate an org's tech stack maturity before joining.",
      "Coaches you on framing vendor management experience for bigger scope.",
    ]
  ),
  cybersecurity: buildCategory(
    75,
    [
      "CISO Coach, ex-JPMorgan",
      "Security Engineering Lead",
      "Former CISO, healthcare company",
      "Security Operations Director, ex-Cisco",
      "Penetration Tester Coach",
      "Security Architect, ex-Microsoft",
      "Compliance & Risk Lead, ex-Amazon",
      "Threat Intelligence Manager",
      "Security Consultant, ex-IBM",
      "VP Security, Series B startup",
    ],
    [
      "Coaches certification strategy: what to get and in what order.",
      "Helps you translate IT experience into a security-focused resume.",
      "Specializes in interview prep for SOC analyst to lead roles.",
      "Coaches the incident response story every interviewer wants to hear.",
      "Focuses on compliance and risk interview prep.",
      "Helps you build a home-lab portfolio that actually impresses.",
      "Coaches negotiation for security engineering and leadership roles.",
      "Specializes in the jump from generalist IT to dedicated security.",
      "Helps you prep for scenario-based tabletop exercise interviews.",
      "Coaches you on framing red-team or blue-team experience clearly.",
    ]
  ),
  customerSuccess: buildCategory(
    80,
    [
      "VP Customer Success, ex-HubSpot",
      "Customer Success Manager Coach",
      "Director of CS, ex-Salesforce",
      "Head of Customer Success, Series B startup",
      "Enterprise CSM, ex-Zendesk",
      "CS Operations Lead, ex-Intercom",
      "Renewals & Retention Director",
      "Customer Success Coach & Former Adobe CSM",
      "VP Client Success, ex-Gainsight",
      "Onboarding & Success Lead, ex-Slack",
    ],
    [
      "Coaches a retention-and-growth story backed by real numbers.",
      "Helps you translate support experience into a CSM narrative.",
      "Specializes in the jump from IC CSM to team leadership.",
      "Coaches you on the \"save this account\" scenario question.",
      "Focuses on positioning churn-reduction wins clearly.",
      "Helps you build a QBR presentation that shows real command of the account.",
      "Coaches negotiation for enterprise CSM and CS leadership roles.",
      "Specializes in onboarding and implementation experience positioning.",
      "Helps you evaluate a company's CS org maturity before joining.",
      "Coaches you on framing renewals and upsell experience for bigger scope.",
    ]
  ),
  execAdvisory: buildCategory(
    85,
    [
      "Former Fortune 500 CFO. Board Coach",
      "Board Member & Executive Coach",
      "Former Fortune 500 CEO",
      "Governance & Board Readiness Coach",
      "Former Public Company Board Member",
      "Executive Search Consultant, ex-Korn Ferry",
      "Former COO, Fortune 500 company",
      "Board Placement Advisor",
      "Former CMO, Fortune 500 company",
      "Executive Coach & Former CHRO",
    ],
    [
      "Coaches you through building a board-ready bio from scratch.",
      "Specializes in navigating competitive board search processes.",
      "Helps you translate operating experience into governance language.",
      "Coaches you on the questions a nominating committee actually asks.",
      "Focuses on landing your first seat, which is always the hardest one.",
      "Helps you evaluate board opportunities for fit, not just prestige.",
      "Coaches you on positioning for audit committee versus general board seats.",
      "Specializes in executive search relationships and how to build them.",
      "Helps you prep for interviews with a nominating committee chair.",
      "Coaches negotiation of board compensation and equity.",
    ]
  ),
  fractional: buildCategory(
    90,
    [
      "Fractional COO",
      "Fractional CMO Coach",
      "Fractional CFO",
      "Fractional CTO Coach",
      "Interim Executive & Advisory Coach",
      "Fractional Chief of Staff",
      "Fractional VP Sales",
      "Portfolio Executive & Advisor",
      "Fractional Chief People Officer",
      "Fractional General Counsel Coach",
    ],
    [
      "Coaches you on pricing a fractional practice without underselling it.",
      "Helps you land your first fractional client through warm outreach.",
      "Specializes in positioning full-time experience for part-time engagements.",
      "Coaches you on scoping a fractional engagement so it doesn't sprawl.",
      "Focuses on building a referral network of other fractional executives.",
      "Helps you evaluate which clients are worth the equity trade-off.",
      "Coaches you on managing multiple fractional engagements at once.",
      "Specializes in the transition from full-time exec to portfolio career.",
      "Helps you build a simple website and pitch for fractional work.",
      "Coaches negotiation of retainer versus equity versus hourly structures.",
    ]
  ),
  philanthropy: buildCategory(
    95,
    [
      "Former Foundation President",
      "Nonprofit Executive Coach",
      "Former Nonprofit Board Chair",
      "Philanthropic Advisor",
      "Former Executive Director, national nonprofit",
      "Grantmaking & Foundation Strategy Coach",
      "Former Chief Development Officer",
      "Nonprofit Board Placement Advisor",
      "Former Program Officer, major foundation",
      "Social Impact & Giving Strategy Coach",
    ],
    [
      "Coaches you through translating corporate leadership into nonprofit language.",
      "Specializes in landing your first nonprofit board seat.",
      "Helps you evaluate which causes actually fit your background.",
      "Coaches you on the fundraising expectations of board service.",
      "Focuses on foundation program officer interview prep.",
      "Helps you build a giving strategy that matches your values and goals.",
      "Coaches you on the jump from donor to board member to executive.",
      "Specializes in positioning operating experience for ED-track roles.",
      "Helps you evaluate a foundation's mission fit before you commit.",
      "Coaches negotiation for nonprofit executive leadership roles.",
    ]
  ),
};
