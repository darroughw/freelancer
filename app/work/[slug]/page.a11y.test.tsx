import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { caseStudies } from "../../data/case-studies";
import CaseStudyPage from "./page";

// color-contrast requires real pixel rendering, which jsdom doesn't do —
// that's covered separately by a browser-based axe-core audit instead.
const axeOptions = { rules: { "color-contrast": { enabled: false } } };

describe("CaseStudyPage accessibility", () => {
  it.each(caseStudies)("'$slug' has no detectable a11y violations", async (study) => {
    const { container } = render(<CaseStudyPage params={{ slug: study.slug }} />);
    const results = await axe(container, axeOptions);
    expect(results).toHaveNoViolations();
  });
});
