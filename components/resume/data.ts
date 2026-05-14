export type Experience = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
  link?: string;
};

export type Education = {
  school: string;
  degree: string;
  dates: string;
  focus: string;
};

export const work: Experience[] = [
  {
    company: "Amazon",
    title: "Sr. Product Manager, Global Program Lead",
    dates: "Jul 2024 – Present",
    bullets: [
      "Leading all Technology, Product, and GTM for Global Seller Experience programs.",
      "Top 10% performer two consecutive years.",
      "Technology launches drove $3.5B increase in global multipack sales (~1% of total Amazon GMV).",
    ],
  },
  {
    company: "McMaster-Carr",
    title: "Senior Manager, Product → Manager, Strategy & Operations",
    dates: "May 2020 – Jul 2024",
    location: "Chicago, IL",
    bullets: [
      "Promoted to second-line leader of 5 Product teams responsible for adding new products.",
      "Grew headcount from 8 to 25 and scaled monthly new product additions 5× in under a year.",
      "Selected as Data Analytics Lead for all operational teams.",
    ],
  },
  {
    company: "NFL Enterprises",
    title: "Strategy Consultant",
    dates: "Sept 2019 – May 2020",
    bullets: [
      "Led experimentation for the NFL's internal innovation framework, designed to promote employee innovation.",
    ],
  },
];

export const ventures: Experience[] = [
  {
    company: "Homebakedapp.com",
    title: "Co-Founder, CEO",
    dates: "Apr 2025 – Present",
    link: "https://homebakedapp.com",
    bullets: [
      "Built the best-in-class platform for home bakers to start and grow a micro-bakery.",
      "Customers browse like a digital farmers market, buy homemade goods, and earn rewards.",
    ],
  },
  {
    company: "Watchmaker Foundation",
    title: "Author & Founder",
    dates: "Jul 2017 – Present",
    link: "https://watchmakerfoundation.org",
    bullets: [
      "Founded nonprofit alleviating financial roadblocks facing extraordinary creators.",
      "Authored and published The Watchmaker; all proceeds fund the foundation.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Northwestern Kellogg School of Management",
    degree: "MBA",
    dates: "2022 – 2024",
    focus: "Strategy & Product Management",
  },
  {
    school: "Brigham Young University",
    degree: "BS, Business Strategy",
    dates: "2014 – 2020",
    focus: "Analytics & Entrepreneurship",
  },
];

// Kept for any legacy imports
export const experience = [...work, ...ventures];
