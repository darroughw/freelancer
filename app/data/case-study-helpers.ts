import type { CaseStudyBlock, CaseStudySection } from "./case-studies";

export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type StatBlock = Extract<CaseStudyBlock, { type: "stat" }>;

export type FeaturedStat = {
  sectionHeading: string;
  blockIndex: number;
  block: StatBlock;
};

// Surfaces the case study's first stat block near the top of the page as an
// "at a glance" strip, instead of leaving it wherever it happens to fall in
// the narrative (see the layout-restructuring conversation for why: results
// should be skimmable before committing to read prose). Not every case study
// has one — callers should treat a null return as "no results strip".
export function extractFeaturedStat(sections: CaseStudySection[]): FeaturedStat | null {
  for (const section of sections) {
    const blockIndex = section.body.findIndex((b) => b.type === "stat");
    if (blockIndex !== -1) {
      return { sectionHeading: section.heading, blockIndex, block: section.body[blockIndex] as StatBlock };
    }
  }
  return null;
}
