import { act, render, screen } from "@testing-library/react";
import { MockIntersectionObserver } from "../jest.setup";
import Page from "./page";
import { caseStudies } from "./data/case-studies";

function mockScrollMetrics({
  scrollY = 0,
  innerHeight = 800,
  scrollHeight = 3000,
}: { scrollY?: number; innerHeight?: number; scrollHeight?: number } = {}) {
  Object.defineProperty(window, "scrollY", { value: scrollY, configurable: true });
  Object.defineProperty(window, "innerHeight", { value: innerHeight, configurable: true });
  Object.defineProperty(document.documentElement, "scrollHeight", {
    value: scrollHeight,
    configurable: true,
  });
}

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

beforeEach(() => {
  // Realistic, non-zero page dimensions so the mount-time "scrolled to bottom"
  // check doesn't trip immediately (jsdom has no real layout engine, so
  // scrollHeight/innerHeight/scrollY all default to 0 otherwise).
  mockScrollMetrics();
});

describe("Page", () => {
  it("links every case study card to its work/[slug] detail page", () => {
    render(<Page />);
    for (const study of caseStudies) {
      expect(screen.getByRole("link", { name: new RegExp(study.title) })).toHaveAttribute(
        "href",
        `/work/${study.slug}`
      );
    }
  });

  it("renders all five nav pills with correct anchor targets", () => {
    render(<Page />);
    const expected: [string, string][] = [
      ["Work", "#work"],
      ["About", "#about"],
      ["Skills", "#skills"],
      ["Off duty", "#topfives"],
      ["Contact", "#contact"],
    ];
    for (const [name, href] of expected) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("defaults to the work pill active before any intersection is reported", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: "Work" })).toHaveClass("is-active");
    expect(screen.getByRole("link", { name: "About" })).not.toHaveClass("is-active");
  });

  it("moves the active pill when its section starts intersecting", () => {
    render(<Page />);
    fireIntersection([{ id: "about", isIntersecting: true }]);

    expect(screen.getByRole("link", { name: "About" })).toHaveClass("is-active");
    expect(screen.getByRole("link", { name: "Work" })).not.toHaveClass("is-active");
  });

  it("keeps a section active across callbacks that only report other sections changing", () => {
    // Regression test: entries.find() alone only sees entries whose state
    // changed in that batch, not the full observed set. The real fix tracks
    // a persistent per-section map so an untouched-but-still-intersecting
    // section doesn't get dropped when a later batch reports a different one.
    render(<Page />);

    fireIntersection([{ id: "about", isIntersecting: true }]);
    expect(screen.getByRole("link", { name: "About" })).toHaveClass("is-active");

    // "work" exiting is reported, but "about" is not re-reported in this batch.
    fireIntersection([{ id: "work", isIntersecting: false }]);
    expect(screen.getByRole("link", { name: "About" })).toHaveClass("is-active");
  });

  it("resolves to the topmost intersecting section when several overlap at once", () => {
    render(<Page />);
    // A single batch reporting both as intersecting simultaneously (can happen
    // on fast/instant scroll jumps) should resolve to the earlier section in
    // document order, not whichever happens to be first in the entries array.
    fireIntersection([
      { id: "topfives", isIntersecting: true },
      { id: "skills", isIntersecting: true },
    ]);

    expect(screen.getByRole("link", { name: "Skills" })).toHaveClass("is-active");
    expect(screen.getByRole("link", { name: "Off duty" })).not.toHaveClass("is-active");
  });

  it("force-activates the last section once the page is scrolled to the bottom", () => {
    render(<Page />);
    fireIntersection([{ id: "about", isIntersecting: true }]);
    expect(screen.getByRole("link", { name: "About" })).toHaveClass("is-active");

    // contact is short and can't scroll far enough to cross the top trigger
    // band on its own; the bottom-of-page fallback is what activates it.
    mockScrollMetrics({ scrollY: 2200, innerHeight: 800, scrollHeight: 3000 });
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(screen.getByRole("link", { name: "Contact" })).toHaveClass("is-active");
  });

  it("links the footer resume link to the PDF, opening in a new tab", () => {
    render(<Page />);
    const resumeLink = screen.getByRole("link", { name: /resume/i });
    expect(resumeLink).toHaveAttribute("href", "/resume.pdf");
    expect(resumeLink).toHaveAttribute("target", "_blank");
  });

  it("renders one stripe segment per palette color", () => {
    const { container } = render(<Page />);
    const segments = container.querySelectorAll(".stripe-segment");
    expect(segments).toHaveLength(6);
    for (const color of ["red", "orange", "mustard", "teal", "plum", "ink"]) {
      expect(container.querySelector(`.stripe-segment--${color}`)).toBeInTheDocument();
    }
  });
});
