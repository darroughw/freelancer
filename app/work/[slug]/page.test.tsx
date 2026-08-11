import { act, render, screen } from "@testing-library/react";
import { MockIntersectionObserver } from "../../../jest.setup";
import { caseStudies } from "../../data/case-studies";
import { extractFeaturedStat, slugifyHeading } from "../../data/case-study-helpers";
import CaseStudyPage, { generateStaticParams, generateMetadata } from "./page";

function fireIntersection(entries: { id: string; isIntersecting: boolean }[]) {
  const observer = MockIntersectionObserver.instances[0];
  act(() => {
    observer.callback(
      entries.map(({ id, isIntersecting }) => ({
        target: document.getElementById(id)!,
        isIntersecting,
      }))
    );
  });
}

describe("generateStaticParams", () => {
  it("returns one param per case study slug", () => {
    const params = generateStaticParams();
    expect(params.map((p) => p.slug).sort()).toEqual(caseStudies.map((s) => s.slug).sort());
  });
});

describe("generateMetadata", () => {
  it("returns title and description for a known slug", () => {
    const metadata = generateMetadata({ params: { slug: "delta" } });
    expect(metadata.title).toContain(caseStudies.find((s) => s.slug === "delta")!.title);
    expect(metadata.description).toBe(caseStudies.find((s) => s.slug === "delta")!.desc);
  });

  it("returns an empty object for an unknown slug", () => {
    const metadata = generateMetadata({ params: { slug: "does-not-exist" } });
    expect(metadata).toEqual({});
  });
});

describe("CaseStudyPage", () => {
  it("throws (via next/navigation notFound) for an unknown slug", () => {
    // React and jsdom both log the thrown error to console as part of their
    // uncaught-exception reporting even though it's caught by toThrow() below.
    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<CaseStudyPage params={{ slug: "does-not-exist" }} />)).toThrow();
    consoleError.mockRestore();
  });

  it("renders the hero, back link, and tags for a known slug", () => {
    const study = caseStudies.find((s) => s.slug === "delta")!;
    render(<CaseStudyPage params={{ slug: "delta" }} />);

    expect(screen.getByRole("heading", { level: 1, name: study.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to work/i })).toHaveAttribute("href", "/#work");
    for (const tag of study.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument();
    }
  });

  it("renders table, stat, and bullet blocks correctly for the rich delta case study", () => {
    render(<CaseStudyPage params={{ slug: "delta" }} />);

    // table
    expect(screen.getByText("Installation-Related Searches")).toBeInTheDocument();
    expect(screen.getByText("21,072")).toBeInTheDocument();

    // stat
    expect(screen.getByText("92%")).toBeInTheDocument();
    expect(screen.getByText("Drop in installation searches")).toBeInTheDocument();

    // bullets
    expect(screen.getByText(/One question at a time/)).toBeInTheDocument();
  });

  it("renders the simpler 4-section liberty case study without crashing", () => {
    render(<CaseStudyPage params={{ slug: "liberty" }} />);
    expect(screen.getByRole("heading", { level: 2, name: "The Outcome" })).toBeInTheDocument();
    expect(screen.getByText("28%")).toBeInTheDocument();
  });

  it("promotes the first stat block into an 'at a glance' strip near the top, not duplicated in the body", () => {
    const study = caseStudies.find((s) => s.slug === "delta")!;
    const featured = extractFeaturedStat(study.sections)!;
    const { container } = render(<CaseStudyPage params={{ slug: "delta" }} />);

    const strip = container.querySelector(".case-results-strip");
    expect(strip).toBeInTheDocument();
    expect(strip).toHaveTextContent(featured.block.items[0].value);

    // getByText throws on multiple matches, so this also proves it's not
    // still rendered a second time inside its original section.
    expect(screen.getByText(featured.block.items[0].value)).toBeInTheDocument();
  });

  it("renders no results strip for a case study with no stat block", () => {
    const study = caseStudies.find((s) => s.slug === "agent-console")!;
    expect(extractFeaturedStat(study.sections)).toBeNull();

    const { container } = render(<CaseStudyPage params={{ slug: "agent-console" }} />);
    expect(container.querySelector(".case-results-strip")).not.toBeInTheDocument();
  });

  it("renders a section jump-nav link for every section heading", () => {
    const study = caseStudies.find((s) => s.slug === "delta")!;
    render(<CaseStudyPage params={{ slug: "delta" }} />);

    const nav = screen.getByRole("navigation", { name: /case study sections/i });
    for (const section of study.sections) {
      const link = screen.getByRole("link", { name: section.heading });
      expect(nav).toContainElement(link);
      expect(link).toHaveAttribute("href", `#${slugifyHeading(section.heading)}`);
    }
  });

  it("highlights the jump-nav link for the section currently in view", () => {
    const study = caseStudies.find((s) => s.slug === "delta")!;
    const secondHeading = study.sections[1].heading;
    render(<CaseStudyPage params={{ slug: "delta" }} />);

    fireIntersection([{ id: slugifyHeading(secondHeading), isIntersecting: true }]);

    expect(screen.getByRole("link", { name: secondHeading })).toHaveClass("is-active");
    expect(screen.getByRole("link", { name: study.sections[0].heading })).not.toHaveClass("is-active");
  });
});
