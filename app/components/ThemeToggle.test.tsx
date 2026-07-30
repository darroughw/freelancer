import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "./ThemeToggle";

beforeEach(() => {
  window.localStorage.clear();
  delete document.documentElement.dataset.theme;
});

describe("ThemeToggle", () => {
  it("renders in the default state when nothing is stored", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /switch to vhs theme/i })).toHaveAttribute("aria-pressed", "false");
  });

  it("picks up an already-applied vhs theme on mount", () => {
    document.documentElement.dataset.theme = "vhs";
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  it("switches to vhs and persists the choice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    expect(document.documentElement.dataset.theme).toBe("vhs");
    expect(window.localStorage.getItem("theme")).toBe("vhs");
    expect(screen.getByRole("button", { name: /switch to default theme/i })).toHaveAttribute("aria-pressed", "true");
  });

  it("switches back to default and clears the attribute", async () => {
    document.documentElement.dataset.theme = "vhs";
    window.localStorage.setItem("theme", "vhs");
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button"));

    expect(document.documentElement.dataset.theme).toBeUndefined();
    expect(window.localStorage.getItem("theme")).toBe("default");
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
  });
});
