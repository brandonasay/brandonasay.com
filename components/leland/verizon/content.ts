export type ResultKey =
  | "school"
  | "startBusiness"
  | "acquireBusiness"
  | "landRole"
  | "execAdvisory"
  | "fractional"
  | "philanthropy";

export const categories: Record<
  ResultKey,
  { name: string; description: string; link?: { href: string; label: string } }
> = {
  school: {
    name: "Back to School",
    description:
      "Application strategy and admissions coaching for an MBA or graduate program built around your goals.",
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
  landRole: {
    name: "Land a New Role",
    description:
      "Resume, positioning, and interview coaching for landing the next individual-contributor or management role, including Product Management.",
  },
  execAdvisory: {
    name: "Executive Advisory & Board Placement",
    description:
      "Coaching for landing a board seat, a fractional executive role, or an advisory position, the same Encore Career path recommended elsewhere in this case response.",
    link: {
      href: "/leland/new-category",
      label: "See the full Encore Career recommendation",
    },
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
      { label: "Learn something new or get credentialed", next: "result:school" },
      { label: "Build or acquire something of my own", next: "buildMode" },
      { label: "Join an organization in some capacity", next: "joinMode" },
      { label: "Give back or contribute beyond myself", next: "result:philanthropy" },
    ],
  },
  buildMode: {
    prompt: "Starting something new, or acquiring something that already exists?",
    options: [
      { label: "Starting something new", next: "result:startBusiness" },
      { label: "Acquiring something that exists", next: "result:acquireBusiness" },
    ],
  },
  joinMode: {
    prompt: "A full-time operating role, or something more flexible and advisory?",
    options: [
      { label: "Full-time operating role", next: "joinLevel" },
      { label: "Flexible or advisory", next: "result:fractional" },
    ],
  },
  joinLevel: {
    prompt: "Individual contributor or management track, or executive and board level?",
    options: [
      { label: "Individual contributor or management", next: "result:landRole" },
      { label: "Executive or board level", next: "result:execAdvisory" },
    ],
  },
};
