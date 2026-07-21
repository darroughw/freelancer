import { render, screen } from "@testing-library/react";
import { caseStudies } from "../../data/case-studies";
import CaseStudyPage, { generateStaticParams, generateMetadata } from "./page";

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
});
