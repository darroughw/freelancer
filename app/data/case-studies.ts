export type CaseStudy = {
  num: string;
  title: string;
  desc: string;
  role: string;
  year: string;
  tags: string[];
  href: string;
  imgSrc: string;
};

export const caseStudies: CaseStudy[] = [
  {
    num: "001",
    title: "Delta Shower Doors — Search Behavior & UX Redesign",
    desc: "Used behavioral analytics to identify critical UX failures on a high-traffic product site, then redesigned the core product finder to eliminate friction.",
    role: "UX Researcher & Designer",
    year: "2024–2025",
    tags: ["UX Research", "Content Strategy"],
    href: "#",
    imgSrc: "/images/delta.jpg",
  },
  {
    num: "002",
    title: "Fidelity Design System — iOS Mobile Workstream",
    desc: "Led the iOS mobile workstream for a company-wide design system unifying 150+ designers. Delivered the full Figma component library in 9 months.",
    role: "Principal UX Designer",
    year: "2022–23",
    tags: ["Design Systems", "iOS"],
    href: "#",
    imgSrc: "/images/fidelity.jpg",
  },
  {
    num: "003",
    title: "Liberty Hardware Shopify Platform",
    desc: "Complete redesign for a hardware manufacturer, modernizing their Shopify platform to improve product discovery and streamline the customer journey.",
    role: "Lead Design / Development",
    year: "2025",
    tags: ["Web Design", "SEO"],
    href: "#",
    imgSrc: "/images/liberty.jpg",
  },
  {
    num: "004",
    title: "YouFit Livestream Virtual 5K",
    desc: "Transformed a local Miami charity race into a nationwide live-streamed event with treadmill-synced live video.",
    role: "Lead Design / Development",
    year: "2016",
    tags: ["Mobile", "Live Streaming"],
    href: "#",
    imgSrc: "/images/youfit.jpg",
  },
];
