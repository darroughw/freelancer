import { caseStudies } from "./case-studies";

describe("caseStudies data", () => {
  it("contains exactly the four known case studies", () => {
    const slugs = caseStudies.map((s) => s.slug).sort();
    expect(slugs).toEqual(["delta", "fidelity-fds", "liberty", "youfit"]);
  });

  it("has unique slugs", () => {
    const slugs = caseStudies.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has unique numbers", () => {
    const nums = caseStudies.map((s) => s.num);
    expect(new Set(nums).size).toBe(nums.length);
  });

  it.each(caseStudies)("'$slug' has all required teaser fields populated", (study) => {
    expect(study.title.length).toBeGreaterThan(0);
    expect(study.desc.length).toBeGreaterThan(0);
    expect(study.role.length).toBeGreaterThan(0);
    expect(study.year.length).toBeGreaterThan(0);
    expect(study.tags.length).toBeGreaterThan(0);
    expect(study.imgSrc).toMatch(/^\/images\/.+\.(jpg|png|webp)$/);
  });

  it.each(caseStudies)("'$slug' has at least one content section", (study) => {
    expect(study.sections.length).toBeGreaterThan(0);
  });

  it.each(caseStudies)("'$slug' sections all have a heading and non-empty body", (study) => {
    for (const section of study.sections) {
      expect(section.heading.length).toBeGreaterThan(0);
      expect(section.body.length).toBeGreaterThan(0);
    }
  });

  it.each(caseStudies)("'$slug' blocks carry valid content for their type", (study) => {
    for (const section of study.sections) {
      for (const block of section.body) {
        switch (block.type) {
          case "paragraph":
            expect(block.html.length).toBeGreaterThan(0);
            break;
          case "subheading":
            expect(block.text.length).toBeGreaterThan(0);
            break;
          case "bullets":
            expect(block.items.length).toBeGreaterThan(0);
            for (const item of block.items) expect(item.length).toBeGreaterThan(0);
            break;
          case "table":
            expect(block.headers.length).toBeGreaterThan(0);
            for (const row of block.rows) expect(row.length).toBe(block.headers.length);
            break;
          case "stat":
            expect(block.items.length).toBeGreaterThan(0);
            for (const item of block.items) {
              expect(item.value.length).toBeGreaterThan(0);
              expect(item.label.length).toBeGreaterThan(0);
            }
            break;
          default:
            throw new Error(`Unhandled block type: ${JSON.stringify(block)}`);
        }
      }
    }
  });
});
