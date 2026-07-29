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
function buildCategory(offset: number, roles: string[], bio: string): Coach[] {
  const list: Coach[] = [];
  for (let i = 0; i < 5; i++) {
    const idx = offset + i;
    list.push({
      name: WOMEN_NAMES[idx],
      headline: roles[i * 2],
      bio,
      rating: Math.round((4.6 + ((idx % 4) * 0.1)) * 10) / 10,
      sessions: 45 + ((idx * 13) % 220),
      photo: woman(idx),
    });
    list.push({
      name: MEN_NAMES[idx],
      headline: roles[i * 2 + 1],
      bio,
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
    "Helps you build an MBA application and admit strategy that actually holds together."
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
    "Coaches you through the LSAT, personal statement, and target school strategy."
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
    "Guides you through a competitive medical school application, from secondaries to interviews."
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
    "Helps you frame a research agenda and statement of purpose that gets read twice."
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
    "Helps you make the case for a career-focused master's program built around your goals."
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
    "Coaches you from idea to a validated first version without wasting a year."
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
    "Helps you run diligence and structure financing on a small business purchase."
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
    "Coaches you through PM case interviews, portfolio reviews, and leveling conversations."
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
    "Helps you position your story and portfolio for the next-level marketing role."
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
    "Coaches you through system design interviews and the jump into engineering leadership."
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
    "Helps you tell a number-backed story that lands offers in final rounds."
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
    "Coaches you on the jump from HR generalist to strategic business partner."
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
    "Helps you translate legal experience into a compelling case for corporate or in-house roles."
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
    "Coaches you through take-home projects and stakeholder-facing data science interviews."
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
    "Helps you move from IT support and operations into technology leadership."
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
    "Coaches you through certification strategy and security interview prep."
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
    "Helps you tell a retention-and-growth story that lands customer success offers."
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
    "Coaches you through board search processes, governance basics, and a board-ready bio."
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
    "Helps you position and price a fractional or advisory practice."
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
    "Coaches your transition into nonprofit board service or foundation leadership."
  ),
};
