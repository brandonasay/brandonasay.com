export type ResultKey =
  | "mba"
  | "law"
  | "medicine"
  | "phd"
  | "masters"
  | "startBusiness"
  | "acquireBusiness"
  | "product"
  | "marketing"
  | "engineering"
  | "sales"
  | "hr"
  | "legal"
  | "dataScience"
  | "it"
  | "cybersecurity"
  | "customerSuccess"
  | "execAdvisory"
  | "fractional"
  | "philanthropy";

export const categories: Record<ResultKey, { name: string; description: string }> = {
  mba: {
    name: "MBA",
    description:
      "Application strategy and admissions coaching for a full-time, part-time, or executive MBA program built around your goals.",
  },
  law: {
    name: "Law School",
    description:
      "Application strategy and admissions coaching for law school, from choosing target schools to the personal statement.",
  },
  medicine: {
    name: "Medical School",
    description:
      "Application strategy and admissions coaching for medical school, including the personal statement and interview prep.",
  },
  phd: {
    name: "PhD / Doctoral Program",
    description:
      "Guidance on choosing a program, framing your research interests, and building a competitive doctoral application.",
  },
  masters: {
    name: "Master's Program",
    description:
      "Application strategy and admissions coaching for a professional master's program built around your goals.",
  },
  startBusiness: {
    name: "Start a Business",
    description:
      "Coaching on validating an idea, building a plan, and getting the first version of a new business off the ground.",
  },
  acquireBusiness: {
    name: "Acquire a Business",
    description:
      "Guidance for search-fund style acquisition: sourcing deals, running diligence, and financing a purchase.",
  },
  product: {
    name: "Product",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Product Management.",
  },
  marketing: {
    name: "Marketing",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Marketing.",
  },
  engineering: {
    name: "Engineering",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Engineering.",
  },
  sales: {
    name: "Sales",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Sales.",
  },
  hr: {
    name: "Human Resources",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Human Resources.",
  },
  legal: {
    name: "Legal",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Legal.",
  },
  dataScience: {
    name: "Data Science",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Data Science.",
  },
  it: {
    name: "IT",
    description:
      "Resume, positioning, and interview coaching for landing your next role in IT.",
  },
  cybersecurity: {
    name: "Cybersecurity",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Cybersecurity.",
  },
  customerSuccess: {
    name: "Customer Success",
    description:
      "Resume, positioning, and interview coaching for landing your next role in Customer Success.",
  },
  execAdvisory: {
    name: "Executive Advisory & Board Placement",
    description:
      "Coaching for landing a board seat, a fractional executive role, or an advisory position.",
  },
  fractional: {
    name: "Fractional & Advisory Roles",
    description:
      "Positioning and go-to-market coaching for fractional executive work, consulting, or advisory engagements instead of a full-time role.",
  },
  philanthropy: {
    name: "Philanthropy & Nonprofit Leadership",
    description:
      "Coaching for transitioning into nonprofit board service or foundation leadership.",
  },
};

export type Option = { label: string; next: string };
export type QuestionStep = { prompt: string; options: Option[] };

export const steps: Record<string, QuestionStep> = {
  pull: {
    prompt: "What's pulling you toward your next chapter?",
    options: [
      { label: "Get an advanced degree or credential", next: "degreeType" },
      { label: "Start or acquire a small business", next: "buildMode" },
      { label: "Join an organization in some capacity", next: "joinMode" },
      { label: "Give back or contribute beyond myself", next: "result:philanthropy" },
    ],
  },
  degreeType: {
    prompt: "What kind of program are you thinking about?",
    options: [
      { label: "MBA", next: "result:mba" },
      { label: "Law school", next: "result:law" },
      { label: "Medical school", next: "result:medicine" },
      { label: "A master's or doctoral program", next: "doctoralType" },
    ],
  },
  doctoralType: {
    prompt: "A research-focused doctorate, or a professional master's program?",
    options: [
      { label: "A research doctorate (PhD)", next: "result:phd" },
      { label: "A professional master's program", next: "result:masters" },
    ],
  },
  buildMode: {
    prompt: "Starting a new small business, or acquiring one that already exists?",
    options: [
      { label: "Starting a new small business", next: "result:startBusiness" },
      { label: "Acquiring an existing small business", next: "result:acquireBusiness" },
    ],
  },
  joinMode: {
    prompt: "What kind of role are you looking for?",
    options: [
      { label: "Product", next: "result:product" },
      { label: "Marketing", next: "result:marketing" },
      { label: "Engineering", next: "result:engineering" },
      { label: "Sales", next: "result:sales" },
      { label: "Human Resources", next: "result:hr" },
      { label: "Legal", next: "result:legal" },
      { label: "Data Science", next: "result:dataScience" },
      { label: "IT", next: "result:it" },
      { label: "Cybersecurity", next: "result:cybersecurity" },
      { label: "Customer Success", next: "result:customerSuccess" },
      { label: "Executive or board level", next: "result:execAdvisory" },
      { label: "Flexible or advisory", next: "result:fractional" },
    ],
  },
};
