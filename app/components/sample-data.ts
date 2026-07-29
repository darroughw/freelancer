import type { CaseStudy } from "../data/case-studies";

// Generic placeholder case studies used only in Storybook — not real client work.
export const sampleCaseStudyA: CaseStudy = {
  slug: "sample-project-one",
  num: "001",
  title: "Sample Project: Streamlining a Core User Flow",
  desc: "A placeholder case study used to preview this component in isolation, with realistic content length.",
  role: "Product Designer",
  year: "2024",
  tools: "Figma, React",
  tags: ["UX Research", "Prototyping", "Design System", "Responsive"],
  imgSrc: "/images/sample-placeholder.svg",
  sections: [],
};

export const sampleCaseStudyB: CaseStudy = {
  slug: "sample-project-two",
  num: "002",
  title: "Sample Project: A Longer Title to Preview Wrapping",
  desc: "A second placeholder project with more tags, used to preview how the layout handles longer titles and tag wrapping.",
  role: "Lead Designer & Engineer",
  year: "2022–2023",
  tags: ["Research", "Strategy", "Visual Design", "Accessibility", "Testing", "Content Strategy"],
  imgSrc: "/images/sample-placeholder.svg",
  sections: [],
};
