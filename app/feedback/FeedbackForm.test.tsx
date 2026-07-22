import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackForm from "./FeedbackForm";

function mockFetchOnce(response: object, ok = true) {
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => response,
    ok,
  }) as jest.Mock;
}

describe("FeedbackForm", () => {
  it("shows a success message after a valid submission", async () => {
    mockFetchOnce({ ok: true });
    const user = userEvent.setup();
    render(<FeedbackForm />);

    await user.type(screen.getByLabelText(/what's on your mind/i), "The nav is confusing on mobile.");
    await user.click(screen.getByRole("button", { name: /send feedback/i }));

    await waitFor(() => {
      expect(screen.getByText(/thanks, got it/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/feedback",
      expect.objectContaining({ method: "POST" })
    );
  });

  it("shows the server's error message when submission fails", async () => {
    mockFetchOnce({ ok: false, error: "Feedback message is required." });
    const user = userEvent.setup();
    render(<FeedbackForm />);

    await user.type(screen.getByLabelText(/what's on your mind/i), "x");
    await user.click(screen.getByRole("button", { name: /send feedback/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Feedback message is required.");
    });
  });

  it("shows a generic error message when the request itself fails", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("network down")) as jest.Mock;
    const user = userEvent.setup();
    render(<FeedbackForm />);

    await user.type(screen.getByLabelText(/what's on your mind/i), "Feedback while offline.");
    await user.click(screen.getByRole("button", { name: /send feedback/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/something went wrong/i);
    });
  });
});
