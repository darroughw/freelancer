import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import NotFound from "./not-found";

// color-contrast requires real pixel rendering, which jsdom doesn't do —
// that's covered separately by a browser-based axe-core audit instead.
const axeOptions = { rules: { "color-contrast": { enabled: false } } };

describe("NotFound accessibility", () => {
  it("has no detectable a11y violations", async () => {
    const { container } = render(<NotFound />);
    const results = await axe(container, axeOptions);
    expect(results).toHaveNoViolations();
  });
});
