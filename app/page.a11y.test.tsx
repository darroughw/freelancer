import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Page from "./page";

// color-contrast requires real pixel rendering, which jsdom doesn't do —
// that's covered separately by a browser-based axe-core audit instead.
const axeOptions = { rules: { "color-contrast": { enabled: false } } };

beforeEach(() => {
  Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  Object.defineProperty(window, "innerHeight", { value: 800, configurable: true });
  Object.defineProperty(document.documentElement, "scrollHeight", {
    value: 3000,
    configurable: true,
  });
});

describe("Page accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<Page />);
    const results = await axe(container, axeOptions);
    expect(results).toHaveNoViolations();
  });
});
